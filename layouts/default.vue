<template> 
    <div>
        <Toaster :animation="'left'" />
          <!-- <Loader id="site_loader" /> -->
          <NuxtLoadingIndicator />
          <client-only>
            <div class="leap-admin-main-wrapper">
              <Header />
              <Sidebar />
              <div id="leap-admin-main-container" :class="{margin_left : isCollapse()}" >
                <div style="min-height:100vh" 
                  @touchstart="toggleNavBySwif($event)"
                  @touchend="toggleNavBySwif($event)"
                >
                  <slot />
                </div>
              </div>
            </div>
          </client-only>
    </div>
</template>

<script setup>

import { useMenuState } from '@/composables/useMenuState';
const { state, toggleSidebar, toggleProfilePopup, isCollapse } = useMenuState();
import { useCommonStore } from '~/store/Common';
const commonStore = useCommonStore();

useHead({
  title: "Tee Print",
  titleTemplate: '%s | Dashboard',
  meta: [{ name: "description", content: "My amazing site434." }],
  bodyAttrs: [{"class": `leap-admin-body`},],
  link:[
    {rel: 'icon', type: 'image/x-icon', href:'/favicon.png'}, 
    {type:'text/css', rel:'stylesheet', href:'//fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900'},
    {type:'text/css', rel:'stylesheet', href:'//fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap'},
    { type: "text/css", rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" },
    {type:'text/css', rel:'stylesheet', href:'//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
    {type:'text/css', rel:'stylesheet', href:'//cdn.lineicons.com/1.0.1/LineIcons.min.css'},
    {type:'text/css', rel:'stylesheet', href:'//cdn.lineicons.com/2.0/LineIcons.css'},
    {type:'text/css', rel:'stylesheet', href:'//maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'},
    {type:'text/css', rel: 'stylesheet', href:'/css/bootstrap.min.css'},
    {type:'text/css', rel: 'stylesheet', href:'/css/datatables.bootstrap.min.css'},
    {type:'text/css', rel: 'stylesheet', href:'/css/tooltip.css'},
    {type:'text/css', rel: 'stylesheet', href:'/css/style-admin.css'},
    {type:'text/css', rel: 'stylesheet', href:'/css/transition-admin.css'},
    { type: "text/css", rel: "stylesheet", href: "/redactor/redactor.min.css" },
  ],
  script: [

    {
      src: "/redactor/redactor.js",
    },

  ],
});



onMounted(()=>{
   
})
</script>
