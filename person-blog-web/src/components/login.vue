<template>
    <div>login template</div>
</template>

<script setup >
import { onMounted } from "vue";
// import { testPostApi, testGetApi, testGetDynamicApi } from "@/request/api.js";
import {testGetApi } from "@/api/api.js";

// const testPostFun = async () => {
//     const res = await testPostApi({ username: "admin", password: "admin" });
//     console.log(res);
// };
const testGetFun = async () => {
    const res = await testGetApi({ username: "admin", password: "123456" });
    console.log(res);
};
// const testGetDynamicFun = async () => {
//     const res = await testGetDynamicApi("15");
//     console.log(res);
// };
// const testexportFun = async () => {
//     const res = await testExportApi();
//     console.log(res);
//     const fileName = decodeURIComponent(
//         res.headers["content-disposition"].split(";")[1]
//     )
//         .split("=")[1]
//         .split('"')[1];
//     let url = window.URL.createObjectURL(new Blob([res.data]));
//     let a = document.createElement("a");
//     a.style.display = "none";
//     a.href = url;
//     a.setAttribute("download", fileName);
//     document.body.appendChild(a);
//     a.click(); //执行下载
//     window.URL.revokeObjectURL(a.href); //释放url
//     document.body.removeChild(a); //释放标签
// };
onMounted(() => {
    // testPostFun();
    testGetFun();
    // testGetDynamicFun();
    // testexportFun();
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>