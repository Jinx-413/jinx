<template>
    <div class="header">
        <section>
            <place :place=" '德州' "/>
            <weather/>
        </section>
        <search text="请输入商家或商品名称"/>
    </div>
</template>

<script>
    import Search from '../components/search'
    import Place from '../components/place'
    import Weather from '../components/weather';
    export default {
        name:'Header',
        components: {
            Search,Place,Weather
        }
    }
</script>
<style>
    .header{height:0.87rem;background:#ffc74a;display:flex;flex-flow:column;padding:0 0.1rem 0 0.1rem;}
    .header section{display:flex;flex-flow:row;height:0.37rem;justify-content: space-between;}
    .header section article{display:flex;}
</style>