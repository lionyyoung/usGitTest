<template>
  <div>
    <div class="rightBox">
      <div class="innerBox">
        <el-slider v-model="rangeValue" vertical height="200%" :show-tooltip="false" :min="1" :max="112"
          @input="sliderChange" />
        <div class="dash"></div>
      </div>
      <div class="innerBox">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="innerBox">
        <div class="label">112X</div>
        <div class="label">56X</div>
        <div class="label">14X</div>
        <div class="label">7X</div>
        <div class="label">3X</div>
        <div class="label">1X</div>
      </div>
    </div>
    <div class="leftBox">
      <div class="frameContainer">
        <div class="frame1" :style="{ 'left': `${aLeft}%`, 'top': `${aTop}%` }"></div>
      </div>
      <div class="frameContainer">
        <div class="frame2" :style="{ 'right': `${aLeft}%`, 'top': `${aTop}%` }"></div>
      </div>
      <div class="frameContainer">
        <div class="frame3" :style="{ 'left': `${aLeft}%`, 'bottom': `${aTop}%` }"></div>
      </div>
      <div class="frameContainer">
        <div class="frame4" :style="{ 'right': `${aLeft}%`, 'bottom': `${aTop}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElSlider } from 'element-plus'

let rangeValue = ref(1)
let sliderChange

let aLeft = ref(50)
let aTop = ref(50)
sliderChange = () => {
  console.log(rangeValue.value);
  aLeft.value = rangeValue.value > 25 ? 0 : -2 * rangeValue.value + 50
  aTop.value = rangeValue.value > 25 ? 0 : -2 * rangeValue.value + 50

}


</script>

<style scoped>
/* 右侧变焦框 */
.rightBox {
  box-sizing: border-box;
  width: 20%;
  height: 100%;
  /* background-color: rgb(137, 137, 137, 0.3); */
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
}

.innerBox {
  box-sizing: border-box;
  width: 100%;
  height: 92%;
  position: absolute;
}

.rightBox .el-slider {
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%) scale(0.5);
  z-index: 1;
}

.dash {
  height: 100%;
  width: 7%;
  background: repeating-linear-gradient(to bottom, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0.5px, transparent 0.5px, transparent 6px);
  position: absolute;
  z-index: 0;
  left: 50%;
  transform: translateX(-50%);
}

.rightBox>.innerBox:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.dot {
  width: 10%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #ffffff;
  border-radius: 1000px;
  border: solid 0.1px rgb(176, 176, 176);
  z-index: 0;
}

.rightBox>.innerBox:nth-child(3) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.label {
  width: 20%;
  height: 2.9%;
  /* border: solid 0.1px black; */
  position: relative;
  left: 23%;
  font-size: 8px;
  font-weight: 500;
  line-height: 50%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  user-select: none;
}

/* 左侧变焦框 */
.leftBox {
  box-sizing: border-box;
  width: 85%;
  height: 100%;
  /* border: solid 1px black; */
  position: absolute;
  left: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.frameContainer {
  position: relative;
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  /* background-color: #ffcdcd;
  border: solid 0.1px black; */
}

/* 第一方块 */
.frameContainer:nth-child(1)::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 10px;
  height: 0.5px;
  background-color: rgb(131, 131, 131);
}

.frameContainer:nth-child(1)::before {
  content: '';
  position: absolute;
  bottom: 5%;
  right: 0;
  width: 0.5px;
  height: 10px;
  background-color: rgb(131, 131, 131);
}

/* 第二方块 */
.frameContainer:nth-child(2)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 10px;
  height: 0.5px;
  background-color: rgb(131, 131, 131);
}

.frameContainer:nth-child(2)::before {
  content: '';
  position: absolute;
  bottom: 5%;
  left: 0;
  width: 0.5px;
  height: 10px;
  background-color: rgb(131, 131, 131);
}

/* 第三方快 */
.frameContainer:nth-child(3)::after {
  content: '';
  position: absolute;
  top: 0;
  right: 5%;
  width: 10px;
  height: 0.5px;
  background-color: rgb(131, 131, 131);
}

.frameContainer:nth-child(3)::before {
  content: '';
  position: absolute;
  top: 5%;
  right: 0;
  width: 0.5px;
  height: 10px;
  background-color: rgb(131, 131, 131);
}

/* 第四方块 */
.frameContainer:nth-child(4)::after {
  content: '';
  position: absolute;
  top: 0;
  left: 5%;
  width: 10px;
  height: 0.5px;
  background-color: rgb(131, 131, 131);
}

.frameContainer:nth-child(4)::before {
  content: '';
  position: absolute;
  top: 5%;
  left: 0;
  width: 0.5px;
  height: 10px;
  background-color: rgb(131, 131, 131);
}


.frame1 {
  width: 25%;
  height: 25%;
  border-left: solid 2px rgb(63, 222, 97);
  border-top: solid 2px rgb(63, 222, 97);
  position: absolute;
  transition: all 0.05s ease;
}

.frame2 {
  width: 25%;
  height: 25%;
  border-right: solid 2px rgb(63, 222, 97);
  border-top: solid 2px rgb(63, 222, 97);
  position: absolute;
  right: 50%;
  top: 50%;
  transition: all 0.05s ease;
}

.frame3 {
  width: 25%;
  height: 25%;
  border-left: solid 2px rgb(63, 222, 97);
  border-bottom: solid 2px rgb(63, 222, 97);
  position: absolute;
  left: 50%;
  bottom: 50%;
  transition: all 0.05s ease;
}

.frame4 {
  width: 25%;
  height: 25%;
  border-right: solid 2px rgb(63, 222, 97);
  border-bottom: solid 2px rgb(63, 222, 97);
  position: absolute;
  right: 50%;
  bottom: 50%;
  transition: all 0.05s ease;
}
</style>
<style>
.rightBox .el-slider .el-slider__runway {
  background-color: rgba(0, 0, 255, 0.0);
}

.rightBox .el-slider .el-slider__bar {
  background-color: rgba(0, 0, 0, 0);
}

.rightBox .el-slider .el-slider__button {
  border: solid 2px #7f7f7f;
  width: 70%;
  height: 70%;
}
</style>
