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
                <div class="headbox" style="margin-bottom: 9%;">
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
                <div class="headbox" style="margin-bottom: 9%;">
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
                            <img src="../assets/img/iconb_white.png" alt="" v-if="activeindex == index">
                            <img src="../assets/img/iconb.png" alt="" v-else>
                            <span>{{ item.name }}</span>
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
        // imgUrl: '../assets/img/icona.png',
        // imgUrl_W: '../assets/img/icona_white.png',
        name: "下载专区",
    },
    {
        // imgUrl: '../assets/img/iconb.png',
        // imgUrl_W: '../assets/img/iconb_white.png',
        name: "启真新论投稿入口",
    },
    {
        // imgUrl: '../assets/img/iconc.png',
        // imgUrl_W: '../assets/img/iconc_white.png',
        name: "论坛活动申报系统",
    },
    {
        // imgUrl: '../assets/img/icond.png',
        // imgUrl_W: '../assets/img/icond_white.png',
        name: "媒体宣传对外服务专区",
    },
    {
        // imgUrl: '../assets/img/icone.png',
        // imgUrl_W: '../assets/img/icone_white.png',
        name: "新媒体平台备案审批系统",
    },
    {
        // imgUrl: '../assets/img/iconf.png',
        // imgUrl_W: '../assets/img/iconf_white.png',
        name: "文化建设项目网上申报系统",
    },
    {
        // imgUrl: '../assets/img/icong.png',
        // imgUrl_W: '../assets/img/icong_white.png',
        name: "优秀网络",
    }
])
// 鼠标进入变化
const mouseenter = (index) => {
    activeindex.value = index
}
</script>
<style scoped lang="less">
@media screen and (max-width:700px) {
    .new-container {
        flex-direction: column;
    }

    .new-container>div:last-child {
        width: 100% !important;
    }

    .theme-name {
        font-size: 4.45vw !important;
    }

    .more {
        font-size: 2.8vw !important;

        &>div:last-child {
            width: 3.92vw !important;
            height: 3.9vw !important;
            line-height: 3.85vw !important;
        }
    }

    .new-container .newbox .text {
        font-size: 1.8vw !important;
    }

    .topiclist {
        .topicitem {
            padding: 1.6% 0 2% !important;
            font-size: 2.9vw !important;
        }
    }

    .special-topic {
        display: block !important;
    }

    .theory-container {
        display: block !important;
    }

    .theory-container>div:first-child {
        width: 100% !important;
    }

    .direction {
        font-size: 4.08vw !important;
    }

    .go {
        font-size: 5.2vw !important;
    }

    .direction img {
        width: 5vw !important;
        height: 4.9vw !important;
    }

    .footer {
        flex-direction: column;

        .vhr {
            display: none;
        }

        .text-c {
            font-size: 4.08vw !important;
        }

        .text_adress {
            font-size: 2.8vw !important;
        }

        .linklist {
            &>div {
                width: 55vw !important;
                font-size: 3.8vw !important;
            }
        }

        .fromwhere {
            font-size: 2.8vw !important;
            width: 54% !important;
        }
    }
}

.home {
    width: 100%;
    // display: flex;
    // justify-content: center;
    padding: 2% 0;
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
        margin-bottom: 6%;

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
                bottom: -48%;
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
            font-size: 1vw;
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
    padding: 3% 0;

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
        margin-bottom: 6%;

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
                bottom: -48%;
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