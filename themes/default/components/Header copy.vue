<template>
  <nav class="navbar navbar-expand-lg navbar-light" :class="{margin_left : _menu('isCollapse')}">
    <div class="container-fluid fullheight-100">
      <div class="navbar-middle fullheight-100">
        <div class="leap-admin-header-logo-responsive">
          <div class="logo-area-inner">
            <div class="logo-area-middle">
              <nuxt-link :to="$url('/settings/sessions')">
                <img src="/img/logo.png"/>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="leap-admin-headermenu-responsive">
          <ul>
            <li>
              <a class="leap-admin-sidebarCollapse" @click="_menu('toggleSidebar')"
                ><i-las t="bars" /></a>
            </li>
            <li>
              <a class="header-menu">
                <i class="las la-ellipsis-v"></i>
              </a>
            </li>
            <li>
              <a class="header-user pe-0" @click="_menu('toggleProfilePopup')"><img class="profile-img" v-if="State('auth').user?.profile_img"  :src="State('auth').user?.profile_img"> <i v-else class="la la-user"></i></a>
              <div @mouseleave="useMenuState('menu').value.showProfilePopup=false" class="leap-admin-rightside-dropdown --animate-show" :class="{selected: useMenuState('menu').value.showProfilePopup}"
                  :style="useMenuState('menu').value.showProfilePopup ? 'display:block' : '' ">
                  <div>
                    <div class="leap-admin-rightside-topbar text-left">
                      <h4 class="flex-center w-100 ps-4">
                        <span class="text-white">{{ JSON.parse($getFromLocal('user')) ? JSON.parse($getFromLocal('user')).first_name + ' ' +JSON.parse($getFromLocal('user')).last_name : '' }}</span>
                        <span class="usermail">{{ JSON.parse($getFromLocal('user')) ? JSON.parse($getFromLocal('user')).email : '' }}</span>
                      </h4>
                    </div>
                    <div class="leap-admin-rightside-body">
                      <ul class="leap-admin-userprofile-menu">
                        <li><a @click="showProfileInfoModal=true"><i class="lni lni-user"></i> My Profile</a></li>
                        <li class="mt-2">
                          <a class="logout-btn" @click="State('auth').loading=true;_auth('logout')">
                            <i class="fa fa-sign-out"></i> Logout <BtnLoader :show="State('auth').loading" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </li>
          </ul>
        </div>
        <div class="navbar-left-side">
          <nav class="leftside-top-nav">
            <ul class="leftside-navmenu d-flex justify-content-between">
                <div class="d-flex justify-content-start">
                  <li class="pt-3">
                      <el-BaseSelect style="min-width: 200px;"  option1="সেশন" :charLimit="24"
                         @change="(id) => { $setToLocal('session_id', id) }" v-model:data="State('institute').sessions"  v-model="State('institute').header.session_id"  valueKey="id"  displayKey="name"
                       />
                  </li>
                  <li class="pt-3">
                      <el-BaseSelect style="min-width: 200px;"   option1="প্রতিষ্ঠানের শাখা" :charLimit="24"
                      @change="(id) => { $setToLocal('branch_id', id) }" v-model:data="State('institute').branches"  v-model="State('institute').header.branch_id"  valueKey="id" displayKey="name"/>
                  </li>
                  <li class="pt-3">
                      <el-BaseSelect style="min-width: 150px;" v-model="State('lang').lang" :option1="false" :charLimit="24" @change="(lang) => {changedLanguard(lang)}" v-model:data="LANGUAGES" valueKey="id" displayKey="name"/>
                  </li>
                </div>
            </ul>
          </nav>
        </div>
        <div class="navbar-right-side" :style="useMenuState('menu').value.showRighttSideNavbar ? 'display:block' : '' ">
          <nav class="rightside-top-nav">
            <ul class="rightside-navmenu"> 
              <li>
                <div>
                  <div class="btn-actions-toggler">
                    <button @click="State('common').headerActions = !State('common').headerActions" 
                    class="leap-btn leap-back-btn padding-as-input">Actions <i-las t="down-arrow" class="ps-1" fontSize="12px" /></button>
                    <ul @mouseleave="State('common').headerActions = false" class="action-box py-2" :class="{'--animate-show': State('common').headerActions, '--animate-hide': !State('common').headerActions}">
                      <li @click.prevent="State('auth').loading_insptd=true;goToInspectDeploy()"> <a> <i t="sign-in" class="size-fw" /> Go To Inspect Deploy <BtnLoader :show="State('auth').loading_insptd" /></a> </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="leap-admin-right-dropdown">
                <a class="leap-admin-dropdown-link" @click="_menu('toggleProfilePopup')"
                  ><img  class="profile-img" v-if="State('auth').user?.profile_img"  :src="State('auth').user.profile_img"> <i v-else class="la la-user"></i> </a>
                <ul @mouseleave="useMenuState('menu').value.showProfilePopup=false" class="leap-admin-rightside-dropdown --animate-show" :class="{selected: useMenuState('menu').value.showProfilePopup}"
                  :style="useMenuState('menu').value.showProfilePopup ? 'display:block' : '' ">
                  <li>
                    <div class="leap-admin-rightside-topbar text-left">
                      <h4 class="flex-center w-100 ps-4">
                        <span class="text-white">{{ JSON.parse($getFromLocal('user')) ? JSON.parse($getFromLocal('user')).first_name + ' ' +JSON.parse($getFromLocal('user')).last_name : '' }}</span>
                        <span class="usermail">{{ JSON.parse($getFromLocal('user')) ? JSON.parse($getFromLocal('user')).email : '' }}</span>
                      </h4>
                    </div>
                    <div class="leap-admin-rightside-body">
                      <ul class="leap-admin-userprofile-menu">
                        <li>
                          <a @click="showProfileInfoModal=true">
                            <i class="lni lni-user"></i> My Profile
                          </a>
                        </li>
                       
                        <li class="mt-2">
                          <a class="logout-btn" @click="State('auth').loading=true;_auth('logout')">
                            <i class="fa fa-sign-out"></i> Logout <BtnLoader :show="State('auth').loading" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </nav>
  <ModalGlobal v-if="showProfileInfoModal" v-model="showProfileInfoModal" title="Profile information" submitText="Submit" cancelText="Cancel" v-model:isCalling="calling"
  @clicked-submit="showProfileOverView ? editProfileInfo()  : resetPassword()" @clicked-cancel="clearUser" @clicked-close="clearUser"
      >
        <template #modalbody>
          <div class="row profilemodal-row">
            <div class="col-md-4">
              <div class="profile-modal-leftside">
                <img :src="user.profile_pic" class="img-fluid" />
                <ul class="leap-admin-profile-information-menu">
                  <li><a @click="showPasswordResetForm=false;showProfileOverView=true" href="#" :class="showProfileOverView ? 'text-color':'' " >Profile Overview</a></li>
                  <li><a @click="showPasswordResetForm=true;showProfileOverView=false" href="#" :class="showPasswordResetForm ? 'text-color':'' ">Reset Password</a></li>
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
                      <li><b>Name : </b> {{ State('auth').user?.name }} </li>
                      <li v-if="State('auth').user?.phone"><b>Mobile : </b> {{ State('auth').user?.phone }}</li>
                      <li><b>Email : </b> {{ State('auth').user?.email }} </li>
                    </ul>
                    <a @click="showProfileEditForm=true" v-if="!showProfileEditForm" href="#" class="profile-edit"><i class="la la-edit"></i></a>
                    <a @click="showProfileEditForm=false" v-if="showProfileEditForm" href="#" class="profile-edit"><i class="la la-eye"></i></a>
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
  </ModalGlobal>
</template>
<script setup>
const { $emit } = useNuxtApp()
let searching = ref(false)
onMounted(async () => {  
  _studentClass('getStudentClassList')
  _institute('getInstituteById', useNuxtApp().$getFromLocal('institute_id'))
});
onBeforeMount(() => {
  _auth().logoutIfExpireToken()
})
let test = ref(null)
let arr = ref([{id:1, label: 'One', name: 'One'}])
let bool = ref(false)
let showProfileInfoModal = ref(false)
let validator = ref({})
function changedLanguard(lang){
  const classList = document.querySelector('body').classList;
  classList.remove('en')
  classList.remove('bl')
  classList.remove('ar')
  classList.add(lang)
}
</script>
<style scoped>
.text-color{
  color: var(--fontcolor-primary) !important
}
</style>