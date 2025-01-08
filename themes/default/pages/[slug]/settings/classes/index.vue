<template>
  <div>
    <div class="position-relative">
      <page-content-header
        :title="'শ্রেণী/বিভাগ-ম্যানেজমেন্ট'"
        :links="[
          { title: 'মেইন প্যানেল', href: H.url('/settings/classes') },
          { title: 'তালিকা', href: H.url('/settings/classes') },
        ]"
        :buttons="[]"
      />
      <div class="row">
        <admin-card
          class="col-lg-12 col-md-12 col-12"
          :showHeader="false"
          :title="''"
          :headerButtons="true"
          :showFooter="false"
          :showPagination="true"
          @admin-card-submit="false"
          @admin-card-cancel="false"
        >
          <template v-slot:before-back-button>
            <nuxt-link
              :to="H.url('/settings/classes')"
              class="leap-btn leap-back-btn me-2"
              type="button"
            >
              <i-las t="plus" /> শ্রেণী/বিভাগ
            </nuxt-link>
          </template>
          <template v-slot:card-body>
            <div class="p-2">শ্রেণী/বিভাগের তালিকা</div>
            <fieldset class="border rounded-3 p-3 my-2" style="width: 49%">
              <legend class="float-none w-auto px-3">
                শ্রেণী/বিভাগ {{ editMode ? "আপডেট করুন" : "যুক্ত করুন" }}
              </legend>
              <div class="d-flex justify-content-evenly">
                <el-BaseInput
                  v-model="className"
                  col="name"
                  type="text"
                  :placeholder="'শ্রেণী/বিভাগের নাম'"
                />
                <div class="p-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="status"
                    id="flexCheckDefault"
                  />
                  <label class="px-2">চালু</label>
                </div>
                <div class="py-2">
                  <button @click="submitForm" class="btn btn-info btn-sm">
                    {{ editMode ? "আপডেট করুন" : "সেইভ করুন" }}
                  </button>
                </div>
              </div>
            </fieldset>
            <div class="row">
              <table
                id="example"
                class="table table-striped dataTable"
                style="width: 50%"
                aria-describedby="example_info"
              >
                <thead>
                  <tr>
                    <th>ক্লাস/বিভাগ <i-las t="sort-asc" /></th>
                    <th>ফি স্ট্যাটাস</th>
                    <th>এ্যাকশন</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(
                      studentClassItem, index
                    ) in studentClassStore.studentClassList"
                    :key="index"
                    :class="index % 2 === 0 ? 'even' : 'odd'"
                  >
                    <td>
                      <div class="px-2">
                        <span>{{ studentClassItem?.name }}</span>
                      </div>
                    </td>
                    <td>
                      <div class="px-2">
                        <p>
                          <span>{{
                            studentClassItem.status === 1
                              ? "active"
                              : "Inactive"
                          }}</span>
                        </p>
                      </div>
                    </td>
                    <td>
                      <ul class="d-flex justify-content-evenly td-actions">
                        <li @click="showEditFormData(index, studentClassItem)">
                          <i-las t="edit" />
                        </li>
                        <li @click="confirmDelete(studentClassItem.id)">
                          <i-las t="trash" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </admin-card>
      </div>
    </div>

    <!-- Delete Modal -->
    <Modal-Confirm
      v-if="openModal"
      v-model="openModal"
      @yes="
        async () => {
          await studentClassStore.deleteStudentClass(selectedClassId);
          selectedClassId = null;
        }
      "
    >
    </Modal-Confirm>
  </div>
</template>

<script setup>
import H from '../utils/helper.js';
import { useStudentClassStore } from "~/store/StudentClass";

let className = ref(null);
let status = ref(null);
const studentClassStore = useStudentClassStore();
const {
  studentClass,
  getStudentClassList,
  addStudentClass,
  updateStudentClass,
  deleteStudentClass,
} = studentClassStore;

let institute_id = localStorage.getItem("institute_id");
let branch_id = localStorage.getItem("branch_id");

const editMode = ref(false);
const openModal = ref(false);
const selectedClassId = ref(null);

onMounted(() => {
  getStudentClassList();
});

function submitForm() {
  studentClass.institute_id = institute_id;
  studentClass.branch_id = branch_id;
  studentClass.name = className;
  studentClass.status = status;

  editMode.value
    ? updateStudentClass(studentClass.id, studentClass)
    : addStudentClass(studentClass);
}

function showEditFormData(index, studentClassItem) {
  editMode.value = true;
  className.value = studentClassItem.name;
  studentClass.id = studentClassItem.id;
  status.value = studentClassItem.status == 1 ? true : false;
}

function confirmDelete(classId) {
  selectedClassId.value = classId;
  openModal.value = true;
}
</script>

<style scoped>
fieldset {
  border: 1px solid #9c9393 !important;
}
</style>
