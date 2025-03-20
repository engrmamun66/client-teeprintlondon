<template>
  <div ref="wrapper" class="wrapper"
  @mouseenter="() => _clearTimeout()"
  @mouseleave="() => autoPlay"
  >
      <i v-if="showButton" @click="prev()" id="left" class="lni lni-chevron-left"></i>
      <ul ref="carousel" class="carousel"
        @mousedown="dragStart"
        @mousemove="dragging"
        @scroll="infiniteScroll"
      >
        <template v-for="(card, index) in cardsList" :key="index">
            <li ref="cards" class="card">
              <slot name="card" :card="card">
                <span>Sales Manager {{ index }} </span>
                <div class="p position-absolute" style="left:2px;top:-20px">FFF</div>
              </slot>
            </li>
        </template>
      </ul>
      <i v-if="showButton" @click="next()" id="right" class="lni lni-chevron-right"></i>
    </div>
</template>

<script setup>
let props = defineProps({
    cardsList: {
        requird: false,
        default: [
            {title: 'My Card - 1'},
            {title: 'My Card - 2'},
            {title: 'My Card - 3'},
            {title: 'My Card - 4'},
            {title: 'My Card - 5'},
            {title: 'My Card - 6'},
            {title: 'My Card - 7'},
            {title: 'My Card - 8'},
            {title: 'My Card - 9'},
            {title: 'My Card - 10'},
            {title: 'My Card - 11'},
            {title: 'My Card - 12'},
        ],
    },
    qty: {
        default: 5,
        requird: false,
    },
    showButton: {
        default: true,
        requird: false,
    },
})
const emits = defineEmits(['change'])
const wrapper = ref(null)
const carousel = ref(null)
const cards = ref(null)
let firstCardWidth = ref(null)
let carouselChildrens = ref([]);
let isDragging = ref(false)
let isAutoPlay = true
let startX = ref(undefined)
let startScrollLeft =ref(undefined)
let timeoutId = ref(null)

onMounted(() => {
    if(!process.client) return
    setTimeout(() => {
        firstCardWidth.value = cards.value[0].offsetWidth
        carouselChildrens.values = [...carousel.value.children];

        // Get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.value.offsetWidth / firstCardWidth.value);

        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.value.slice(-cardPerView).reverse().forEach(card => {
            carousel.value.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
        carousel.value.classList.add("no-transition");
        carousel.value.scrollLeft = carousel.offsetWidth;
        carousel.value.classList.remove("no-transition");

        document.removeEventListener("mouseup", dragStop);
        document.addEventListener("mouseup", dragStop);

        autoPlay();

    }, 1000)
})
function prev(){
    carousel.value.scrollLeft += -firstCardWidth.value
}
function next(){
    carousel.value.scrollLeft += firstCardWidth.value
}
const dragStart = (e) => { 
    isDragging.value = true;
    carousel.value.classList.add("dragging");
    startX.value = e.pageX;
    startScrollLeft.value = carousel.value.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging.value) return;
    carousel.value.scrollLeft = startScrollLeft.value - (e.pageX - startX.value);
}

const dragStop = (e) => {
    isDragging.value = false;
    carousel.value.classList.remove("dragging");
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return;
    timeoutId.value = setTimeout(() => carousel.value.scrollLeft += firstCardWidth.value, 2500);
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.value.scrollLeft === 0) {
        carousel.value.classList.add("no-transition");
        carousel.value.scrollLeft = carousel.value.scrollWidth - (2 * carousel.value.offsetWidth);
        carousel.value.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.value.scrollLeft) === carousel.value.scrollWidth - carousel.value.offsetWidth) {
        carousel.value.classList.add("no-transition");
        carousel.value.scrollLeft = carousel.value.offsetWidth;
        carousel.value.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    _clearTimeout();
    if(!wrapper.value.matches(":hover")) autoPlay();
}
function _clearTimeout(){
    clearTimeout(timeoutId.value);
}

let gridAutoCols = `calc((100% / ${props?.qty || 8}) - 12px)`
</script>

<style scoped>
.wrapper {
  width: 100%;
  position: relative;
}
.wrapper i {
  top: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  font-size: 1.25rem;
  position: absolute;
  text-align: center;
  line-height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.23);
  transform: translateY(-50%);
  transition: transform 0.1s linear;
  z-index: 9;
}
.wrapper i:active{
  transform: translateY(-50%) scale(0.85);
}
.wrapper i:first-child{
  left: -22px;
}
.wrapper i:last-child{
  right: -22px;
}
.wrapper .carousel{
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: v-bind(gridAutoCols);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  border-radius: 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel.no-transition {
  scroll-behavior: auto;
}
.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}
.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}
.carousel :where(.card, .img) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel .card {
  scroll-snap-align: start;
  height: 342px;
  list-style: none;
  background: #fff;
  cursor: pointer;
  padding-bottom: 15px;
  flex-direction: column;
  border-radius: 8px;
}
.carousel .card .img {
  background: #8B53FF;
  height: 148px;
  width: 148px;
  border-radius: 50%;
}
.card .img img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
}
.carousel .card h2 {
  font-weight: 500;
  font-size: 1.56rem;
  margin: 30px 0 5px;
}
.carousel .card span {
  color: #6A6D78;
  font-size: 1.31rem;
}

@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2) - 9px);
  }
}

@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
  }
}
</style>