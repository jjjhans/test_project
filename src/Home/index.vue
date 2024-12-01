<template>
    <div class="home">
        <!-- 内容区域 -->
        <div class="new-container">
            <!-- 新闻动态 -->
            <div>
                <div class="headbox">
                    <div class="theme-name">新闻动态</div>
                    <div class="more">
                        <div>查看更多</div>
                        <div>></div>
                    </div>
                </div>
                <!-- 新闻图片 -->
                <div class="newbox">
                    <img src="../assets/img/new.png" alt="">
                    <div class="text">
                        <div class="title">浙江大学学习贯彻习近平新时代中国特色社会主义思想主题教育读书班辅导报告会举行</div>
                        <div class="nav">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 通知公告 -->
            <div>
                <div class="headbox">
                    <div class="theme-name">通知公告</div>
                    <div class="more">
                        <div>查看更多</div>
                        <div>></div>
                    </div>
                </div>
                <div class="topiclist">
                    <div class="topicitem" v-for="item in 7" :key="item">
                        <div class="t-tit">
                            <img src="../assets/img/icon.png" alt="" class="t-icon">
                            <span>浙江大学迎接126周年校庆师生校友书画作品展征稿浙江大学迎接126周年校庆师生校友书画作品展征稿</span>
                        </div>
                        <span>2023-4-20</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="special-topic">
            <img src="../assets/img/themeimg1.png" alt="">
            <img src="../assets/img/themeimg2.png" alt="">
            <img src="../assets/img/themeimg3.png" alt="">
        </div>
        <!-- 理论学习、服务指南 -->
        <div class="theory-container">
            <!-- 理论学习 -->
            <div>
                <div class="headbox">
                    <div class="theme-name">理论学习</div>
                    <div class="more">
                        <div>查看更多</div>
                        <div>></div>
                    </div>
                </div>
                <div class="topiclist">
                    <div class="topicitem" v-for="item in 7" :key="item">
                        <div class="t-tit">
                            <img src="../assets/img/icon.png" alt="" class="t-icon">
                            <span>【党支部学习资料】浙江大学党支部理论学习参考资料2023年第2期（全国两会）浙江大学党支部理论学习参考资料2023年第2期</span>
                        </div>
                        <span>2023-4-20</span>
                    </div>
                </div>
            </div>
            <!-- 服务指南 -->
            <div>
                <div class="headbox">
                    <div class="theme-name">服务指南</div>
                    <div class="more">
                        <div>查看更多</div>
                        <div>></div>
                    </div>
                </div>
                <div class="service-list">
                    <div class="service-item" :class="activeindex == index ? 'active' : ''"
                        v-for="item, index in serviceList" :key="index" @mouseenter="mouseenter(index)"
                        @mouseleave="activeindex = null">
                        <div class="direction">
                            <img :src="item.imgUrl_W" alt="" v-if="activeindex == index">
                            <img :src="item.imgUrl" alt="" v-else>
                            <span>下载专区</span>
                        </div>
                        <div class="go">></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from "vue";
// import { useRoute, useRouter } from "vue-router";
// const route = useRoute();
// const router = useRouter();
const activeindex = ref(null)
const serviceList = reactive([
    {
        imgUrl: '/src/assets/img/icon1.png',
        imgUrl_W: '/src/assets/img/icon1_white.png',
    },
    {
        imgUrl: '/src/assets/img/icon2.png',
        imgUrl_W: '/src/assets/img/icon2_white.png',
    },
    {
        imgUrl: '/src/assets/img/icon3.png',
        imgUrl_W: '/src/assets/img/icon3_white.png',
    },
    {
        imgUrl: '/src/assets/img/icon4.png',
        imgUrl_W: '/src/assets/img/icon4_white.png',
    },
    {
        imgUrl: '/src/assets/img/icon5.png',
        imgUrl_W: '/src/assets/img/icon5_white.png',
    },
    {
        imgUrl: '/src/assets/img/icon6.png',
        imgUrl_W: '/src/assets/img/icon6_white.png',
    },
    {
        imgUrl: '/src/assets/img/icon7.png',
        imgUrl_W: '/src/assets/img/icon7_white.png',
    }
])
// 鼠标进入变化
const mouseenter = (index) => {
    activeindex.value = index
}
const titleObj = reactive(['Beauty', 'Puzzle', 'Sports', 'Home', 'Action', 'Best'])

</script>
<style scoped lang="less">
.home {
    width: 100%;
    // display: flex;
    // justify-content: center;
    padding: 5vh 0;
}

.new-container {
    width: 80%;
    margin: 0 auto;
    // display: grid;
    // grid-template-columns: 3fr 2fr;
    // column-gap: 3%;
    display: flex;
    gap: 3%;

    &>div:last-child {
        width: 39.5%;
    }

    .headbox {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6vh;

        .theme-name {
            font-size: 1.45vw;
            color: #b01f24;
            position: relative;

            &::after {
                content: '';
                background-color: #b01f24;
                width: 50%;
                height: 2px;
                position: absolute;
                bottom: -50%;
                left: 0;
            }
        }

        .more {
            border: 1px solid #ccc;
            font-size: 0.8vw;
            border-radius: 20px;
            display: flex;
            align-items: center;
            padding: 1% 2%;
            gap: 1%;

            &>div:first-child {
                white-space: nowrap;
            }

            &>div:last-child {
                color: #fff;
                background-color: #dc211c;
                width: 0.92vw;
                height: 0.9vw;
                text-align: center;
                border-radius: 50%;
                font-size: 0.9em;
                line-height: 0.85vw;
                margin-left: 0.4vw;
            }
        }
    }

    .newbox {
        position: relative;

        img {

            width: 100%;
        }

        .text {
            position: absolute;
            bottom: 5%;
            color: #fff;
            font-size: 0.8vw;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 4%;

            .title {
                font-weight: bold;
                width: 80%;
            }

            .nav {
                width: 10%;

                &>span {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border: 1px solid #fff;
                    border-radius: 50%;
                    margin-left: 5%;
                }

                &>span:first-child {
                    margin-left: 0;
                    background-color: #fff;
                }
            }

        }
    }

    .topiclist {
        .topicitem {
            display: flex;
            justify-content: space-between;
            padding: 3.6% 0 4%;
            border-bottom: 1px dashed #ccc;
            font-size: 0.9vw;
            gap: 1%;

            .t-tit {
                flex: 1;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                img {
                    width: 1.5%;
                    height: 45%;
                }

                &>span {
                    color: #3f3f3f;

                }
            }

            .t-icon {
                margin-right: 2%;
            }
        }
    }
}

.special-topic {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2%;
    padding: 8vh 0;

    img {
        width: 100%;
        cursor: pointer;
    }
}

.theory-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 3%;

    &>div:first-child {
        width: 57.5%;
    }

    &>div:last-child {
        width: 100%;
    }

    .headbox {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6vh;

        .theme-name {
            font-size: 1.45vw;
            color: #b01f24;
            position: relative;

            &::after {
                content: '';
                background-color: #b01f24;
                width: 50%;
                height: 2px;
                position: absolute;
                bottom: -50%;
                left: 0;
            }
        }

        .more {
            border: 1px solid #ccc;
            font-size: 0.8vw;
            border-radius: 20px;
            display: flex;
            align-items: center;
            padding: 1% 2%;
            gap: 1%;

            &>div:first-child {
                white-space: nowrap;
            }

            &>div:last-child {
                color: #fff;
                background-color: #dc211c;
                width: 0.92vw;
                height: 0.9vw;
                text-align: center;
                border-radius: 50%;
                font-size: 0.9em;
                line-height: 0.85vw;
                margin-left: 0.4vw;
            }
        }
    }


    .topiclist {
        .topicitem {
            display: flex;
            justify-content: space-between;
            padding: 2% 0 3%;
            border-bottom: 1px dashed #ccc;
            font-size: 0.9vw;
            gap: 1%;

            .t-tit {
                flex: 1;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                img {
                    width: 1.5%;
                    height: 45%;
                }

                &>span {
                    color: #3f3f3f;

                }
            }

            .t-icon {
                margin-right: 2%;
            }

            &>span {
                color: #b6b6b6;
            }
        }
    }

    .service-list {
        &>div:not(:last-child) {
            margin-bottom: 1.5%;
        }

        .service-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2%;
            background-color: #f1f1f1;
            color: #333333;

            .direction {
                flex: 1;
                display: flex;
                align-items: center;
                font-size: 1.08vw;

                img {
                    width: 2vw;
                    height: 1.9vw;
                    margin-right: 5%;
                }

            }

            .go {
                color: #bb0707;
                font-size: 1.2vw;
            }
        }

        .active {
            background-color: #bb0707;
            color: #fff;

            .go {
                color: #fff;
            }
        }
    }
}
</style>