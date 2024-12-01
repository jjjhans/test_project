<template>
    <div class="footer">
        <div class="contact">
            <div class="text-c">联系我们</div>
            <div class="text_adress">地址：浙江省杭州市西湖区余杭塘路866号 </div>
            <div class="text_adress">浙江大学紫金港校区东三105室</div>
            <div class="text_adress">邮编：310058 电话：+86-0571-88981862</div>
        </div>
        <div class="vhr"></div>
        <div class="linklist">
            <div><span>高校链接</span><img src="../assets/img/down.png" alt=""></div>
            <div><span>媒体链接</span><img src="../assets/img/down.png" alt=""></div>
            <div><span>政府链接</span><img src="../assets/img/down.png" alt=""></div>
        </div>
        <div class="vhr"></div>
        <div class="fromwhere">
            <div>Copyright © 2023 浙江大学党委宣传部（新闻办公室 , 含网络信息办公室） 技术支持 : 创高软件 管理登</div>
            <div>您是本站第9999位访客</div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped lang="less">
.footer {
    width: 100%;
    background-image: url('../assets/img/footbg.png');
    background-size: cover;
    padding: 1% 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .contact {
        color: #fff;

        &>div:nth-child(3) {
            margin-left: 15%;
        }

        .text-c {
            font-weight: bold;
            font-size: 1.08vw;
            margin-bottom: 4%;
        }

        .text_adress {
            font-size: 0.8vw;
            margin-bottom: 3%;
        }

    }

    .vhr {
        background-image: linear-gradient(to bottom, #ad1f1d 0%, #fff 50%, #ad1f1d 100%);
        opacity: 0.5;
        width: 0.1vw;
        height: 15vh;
    }

    .linklist {
        display: flex;
        flex-flow: column;
        gap: 1vh;

        &>div {
            border: 1px solid rgba(255, 255, 255, 0.5);
            color: #fff;
            width: 11vw;
            font-size: 0.8vw;
            position: relative;
            padding: 2% 8%;

            img {
                width: 6%;
                position: absolute;
                right: 5%;
                top: 38%;
            }
        }
    }

    .fromwhere {
        font-size: 0.8vw;
        color: #fff;
        width: 20%;
        text-align: right;
        line-height: 2;
    }
}
</style>