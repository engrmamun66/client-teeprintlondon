<template>
  <nav id="leap-admin-sidebar" class="leap-admin-sidebar" :class="{active : ! isCollapse()}">
    <div class="sidebar-header">
      <div class="logo-area-inner">
        <div class="logo-area-middle">
          <nuxt-link :to="'/'">
            <img src="/img/logo.jpg" />
          </nuxt-link>
        </div>
        <div class="leap-admin-collapes-area">
          <a class="leap-admin-sidebarCollapse">
            <span class="sidebar-leftmenu-icon" @click="toggleSidebar()">
              <i class="lni lni-chevron-left"></i>
              <i class="lni lni-chevron-left"></i>
            </span>
            <span class="sidebar-rightmenu-icon" @click="toggleSidebar()">
              <i class="lni lni-chevron-right"></i>
              <i class="lni lni-chevron-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- <ul id="leap-admin-accordion" class="leap-admin-accordion">
      <li>
        <nuxt-link @click="activeMenu('dashboard')" :to="'/suadmin'" class="leftsidebar-link menu-tooltip">
          <i class="las la-home"></i>
          <span class="menu-text">Dashboard</span>
          <span class="tooltip__text tooltip__text--right"> Dashboard </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link @click="activeMenu('categories')" :to="'/suadmin/categories'" class="leftsidebar-link menu-tooltip">
          <i class="las la-cog"></i>
          <span class="menu-text">Categories</span>
          <span class="tooltip__text tooltip__text--right"> Categories </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link @click="activeMenu('brands')" :to="'/suadmin/brands'" class="leftsidebar-link menu-tooltip">
          <i class="las la-cog"></i>
          <span class="menu-text">Brands</span>
          <span class="tooltip__text tooltip__text--right"> Brands </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link @click="activeMenu('brands')" :to="'/suadmin/product'" class="leftsidebar-link menu-tooltip">
          <i class="las la-cog"></i>
          <span class="menu-text">Product</span>
          <span class="tooltip__text tooltip__text--right"> Product </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link @click="activeMenu('quotation')" :to="'/suadmin/quotations'" class="leftsidebar-link menu-tooltip">
          <i class="las la-cog"></i>
          <span class="menu-text">Quotation</span>
          <span class="tooltip__text tooltip__text--right"> Brands </span>
        </nuxt-link>
      </li>
      <li>
          <a @click="activeMenu('settings')" 
            class="collaps-togglelink menu-tooltip" :class="{active: isCurrent('settings')}">
            <i-las t="settings" /><span class="menu-text">Settings</span>
            <span class="menu-plusminus-icon"><i class="lni" :class="[state.isCollapseMenu && state.menu == 'settings' ? 'lni-chevron-down' : 'lni-chevron-right']"></i></span>
            <span class="tooltip__text tooltip__text--right"> Settings </span>
          </a>
          <ul class="accord-submenu" :class="{'--animate-show': isCurrent('settings')}" :style="isCurrent('settings') ? 'display: block' : ''">
            <li @click="activeSubMenu('settings', 'colors')">
              <nuxt-link :to="'/suadmin/settings/colors'" class="leftsidebar-link" :class="{'active': isCurrent('settings', 'colors')}">
                <i-las t="list" />
                <span class="menu-text">Colors</span>
                <span class="tooltip__text tooltip__text--right">Colors </span>
              </nuxt-link>
            </li>

            <li @click="activeSubMenu('settings', 'discounts')">
              <nuxt-link :to="'/suadmin/settings/discounts'" class="leftsidebar-link" :class="{'active': isCurrent('settings', 'discounts')}">
                <i-las t="list" />
                <span class="menu-text">Discounts</span>
                <span class="tooltip__text tooltip__text--right"> Discounts </span>
              </nuxt-link>
            </li>
          </ul>
      </li>
    </ul> -->

    <ul id="leap-admin-accordion" class="leap-admin-accordion">
  <li>
    <nuxt-link @click="activeMenu('dashboard')" :to="'/suadmin'" class="leftsidebar-link menu-tooltip">
      <i class="las la-home"></i>
      <span class="menu-text">Dashboard</span>
      <span class="tooltip__text tooltip__text--right"> Dashboard </span>
    </nuxt-link>
  </li>
  <li>
    <nuxt-link @click="activeMenu('categories')" :to="'/suadmin/categories'" class="leftsidebar-link menu-tooltip">
      <i class="las la-list-alt"></i> <!-- Changed to a list icon for categories -->
      <span class="menu-text">Categories</span>
      <span class="tooltip__text tooltip__text--right"> Categories </span>
    </nuxt-link>
  </li>
  <li>
    <nuxt-link @click="activeMenu('brands')" :to="'/suadmin/brands'" class="leftsidebar-link menu-tooltip">
      <i class="las la-tags"></i> <!-- Changed to a tags icon for brands -->
      <span class="menu-text">Brands</span>
      <span class="tooltip__text tooltip__text--right"> Brands </span>
    </nuxt-link>
  </li>
  <li>
    <nuxt-link @click="activeMenu('brands')" :to="'/suadmin/product'" class="leftsidebar-link menu-tooltip">
      <i class="las la-box"></i> <!-- Changed to a box icon for products -->
      <span class="menu-text">Product</span>
      <span class="tooltip__text tooltip__text--right"> Product </span>
    </nuxt-link>
  </li>
  <li>
    <nuxt-link @click="activeMenu('quotation')" :to="'/suadmin/quotations'" class="leftsidebar-link menu-tooltip">
      <i class="las la-file-invoice"></i> <!-- Changed to an invoice icon for quotations -->
      <span class="menu-text">Quotation</span>
      <span class="tooltip__text tooltip__text--right"> Quotation </span>
    </nuxt-link>
  </li>
  <li>
    <a @click="activeMenu('settings')" 
      class="collaps-togglelink menu-tooltip" :class="{active: isCurrent('settings')}">
      <i class="las la-cog"></i> <!-- Settings icon remains the same -->
      <span class="menu-text">Settings</span>
      <span class="menu-plusminus-icon"><i class="lni" :class="[state.isCollapseMenu && state.menu == 'settings' ? 'lni-chevron-down' : 'lni-chevron-right']"></i></span>
      <span class="tooltip__text tooltip__text--right"> Settings </span>
    </a>
    <ul class="accord-submenu" :class="{'--animate-show': isCurrent('settings')}" :style="isCurrent('settings') ? 'display: block' : ''">
      <li @click="activeSubMenu('settings', 'colors')">
        <nuxt-link :to="'/suadmin/settings/colors'" class="leftsidebar-link" :class="{'active': isCurrent('settings', 'colors')}">
          <i class="las la-palette"></i> <!-- Changed to a palette icon for colors -->
          <span class="menu-text">Colors</span>
          <span class="tooltip__text tooltip__text--right">Colors </span>
        </nuxt-link>
      </li>

      <li @click="activeSubMenu('settings', 'discounts')">
        <nuxt-link :to="'/suadmin/settings/discounts'" class="leftsidebar-link" :class="{'active': isCurrent('settings', 'discounts')}">
          <i class="las la-percent"></i> <!-- Changed to a percent icon for discounts -->
          <span class="menu-text">Discounts</span>
          <span class="tooltip__text tooltip__text--right"> Discounts </span>
        </nuxt-link>
      </li>
    </ul>
  </li>
</ul>


  </nav>
</template>
<script setup>
import { useAuthStore } from '~/store/Auth';
const authStore = useAuthStore();
import { useMenuState } from '@/composables/useMenuState';
const { state, toggleSidebar, toggleProfilePopup, isCollapse, activeMenu, isCurrent, activeSubMenu } = useMenuState();
onMounted(()=>{
  console.log('state', state)
})
</script>
<style scoped>
  .padding{
    padding: 8px 8px;
  }
  .padding:not(.active-border){
    border: 1px solid transparent;
    border: 1px solid var(--linecolor-navyblue-light-1);
  }
/* -------------------------------------------------------------------------- */
/*                                Desktop size                                */
/* -------------------------------------------------------------------------- */
@media only screen and (min-width: 701px) {
  .weekdays button {
    width: 3.5rem;
  }
}
/* -------------------------------------------------------------------------- */
/*                                 Mobile Size                                */
/* -------------------------------------------------------------------------- */
@media only screen and (max-width: 700px) {
  .image-previewer img {
    width: calc(100% - 40px);
    height: auto;
  }
}
</style>

