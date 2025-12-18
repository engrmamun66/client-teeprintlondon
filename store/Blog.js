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

    canonical_url: "",
    image_url: "",
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
      canonical_url: "",
      image_url: "",
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
    } catch (error) {}
  }

  async function getPosts() {
    try {
      let response = await Blog.list();

      postList.value = response.data.data.data;
    } catch (error) {}
  }

  async function deletePost(id) {
    try {
      let response = await Blog.delete(id);

      getPosts();
      Toaster.success("Blog deleted successfully");
      return true;
    } catch (error) {
      return false;
    }
  }

  let brand = ref(null);

  async function showPost(id) {
    try {
      let response = await Blog.show(id);

      // Extract the data object
      const postDataFromApi = response.data.data;

      // Check if data exists and populate postData
      if (postDataFromApi) {
        postData.value.title = postDataFromApi.title || "";
        postData.value.content = postDataFromApi.content || "";
        postData.value.excerpt = postDataFromApi.excerpt || "";
        postData.value.featured_image = postDataFromApi.featured_image || "";
        postData.value.meta_title = postDataFromApi.meta_title || "";
        postData.value.meta_description =
          postDataFromApi.meta_description || "";
        postData.value.meta_keywords = postDataFromApi.meta_keywords || "";

        postData.value.canonical_url = postDataFromApi.canonical_url || "";
        postData.value.image_url = postDataFromApi.image_url || "";

        // safeguard in case a property is missing or null in the response.
      }

      // Return true or the populated post data if needed
      return postData.value;
    } catch (error) {
      console.error("Error fetching post data:", error);
      return false;
    }
  }

  async function update(id, payload = {}) {
    try {
      // Check if payload is FormData
      if (payload instanceof FormData) {
        // For FormData, append _method directly
        payload.append("_method", "PUT");

        let response = await Blog.update(id, payload);
      } else {
        // For regular objects, spread as before
        let payloads = {
          ...payload,
          _method: "PUT",
        };

        let response = await Blog.update(id, payloads);
      }

      await getPosts();
      showModal.value = false;
      // resetPostData();
      Toaster.success("Post updated successfully");
    } catch (error) {
      if (error.response?.status == 422) {
        // registrationFormError.value.type = 422;
        // registrationFormError.value.messages = error.response.data.errors;
      }
    }
  }

  let publishedBlogs = ref(null);

  async function getPublishedBlogs() {
    try {
      let response = await Blog.publishedBlogs();
      // console.log("*&*&", response.data.data.data)

      publishedBlogs.value = response.data.data.data;
    } catch (error) {}
  }

  async function deletePost(id) {
    try {
      let response = await Blog.delete(id);

      getPosts();
      Toaster.success("Blog deleted successfully");
      return true;
    } catch (error) {
      return false;
    }
  }

  return {
    create,
    getPosts,
    deletePost,
    showPost,
    update,
    resetPostData,
    brand,
    postList,
    brandAttribute,
    showModal,
    postData,
    getPublishedBlogs,
    publishedBlogs
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot));
}
