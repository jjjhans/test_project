<template>
    <div class="downmenu" :class="isShowMenu ? 'toshow' : 'toclose'">
        <span v-for="item, index in navlist" :key="index">{{ item }}</span>
    </div>
    <!-- 菜单 -->
    <div class="menu" @click="showMenu">
        <div class="menuhr" :class="isShowMenu ? 'menuactive' : 'menuactive_leave'"></div>
        <div class="menuhr" v-show="!isShowMenu"></div>
        <div class="menuhr" :class="isShowMenu ? 'menuactive_other' : 'menuactive_other_leave'"></div>
    </div>
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
        </div>
        <!-- 搜索栏 -->
        <div class="inpbox">
            <input type="text" class="">
            <img src="../assets/img/search.png" alt="">
        </div>
    </div>
    <div class="navbox">
        <div class="itemlist">
            <div class="navitem" v-for="nav, index in navlist" :key="index">{{ nav }}</div>
        </div>
    </div>
    <div></div>
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
const showMenu = () => {
    isShowMenu.value = !isShowMenu.value
}
</script>
<style scoped lang="less">
.downmenu {
    position: absolute;
    width: 100%;
    height: 40vh;
    background-color: var(--header-bgcolor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    color: #ffffff;
    transition: all .4s ease-out;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    z-index: 9;
}

.toclose {
    transform: translateY(-40.1vh);
}

.toshow {
    transform: translateY(0px);
}

.menu {
    position: relative;
    height: 20px;
    display: none;
    z-index: 999;

    .menuhr {
        position: absolute;
        width: 25px;
        height: 2px;
        background-color: #fff;
    }

    .menuhr:first-child {
        top: 10%;

    }

    .menuhr:nth-child(2) {
        top: 50%;
    }

    .menuhr:last-child {
        top: 90%;

    }

    .menuactive {
        top: 50% !important;
        transition: transform .4s ease-out;
        transform: rotateZ(45deg);
    }

    .menuactive_leave {
        top: 10% !important;
        transition: top .4s ease-out;
        transform: rotateZ(0deg);
    }

    .menuactive_other {
        top: 50% !important;
        transform: rotateZ(-45deg);
        transition: transform .4s ease-out;
    }

    .menuactive_other_leave {
        top: 90% !important;
        transform: rotateZ(0deg);
        transition: top .4s ease-out;
    }
}

.header {
    width: 100%;
    background-color: var(--header-bgcolor);
    background-image: url('../assets/img/bg.png');
    background-size: cover;
    // text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 10%;
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
    // width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


}

.inpbox {
    border-radius: 20px;
    border: 0;
    height: 5vh;
    background-color: #fff;
    /* overflow: hidden; */
    padding: 0 15px;
    position: relative;

    input {
        border: 0;
        outline: 0;
        width: 10vw;
        height: 100%;
        display: block;
    }

    img {
        position: absolute;
        right: 6%;
        top: 50%;
        transform: translateY(-50%);
        width: 12%;

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

@media screen and (max-width:700px) {
    .logowordbox {
        width: 100%;

        .logo-box {
            margin-bottom: 0;


            .logotext {
                display: none;
            }

            .vhr {
                display: none;
            }
        }
    }


    .inpbox {
        display: none;
    }

    .menu {
        display: block;
        position: absolute !important;
        right: 16% !important;
        top: 1% !important;
    }

    .lang-box img {
        display: none;
    }

    .navbox {
        display: none;
    }
}
</style>