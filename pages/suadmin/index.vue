<template>
    <div class="position-relative">
        <LoaderApi v-if="false" />
        <page-content-header
          :title="'Dashboard'"
          :links="[{ title: 'Dashbaord Data', href: '/suadmin' }]"
          :buttons="[]"
        />


        <div class="row">
          <template v-for="key in Object.keys(cards)">
            <div class="col-md-4">
              <admin-card :showHeader="false" :footer="false">
                <div style="min-height:60px">
                  <template v-if="isMounted">
                    <h5>{{ labelToTitle(key) }}</h5>
                    <h2 class="text-left mt-3">{{ cards[key] }}</h2>
                  </template>
                  <template v-else>
                    <ShimmerEffect height="60px"></ShimmerEffect>
                  </template>
                </div>
              </admin-card>
            </div>
          </template>
        </div>


    </div>
  </template>
  
  <script setup>
  import DashboardApi from '~/apis/Dashboard.js'
 
  definePageMeta({
    keepalive: false,
    middleware: ["auth"],
    key: (route) => route.fullPath,
    name: 'dashboard',
  });
  useHead({
    titleTemplate: "%s | Dashboard",
  });

  function labelToTitle(label = '') {
    if (!label) return ''; 
    label = label.replace(/_([a-z])/g, (_, char) => char.toUpperCase()); 
    const title = label.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    return title;
  }



  let cards = ref({
    "totalBrands": 4,
    "totalOrders": 69,
    "recentOrders": 28,
    "completedOrders": 5,
    "totalQuotations": 5,
    "totalProducts": 1,
    "recentQuotations": 0
})

let isMounted = ref(false)

  onMounted(async()=>{
    let response = await DashboardApi.getCards()
    if(Response.isOk(response)){
      let data = Response.parseData(response)
      cards.value = {...cards.value, ...(data || {})}
    }
    isMounted.value = true
  })
   
  </script>
  