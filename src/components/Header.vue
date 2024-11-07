<template>
    <div class="downmenu" :class="isShowMenu ? 'toshow' : 'toclose'">
        <div style="position: relative;width: 100%;text-align: center;">
            <span style="font-size: 22px;cursor: pointer;font-weight: 700;" @click="router.push('/')">{{ title }}</span>
            <span style="position: absolute;right: 15px;width: 20px;padding: 6px 0;" @click="isShowMenu = false">
                <svg t="1730960959068" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="5750">
                    <path
                        d="M569.578831 512l378.213892-378.213892c15.805954-15.805954 15.805954-41.772878 0-57.578831s-41.772878-15.805954-57.578831 0l-378.213892 378.213892-378.213892-378.213892c-15.805954-15.805954-41.772878-15.805954-57.578831 0l0 0c-15.805954 15.805954-15.805954 41.772878 0 57.578831l378.213892 378.213892-378.213892 378.213892c-15.805954 15.805954-15.805954 41.772878 0 57.578831l0 0c15.805954 15.805954 41.772878 15.805954 57.578831 0l378.213892-378.213892 378.213892 378.213892c15.805954 15.805954 41.772878 15.805954 57.578831 0l0 0c15.805954-15.805954 15.805954-41.772878 0-57.578831L569.578831 512z"
                        p-id="5751" fill="#ffffff"></path>
                </svg>
            </span>
        </div>
        <span v-for="item, index in textObj" :key="index">{{ item }}</span>
    </div>
    <div class="header">
        <!-- 返回 -->
        <div class="svgbox" @click="router.push('/')">
            <svg t="1730957419669" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3750">
                <path
                    d="M853.333333 245.333333H245.333333l93.866667-93.866666c12.8-12.8 12.8-34.133333 0-46.933334-12.8-12.8-34.133333-12.8-46.933333 0l-145.066667 145.066667c-12.8 12.8-12.8 34.133333 0 46.933333l145.066667 145.066667c6.4 6.4 14.933333 10.666667 23.466666 10.666667s17.066667-4.266667 23.466667-10.666667c12.8-12.8 12.8-34.133333 0-46.933333L256 311.466667h597.333333c6.4 0 10.666667 4.266667 10.666667 10.666666v426.666667c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V320c0-40.533333-34.133333-74.666667-74.666667-74.666667z"
                    fill="#ffffff" p-id="3751"></path>
            </svg>
        </div>
        <div class="title" @click="router.push('/')">{{ title }}</div>
        <template v-if="true">
            <div class="label_item">
                <span v-for="item, index in textObj" :key="index">{{ item }}</span>
            </div>
        </template>
        <!-- 菜单 -->
        <div class="svgbox" @click="showDownMenu">
            <svg t="1730957633873" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4744">
                <path
                    d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                    p-id="4745" fill="#ffffff"></path>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
// 头部文本
const title = ref('mygamehubs')
const textObj = reactive(['Beauty', 'Puzzle', 'Sports', 'Home', 'Action', 'Best'])
//控制下拉菜单、
const isShowMenu = ref(false)
const showDownMenu = () => {
    isShowMenu.value = !isShowMenu.value
}
</script>
<style scoped>
.downmenu {
    position: absolute;
    width: 100%;
    height: 300px;
    background-color: #fb9a57;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    color: #ffffff;
    transition: all .2s ease-out;
    border-radius: 10px;
    cursor: pointer;
}

.toclose {
    transform: translateY(-301px);
}

.toshow {
    transform: translateY(0px);
}

.header {
    width: 100%;
    height: 65px;
    padding: 0px 80px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}

.svgbox {
    display: none;
}

.header .title {
    font-size: 26px;
    cursor: pointer;
}

.header>.label_item {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

.header>.label_item>span {
    transition: all .1s linear;

}

.header>.label_item>span:hover {
    transform: scale(1.2);
    cursor: pointer;
}

/* 当屏幕宽度小于750px时 */
@media screen and (max-width: 750px) {
    .header {
        width: 100%;
        height: 65px;
        padding: 0px 10px;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
    }

    .svgbox {
        display: flex;
        height: 100%;
        width: 10%;
    }

    .header>.label_item {
        display: none;
    }


}
</style>