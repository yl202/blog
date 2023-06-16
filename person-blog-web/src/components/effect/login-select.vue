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
<script setup>
import { toRefs, defineProps } from "vue";
// const props = withDefaults(
//     defineProps<{
//         standing?: string;
//     }>(),
//     {
//         standing: "Administrator",
//     }
// );
const props = defineProps({
    // 子组件接收父组件传过来的值
    standing: String,
});
// 使用父组件传递来的值
const { standing } = toRefs(props);
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
    content: "";
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
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #757F9A;
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
    stroke: #757F9A;
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