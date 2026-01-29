<template>
  <div class="buttonBox">
    <div class="buttonElement">
      <button @click="buttonEvent1">+100</button>
    </div>
    <div class="buttonElement">
      <button @click="buttonEvent2">+10</button>
    </div>
    <div class="buttonElement">
      <div>
        {{ numberValue }}
      </div>
      <div>m</div>
    </div>
    <div class="buttonElement">
      <button @click="buttonEvent3">-10</button>
    </div>
    <div class="buttonElement">
      <button @click="buttonEvent4">-100</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let numberValue = ref(500)
let buttonEvent1, buttonEvent2, buttonEvent3, buttonEvent4
// Button绑定函数B
buttonEvent1 = () => {
  numberValue.value += 100
}
buttonEvent2 = () => {
  numberValue.value += 10
}
buttonEvent3 = () => {
  numberValue.value -= 10
}
buttonEvent4 = () => {
  numberValue.value -= 100
}
</script>

<style scoped>
.buttonBox {
  width: 70px;
  height: 132px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
}

.buttonElement {
  width: 100%;
  height: 20%;
  /* border: 1px solid #000; */
}

.buttonBox>.buttonElement>button {
  width: 50px;
  height: 22px;
  background-color: #3C3C3C;
  border: solid 0px;
  font-size: 14px;
  color: #FFFFFF;
  font-family: "Open Sans", "PingFang SC";
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.buttonBox>.buttonElement>button:hover {
  background-color: #7a7a7a;
}

.buttonBox>.buttonElement:nth-child(3) {
  color: #2D8CF0;
  font-size: 20px;
  font-family: "Open Sans", "PingFang SC";
  font-weight: 700;
  text-align: center;
  position: relative;
}

.buttonBox>.buttonElement:nth-child(3)>div:nth-child(1) {
  width: 50px;
  height: 22px;
  line-height: 120%;
}

.buttonBox>.buttonElement:nth-child(3)>div:nth-child(2) {
  /* background-color: #932e2e; */
  width: 30%;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  line-height: 200%;
  font-size: 14px;
  color: #FFFFFF;
  font-family: "Open Sans", "PingFang SC";
  font-weight: 400;
}
</style>