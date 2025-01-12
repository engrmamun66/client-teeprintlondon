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

    <ul id="leap-admin-accordion" class="leap-admin-accordion">
      <li>
        <nuxt-link @click="activeMenu('dashboard')" :to="'/'" class="leftsidebar-link menu-tooltip">
          <i class="las la-home"></i>
          <span class="menu-text">Dashboard</span>
          <span class="tooltip__text tooltip__text--right"> Dashboard </span>
        </nuxt-link>
      </li>
      <li v-if="authStore?.switchedToInstituteDashboard==false">
          <a @click="activeMenu('institutes')" 
            class="collaps-togglelink menu-tooltip" :class="{active: isCurrent('institutes')}">
            <i-las t="male" /><span class="menu-text">Institute</span>
            <span class="menu-plusminus-icon"><i class="lni" :class="[state.isCollapseMenu && state.menu == 'institutes' ? 'lni-chevron-down' : 'lni-chevron-right']"></i></span>
            <span class="tooltip__text tooltip__text--right"> Institute </span>
          </a>
          <ul class="accord-submenu" :class="{'--animate-show': isCurrent('institutes')}" :style=" isCurrent('institutes') ? 'display: block' : ''">
            <li @click="activeSubMenu('institutes', 'list')">
              <nuxt-link :to="'/institutes'" class="leftsidebar-link" :class="{'active': isCurrent('institutes', 'list')}">
                <i-las t="list" />
                <span class="menu-text">Institutes</span>
                <span class="tooltip__text tooltip__text--right"> Institutes</span>
              </nuxt-link>
            </li>
          </ul>
      </li>
      <li>
          <a @click="activeMenu('students')" 
            class="collaps-togglelink menu-tooltip" :class="{active: isCurrent('students')}">
            <i-las t="male" /><span class="menu-text">Students</span>
            <span class="menu-plusminus-icon"><i class="lni" :class="[state.isCollapseMenu && state.menu == 'students' ? 'lni-chevron-down' : 'lni-chevron-right']"></i></span>
            <span class="tooltip__text tooltip__text--right"> Students </span>
          </a>
          <ul class="accord-submenu" :class="{'--animate-show': isCurrent('students')}" :style="isCurrent('students') ? 'display: block' : ''">
            <li @click="activeSubMenu('students', 'list')">
              <nuxt-link :to="'/students'" class="leftsidebar-link" :class="{'active': isCurrent('students', 'list')}">
                <i-las t="list" />
                <span class="menu-text">All students</span>
                <span class="tooltip__text tooltip__text--right"> > All students </span>
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

