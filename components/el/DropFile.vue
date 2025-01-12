<!--
<el-DropFile
:multiple="true"
:showDetails="true"
maxFileMBsize="5"
accepts="jpg,jpeg,png,pdf"
@files-before-upload="(files)=>log('files-before-upload')"
@uploaded="(file)=>log(file.name)"
@uploaded-all="log('Uploaded all')"
@file-removed="false" />
-->
<template>
    <div v-bind="$attrs">
		<label class="ms-1 mb-3" v-if="label" for="">{{ label }}</label>
        <div :style="'height:' + height + ';--upload-icon:url('+ uploadIcon +')'" class="card justify-content-center align-items-center position-relative p-2 mb-3 text-center border-dashed uploader-icon"
        :class="{'drop-zone-over': isDragovering, 'progress': isUploading() || showProgress, 'upoadedFiles': upoadedFiles.length, 'uploader-icon': !isUploading()}"
        @dragover="isDragovering=true;showProgress=true"
        @dragleave="isDragovering=false;showProgress=false" 
        @drop="isDragovering=false;showProgress=false;error='';dropped($event)" 
        >

            <input :multiple="multiple" ref="inputElement" type="file" class="file-fluid" @change="fileChanged" />
			<template v-if="upoadedFiles.length && !isDragovering">
				<!-- =============== -->
				<!-- FOR SINGLE FILE -->
				<!-- =============== -->
				<span @click="removeFileAll()" class="delete"><i class="lar la-times-circle"></i></span>
				<template v-if="!multiple">  
					<!-- <span v-if="isUploading()" class="loader"></span> -->
					<template v-if="upoadedFiles[0]?.type.startsWith('image/') && !isDragovering">
						<img :src="upoadedFiles[0]?.base64 || ''" :class="{removingFile: upoadedFiles[0].isRemoving}" style="height:calc(100% - 30px);border-radius:4px;margin-bottom:1rem" />
					</template>
					<!-- <template v-else-if="upoadedFiles[0]?.type.startsWith('video/')">
						<video :class="{removingFile: upoadedFiles[0].isRemoving}" class="video-js" controls preload="auto" :poster="poster" data-setup='' :loop="false">
						<source :src="upoadedFiles[0]?.base64 || ''" :type="'video/mp4'">
						</video>
					</template>
					<template v-else-if="upoadedFiles[0]?.type.startsWith('application/pdf')">
						<iframe :src="upoadedFiles[0]?.base64 || ''"></iframe>
					</template> -->
					<template v-else>
						<h1 v-if="upoadedFiles[0].is_uploading" style="line-height: 50px;">{{ getPercent(upoadedFiles[0], 0) }}</h1>
						<li v-else class="file-icon" :filetype="upoadedFiles[0]?.name.split('.').at(-1).slice(0,4)"></li>
						<a href="#" class="text-hover-primary fs-6 fw-bold mb-2 mt-2"> 1 {{ upoadedFiles[0]?.name.split('.').at(-1) }} File Uploaded</a>
					</template>
					<p class="file-title text-center" style="text-center">{{ H.getExcerpt(upoadedFiles[0]?.name || '', 26) }} ({{ upoadedFiles[0].size_mb }} MB)</p>
				</template>
				<!-- =============== -->
				<!-- FOR Multiple FILE -->
				<!-- =============== -->
				<template v-else>
					<h1 style="line-height: 50px;">{{ getPercent_allFiles(0) }}</h1>
					<a v-if="!isUploading()" class="text-hover-primary fs-6 fw-bold mb-2"> Uploaded {{ upoadedFiles.length }} files</a>
					<h5 v-if="isUploading()" class="text-hover-primary fw-bold mb-2">Uploading {{ countUploadedFiles() }} of {{ upoadedFiles.length }} </h5>
					<p class="text-hover-primary fs-7 fw-bold mb-2"> Total Files size {{ totalFileSize() }} MB </p>
				</template>
			</template>
			<template v-else>
				<template v-if="!isUploading()">
					<template v-if="error">
						<a href="#" class="text-hover-primary fs-6 fw-bold mt-5 text-danger"> {{ error }} </a>
					</template>
					<template v-else>
						<a href="#" class="text-hover-primary fs-6 fw-bold mt-5">File Upload (Max {{ maxFileMBsize }} MB)</a>
						<div class="fw-semibold text-gray-400">Drag and drop {{ multiple ? 'Files' : 'Single File' }} {{ ['*', '', null].includes(accepts) ? '( Any file )' : 'here ( '+ accepts.replaceAll(',', ', ') +' )' }} </div>
					</template>
				</template>
			</template>
			 
        </div>
	</div>

	<div v-if="upoadedFiles.length && showDetails" v-bind="$attrs" class="mb-3">
		<div class="row">
			<div class="col-12">
				<!-- Each File -->
				<template v-if="Object.keys(removedFiles).length">
					<div class="each-file p-2 px-3 mb-1 radius-5 d-flex justify-content-between align-items-center text-center" style="background-color: #0000001a;border: 1px dashed #535353;">
	
							<small class="text-warning">
								Automatically removed {{ countRemovedFile() }} {{ countRemovedFile() > 1 ? 'Files' : 'File' }} ( {{ removedFilesAsString() }} )
							</small>
							<i-las t="close" @click="removedFiles={}" />
					</div>
				</template>
				<template v-for="(file, index) in upoadedFiles" :key="index">
					<div :class="{removingFile: upoadedFiles[index].isRemoving}" class="each-file p-2 px-3 mb-1 radius-5 d-flex justify-content-between align-items-center" style="background-color: #0000001a;border: 1px dashed #535353;">
						<div class="left me-3" style="width: 50px;">
							<!-- File Icon -->
							<li class="file-icon" :class="{'zoom-in-zoom-out': !file.extension_matched}" :filetype="upoadedFiles[index]?.name.split('.').at(-1).slice(0,4)"></li>
						</div>
						<div class="right w-100">
							<div class="d-flex justify-content-between">
								<!-- File Name  -->
								<!-- visible only md -->
								<p class="filename fs-5 d-none d-md-block" :class="{'text-danger': !file.extension_matched}"> {{ H.getExcerpt(file.name, 30) }} </p>
								<!-- visible only sm -->
								<p class="filename fs-5 d-md-none d-sm-block" :class="{'text-danger': !file.extension_matched}"> {{ H.getExcerpt(file.name, 12) }} </p>
								<div class="d-flex justify-content-between">
									<!-- File Size -->
									<p>{{ file.size_mb }} MB</p>
									<!-- Trash Icon -->
									<i-las @click="removeFile(index)" t="trash" class="ps-2 fs-4" />
								</div>
							</div>
							<small v-if="!file.extension_matched" class="text-warning">File type not matched or contain ( {{ accepts.replaceAll(',', ' | ') }} )</small>
							<template v-else>
								<small v-if="file.size_mb > parseInt(maxFileMBsize)" class="text-danger">File size limit exceeded</small>
							</template>
							<div v-if="file.is_uploading" class="file-progressbar-wraper" :style="!(file.size_mb > parseInt(maxFileMBsize)) ? 'margin-top:10px' : ''">
								<div class="file-progressbar" :percent="getPercent(file)" :style="'--percent:' + getPercent(file)"></div>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>

</template>

<script setup>
let props = defineProps({
	modelValue: {
		default: [],
		type: [Array],
		required: false,
	},
	label: {
		default: '',
		required: false,
	},
	multiple: {
		default: false,
		required: false,
	},
	accepts: {
		default: 'jpg,jpeg,png,pdf', // * | '' | 'jpg,jpeg,png,pdf'
		required: false,
	},
	showDetails: {
		default: false,
		required: false,
	},
	maxFileMBsize: {
		default: '5', //IN mb
		required: false,
	},
	height: {
		default: '150px',
		required: false,
	},
	uploadIcon: {
		default: '/img/upload-icon.png',
		required: false,
	},	
	poster: {
		default: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
		required: false,
	},
})
const myEmit = defineEmits([
	"update:modelValue", 
	"files-before-upload", 
	"uploaded", 
	"uploaded-all", 
	"file-removed"
	]);

// Drop Events
let upoadedFiles = ref([]);
let inputElement = ref(null);
let isDragovering = ref(false);
let showProgress = ref(false);
let error = ref('');
let removedFiles = ref({});
let pHeight = props.height

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */
function isUploading(){
	return upoadedFiles.value.length 
	!= upoadedFiles.value.filter(f => f.is_uploading===false).length
}
function getUploadedFiles(){
	return upoadedFiles.value.filter(f => f.is_uploading===false)
}
function countUploadedFiles(){
	return getUploadedFiles().length
}
function byteToMB(bytes){
	return bytes * 0.000001
}
function totalFileSize(){
	return byteToMB(upoadedFiles.value.reduce((prev_val, cur_val, cur_index) => prev_val + Number(cur_val.size), 0)).toFixed(2)
}
function getPercent(file, decimal=2){
	let percent = file.progress.percent
	return percent.toFixed(decimal) + '%'
}
function getPercent_allFiles(decimal=2){
	let loaded = upoadedFiles.value.reduce((a, b) => a + b.progress.loaded, 0) || 0
	let totals = upoadedFiles.value.reduce((a, b) => a + b.progress.total, 0) || 0
	let percent = loaded * 100 / totals
	return (percent || 0 ).toFixed(decimal) + '%'
}
function extensionMatched(file){
	if(['*', '', null].includes(props.accepts)) return true
	let extension = file.name.split('.').at(-1)
	let accepts = props.accepts.replace('*', '').split(',')
	if(!accepts.length) return true
	return accepts.includes(extension?.toLowerCase())

}
async function auto_remove_files(){
	try {
		for(let index=upoadedFiles.value.length-1; index>=0; index--){
			let file = upoadedFiles.value[index]
			if(!extensionMatched(file)){
				let extension = file.name.split('.').at(-1)
				removedFiles.value[extension]++ || (removedFiles.value[extension] = 1)
				upoadedFiles.value[index].isRemoving = true
				setTimeout(() => {
					upoadedFiles.value.splice(index, 1)
					removeFileFromFileList(index)
					myEmit("file-removed");
				}, 300);
			}
		}
		setTimeout(() => {
			removedFiles.value = {}
		}, 12000);
	} catch (error) {
		
	}
}
function countRemovedFile(){
	return Object.values(removedFiles.value).reduce((a, b) => a + b)
}
function removedFilesAsString(){
	let fileStr = []
	Object.keys(removedFiles.value).forEach((extension) => {
		fileStr.push(`${removedFiles.value[extension]} ${extension}`)
	})
	return fileStr.join(', ')
}

/* -------------------------- End Helper Functions -------------------------- */

function dropped(e) {
  if (e.dataTransfer.files.length) {
    let files = e.dataTransfer.files;
    inputElement.value.files = files
    fileChanged(e);
  }
}

function fileChanged(e) {
  let files = inputElement.value.files;
  var filesTotal = files.length;
  upoadedFiles.value = [];  
  for (var i = 0; i < filesTotal; ++i) {
    upoadedFiles.value[i] = {
      name: files[i].name,
      base64: e.target.result,
      file: e.target.files[0],
      type: files[i].type,
      size: files[i].size,
      size_mb: byteToMB(files[i].size).toFixed(2),
      is_uploading: true,
      extension_matched: extensionMatched(files[i]),
	  progress: {
		loaded: null,
		total: null,
		percent: 0,
	  },
    };
    var reader = new FileReader();
    function __pushFileDetails(i) {
	  /* -------------------------------------------------------------------------- */
	  /*                                reader Events                               */
	  /*   https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event   */
	  /* -------------------------------------------------------------------------- */	  
      reader.addEventListener("load", async function (e) {
		try {
			upoadedFiles.value[i].base64 = e.target.result;
			upoadedFiles.value[i].is_uploading = false;

			myEmit('uploaded', upoadedFiles.value[i])
			if(!isUploading()) {
				setTimeout(async() => {
					await auto_remove_files()
				}, 2000);
				myEmit('update:modelValue', getUploadedFiles())
			}
		} catch (error) {
			console.warn('not loaded');
		}
      });
      reader.addEventListener("loadstart", function (e) {
		upoadedFiles.value[i].is_uploading = true
      });
      reader.addEventListener("loadend", function (e) {
		upoadedFiles.value[i].is_uploading = false
		myEmit('update:modelValue', getUploadedFiles())
      });
      reader.addEventListener("abort", function (e) {
	
      });
      reader.addEventListener("progress", function (e) {
        try {
			if(e.lengthComputable){
				upoadedFiles.value[i].progress.loaded = e.loaded
				upoadedFiles.value[i].progress.total = e.total
				let percent = (e.loaded * 100 / e.total) 
				upoadedFiles.value[i].progress.percent = percent

			}
		} catch (error) {}
      });
      reader.addEventListener("error", function (e) {
		console.log('e.target.error', e.target.error);
        error.value = e.target.error
		isDragovering.value = false
		showProgress.value = false
		upoadedFiles.value = []
		removeFileFromFileList(false)
      });
    }
    reader.readAsDataURL(files[i]);
    __pushFileDetails(i);
  }
  if(filesTotal) myEmit('files-before-upload', upoadedFiles.value)
}

let removeFileFromFileList = (index) => {
  const dt = new DataTransfer();
  const input = inputElement.value;
  const { files } = input;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    // removing the file
    if (index !== i) dt.items.add(file);
  }
  input.files = dt.files; // Assign the updates list
}

function removeFile(index=0) {
	try {
		upoadedFiles.value[index].isRemoving = true
		setTimeout(() => {
			upoadedFiles.value.splice(index, 1)
			removeFileFromFileList(index)
			myEmit("file-removed");
		}, 300);
	} catch (error) {
		
	}
}
function removeFileAll() {
	try {
		for(let index=upoadedFiles.value.length-1; index>=0; index--){
			upoadedFiles.value[index].isRemoving = true
			setTimeout(() => {
				upoadedFiles.value.splice(index, 1)
				removeFileFromFileList(index)
				myEmit("file-removed");
			}, 300);
		}
	} catch (error) {
		
	}
}
defineExpose({
	removeFileAll
})
</script>

<style scoped>
.zoom-in-zoom-out {
  animation: zoom-in-zoom-out .5s ease-out infinite;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}
/* -------------------------------------------------------------------------- */
/*                                 Main Wraper                                */
/* -------------------------------------------------------------------------- */
.border-dashed {
  text-align: center !important;
  background: #ffffff0f;
  border: 1px dashed #6a6a6a;
}
.border-dashed:not(.upoadedFiles) {
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: 50% 15%;
  background-origin: padding-box;
}
.border-dashed.uploader-icon:not(.upoadedFiles) {
  background-image: var(--upload-icon);
}
.file-fluid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.drop-zone-over {
  border: 1px solid green;
}
.file-title {
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 22px;
  font-size: 14px;
  color: rgb(255 255 255);
  text-shadow: 0px 0px 3px #000;
  pointer-events: none;
}
.delete {
  text-align: center;
  position: absolute;
  top: -1px;
  right: -1px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: rgb(255 255 255);
  background: #ffffff29;
  border-bottom-left-radius: 5px;
  border: 1px dashed #6f6f6f;
  cursor: pointer;
  border-top-right-radius: 5px;
  z-index: 9999999999;
}
iframe{
  width: 100%;
  height: 100%;
}
/* -------------------------------------------------------------------------- */
/*                Background Progress animation For Each File                 */
/* -------------------------------------------------------------------------- */
.progress::after{
  content: '';
  position: absolute;
  pointer-events: none;
  top: 0px;
  left: 0px;
  height: v-bind(pHeight);
  width: 100%;
  background: linear-gradient(45deg,rgba(255,255,255,0.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.2) 50%,rgba(255,255,255,0.2) 75%,transparent 75%,transparent);
  background-size: 42px 42px;
  animation: move 0.6s linear infinite;
  opacity: 0.4;
  z-index: 1;
}
.file-progressbar-wraper{
	position: relative;
	height: 25px;
    border: 1px solid rgba(255, 249, 249, 0.08);
    border-radius: 20px;
	overflow: hidden;
}
.file-progressbar::before{
  content: '';
  position: absolute;
  pointer-events: none;
  top: 0px;
  left: 0px;
  height: 25px;
  width: 100%;
  background: linear-gradient(45deg,rgba(255, 255, 255, 0.2) 25%,
  transparent 25%,transparent 50%,
  rgba(255,255,255,0.2) 50%,
  rgba(255,255,255,0.2) 75%,
  transparent 75%,
  transparent);
  background-size: 25px 25px;
  animation: move2 0.6s linear infinite;
  opacity: 0.4;
  z-index: 1;
}
.file-progressbar::after{
  content: attr(percent);
  position: absolute;
  pointer-events: none;
  top: 0px;
  left: 0px;
  height: 25px;
  width: var(--percent);
  background-color: #045f2d;
  opacity: 0.6;
  font-size: 14px;
  text-shadow: 1px 1px 0px black;
  text-align: center;
  color: white;
  transition: all 0.7s;
  z-index: 2;
}

@keyframes move{
	100%{
		background-position: 42px 0;
	}
}

@keyframes move2{
	100%{
		background-position: -25px 0;
	}
}
/* -------------------------------------------------------------------------- */
/*                                  each-file                                 */
/* -------------------------------------------------------------------------- */
.each-file {
	background-color: #0000001a;
	border: 1px dashed #535353;
}
.each-file .file-progressbar-wraper {
	background-color: #0000001a;
	border: 1px dashed #535353;
	height: 20px;
	border: 1px solid #fff9f914;
	border-radius: 5px;
}
.each-file .filename {
	word-break: break-all;
}
@media screen and (max-width: 700px) {	
	.each-file .filename {
		font-size: 15px !important;
		text-align: justify;
		word-break: break-all;
		margin-right: 5px;
	}
}
/* -------------------------------------------------------------------------- */
/*                                 Loader CSS                                 */
/* -------------------------------------------------------------------------- */
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  border: 10px solid;
  border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* -------------------------------------------------------------------------- */
/*                                File Icon Css                               */
/* -------------------------------------------------------------------------- */
.file-icon {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 70px;
    font-style: italic;
}

.file-icon::before {
    padding-top: 5px;
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    width: 50px;
    height: 64px;
    background-color: #cccccc;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    line-height: 62px;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 18px;
}

.file-icon::after {
    content: "";
    position: absolute;
    top: 7px;
    left: 30px;
    overflow: hidden;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 20px 20px 0;
    border-color: transparent #ffffff #777777 transparent;
    -moz-border-radius-bottomleft: 6px;
    -webkit-border-bottom-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background-color: #a2191e;
}

.file-icon[filetype]::before {
    content: attr(filetype);
 background-color: #a09217;
}

.file-icon[filetype]::after {
    border-bottom-color: #5f570a;
}

.file-icon[filetype^="a"]::before {
    content: attr(filetype);
    background-color: #e14045;
}

.file-icon[filetype^="a"]::after {
    border-bottom-color: #a2191e;
}

.file-icon[filetype^="c"]::before {
    content: attr(filetype);
 background-color: #1e7145;
}

.file-icon[filetype^="c"]::after {
    border-bottom-color: #092014;
}

.file-icon[filetype^="d"]::before {
    content: attr(filetype);
 background-color: #2b5797;
}

.file-icon[filetype^="d"]::after {
    border-bottom-color: #142948;
}

.file-icon[filetype^="e"]::before {
    content: attr(filetype);
    background-color: #d04525;
}

.file-icon[filetype^="e"]::after {
    border-bottom-color: #792816;
}

.file-icon[filetype^="g"]::before {
    content: attr(filetype);
    background-color: #e4d232;
}

.file-icon[filetype^="g"]::after {
    border-bottom-color: #9c8e14;
}

.file-icon[filetype^="h"]::before {
    content: attr(filetype);
    background-color: #ba55d3;
}

.file-icon[filetype^="h"]::after {
    border-bottom-color: #83289a;
}

.file-icon[filetype^="j"]::before {
    content: attr(filetype);
    background-color: #1e7145;
}

.file-icon[filetype^="j"]::after {
    border-bottom-color: #092014;
}

.file-icon[filetype^="m"]::before {
    content: attr(filetype);
 background-color: #1e7145;
}

.file-icon[filetype^="m"]::after {
    border-bottom-color: #092014;
}

.file-icon[filetype^="p"]::before {
    content: attr(filetype);
    background-color: #e14045;
}

.file-icon[filetype^="p"]::after {
    border-bottom-color: #a2191e;
}

.file-icon[filetype^="r"]::before {
    content: attr(filetype);
    background-color: #d04525;
}

.file-icon[filetype^="r"]::after {
    border-bottom-color: #792816;
}

.file-icon[filetype^="s"]::before {
    content: attr(filetype);
    background-color: #a09217;
}

.file-icon[filetype^="s"]::after {
    border-bottom-color: #5f570a;
}

.file-icon[filetype^="t"]::before {
    content: attr(filetype);
    background-color: #ba55d3;
}

.file-icon[filetype^="t"]::after {
    border-bottom-color: #83289a;
}

.file-icon[filetype^="x"]::before {
    content: attr(filetype);
    background-color: #ba55d3;
}

.file-icon[filetype^="x"]::after {
    border-bottom-color: #83289a;
}

.file-icon[filetype^="z"]::before {
    content: "RAR";
    background-color: #ba55d3;
}

.file-icon[filetype^="z"]::after {
    border-bottom-color: #83289a;
}
/* -------------------------------------------------------------------------- */
/*                                  Animation                                 */
/* -------------------------------------------------------------------------- */
.removingFile {
  display: block;
  opacity: 0;
  animation-name: removingFile;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
@keyframes removingFile {
  from {
    opacity: 1;
	transform: translateX(0);
    /*scale: 1;*/
  }
  to {
    opacity: 0;
	transform: translateX(-200px);
    /*scale: 0;*/
  }
}
/* -------------------------------------------------------------------------- */
/*                              Video Player CSS                              */
/* -------------------------------------------------------------------------- */
.video-js .vjs-big-play-button:before,
.video-js .vjs-control:before,
.video-js .vjs-modal-dialog,
.vjs-modal-dialog .vjs-modal-dialog-content {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-family: "Ionicons", "Questrial" !important;
	cursor: pointer;
}

.video-js .vjs-big-play-button:before,
.video-js .vjs-control:before {
	text-align: center;
}

.vjs-icon-play:before,
.video-js .vjs-big-play-button:before,
.video-js .vjs-play-control:before {
	content: "\f488";
}

.vjs-icon-play-circle:before {
	content: "\f488";
}

.vjs-icon-pause:before,
.video-js .vjs-play-control.vjs-playing:before {
	content: "\f478";
}

.vjs-icon-volume-mute:before,
.video-js .vjs-mute-control.vjs-vol-0:before,
.video-js .vjs-volume-menu-button.vjs-vol-0:before {
	content: "\f3b8";
}

.vjs-icon-volume-low:before,
.video-js .vjs-mute-control.vjs-vol-1:before,
.video-js .vjs-volume-menu-button.vjs-vol-1:before {
	content: "\f258";
}

.vjs-icon-volume-mid:before,
.video-js .vjs-mute-control.vjs-vol-2:before,
.video-js .vjs-volume-menu-button.vjs-vol-2:before {
	content: "\f259";
}

.vjs-icon-volume-high:before,
.video-js .vjs-mute-control:before,
.video-js .vjs-volume-menu-button:before {
	content: "\f257";
}

.vjs-icon-fullscreen-enter:before,
.video-js .vjs-fullscreen-control:before {
	content: "\f3d8";
}

.vjs-icon-fullscreen-exit:before,
.video-js.vjs-fullscreen .vjs-fullscreen-control:before {
	content: "\f3d0";
}

.vjs-icon-square:before {
	content: "\f371";
}

.vjs-icon-spinner:before {
	content: "\f29c";
}

.vjs-icon-subtitles:before,
.video-js .vjs-subtitles-button:before {
	content: "\f3fa";
}

.vjs-icon-captions:before,
.video-js .vjs-captions-button:before {
	content: "\f3fa";
}

.vjs-icon-chapters:before,
.video-js .vjs-chapters-button:before {
	content: "\f453";
}

.vjs-icon-share:before {
	content: "\f3ac";
}

.vjs-icon-cog:before {
	content: "\f43d";
}

.vjs-icon-circle:before,
.video-js .vjs-mouse-display:before,
.video-js .vjs-play-progress:before,
.video-js .vjs-volume-level:before {
	content: '';
}

.vjs-icon-circle-outline:before {
	content: "";
}

.vjs-icon-circle-inner-circle:before {
	content: "";
}

.vjs-icon-hd:before {
	content: "\f4cd";
}

.vjs-icon-cancel:before,
.video-js .vjs-control.vjs-close-button:before {
	content: "\f406";
}

.vjs-icon-replay:before {
	content: "\f49c";
}

.vjs-icon-facebook:before {
	content: "\f231";
}

.vjs-icon-gplus:before {
	content: "\f235";
}

.vjs-icon-linkedin:before {
	content: "";
}

.vjs-icon-twitter:before {
	content: "\f243";
}

.vjs-icon-tumblr:before {
	content: "\f241";
}

.vjs-icon-pinterest:before {
	content: "\f2b1";
}

.vjs-icon-audio-description:before {
	content: "";
}

.video-js {
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	vertical-align: top;
	box-sizing: border-box;
	color: #fff;
	background: #000;
	position: absolute;
	padding: 0;
	font-size: 10px;
	line-height: 1;
	font-weight: normal;
	font-style: normal;
	font-family: "Ionicons", "Questrial" !important;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	overflow: hidden;
}

.video-js:-moz-full-screen {
	position: absolute;
}

.video-js:-webkit-full-screen {
	width: 100% !important;
	height: 100% !important;
}

.video-js *,
.video-js *:before,
.video-js *:after {
	box-sizing: inherit;
}

.video-js ul {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	list-style-position: outside;
	margin-left: 0;
	margin-right: 0;
	margin-top: 0;
	margin-bottom: 0;
}

.video-js.vjs-fluid,
.video-js.vjs-16-9,
.video-js.vjs-4-3 {
	width: 100%;
	max-width: 100%;
	height: 0;
}

.video-js.vjs-16-9 {
	padding-top: 56.25%;
}

.video-js.vjs-4-3 {
	padding-top: 75%;
}

.video-js.vjs-fill {
	width: 100%;
	height: 100%;
}

.video-js .vjs-tech {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

body.vjs-full-window {
	padding: 0;
	margin: 0;
	height: 100%;
	overflow-y: auto;
}

.vjs-full-window .video-js.vjs-fullscreen {
	position: fixed;
	overflow: hidden;
	z-index: 1000;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
}

.video-js.vjs-fullscreen {
	width: 100% !important;
	height: 100% !important;
	padding-top: 0 !important;
}

.video-js.vjs-fullscreen.vjs-user-inactive, .vjs-user-inactive {
	cursor: none;
}

.vjs-hidden {
	display: none !important;
}

.video-js .vjs-offscreen {
	height: 1px;
	left: -9999px;
	position: absolute;
	top: 0;
	width: 1px;
}

.vjs-lock-showing {
	display: block !important;
	opacity: 1;
	visibility: visible;
}

.vjs-no-js {
	padding: 20px;
	color: #fff;
	background-color: #000;
	font-size: 18px;
	font-family: Arial, Helvetica, sans-serif;
	text-align: center;
	width: 300px;
	height: 150px;
	margin: 0px auto;
}

.vjs-no-js a,
.vjs-no-js a:visited {
	color: #66A8CC;
}

.video-js .vjs-big-play-button {
	font-size: 600%;
	line-height: 100px;
	height: 100px;
	width: 100px;
	display: block;
	position: absolute;
	text-indent: 5px;
	top: calc(50% - 50px);
	left: calc(50% - 50px);
	padding: 0;
	text-align: center;
	cursor: pointer;
	background: rgba(0,0,0,.15);
	color: #fff;
	-webkit-border-radius: 100%;
	-moz-border-radius: 100%;
	border-radius: 100%;
	outline: none;
	-webkit-backdrop-filter: blur(20px) saturate(1.5) brightness(1.2);
	backdrop-filter: blur(20px) saturate(1.5) brightness(1.2);
}
/*.video-js .vjs-big-play-button:after {
	content: 'Interstellar';
	font-family: 'Questrial';
	font-size: 35%;
	line-height: 38px;
	height: auto;
	width: auto;
	position: absolute;
	top: 5px;
	left: 100px;
	padding: 0 15px;
	text-align: center;
	background: #111;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1),0 2px 10px 0 rgba(0,0,0,0.1);
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
}*/

.vjs-controls-disabled .vjs-big-play-button,
.vjs-has-started .vjs-big-play-button,
.vjs-using-native-controls .vjs-big-play-button,
.vjs-error .vjs-big-play-button {
	display: none;
}

.video-js button {
	background: none;
	border: none;
	color: inherit;
	display: inline-block;
	overflow: visible;
	font-size: inherit;
	line-height: inherit;
	text-transform: none;
	text-decoration: none;
	transition: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

.video-js .vjs-control.vjs-close-button {
	cursor: pointer;
	height: 3em;
	position: absolute;
	right: 0;
	top: 0.5em;
	z-index: 2;
}

.vjs-menu-button {
	cursor: pointer;
}

.vjs-menu .vjs-menu-content {
	display: block;
	padding: 0;
	margin: 0;
	overflow: auto;
}

.vjs-scrubbing .vjs-menu-button:hover .vjs-menu {
	display: none;
}

.vjs-menu li {
	list-style: none;
	margin: 2px 0px;
	padding: 8px 15px;
	font-size: 14px;
	text-align: center;
	text-transform: lowercase;
	color: rgba(255,255,255,.6);
	border-radius: 3px;
	transition: all .15s ease;
	outline: none;
}

.vjs-menu li:hover {
	color: rgba(255,255,255,.85);
	text-shadow: 0 0 3px rgba(255,255,255,.5);
}
.vjs-menu li:active {
	transform: scale(.9);
}

.vjs-menu li.vjs-selected,
.vjs-menu li.vjs-selected:focus,
.vjs-menu li.vjs-selected:hover {
	color: rgba(255,255,255,1);
	text-shadow: 0 0 15px rgba(0,0,0,.5);
	/*background: -webkit-linear-gradient(to top, #FF7539 0%, #FFAB00 100%);
    background: linear-gradient(to top, #FF7539 0%, #FFAB00 100%);*/
}

.vjs-menu li.vjs-menu-title {
	text-align: center;
	text-transform: uppercase;
	font-size: 1em;
	line-height: 2em;
	padding: 0;
	margin: 0 0 0.3em 0;
	font-weight: bold;
	cursor: default;
}

.vjs-menu-button-popup .vjs-menu {
	display: none;
	position: absolute;
	bottom: 0;
	width: 50px;
	left: -3em;
	height: 0em;
	margin-bottom: 1.5em;
	border-top-color: rgba(43, 51, 63, 0.7);
}

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
	display: block;
    padding: 5px;
	/*background: -webkit-linear-gradient(top, rgba(30,30,30,.9), rgba(10,10,10,.9));
    background: linear-gradient(to bottom , rgba(30,30,30,.9), rgba(10,10,10,.9));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), 0 0 10px rgba(0,0,0,.3);*/
    border-radius: 3px;
    color: #fff;
    font-size: 100%;
    margin-bottom: 8px;
    -webkit-transition: all .15s;
    transition: all .15s;
	position: absolute;
	bottom: 15px;
	float: left;
}

.vjs-menu-button-popup:hover .vjs-menu,
.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {
	display: block;
}

.video-js .vjs-menu-button-inline {
	-webkit-transition: all 0.4s;
	-moz-transition: all 0.4s;
	-o-transition: all 0.4s;
	transition: all 0.4s;
	overflow: hidden;
}

.video-js .vjs-menu-button-inline:before {
	width: 2.222222222em;
}

.video-js .vjs-menu-button-inline:hover,
.video-js .vjs-menu-button-inline:focus,
.video-js .vjs-menu-button-inline.vjs-slider-active,
.video-js.vjs-no-flex .vjs-menu-button-inline {
	width: 10em;
}

.video-js .vjs-menu-button-inline.vjs-slider-active {
	-webkit-transition: none;
	-moz-transition: none;
	-o-transition: none;
	transition: none;
}

.vjs-menu-button-inline .vjs-menu {
	opacity: 0;
	height: 100%;
	width: auto;
	position: absolute;
	left: 4em;
	top: 0;
	padding: 0;
	margin: 0;
	-webkit-transition: all 0.4s;
	-moz-transition: all 0.4s;
	-o-transition: all 0.4s;
	transition: all 0.4s;
}

.vjs-menu-button-inline:hover .vjs-menu,
.vjs-menu-button-inline:focus .vjs-menu,
.vjs-menu-button-inline.vjs-slider-active .vjs-menu {
	display: block;
	opacity: 1;
}

.vjs-no-flex .vjs-menu-button-inline .vjs-menu {
	display: block;
	opacity: 1;
	position: relative;
	width: auto;
}

.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,
.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,
.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu {
	width: auto;
}

.vjs-menu-button-inline .vjs-menu-content {
	width: auto;
	height: 100%;
	margin: 0;
	overflow: hidden;
}

.video-js .vjs-control-bar {
	display: none;
	width: 700px;
	position: absolute;
	bottom: 20px;
	left: calc( 50% - 350px );
	height: 50px;
	border-radius: 5px;
	background: rgba(0,0,0,.6);
	-webkit-backdrop-filter: blur(20px) saturate(1.5) brightness(1.2);
	backdrop-filter: blur(20px) saturate(1.5) brightness(1.2);
}

@media screen and (max-width: 740px) {
.video-js .vjs-control-bar {
	width: calc( 100% - 40px );
	bottom: 20px;
	left: 20px;
}
}

.vjs-has-started .vjs-control-bar {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	visibility: visible;
	opacity: 1;
	transform-origin: center bottom;
	transition: all .15s cubic-bezier(.44,.14,.34,.97), width 0s, left 0s;
}

.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
	visibility: hidden;
	opacity: 0;
	bottom: 5px;
	transition: .15s cubic-bezier(.44,.14,.34,.97);
}

.vjs-controls-disabled .vjs-control-bar,
.vjs-using-native-controls .vjs-control-bar,
.vjs-error .vjs-control-bar {
	display: none !important;
}

.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
	opacity: 1;
	visibility: visible;
}

@media screen {
	.vjs-user-inactive.vjs-playing .vjs-control-bar:before {
		content: "";
	}
}

.vjs-has-started.vjs-no-flex .vjs-control-bar {
	display: table;
}

.video-js .vjs-control {
	outline: none;
	position: relative;
	text-align: center;
	margin: 0;
	padding: 0;
	height: 100%;
	width: 50px;
	font-size: 120%;
	-webkit-box-flex: none;
	-moz-box-flex: none;
	-webkit-flex: none;
	-ms-flex: none;
	flex: none;
}

.video-js .vjs-control:before {
	font-size: 200%;
	line-height: 50px;
	color: #fff;
}

.video-js .vjs-control-text {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	visibility: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}

.vjs-no-flex .vjs-control {
	display: table-cell;
	vertical-align: middle;
}

.video-js .vjs-custom-control-spacer {
	display: none;
}

.video-js .vjs-progress-control {
	-webkit-box-flex: auto;
	-moz-box-flex: auto;
	-webkit-flex: auto;
	-ms-flex: auto;
	flex: auto;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
}

.vjs-live .vjs-progress-control {
	display: none;
}

.video-js .vjs-progress-holder {
	-webkit-box-flex: auto;
	-moz-box-flex: auto;
	-webkit-flex: auto;
	-ms-flex: auto;
	flex: auto;
	-webkit-transition: all 0.2s;
	-moz-transition: all 0.2s;
	-o-transition: all 0.2s;
	transition: all 0.2s;
	height: 5px;
	border-radius: 5px;
}

.video-js .vjs-progress-control:hover .vjs-mouse-display:after,
.video-js .vjs-progress-control:hover .vjs-play-progress:after {
	display: block;
	font-size: 120%;
}

.video-js .vjs-progress-holder .vjs-play-progress,
.video-js .vjs-progress-holder .vjs-load-progress,
.video-js .vjs-progress-holder .vjs-load-progress div {
	position: absolute;
	display: block;
	height: 5px;
	margin: 0;
	padding: 0;
	width: 0;
	left: 0;
	top: 0;
	border-radius: 5px;
}

.video-js .vjs-mouse-display:before {
	display: none;
}

.video-js .vjs-play-progress {
	background: #FFF;
	border-radius: 10px;
	transition: all .25s linear;
}

.video-js .vjs-mouse-display:after,
.video-js .vjs-play-progress:after {
	display: none;
	position: absolute;
	top: -28px;
	right: 0;
	font-size: 12px !important;
	color: transparent;
	content: attr(data-current-time);
	padding: 8px;
	pointer-events: none;
	transition: .2s ease;
}

.video-js .vjs-play-progress:before,
.video-js .vjs-play-progress:after {
	z-index: 10;
}

.video-js .vjs-load-progress {
	background: rgba(255,255,255,.3);
	transition: width .25s linear;
}

.video-js .vjs-load-progress div {
	background: rgba(0,0,0,.2);
}

.video-js.vjs-no-flex .vjs-progress-control {
	width: auto;
}

.video-js .vjs-progress-control .vjs-mouse-display {
	position: absolute;
}

.vjs-no-flex .vjs-progress-control .vjs-mouse-display {
	z-index: 0;
}

.video-js .vjs-progress-control:hover .vjs-mouse-display {
	display: block;
}

.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display,
.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display:after {
	visibility: hidden;
	opacity: 0;
	-webkit-transition: visibility 1s, opacity 1s;
	-moz-transition: visibility 1s, opacity 1s;
	-o-transition: visibility 1s, opacity 1s;
	transition: visibility 1s, opacity 1s;
}

.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display,
.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display:after {
	display: none;
}

.video-js .vjs-progress-control .vjs-mouse-display:after {
	color: #999;
	background: #222;
    border-radius: 5px 5px 0px 5px;
	visibility: visible;
}

.video-js .vjs-slider {
	outline: 0;
	position: relative;
	cursor: pointer;
	padding: 0;
	margin: 0 0.45em 0 0.45em;
	background: rgba(255,255,255,.15);
}

.video-js .vjs-mute-control, .video-js .vjs-volume-menu-button {
	cursor: pointer;
	-webkit-box-flex: none;
	-moz-box-flex: none;
	-webkit-flex: none;
	-ms-flex: none;
	flex: none;
}

.video-js .vjs-volume-control {
	width: 5em;
	-webkit-box-flex: none;
	-moz-box-flex: none;
	-webkit-flex: none;
	-ms-flex: none;
	flex: none;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
}

.video-js .vjs-volume-bar {
	margin: 1.35em 0.45em;
	top: 9px;
	border-radius: 5px;
}

.vjs-volume-bar.vjs-slider-horizontal {
	width: 50px;
	height: 5px;
	border-radius: 5px;
}

.vjs-volume-bar.vjs-slider-vertical {
	width: 5px;
	height: 50px;
	margin: 1.35em auto;
	border-radius: 5px;
}

.video-js .vjs-volume-level {
	position: absolute;
	bottom: 0;
	left: 0;
	background: #FFF;
	border-radius: 5px;
	transition: all 0s;
}

/*.video-js .vjs-volume-level:before {
	content: '';
	position: absolute;
	width: 9px;
	height: 9px;
	bottom: -2px;
	right: -6px;
	background: #fff;
	border-radius: 50px;
}*/

.vjs-slider-vertical .vjs-volume-level {
	width: 5px;
}

.vjs-slider-vertical .vjs-volume-level:before {
	top: -0.5em;
	left: -0.3em;
}

.vjs-slider-horizontal .vjs-volume-level {
	height: 5px;
}

.vjs-slider-horizontal .vjs-volume-level:before {
	top: -2px;
	right: -0.5em;
}

.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {
	height: 100%;
}

.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {
	width: 100%;
}

.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu {
	display: block;
	width: 0;
	height: 0;
	border-top-color: transparent;
}

.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
	left: 0.5em;
	height: 8em;
}

.vjs-menu-button-popup.vjs-volume-menu-button-horizontal .vjs-menu {
	left: -2em;
}

.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu-content {
	height: 0;
	width: 0;
	overflow-x: hidden;
	overflow-y: hidden;
}

.vjs-volume-menu-button-vertical:hover .vjs-menu-content,
.vjs-volume-menu-button-vertical .vjs-lock-showing .vjs-menu-content {
	height: 50px;
	width: 85px;
}

.vjs-volume-menu-button-horizontal:hover .vjs-menu-content,
.vjs-volume-menu-button-horizontal .vjs-lock-showing .vjs-menu-content {
	height: 50px;
	width: 60px;
}

.vjs-volume-menu-button.vjs-menu-button-inline .vjs-menu-content {
	background-color: transparent !important;
}

.vjs-poster {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  cursor: pointer;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
}
.vjs-poster img {
  display: block;
  margin: 0 auto;
  max-height: 100%;
  padding: 0;
  width: 100%;
}

.vjs-has-started .vjs-poster {
	visibility: hidden;
	opacity: 0;
}

.vjs-audio.vjs-has-started .vjs-poster {
	visibility: visible;
}

.vjs-controls-disabled .vjs-poster {
	visibility: hidden;
	display: none;
}

.vjs-using-native-controls .vjs-poster {
	visibility: hidden;
	display: none;
}

.video-js .vjs-live-control {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: flex-start;
	-webkit-align-items: flex-start;
	-ms-flex-align: flex-start;
	align-items: flex-start;
	-webkit-box-flex: auto;
	-moz-box-flex: auto;
	-webkit-flex: auto;
	-ms-flex: auto;
	flex: auto;
	font-size: 1em;
	line-height: 3em;
}

.vjs-no-flex .vjs-live-control {
	display: table-cell;
	width: auto;
	text-align: left;
}

.video-js .vjs-time-control {
	-webkit-box-flex: none;
	-moz-box-flex: none;
	-webkit-flex: none;
	-ms-flex: none;
	flex: none;
	font-size: 100%;
	line-height: 50px;
	color: rgba(255,255,255,.8);
}

.vjs-live .vjs-time-control {
	display: none;
}

.video-js .vjs-current-time,
.vjs-no-flex .vjs-current-time {
	display: block;
}

.video-js .vjs-duration,
.vjs-no-flex .vjs-duration {
	display: block;
}
.vjs-duration.vjs-control, .vjs-current-time.vjs-control {
	width: auto !important;
	padding: 0 10px;
}

.vjs-time-divider {
	line-height: 50px;
	width: 2px;
	transform: translateX(-2px);
}
.vjs-time-divider div span {
	font-size: 150%;
	color: rgba(255,255,255,.8);
}

.vjs-live .vjs-time-divider {
	display: none;
}

.video-js .vjs-play-control {
	cursor: pointer;
	-webkit-box-flex: none;
	-moz-box-flex: none;
	-webkit-flex: none;
	-ms-flex: none;
	flex: none;
}
.video-js .vjs-play-control:after {
	content: 'Play/Pause';
	position: absolute;
	top: -40px;
	left: 0px;
	width: auto;
	height: auto;
	background: #111;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1),0 2px 10px 0 rgba(0,0,0,0.1);
	border-radius: 5px;
	color: #ddd;
	text-align: center;
	letter-spacing: 1px;
	padding: 10px 15px;
	pointer-events: none;
	opacity: 0;
	transition: .2s ease;
	transition-delay: 0s;
}
.video-js .vjs-play-control:hover:after {
	opacity: 1;
	transition-delay: 1.3s;
}

.vjs-text-track-display {
	position: absolute;
	bottom: 3em;
	left: 0;
	right: 0;
	top: 0;
	pointer-events: none;
}

.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {
	bottom: 1em;
}

.video-js .vjs-text-track {
	font-size: 1.4em;
	text-align: center;
	margin-bottom: 0.1em;
	background-color: #000;
	background-color: rgba(0, 0, 0, 0.5);
}

.vjs-subtitles {
	color: #fff;
}

.vjs-captions {
	color: #fc6;
}

.vjs-tt-cue {
	display: block;
}

video::-webkit-media-text-track-display {
	-moz-transform: translateY(-3em);
	-ms-transform: translateY(-3em);
	-o-transform: translateY(-3em);
	-webkit-transform: translateY(-3em);
	transform: translateY(-3em);
}

.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {
	-moz-transform: translateY(-1.5em);
	-ms-transform: translateY(-1.5em);
	-o-transform: translateY(-1.5em);
	-webkit-transform: translateY(-1.5em);
	transform: translateY(-1.5em);
}

.video-js .vjs-fullscreen-control {
	cursor: pointer;
	-webkit-box-flex: none;
	-moz-box-flex: none;
	-webkit-flex: none;
	-ms-flex: none;
	flex: none;
}
.video-js .vjs-fullscreen-control:after {
	content: 'Fullscreen';
	position: absolute;
	top: -40px;
	right: 0px;
	width: auto;
	height: auto;
	background: #111;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1),0 2px 10px 0 rgba(0,0,0,0.1);
	border-radius: 5px;
	color: #ddd;
	text-align: center;
	letter-spacing: 1px;
	padding: 10px 15px;
	pointer-events: none;
	opacity: 0;
	transition: .2s ease;
	transition-delay: 0s;
}
.video-js .vjs-fullscreen-control:hover:after {
	opacity: 1;
	transition-delay: 1.3s;
}

.vjs-playback-rate .vjs-playback-rate-value {
	font-size: 120%;
	line-height: 50px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
}

.vjs-playback-rate .vjs-menu {
	transform: translateX(0%);
}

.vjs-error .vjs-error-display .vjs-modal-dialog-content {
	font-size: 1.4em;
	text-align: center;
}

.vjs-error .vjs-error-display:before {
	color: #fff;
	content: 'X';
	font-family: Arial, Helvetica, sans-serif;
	font-size: 4em;
	left: 0;
	line-height: 1;
	margin-top: -0.5em;
	position: absolute;
	text-shadow: 0.05em 0.05em 0.1em #000;
	text-align: center;
	top: 50%;
	vertical-align: middle;
	width: 100%;
}

.vjs-loading-spinner {
	position: absolute;
	top: 5px;
	left: calc( 50% - 65px );
	width: 130px;
	height: 40px;
	border-radius: 5px;
	background: #111;
	overflow: hidden;
	visibility: hidden;
	opacity: 0;
	transition: all .25s ease;
}
.vjs-loading-spinner:before {
	content: '';
	position: absolute;
	top: 10px;
	left: 10px;
	width: 20px;
	height: 20px;
	border-radius: 100%;
	border: solid transparent 2px;
	border-top-color: #fff;
	-webkit-animation: rotate 1s infinite linear;
	animation: rotate 1s infinite linear;
}
.vjs-loading-spinner:after {
	content: 'Loading';
	position: absolute;
	top: 0px;
	right: 5px;
	width: 90px;
	height: 40px;
	line-height: 40px;
	font-size: 150%;
	text-align: center;
}

.vjs-seeking .vjs-loading-spinner,
.vjs-waiting .vjs-loading-spinner {
	visibility: visible;
	opacity: 1;
	top: 20px;
}

@keyframes rotate {
	0% { 
		transform: rotate(0deg);
	}
	100% { 
		transform: rotate(360deg);
	}
}

.vjs-chapters-button .vjs-menu {
	left: -10em;
	width: 0;
}

.vjs-chapters-button .vjs-menu ul {
	width: 24em;
}

.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer {
	-webkit-box-flex: auto;
	-moz-box-flex: auto;
	-webkit-flex: auto;
	-ms-flex: auto;
	flex: auto;
}

.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer {
	width: auto;
}

.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-menu-button {
	display: none;
}

.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-fullscreen-control {
	display: none;
}

.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button {
	display: none;
}

.vjs-remaining-time {
	display: none;
}
.vjs-caption-settings {
	position: relative;
	top: 1em;
	/*background-color: #2B333F;
	background-color: rgba(43, 51, 63, 0.75);*/
	color: #fff;
	margin: 0 auto;
	padding: 0.5em;
	height: 15em;
	font-size: 12px;
	width: 40em;
}

.vjs-caption-settings .vjs-tracksettings {
	top: 0;
	bottom: 2em;
	left: 0;
	right: 0;
	position: absolute;
	overflow: auto;
}

.vjs-caption-settings .vjs-tracksettings-colors,
.vjs-caption-settings .vjs-tracksettings-font {
	float: left;
}

.vjs-caption-settings .vjs-tracksettings-colors:after,
.vjs-caption-settings .vjs-tracksettings-font:after,
.vjs-caption-settings .vjs-tracksettings-controls:after {
	clear: both;
}

.vjs-caption-settings .vjs-tracksettings-controls {
	position: absolute;
	bottom: 1em;
	right: 1em;
}

.vjs-caption-settings .vjs-tracksetting {
	margin: 5px;
	padding: 3px;
	min-height: 40px;
}

.vjs-caption-settings .vjs-tracksetting label {
	display: block;
	width: 100px;
	margin-bottom: 5px;
}

.vjs-caption-settings .vjs-tracksetting span {
	display: inline;
	margin-left: 5px;
}

.vjs-caption-settings .vjs-tracksetting > div {
	margin-bottom: 5px;
	min-height: 20px;
}

.vjs-caption-settings .vjs-tracksetting > div:last-child {
	margin-bottom: 0;
	padding-bottom: 0;
	min-height: 0;
}

.vjs-caption-settings label > input {
	margin-right: 10px;
}

.vjs-caption-settings input[type="button"] {
	width: 40px;
	height: 40px;
}

.vjs-modal-dialog .vjs-modal-dialog-content {
	font-size: 1.2em;
	line-height: 1.5;
	padding: 20px 24px;
	z-index: 1;
}
</style>