<template>
    <div class="login-wrap">
        <p class="font-S32 font-fa-cher text-c">
            welcome to the world,it's suck,but u're gonna love it.
        </p>
        <div class="login-box">
            <p class="font-fa-ZCOO font-S24 text-c">
                Please select your entry method:
            </p>
            <div class="login-msg-box">
                <span>账号：</span>
                <inputEle :name="userMsg.input1"></inputEle>
            </div>
            <div class="login-msg-box">
                <span>密码：</span>
                <inputEle :name="userMsg.input2"></inputEle>
            </div>
            <!-- <loginCards></loginCards> -->
        </div>
    </div>
</template>

<script setup >
import "@/assets/css/base.css";
import { onMounted, ref } from "vue";
// import { testPostApi, testGetApi, testGetDynamicApi } from "@/request/api.js";
import { testGetApi } from "@/api/api.js";
// import loginCards from "./effect/loginCards";
import inputEle from "./effect/input-ele";

const userMsg = ref({
    input1: "account",
    input2: "password",
});
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

<style lang="scss" scoped>                                                                                                                                                                  
.login-wrap {
    width: 100%;
    background: #dee6e7;
    box-shadow: 0 0 20px #eee;
    padding: 20px;
    min-height: 500px;
    position: relative;
}
.login-box {
    width: 600px;
    height: 400px;
    position: absolute;
    right: 100px;
    top: 100px;
    border-radius: 50px;
    background: linear-gradient(145deg, #c8cfd0, #eef6f7);
    box-shadow: 11px 11px 23px #bac1c2, -11px -11px 23px #ffffff;
}
.login-msg-box {
    position: flex;
    justify-content: space-between;
    span {
        display: inline-block;
    }
}
</style>