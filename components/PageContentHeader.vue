  <template>
    <div class="section-title leap-admin-subheader">
        <div class="d-flex justify-content-between">
          <!-- <div class="d-flex justify-content-between mr-auto"> -->
            <div>
                <h3 class="leap-admin-subheader__title leap-admin-subheader__title--separator">{{ title }}</h3>
                <ul v-if="links && links.length" class="leap-admin-subheader__breadcrumbs leap-admin-nav leap-admin-nav--inline">
                  <template v-for="(link, index) in links" :key="index">
                    <li class="leap-admin-nav__item">
                        <nuxt-link class="leap-admin-nav__link m-nav__link--icon" :href="link.href"> {{ link.title }} </nuxt-link>
                    </li>
                    <li v-if="links.length - index > 1" class="leap-admin-nav__separator">
                        <i class="fa fa-angle-right"></i>
                    </li>
                  </template>
                </ul>
            </div>
            <div>
              <template  v-if="buttons">
                <nuxt-link v-for="(button , index) in buttons" :key="index" @click="button.emit ? $emit('clicked-button', index) : false" class="leap-btn leap-back-btn" :class="{ 'me-2': buttons.length -1 != index }" :href="button.link || '' " type="button"><i-las :t="button.icon || 'plus' " class="cp" /> {{button.text}}</nuxt-link>
              </template>
              
            </div>
          <!-- </div> -->
        </div>
      </div>
  </template>

  <script setup>
  let props = defineProps({
      title:{
          type: String, 
          default:'Parent',
          required: true,
      },
      links:{
          type: [Boolean, Object], 
          default:[{title:'Parent', href: '/'}, {title:'child', href: ''}],
          required: true,
      },
      createLink:{
          type: Object, 
          default:{ title:'create', href:'/' },
      },
      buttons:{
         type: [Array,Boolean],
         default: false

      },

  })

  let emit = defineEmits(['clicked-button'])
  </script>
  <style scoped>
  .leap-back-btn{
    background-color:#1E1E2D;
    color: var(--fontcolor-white);
  }
  </style>
