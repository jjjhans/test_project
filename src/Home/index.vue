<template>
    <!-- 内容区域 -->
    <div class="container">
        <div class="con_box_item" v-for="citme in titleObj" :key="citme">
            <div class="c_title">{{ citme }}</div>
            <div class="c_item">
                <img src="@/assets/img/img1.png" alt="" v-for="imgObj in gameDetailList.slice(0, 3)" :key="imgObj.id"
                    @click="goDetail(imgObj.id)">
            </div>
            <div class="c_item" style="margin-top: 20px;">
                <img src="@/assets/img/img1.png" alt="" v-for="imgObj in gameDetailList.slice(3, 6)" :key="imgObj.id"
                    @click="goDetail(imgObj.id)">
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const gameDetailList = reactive([
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
])
const titleObj = reactive(['Beauty', 'Puzzle', 'Sports', 'Home', 'Action', 'Best'])
//点击图片跳转
const goDetail = (id) => {
    router.push({
        name: 'detail',
        params: {
            id: id
        }
    })
}
</script>
<style scoped>
.container {
    width: 100%;
    padding: 0 60px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 40px 0px;
    margin-top: 20px;
}

.container .con_box_item {
    width: 33.33%;
    padding: 0 20px;
}

.con_box_item .c_title {
    color: #000;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
}

.con_box_item .c_item {
    display: flex;
    /* flex-wrap: wrap; */
    /* gap: 20px; */
    justify-content: space-between;
}

.con_box_item .c_item img {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
}

/* 当屏幕宽度小于940px时 */
@media screen and (max-width: 940px) {
    .container .con_box_item {
        width: 50%;
        padding: 0 20px;
    }
}

/* 当屏幕宽度小于520px时 */
@media screen and (max-width: 520px) {
    .container .con_box_item {
        width: 100%;
        padding: 0 20px;
    }

    .container {
        padding: 0px;
        gap: 20px 0;
    }
}
</style>