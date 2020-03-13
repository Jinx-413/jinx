<template>
    <div class="user">
        <div class="headers">
            <section>
                <div class="set">设置</div>
                <div class="news">消息</div>
            </section>
            <dl>
                <dt></dt>
                <dd>年后</dd>
            </dl>
        </div>
        <div class="content">
             <aside>
                <UserCell img="img/heart.png" p="商品收藏"/>
                <UserCell img="img/shop.png" p="店铺关注"/>
                <UserCell img="img/shopping.png" p="我的购物车"/>
                <UserCell img="img/balance.png" p="我的余额"/>
                <UserCell img="img/place.png" p="收货地址"/>
                <UserCell img="img/foot.png" p="我的足迹"/>
             </aside>
             <aside>
                <UserCell img="img/help.png" p="帮助中心"/>
                <UserCell img="img/00.png" p="联系客服"/>
             </aside>
        </div>
    </div>
</template>

<script>
    import UserCell from '../components/user-cell'    
    export default {
        name:'User',
        components: {
            UserCell
        }
    }
</script>
<style scoped>
    .user{display:flex;flex-flow: column;height:100%}
    .user .headers{height:1.2rem;background:#ffc74a;display: flex;flex-flow: column;}
    .user .headers section{display: flex;justify-content:flex-end;padding-top:0.13rem;}
    .user .headers section div{width:0.19rem;height:0.19rem;background:red;margin-right:0.1rem}
    .user .headers dl{display:flex; align-items: center;margin:0.26rem 0 0 0.14rem}
    .user .headers dl dt{width:0.45rem;height:0.45rem; background-image:url(/img/wy_28.png); border-radius: 50%;border:1px solid #fff;background-size:100%;overflow: hidden;}
    .user .headers dl dd{margin-left:0.07rem;color:#fff;font-size: 0.15rem;}

    .user .content{flex: 1;background: #f7f7f7;overflow: auto;margin-bottom: 0.49rem;}
    .user .content aside:nth-child(1){margin-bottom:0.32rem}
</style>