<template>
  <nav class="navbar navbar-expand-lg navbar-light" :class="{ margin_left: isCollapse() }">
    <div class="container-fluid fullheight-100">
      <div class="navbar-middle fullheight-100">
        <div class="leap-admin-header-logo-responsive">
          <div class="logo-area-inner">
            <div class="logo-area-middle">
              <nuxt-link :to="'/'">
                <img src="/img/logo.jpg" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="leap-admin-headermenu-responsive">
          <ul>
            <li>
              <a class="leap-admin-sidebarCollapse" @click="toggleSidebar()">
                <i-las t="bars" />
              </a>
            </li>
            <li>
              <a class="header-menu">
                <i class="las la-ellipsis-v"></i>
              </a>
            </li>
            <li>
              <a class="header-user pe-0" @click="toggleProfilePopup()">
                <img
                  class="profile-img"
                  v-if="authUser?.profile_img"
                  :src="authUser?.profile_img"
                />
                <i v-else class="la la-user"></i>
              </a> 
              <div
                @mouseleave="state.showProfilePopup = false"
                class="leap-admin-rightside-dropdown --animate-show"
                :class="{ selected: state?.showProfilePopup }"
                :style="state?.showProfilePopup ? 'display:block' : '' "
              >
                <div>
                  <div class="leap-admin-rightside-topbar text-left">
                    <h4 class="flex-center w-100 ps-4">
                      <span class="text-white">
                        {{ authUser?.first_name }} {{ authUser?.last_name }}
                      </span>
                      <span class="usermail">{{ authUser?.email }}</span>
                    </h4>
                  </div>
                  <div class="leap-admin-rightside-body">
                    <ul class="leap-admin-userprofile-menu">
                      <li>
                        <a @click="showProfileInfoModal = true">
                          <i class="lni lni-user"></i> My Profile
                        </a>
                      </li>
                      <li class="mt-2">
                        <a class="logout-btn">
                          <i class="fa fa-sign-out"></i> Logout
                          <BtnLoader :show="false" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  </nav>
  <!-- <ModalGlobal v-if="showProfileInfoModal" v-model="showProfileInfoModal" title="Profile information" submitText="Submit" cancelText="Cancel" v-model:isCalling="calling"
  @clicked-submit="showProfileOverView ? editProfileInfo()  : resetPassword()" @clicked-cancel="clearUser" @clicked-close="clearUser"
      >
        <template #modalbody>
          <div class="row profilemodal-row">
            <div class="col-md-4">
              <div class="profile-modal-leftside">
                <img :src="user.profile_pic" class="img-fluid" />
                <ul class="leap-admin-profile-information-menu">
                  <li><a @click="showPasswordResetForm = false; showProfileOverView = true" href="#" :class="showProfileOverView ? 'text-color':'' " >Profile Overview</a></li>
                  <li><a @click="showPasswordResetForm = true; showProfileOverView =false" href="#" :class="showPasswordResetForm ? 'text-color':'' ">Reset Password</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="profile-modal-rightside">
                  <template v-if="showProfileOverView">
                    <div class="row" v-if="showProfileEditForm ">
                      <el-BaseInput class="col-md-6 col-12" type="text" label="Name" v-model="user.name" v-model:v="validator" v-model:e="errors" col="name" />
                      <el-BaseInput class="col-md-6 col-12" type="text" label="Phone" v-model="user.phone" v-model:v="validator" v-model:e="errors" col="phone" />
                      <el-BaseInput class="col-md-12 col-12" type="email" label="Email" v-model="user.email" v-model:v="validator" v-model:e="errors" col="email" />
                      <el-upload-single-image class="col-md-6 col-12" label="Profile Image" v-model="user.profile_pic" accept="image/png, image/jpeg" v-model:v="validator" v-model:e="errors" col="profile_pic"/>
                    </div>
                    <ul v-else>
                      <li><b>Name : </b> {{ authUser?.name }} </li>
                      <li v-if="authUser?.phone"><b>Mobile : </b> {{ authUser?.phone }}</li>
                      <li><b>Email : </b> {{ authUser?.email }} </li>
                    </ul>
                    <a @click="showProfileEditForm = true" v-if="!showProfileEditForm" href="#" class="profile-edit"><i class="la la-edit"></i></a>
                    <a @click="showProfileEditForm = false" v-if="showProfileEditForm" href="#" class="profile-edit"><i class="la la-eye"></i></a>
                  </template>
                  <template v-if="showPasswordResetForm">
                     <el-BaseInput class="col-md-12 col-12" type="password" label="Old Password" v-model="resetPasswordFormdata.old_password" v-model:v="passwordValidator" v-model:e="errors" col="old_password" autocomplete="off"/>
                     <el-BaseInput class="col-md-12 col-12" type="password" label="New Password" v-model="resetPasswordFormdata.new_password" v-model:v="passwordValidator" v-model:e="errors" col="new_password" autocomplete="off"/>
                     <el-BaseInput class="col-md-12 col-12" type="password" label="Confirm Password" v-model="resetPasswordFormdata.confirm_password" v-model:v="passwordValidator" v-model:e="errors" col="confirm_password" autocomplete="off" />
                  </template>
              </div>
            </div>
          </div>
        </template>
  </ModalGlobal> -->
</template>

<script setup>


import { useMenuState } from '@/composables/useMenuState';
const { state, toggleSidebar, toggleProfilePopup, isCollapse, activeMenu, isCurrent } = useMenuState();

const showProfileInfoModal = ref(false);
let authUser = ref(null)
onMounted(()=>{
   authUser.value = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
   
   
})
</script>

<style scoped>
.text-color {
  color: var(--fontcolor-primary) !important;
}
</style>
