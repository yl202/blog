<template>
    <div class="input-container">
        <input class="input" name="text" type="text" />
        <label class="label" for="input">Enter your {{name}}</label>
        <div class="topline"></div>
        <div class="underline"></div>
    </div>
</template>

<script setup>
  import { toRefs,defineProps }from 'vue'
  const props = defineProps ({
    // 子组件接收富足家传过来的值
    name:String,
  })
  // 使用父组件传递来的值
  const {name} = toRefs(props)
  console.log(props);
</script>

<style scope>
.input-container {
    width: 100px;
    position: relative;
    margin: 20px;
}

.input {
    padding: 10px;
    height: 20px;
    border: 2px solid #0b2447;
    border-top: none;
    border-bottom: none;
    font-size: 16px;
    background: transparent;
    outline: none;
    box-shadow: 7px 7px 0px 0px #0b2447;
    transition: all 0.5s;
}

.input:focus {
    box-shadow: none;
    transition: all 0.5s;
}

.label {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #0b2447;
    transition: all 0.5s;
    transform: scale(0);
    z-index: -1;
}

.input-container .topline {
    position: absolute;
    content: "";
    background-color: #0b2447;
    width: 0%;
    height: 2px;
    right: 0;
    top: 0;
    transition: all 0.5s;
}

.input-container input[type="text"]:focus ~ .topline {
    width: 35%;
    transition: all 0.5s;
}

.input-container .underline {
    position: absolute;
    content: "";
    background-color: #0b2447;
    width: 0%;
    height: 2px;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
}

.input-container input[type="text"]:focus ~ .underline {
    width: 100%;
    transition: all 0.5s;
}

.input-container input[type="text"]:focus ~ .label {
    top: -10px;
    transform: scale(1);
    transition: all 0.5s;
}
</style>