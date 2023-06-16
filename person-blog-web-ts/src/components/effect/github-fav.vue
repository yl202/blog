<template>
  <div class="github-box">
    <button class="btn" @click="goGithub">start on github</button>
  </div>
</template>

<script lang="ts" setup>
function goGithub(): void {
  window.location.href = 'https://github.com/yl202/blog'
}
</script>

<style lang="scss" scoped>
.github-box {
  position: fixed;
  top: 30px;
  right: 40px;
  z-index: 999999;
}
.btn {
  font-size: .8rem;
  padding: 1rem 1.6rem 1rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  // text-transform: uppercase;
  background-color: #666;
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  position: relative;
  box-sizing: border-box;
}
.btn::before {
  content: '';
  position: absolute;
  width: 22px;
  height: 20px;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: url(../../assets/img/icon-backup/system-icon-3/icon-19.png) no-repeat;
  background-size: 100% auto;
}

.btn:active {
  scale: 0.92;
}

.btn:hover {
  background: rgb(2, 29, 78);
  background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
  color: rgb(4, 4, 38);
}
</style>
