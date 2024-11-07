<template>
    <div class="detail">
        <div class="info">
            <img src="@/assets/img/img1.png">
            <span>游戏 <span style="color: red;">{{ route.params.id }}</span></span>
        </div>
        <div style="text-align: center;">
            <button class="playbtn">Play Now</button>
        </div>
        <div class="desc">
            <span>"Jump and Joy is a fun and challenging web-based mini-game where players control a cute character to
                jump across a series of moving or changing platforms to reach the finish line. The game is popular for
                its simple operation, intuitive control, and exciting game rhythm."
            </span>
        </div>
        <div class="more">
            <div class="m_title">Best</div>
            <div class="moreitem">
                <img src="@/assets/img/img1.png" alt="" v-for="img in 15" :key="img">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
// 头部文本
const title = ref('mygamehubs')
const textObj = reactive(['Beauty', 'Puzzle', 'Sports', 'Home', 'Action', 'Best'])
onMounted(() => {
    console.log(route.params.id)
})
</script>
<style scoped>
.detail {
    width: 100%;
    padding: 0 80px;
}

.detail .info img {
    width: 10%;
    border-radius: 10px;
}

.detail .info {
    display: flex;
    gap: 40px;
    padding: 30px 0;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
}

.playbtn {
    background-color: #8f8f8f;
    padding: 0 20px;
    height: 40px;
    border-radius: 10px;
    border: 0;
    font-size: 18px;
    font-weight: 700;
}

.desc {
    margin: 30px 0;
    color: #000;
}

.more {
    width: 100%;
}

.more .m_title {
    color: #000;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
}

.moreitem {
    display: flex;
    flex-wrap: wrap;
    gap: 16.8px;
}

.moreitem img {
    width: 10%;
    border-radius: 10px;
}

/* 当屏幕宽度小于940px时 */
@media screen and (max-width: 940px) {
    .detail {
        width: 100%;
        padding: 0 60px;
    }

    .detail .info img {
        width: 20%;
        border-radius: 10px;
    }

    .moreitem img {
        width: 14%;
    }
}

/* 当屏幕宽度小于740px时 */
@media screen and (max-width: 740px) {
    .detail {
        width: 100%;
        padding: 0 40px;
    }

    .detail .info img {
        width: 29%;
        border-radius: 10px;
    }

    .moreitem img {
        width: 17%;
    }
}

/* 当屏幕宽度小于520px时 */
@media screen and (max-width: 520px) {
    .detail {
        width: 100%;
        padding: 0 20px;
    }

    .detail .info img {
        width: 36%;
        border-radius: 10px;
    }

    .moreitem img {
        width: 30%;
    }
}
</style>