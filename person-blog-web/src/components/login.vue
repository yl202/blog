<template>
    <div class="login-wrap">
        <p class="font-S32 font-fa-cher text-c">
            welcome to the world,it's suck,but u're gonna love it.
        </p>
        <div class="login-content">
          
          <!-- <p class="font-fa-ZCOO font-S24 text-c">
              Please select your entry method:
          </p>

          <div class="login-box" v-if="userMsg.loginId == 'Administrator' || userMsg.loginId == 'user'">
            <div class="login-msg-box">
                <p class="font-fa-ZCOO">账号：</p>
                <inputEle :name="userMsg.input1"></inputEle>
            </div>
            <div class="login-msg-box">
                <p class="font-fa-ZCOO">密码：</p>
                <inputEle :name="userMsg.input2"></inputEle>
            </div>
            <loginButton></loginButton>
            <loginCards></loginCards>
          </div>

          <div class="sign-box"></div>

          <div class="visitor-box" v-if="userMsg.loginId == 'visitor'"></div> -->

          <div class="loginBy-box">
            <loginSelect ref="loginselect" v-for="item in userMsg.loginBy" :key="item" :standing="item"></loginSelect>
          </div>
        </div>
         

    </div>
</template>

<script setup lang="ts">
import "@/assets/css/base.css";
// import { onMounted, ref } from "vue";
// // import { testPostApi, testGetApi, testGetDynamicApi } from "@/request/api.js";
// import { testGetApi } from "@/api/api.js";
// // import loginCards from "./effect/loginCards";
// import {inputEle} from "./effect/input-ele";
// import {loginButton} from "./effect/button-login";
import loginSelect from "./effect/login-select";
const loginSelect = ref<InstanceType<typeof loginSelect> | null>(null)


const userMsg = ref({
    // input1: "account",
    // input2: "password",
    // loginBy: {
    //   admin:false,
    //   user:false,
    //   visitor:true
    // }
    loginBy: ["Administrator", "user", "visitor"],
    // loginId:''
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
    height: 100vh;
    background: #dee6e7;
    box-shadow: 0 0 20px #eee;
    padding: 20px;
    min-height: 500px;
    position: relative;
    box-sizing: border-box;
}
.login-content {
    width: 600px;
    height: 400px;
    position: absolute;
    right: 100px;
    top: 100px;
    border-radius: 50px;
    background: linear-gradient(145deg, #c8cfd0, #eef6f7);
    box-shadow: 11px 11px 23px #bac1c2, -11px -11px 23px #ffffff;
    box-sizing: border-box;
    padding: 20px;
}
.login-msg-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    box-sizing: border-box;
    margin: 20px auto 0;
    span {
        display: inline-block;
    }
}
.login-msg-box:last-child {
    margin-bottom: 20px;
}
.loginBy-box{
  width: 200px;
  height: 200px;
  // margin-top: 20px;
  // padding-left: 50px;
  box-sizing: border-box;
  margin: 50px auto 0;
}
</style>