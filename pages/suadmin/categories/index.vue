<template>
  <div>
    <div class="position-relative">
      <LoaderApi v-if="false" />
      <page-content-header :title="'Categories'" :links="[]" :buttons="[]" />
      <admin-card :showHeader="true" :title="'Category List'">
        <template v-slot:header-buttons>
          <button class="btn btn-success m-3" @click="OpenModal()">
            <i-las t="plus" /> Add Category
          </button>
        </template>

        <div class="row">
          <table
            id="example"
            class="table table-striped dataTable"
            style="width: 100%"
            aria-describedby="example_info"
          >
            <thead>
              <tr>
                <th>Category Name <i-las t="sort-asc" /></th>
                <th>Parent Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd"
                v-for="(category, index) in Categorystore.categoryList"
              >
                <td>
                  <div class="px-2">
                    <span>{{ category?.name }}</span>
                  </div>
                </td>
                <td>
                  <div class="px-2">
                    <span>{{ category?.parent?.name }}</span>
                  </div>
                </td>

                <td>
                  <div class="px-2">
                    <p>
                      <span>{{
                        category?.status == 1 ? "Active" : "Inactive"
                      }}</span>
                    </p>
                  </div>
                </td>
                <td>
                  <ul class="d-flex justify-content-evenly td-actions">
                    <li class="d-flex justify-content-evenly">
                      <p tooltip="Delete" flow="up">
                        <i-las
                          t="trash"
                          class="size-sm cp"
                          @click="
                            showConfirmation = true;
                            categoryId = category.id;
                          "
                        />
                      </p>
                      <p tooltip="Edit" flow="up">
                        <i-las
                          t="edit"
                          class="size-sm cp"
                          @click="showCategory(category.id)"
                        />
                      </p>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <Modal-Confirm
            v-if="showConfirmation"
            v-model="showConfirmation"
            :skipAutoClose="false"
            @yes="
              async () => {
                let isDeleted = await Categorystore.deleteCategory(categoryId);
                if (isDeleted) {
                  showConfirmation = false;
                  categoryId = null;
                }
              }
            "
          >
            <template v-if="showConfirmation"> Are you sure? </template>
          </Modal-Confirm>
        </div>
      </admin-card>

      <modal-global
        v-model="Categorystore.showCategoryModal"
        :title="editMode ? 'Update Category' : 'Add Category'"
        @clicked-submit="handleSubmit"
        @clicked-cancel="Categorystore.showCategoryModal = false;asMounted()"
        @clicked-close="Categorystore.showCategoryModal = false;asMounted()"
      >
        <template #modalbody>
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <div class="date-box">
                      <div class="date-box-input">
                        <el-BaseInput
                          type="text"
                          label="Name"
                          v-model="Categorystore.categoryattribute.name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="my-3 col-12">
                      <label class="me-3">Is Parent</label>

                      <div class="form-check form-check-inline">
                        <input
                          v-model="Categorystore.categoryattribute.is_parent"
                          :value="1"
                          class="form-check-input cp"
                          type="radio"
                          name="is_parent1"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label cp" for="inlineRadio1"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          v-model="Categorystore.categoryattribute.is_parent"
                          :value="0"
                          class="form-check-input cp"
                          type="radio"
                          name="is_parent1"
                          id="inlineRadio2"
                          value="option1"
                        />
                        <label class="form-check-label cp" for="inlineRadio2"
                          >No</label
                        >
                      </div>
                    </div>
                    <div class="col-md-12 col-12">
                      <div
                        class="form-group text-muted"
                        v-if="Categorystore.categoryattribute?.is_parent === 0"
                      >
                        <label>Parent Category</label>
                        <span class="text-danger p-1">*</span>
                        <select
                          class="form-control"
                          v-model="Categorystore.categoryattribute.parent_id"
                        >
                          <option :value="null" class="text-muted">
                            -Please Select-
                          </option>
                          <option
                            v-for="(
                              item, index
                            ) in Categorystore.parentcategorylist"
                            :key="index"
                            :value="item.id"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                        <div>
                          <span class="field-error-span text-danger p-1"></span>
                        </div>
                      </div>
                      <div class="col-md-12 col-12">
                        <div
                          class="form-group text-muted"
                          v-if="Categorystore.categoryattribute?.is_parent == 1"
                        >
                          <label>Category Type</label>
                          <span class="text-danger p-1">*</span>

                          <el-BaseSelectMultiple
                            v-model="Categorystore.selectedTypes"
                            :data="categories"
                            :label="null"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-group col-6">
                    <div class="time-box-input">
                      <div
                        style="display: flex; gap: 1rem; align-items: center"
                      >
                        <p class="mt-3">Status</p>
                        <el-Radio
                          name="status"
                          :value="1"
                          v-model="Categorystore.categoryattribute.status"
                        >
                          Active
                        </el-Radio>
                        <el-Radio
                          name="status"
                          :value="0"
                          v-model="Categorystore.categoryattribute.status"
                        >
                          Inactive
                        </el-Radio>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </modal-global>
    </div>
  </div>
</template>

<script setup>
// import { useCategorystore } from "~/store/Category";
import { useCategorystore } from "~/store/Category";
const Categorystore = useCategorystore();
let showConfirmation = ref(false);
let editMode = ref(false);
let categoryId = ref(null);
let editor = ref(null);
let clearImage = ref(false);
let Sub_category = [
  { id: 1, name: "Sub Product 1" },
  { id: 2, name: "Sub Product 2" },
];
const categories = ref([
  { id: 1, name: "Popular Product" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Advertising Materials" },
]);

async function showCategory(id) {
  await Categorystore.showCategory(id);

  editMode.value = true;
}

function handleSubmit() {
  Categorystore.categoryattribute.status = Categorystore.categoryattribute
    .status
    ? 1
    : 0;
  Categorystore.categoryattribute.is_parent = Categorystore.categoryattribute
    .is_parent
    ? 1
    : 0;

  Categorystore.categoryattribute.types = Categorystore.selectedTypes.map(
    (category) => category.id
  );
  if (Categorystore.categoryattribute.is_parent == 0) {
    if (Categorystore.categoryattribute.is_parent == null) {
      Toaster.error("Please Select Parent Category");
    }
  }
  if (editMode.value) {
    // const { type, ...payload } = Categorystore.categoryattribute;
    const payload = {
      ...Categorystore.categoryattribute,
      types: JSON.stringify(Categorystore.categoryattribute.types),
    };
    Categorystore.update(Categorystore.categoryattribute.id, payload);
  } else {
    const payload = {
      ...Categorystore.categoryattribute,
      types: JSON.stringify(Categorystore.categoryattribute.types),
    };

    Categorystore.create(payload);

    Categorystore.getTypes()
  }
}

function OpenModal() {
  Categorystore.resetCategoryAttribute();
  clearImage.value = true;
  editMode.value = false;
  Categorystore.showCategoryModal = !Categorystore.showCategoryModal;
}


async function asMounted(){
  await Categorystore.getCategories();
  await Categorystore.getParentcategorylist();
  await Categorystore.getTypes();
}

onMounted(async () => {
  await asMounted()
});
</script>
<style scoped>
fieldset {
  border: 1px solid #9c9393 !important;
}
</style>
