<template>
  <div class="fa">
    <!-- <RangeButton /> -->
    <ZoomBar />
  </div>
</template>

<script setup>
import RangeButton from './components/rangeButton.vue';
import ZoomBar from './components/zoomBar.vue';


</script>

<style scoped>
.fa {
  width: 290px;
  height: 198px;
  border: solid 1px black;
  position: relative;
  box-sizing: border-box;
  background-color: #575757;
}
</style>