<template>
     <div class="">
        <div class="ionic-img-upload cp">
            <input type="file" id="audioInput" @change="onFileChange" accept="audio/*" />
            <span class="filename fs-13 cp">{{ label }}</span>
            
            <i class="bx bx-upload fs-16"></i>

        </div>
        <div v-if="audioSrc" class="d-flex justify-content-between mt-3">
            <p class="file-name">File: {{ fileName }}</p>
            <audio :src="audioSrc" controls class="styled-audio"></audio>
        </div>
        
    </div>
</template>
  
<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: 'Upload an audio file:', // Default label text
        },
        modelValue: {
            type: Object, // Two-way binding for the audio file
            default: null,
        },
    });
    const emit = defineEmits(['update:modelValue']);
    const audioSrc = ref(null);
    let fileName = ref(null)
    const onFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('audio/')) {
            fileName.value = file.name;
            audioSrc.value = URL.createObjectURL(file);
            emit('update:modelValue', file); // Emit the file to the parent component for two-way binding
        } else {
            Toaster.error("Please upload a valid audio file.");
        }
    };
  
    
  </script>
  <style scoped>
  .file-name {
  font-size: 14px;
  margin-top: 10px;
  color: #ffffff;
}
.styled-audio {
  margin-top: 3px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #ffffff;
}
  </style>
  