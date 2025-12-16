import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Blog from "../apis/Blog";

export const useBlogStore = defineStore("blog", () => {
  let postList = ref([]);
  let brandAttribute = ref({
    id: null,
    name: null,
    image: null,
    image_url: null,
    description: null,
    status: 1,
  });

  let postData = ref({
    title: "",
    content: "",
    excerpt: "",
    featured_image: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    meta_image: "",
    canonical_url: "",
  });

  function resetPostData() {
    postData.value = {
      // <-- Assign a new object to the .value
      title: "",
      content: "",
      excerpt: "",
      featured_image: "",
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      meta_image: "",
      canonical_url: "",
    };
  }

  let showModal = ref(false);

  async function create(payload = {}) {
    try {
      let response = await Blog.create(payload);
      if (response.data.success) {
        await getPosts();
        showModal.value = false;
        resetPostData();
        Toaster.success("Blog created succsfully");
      }
    } catch (error) {
      //   if (error.response.status == 401) {
      //     registrationFormError.value.type = 401;
      //     registrationFormError.value.message = error.response.data.error;
      //   } else {
      //     registrationFormError.value.type = 422;
      //     registrationFormError.value.messages = error.response.data.errors;
      //   }
    }
  }

  async function getPosts() {
    try {
      let response = await Blog.list();

      postList.value = response.data.data.data;
    } catch (error) {}
  }

  async function deleteBrand(id) {
    try {
      let response = await Blog.delete(id);

      if (response.status == 201 || 200) {
        getPosts();
        Toaster.success("Blog deleted successfully");
        return true;
      }
    } catch (error) {
      //   if (error.response.status == 401) {
      //     registrationFormError.value.type = 401;
      //     registrationFormError.value.message = error.response.data.error;
      //   } else {
      //     registrationFormError.value.type = 422;
      //     registrationFormError.value.messages = error.response.data.errors;
      //   }
      return false;
    }
  }

  let brand = ref(null);
  async function showPost(id) {
    try {
      let response = await Blog.show(id);

      if (response.status == 200) {
        Blog.value = response.data.data;
        brandAttribute.value.name = Blog.value.name;
        brandAttribute.value.status = Blog.value.status;

        brandAttribute.value.image_url = Blog.value.image_url;
        brandAttribute.value.description = Blog.value.description;
        brandAttribute.value.id = Blog.value.id;
        showModal.value = true;
      }
    } catch (error) {
      return false;
    }
  }

  async function update(id, payload = {}) {
    try {
      payload = {
        ...payload,
        _method: "PUT",
      };
      let response = await Blog.update(id, payload);
      if (response.status == 200) {
        await getPosts();
        showModal.value = false;
        resetPostData();
        Toaster.success("Category updated successfully");
      }
    } catch (error) {
      if (error.response.status == 422) {
        // registrationFormError.value.type = 422;
        // registrationFormError.value.messages = error.response.data.errors;
      }
    }
  }

  return {
    create,
    getPosts,
    deleteBrand,
    showPost,
    update,
    resetPostData,
    brand,
    postList,
    brandAttribute,
    showModal,
    postData,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot));
}
