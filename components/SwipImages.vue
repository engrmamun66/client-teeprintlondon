<template>
  <div
    class="shipping-image-container"
    @mousedown="startDrag"
    @touchstart="startDrag"
    @mousemove="onDrag"
    @touchmove="onDrag"
    @mouseup="endDrag"
    @touchend="endDrag"
    @mouseleave="endDrag"
    :draggable="false"
  >
    <img :src="currentImage" alt="Shipping Image" class="shipping-image" />
  </div>
</template>

<script>
export default {
  name: "ShippingImage",
  props: {
    images: {
      type: Array,
      required: true,
      validator: (value) => value.length > 0,
    },
  },
  data() {
    return {
      currentIndex: 0,
      startX: 0,
      isDragging: false,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.clientX || event.touches[0].clientX;
    },
    onDrag(event) {
      if (!this.isDragging) return;

      const currentX = event.clientX || event.touches[0].clientX;
      const diffX = this.startX - currentX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          this.nextImage();
        } else {
          this.previousImage();
        }
        this.endDrag();
      }
    },
    endDrag() {
      this.isDragging = false;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    previousImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
.shipping-image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  cursor: grab;
}

.shipping-image {
  width: 100%;
  height: auto;
  display: block;
  user-select: none;
}
</style>
