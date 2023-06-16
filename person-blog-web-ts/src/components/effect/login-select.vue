<template>
  <div>
    <button class="cta">
      <span>{{ standing }}</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts">
// import { toRefs, defineProps } from "vue";

const { standing = '游客' } = defineProps<{
  standing?: string
}>()
</script>
<style scoped>
.cta {
  width: 180px;
  position: relative;
  margin: 15px auto 0;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  text-align: left;
}

.cta:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #00cdac;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #757f9a;
}

.cta svg {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #757f9a;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #00cdac;
}

.cta:hover svg {
  transform: translateX(0);
  transform: translateY(-50%);
}

.cta:active {
  transform: scale(0.95);
}
</style>
