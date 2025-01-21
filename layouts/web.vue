<template> 
    <div>
      <web-header></web-header>
      <slot></slot>
      <web-footerArea></web-footerArea>
    </div>
</template>

<script setup>

import { useMenuState } from '@/composables/useMenuState';
const { state, toggleSidebar, toggleProfilePopup, isCollapse } = useMenuState();
import { useCommonStore } from '~/store/Common';
const commonStore = useCommonStore();

useHead({
  title: "Tee Print",
  // titleTemplate: '%s | Home',
  meta: [{ name: "description", content: "My amazing site434." }],
  bodyAttrs: [{"class": `leap-admin-body`},],
  link:[
    {rel: 'icon', type: 'image/x-icon', href:'/favicon.png'}, 
    { type: "text/css", rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" },
    { type: "text/css", rel: "stylesheet", href: "https://cdn.lineicons.com/2.0/LineIcons.css" },
    { type: "text/css", rel: "stylesheet", href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" },
    { type: "text/css", rel: "stylesheet", href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" },
    { type: "text/css", rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { type: "text/css", rel: "stylesheet", href: "/css/owl.carousel.min.css" },
    { type: "text/css", rel: "stylesheet", href: "/css/owl.theme.default.min.css" },
    { type: "text/css", rel: "stylesheet", href: "/css/style.css" },
  ],
  script: [

    {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",
      integrity: "sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+",
      crossorigin: "anonymous"
    },
    {
      src: "/js/owl.carousel.js", 
    },
    {
      src: "/js/main.js", 
    },

  ],
});



onMounted(()=>{
   
})
</script>
