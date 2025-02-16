<template>
  <nav v-if="modelValue?.links?.length && modelValue?.links?.length > 3" aria-label="Page navigation example">
    <ul class="pagination">
      <li v-for="(link, i) in modelValue.links" :key="i" class="page-item">
        <template v-if="prevent">
          <a
          class="page-link" 
          :class="[getActiveClass(i)]"
          :to="link.active ? '' : makeRoute(i)"
          @click.prevent="(i>0 && i < modelValue.links.length-1) ? $emit('jumpToPage', i) : handlePrevNext(i)"
          v-html="getHtml(i)"></a>
        </template>
        <template v-else>
          <nuxt-link  
            class="page-link" 
            :class="[getActiveClass(i)]"
            :to="link.active ? '' : makeRoute(i)"
            @click="(i>0 && i < modelValue.links.length-1) ? $emit('jumpToPage', i) : handlePrevNext(i)"
            v-html="getHtml(i)"></nuxt-link>
        </template>
        
      </li>
    </ul>
  </nav>
</template>

<script setup>
let props = defineProps({
  modelValue: {
    type: [Array, Object, Boolean],
    default: {
      // This is laravel default pagination structure
      current_page: 1,
      data: null,
      first_page_url: null,
      from: 1,
      last_page: 1,
      last_page_url: null,
      links: [
        { active: true, label: "1", url: "" },
        { active: true, label: "Next &raquo;", url: "" },
      ],
      next_page_url: null,
      path: null,
      per_page: 15,
      prev_page_url: null,
      to: 13,
      total: 19,
    },
  },
  prevent: {
    default: true,
    required: true,
  }
});

const myEmit = defineEmits(["update:modelValue", "jumpToPage"]);
const updateValue = (event) => {
  myEmit("update:modelValue", event.target.value);
};

let handlePrevNext = (page) => {
  let current_page = props.modelValue.current_page
  if(page==0){
    let page = (current_page > 1 ? ( current_page - 1 ) : 1)
    myEmit('jumpToPage', page)
  }else{
    let page = (current_page < props.modelValue.links.length-2 /**Excluding 1st and last button*/ 
              ? ( current_page + 1 ) : current_page)
    myEmit('jumpToPage', page)
  }
  
}
let makeRoute = (page) => {
  let p = props.modelValue
  if(page == 0){
    if(p.current_page > 1) return '?page=' + (p.current_page-1)
    else return ''
  }else{
    return '?page=' + page
  }
}
let getHtml = (page) => {
  let p = props.modelValue
  if(page == 0){
    return '<i class="las la-chevron-left"></i>'
  }else if(page > 0 && page==p.links.length-1){
    return '<i class="las la-chevron-right"></i>'
  }else{
    return page
  }
}
let getActiveClass = (page) => {
  let p = props.modelValue
  if(page == 0 || ( page > 0 && page==p.links.length-1 )){
    return ''
  }else{
    if(page == p.current_page){
      return 'active-page'
    }else{
      return ''
    }
  }
}
let jumpToPage = (page) => {
    myEmit('jumpToPage', page)
}
</script>

<style scoped>
a{
    background-color: #1e1e2d;
    color: rgb(150, 150, 150) !important;
    background-color: #ffffff52;
    border: 1px solid var(--linecolor-black);
    cursor: pointer !important;
}
a:hover,
a:focus
 {
    background-color: #ffffff !important;
    border: 1px solid var(--linecolor-black) !important;
    box-shadow: none !important;
}
a.active-page,
a.active-page:hover
{
  color: var(--fontcolor-dark) !important;
  background-color: #ffffff;
  box-shadow: none !important;
}
</style>