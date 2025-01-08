<template>
  <div class="d-flex flex-row justify-content-between">
    <div class="ionic-img-upload cp">
      <input
        type="file"
        id="file_34ffdcd"
        class="cp"
        @change="onChangeFile"
        @dropPPP="dropped"
        :multiple="allowMultiple"
        accept=".jpg,.jpeg,.png,.gif,.pdf"
      />
      <span class="filename fs-13 cp">Upload Images or PDFs</span>
      <i class="bx bx-upload fs-16"></i>
    </div>
    <div
      v-if="
        modelValue?.length ||
        previouslyUpoadedFiles?.length ||
        previouslyUpoadedFile
      "
      class="ionic-img-uploadshow"
    >
      <ul>
        <TransitionGroup name="list">
          <template v-for="(file, i) in modelValue" :key="i">
            <slot
              name="listItem"
              :data="modelValue"
              :file="file"
              :i="i"
              :getUrl="getUrl"
              :removeItem="removeItem"
            >
              <li class="mb-2">
                <template v-if="file.type.includes('image')">
                  <img
                    :src="getUrl(file)"
                    v-show="getUrl(file)"
                    class="img-fluid"
                    alt="img uploadshow img"
                  />
                </template>
                <template v-else-if="file.type.includes('pdf')">
                  <a :href="getUrl(file)" target="_blank">
                    <!-- <i class="bx bx-file-pdf fs-16"></i> View PDFss -->
                    <img
                      src="/img/pdf.png"
                      class="img-fluid"
                      alt="dashbard icon"
                    />
                    {{ fileName }}
                  </a>
                </template>
                <i class="la la-close" @click.stop="removeItem(i)"></i>
                <span
                  v-if="displayImageNum && modelValue?.length > 1"
                  class="image-number"
                  >{{ i + 1 }}</span
                >
              </li>
            </slot>
          </template>
          <template v-for="(file, i) in previouslyUpoadedFiles" :key="i">
            <slot
              name="uploadedListItem"
              :data="previouslyUpoadedFiles"
              :file="file"
              :i="i"
            >
              <li class="mb-2">
                <template v-if="file.type.includes('image')">
                  <img
                    :src="
                      RentmyHelper.product.image(
                        file.product_id,
                        file.image_small
                      )
                    "
                    class="img-fluid"
                    alt="img uploadshow img"
                  />
                </template>

                <template v-else-if="file.type.includes('pdf')">
                  <a
                    :href="
                      RentmyHelper.product.image(
                        file.product_id,
                        file.image_small
                      )
                    "
                    target="_blank"
                  >
                    <i class="bx bx-file-pdf fs-16"></i> View PDFss
                  </a>
                </template>
                <i
                  class="la la-close"
                  @click.stop="removePreviouslyUpoadedFiles(file)"
                ></i>
                <span
                  v-if="displayImageNum && previouslyUpoadedFiles?.length > 1"
                  class="image-number"
                  >{{ i + 1 }}</span
                >
              </li>
            </slot>
          </template>
          <template
            v-if="
              previouslyUpoadedFile && typeof previouslyUpoadedFile != 'object'
            "
          >
            {{ imgorpdf(previouslyUpoadedFile) }}

            <slot
              v-if="imgpdf"
              name="uploadedListItem"
              :data="previouslyUpoadedFile"
            >
              <li class="mb-2">
                <!-- <img :src="previouslyUpoadedFile" class="img-fluid" alt="img uploadshow img" /> -->
                <a :href="previouslyUpoadedFile" target="_blank">
                  <!-- <i class="bx bx-file-pdf fs-16"></i> View PDFss -->
                  <img
                    src="/img/pdf.png"
                    class="img-fluid"
                    alt="dashbard icon"
                  />
                  {{ getFileName(previouslyUpoadedFile) }}
                </a>
              </li>
            </slot>
            <slot v-else name="uploadedListItem" :data="previouslyUpoadedFile">
              <li class="mb-2">
                <img
                  :src="previouslyUpoadedFile"
                  class="img-fluid"
                  alt="img uploadshow img"
                />
              </li>
            </slot>
          </template>
        </TransitionGroup>
      </ul>
      <div class="product-visible-btn mt-3" v-if="showButton">
        <span class="activestatus-btn me-3"
          >Upload
          <i
            class="bx bx-upload size-1 ms-2"
            style="transform: translateY(-3px)"
          ></i
        ></span>
        <span class="redstatus-btn">Cancel</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let fileName = ref(null);
let imgpdf = ref(false);

function imgorpdf(val) {
  imgpdf.value = val.endsWith(".pdf");
}
const getFileName = (url) => {
  // Extract the filename with extension
  const fileNameWithExtension = url.substring(url.lastIndexOf("/") + 1);

  // Remove the extension from the filename
  const fileName = fileNameWithExtension.split(".").slice(0, -1).join(".");

  return fileName;
};

const props = defineProps({
  modelValue: {
    default: [],
    type: [Array, Object],
    required: false,
  },
  allowMultiple: {
    type: Boolean,
    default: false,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
  displayImageNum: {
    type: Boolean,
    default: false,
    required: false,
  },
  previouslyUpoadedFiles: {
    type: Array,
    default: [],
    required: false,
  },
  previouslyUpoadedFile: {
    type: String,
    default: "",
    required: false,
  },
});

const myEmit = defineEmits([
  "update:modelValue",
  "uploadFile",
  "removedPreviouslyUploadedFile",
]);

const getUrl = (file) => {
  try {
    return URL.createObjectURL(file);
  } catch (error) {
    return "";
  }
};

const updateModelValue = (selectedFiles = []) => {
  if (props.allowMultiple) {
    let filesArray = Array.isArray(props.modelValue) ? props.modelValue : [];
    let mergedFiles = filesArray.concat(selectedFiles);
    myEmit("update:modelValue", mergedFiles);
  } else {
    myEmit("update:modelValue", selectedFiles.slice(0, 1)); // Allow only single file
  }
};

const onChangeFile = (event) => {
  console.log(event.target.files[0].name);
  fileName.value = event.target.files[0].name;
  let selectedFiles = Array.from(event.target.files);
  updateModelValue(selectedFiles);
  event.target.value = "";
  myEmit("uploadFile", props.modelValue);
};

const dropped = (event) => {
  if (event.dataTransfer.files.length) {
    setTimeout(() => {
      updateModelValue(Array.from(event.dataTransfer.files));
    }, 100);
  }
};

const removeItem = (i) => {
  let selectedFiles = Array.isArray(props.modelValue) ? props.modelValue : [];
  selectedFiles.splice(i, 1);
  setTimeout(() => {
    myEmit("update:modelValue", selectedFiles);
  }, 1500);
};

const removePreviouslyUpoadedFiles = (file) => {
  myEmit("removedPreviouslyUploadedFile", file);
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.image-number {
  position: absolute;
  width: 20px;
  height: 20px;
  font-size: 12px;
  z-index: 999;
  bottom: -8px;
  left: calc(50% - 12px);
  background-color: black;
  border-radius: 50%;
  text-align: center;
  line-height: 22px;
  font-size: 14px;
  font-weight: 500;
}
</style>
