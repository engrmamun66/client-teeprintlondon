<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Dashbaord Data', href: '/suadmin' }]"
      :buttons="[]"
    />
    <div class="row">
      <!-- Card 1 -->

      <div class="col-md-4">
        <nuxt-link to="suadmin/brands">
          <admin-card :show-header="false" :footer="false">
            <div style="min-height: 60px">
              <template v-if="isMounted">
                <h5>{{ labelToTitle("totalBrands") }}</h5>
                <h2 class="text-left mt-3">{{ cards["totalBrands"] }}</h2>
              </template>
              <template v-else>
                <ShimmerEffect height="60px" />
              </template>
            </div>
          </admin-card>
        </nuxt-link>
      </div>

      <!-- Card 2 -->
      <div class="col-md-4">
        <nuxt-link to="suadmin/orders">
          <admin-card :show-header="false" :footer="false">
            <div style="min-height: 60px">
              <template v-if="isMounted">
                <h5>{{ labelToTitle("totalOrders") }}</h5>
                <!-- Changed metric -->
                <h2 class="text-left mt-3">{{ cards["totalOrders"] }}</h2>
              </template>
              <template v-else>
                <ShimmerEffect height="60px" />
              </template>
            </div>
          </admin-card>
        </nuxt-link>
      </div>
      <!-- useNuxtApp().$emit('cardSelected', siteId) -->
      <!-- Card 3 -->
      <div
        class="col-md-4"
        @click="handleCardClick('recentOrders')"
        style="cursor: pointer"
      >
        <admin-card :show-header="false" :footer="false">
          <div style="min-height: 60px">
            <template v-if="isMounted">
              <h5>{{ labelToTitle("recentOrders") }}</h5>
              <!-- Changed metric -->
              <h2 class="text-left mt-3">{{ cards["recentOrders"] }}</h2>
            </template>
            <template v-else>
              <ShimmerEffect height="60px" />
            </template>
          </div>
        </admin-card>
      </div>
      <!-- Card 4 -->
      <div
        class="col-md-4"
        @click="handleCardClick('completedOrders')"
        style="cursor: pointer"
      >
        <admin-card :show-header="false" :footer="false">
          <div style="min-height: 60px">
            <template v-if="isMounted">
              <h5>{{ labelToTitle("completedOrders") }}</h5>
              <!-- Changed metric -->
              <h2 class="text-left mt-3">{{ cards["completedOrders"] }}</h2>
            </template>
            <template v-else>
              <ShimmerEffect height="60px" />
            </template>
          </div>
        </admin-card>
      </div>
      <!-- Card 5 -->
      <div class="col-md-4">
        <nuxt-link to="suadmin/quotations">
          <admin-card :show-header="false" :footer="false">
            <div style="min-height: 60px">
              <template v-if="isMounted">
                <h5>{{ labelToTitle("totalQuotations") }}</h5>
                <!-- Changed metric -->
                <h2 class="text-left mt-3">{{ cards["totalQuotations"] }}</h2>
              </template>
              <template v-else>
                <ShimmerEffect height="60px" />
              </template>
            </div>
          </admin-card>
        </nuxt-link>
      </div>
      <!-- Card 6 -->
      <div class="col-md-4">
        <nuxt-link to="suadmin/product">
          <admin-card :show-header="false" :footer="false">
            <div style="min-height: 60px">
              <template v-if="isMounted">
                <h5>{{ labelToTitle("totalProducts") }}</h5>
                <!-- Changed metric -->
                <h2 class="text-left mt-3">{{ cards["totalProducts"] }}</h2>
              </template>
              <template v-else>
                <ShimmerEffect height="60px" />
              </template>
            </div>
          </admin-card>
        </nuxt-link>
      </div>
      <!-- Card 7 -->
      <div
        class="col-md-4"
        @click="handleCardClick('recentQuotations')"
        style="cursor: pointer"
      >

          <admin-card :show-header="false" :footer="false">
            <div style="min-height: 60px">
              <template v-if="isMounted">
                <h5>{{ labelToTitle("recentQuotations") }}</h5>
                <!-- Changed metric -->
                <h2 class="text-left mt-3">{{ cards["recentQuotations"] }}</h2>
              </template>
              <template v-else>
                <ShimmerEffect height="60px" />
              </template>
            </div>
          </admin-card>

      </div>
    </div>
  </div>
</template>

<script setup>
import DashboardApi from "~/apis/Dashboard.js";

definePageMeta({
  keepalive: false,
  middleware: ["auth"],
  key: (route) => route.fullPath,
  name: "dashboard",
});
useHead({
  titleTemplate: "%s | Dashboard",
});

function handleCardClick(card) {
  console.log(card);
  if (card == "recentOrders") {
    useNuxtApp().$emit("cardSelected", card);
    setTimeout(() => {
      navigateTo("/suadmin/orders");
    }, 200);
  } else if (card == "completedOrders") {
    useNuxtApp().$emit("cardSelected", card);
    setTimeout(() => {
      navigateTo("/suadmin/orders");
    }, 200);
  }else if (card == "recentQuotations") {
    useNuxtApp().$emit("cardSelected", card);
    setTimeout(() => {
      navigateTo("/suadmin/quotations");
    }, 200);
  }
}

function labelToTitle(label = "") {
  if (!label) return "";
  label = label.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
  const title = label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
  return title;
}

let cards = ref({
  totalBrands: 4,
  totalOrders: 69,
  recentOrders: 28,
  completedOrders: 5,
  totalQuotations: 5,
  totalProducts: 1,
  recentQuotations: 0,
});

let isMounted = ref(false);

onMounted(async () => {
  let response = await DashboardApi.getCards();
  if (Response.isOk(response)) {
    let data = Response.parseData(response);
    cards.value = { ...cards.value, ...(data || {}) };
  }
  isMounted.value = true;
});
</script>
