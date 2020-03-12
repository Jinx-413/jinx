<template>
    <div class="footer">
        <aside class="home"><div></div><span>首页</span></aside>
        <aside class="order"><div></div><span>订单</span></aside>
        <aside class="look"><div></div><span>发现</span></aside>
        <aside class="me"><div></div><span>我的</span></aside>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>
<style scoped>
    .footer{height:0.48rem;display:flex;background:#f9e4e4;justify-content:space-between;padding:0 0.35rem;}
    .footer aside{display:flex;flex-flow:column;justify-content:center;align-items:center;}
    .footer aside span{font-size:0.08rem;color:#000;}
    .footer .home div{width: 0.25rem;height:0.25rem;background:url(../assets/img/home.png); background-size:0.25rem;}
    .footer .order div{width: 0.25rem;height:0.25rem;background:url(../assets/img/dingdan.png); background-size:0.25rem;}
    .footer .look div{width: 0.25rem;height:0.25rem;background:url(../assets/img/look.png); background-size:0.25rem;}
    .footer .me div{width: 0.23rem;height:0.23rem;background:url(../assets/img/me.png); background-size:0.23rem;}

    .footer .home_active div{width: 0.25rem;height:0.25rem;background:url(../assets/img/home1.png); background-size:0.25rem;}
    .footer .home_active span{font-size:0.08rem;color:#f4ea2a;}
    .footer .order_active div{width: 0.25rem;height:0.25rem;background:url(../assets/img/dingdan1.png); background-size:0.25rem;}
    .footer .order_active span{font-size:0.08rem;color:#f4ea2a;}
    .footer .look_active div{width: 0.25rem;height:0.25rem;background:url(../assets/img/look1.png); background-size:0.25rem;}
    .footer .look_active span{font-size:0.08rem;color:#f4ea2a;}
    .footer .me_active div{width: 0.23rem;height:0.23rem;background:url(../assets/img/me1.png); background-size:0.23rem;}
    .footer .me_active span{font-size:0.08rem;color:#f4ea2a;}
</style>