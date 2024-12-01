<template>
    <div class="header">
        <div class="pc_header">
            <!-- logo文字 -->
            <div class="logowordbox">
                <div class="logo-box">
                    <img src="../assets/img/logo.png" alt="">
                    <div class="vhr"></div>
                    <div class="logotext">党委宣传部 <span>（新闻办公室 , 含网络信息办公室）</span></div>
                </div>
                <div class="lang-box">
                    <img src="../assets/img/lang.png" alt="">
                </div>
            </div>
            <!-- 搜索栏 -->
            <div class="inpbox">
                <input type="text" class="">
            </div>
        </div>
        <!-- 菜单 -->
        <div v-if="false">
            <svg t="1730957633873" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4744">
                <path
                    d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                    p-id="4745" fill="#ffffff"></path>
            </svg>
        </div>
    </div>
    <div class="navbox">
        <div class="itemlist">
            <div class="navitem" v-for="nav, index in navlist" :key="index">{{ nav }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// import { useRoute, useRouter } from "vue-router";
// const route = useRoute();
// const router = useRouter();
// 头部文本
const title = ref('mygamehubs')
const navlist = reactive(['首页', '部门简介', '理论宣传', '求是新闻', '网信管理', '文化浙大', '党员之家', '服务指南'])
//控制下拉菜单、
const isShowMenu = ref(false)
const showDownMenu = () => {
    isShowMenu.value = !isShowMenu.value
}
</script>
<style scoped lang="less">
.header {
    width: 100%;
    background-color: var(--header-bgcolor);
    background-image: url('../assets/img/bg.png');
    background-size: cover;
    // text-align: center;
    display: flex;
    justify-content: center;
    padding: 1% 0;
}

.navbox {
    width: 100%;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    height: 6cqh;
    font-size: 1.1vw;

    .itemlist {
        width: 80%;
        height: 100%;
        // display: grid;
        // grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        // justify-content: space-between;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .navitem {
            cursor: pointer;
            height: 100%;
            width: 6cqw;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background-color: #d8d8d8;
            }
        }
    }

}

.pc_header {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .inpbox {
        border-radius: 20px;
        border: 0;
        height: 5vh;
        background-color: #fff;
        /* overflow: hidden; */
        padding: 0 15px;

        input {
            border: 0;
            outline: 0;
            width: 10vw;
            height: 100%;
            display: block;
        }
    }
}

.logowordbox {
    width: 60%;

    .logo-box {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 4%;
        gap: 4%;

        .logotext {
            color: #fff;
            font-size: 1.4vw;
            font-family: "FZXBSJW";

            span {
                font-size: 0.63em;
                font-weight: 400;
            }
        }

        .vhr {
            width: 0.5px;
            height: 5cqh;
            background-color: #fff;
        }
    }
}



.logo-box img {
    width: 40%;
}

.lang-box img {
    width: 100%;
}
</style>