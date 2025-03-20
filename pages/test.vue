<script setup>

definePageMeta({
  layout: 'web'
})

let images = ref([
  {image_url: 'https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D'},
  {image_url: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D'},
  {image_url: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D'},
])
 
</script>

<template>
  
  <div class="container main">
    <h4>asdfasdf</h4>
     <DraggableCardSlider :qty="1" :showButton="false" :cards-list="images" >
      <template #card="{card}">
        <img :src="card.image_url" alt="" style="pointer-events: none;">
      </template>
     </DraggableCardSlider> 

     <div class="row">
      <div class="col-6">
        <DraggableCardSlider :qty="1" :showButton="false" :cards-list="images" >
          <template #card="{card}">
            <img :src="card.image_url" alt="" style="pointer-events: none;">
          </template>
        </DraggableCardSlider> 
      </div>
     </div>

  </div>
</template>

<style scoped>
.container{
  margin-top: 100px;
  margin-bottom: 100px;
}

ul li{
  /* min-height: 50px; */
  margin: 15px 0px;
  cursor: pointer;
  border-bottom: 1px solid #555;
}

ul li p{
  height: 0px;
  opacity: 0;
  transition: all 0.5s;
}
ul li.expand p{
  height: auto;
  max-height: 200px;
  opacity: 1;
  transition: all 0.5s linear;
  will-change: opacity, max-height;
}

</style>
