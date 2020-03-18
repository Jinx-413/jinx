<template>
        <section>
            <nav class="nav1">
                <img src="/img/wy_03.png" alt="">
            </nav>
            <nav class="nav2">
                <img src="/img/wy_06.png" alt="">
            </nav>
            <article>
                <choose
                    :val="item.val"
                    :img="item.img"
                    v-for="(item, index) in $store.state.home.home.first" :key="index"
                />
            </article>
            <article>
                <choose
                    :val="item.val"
                    :img="item.img"
                    v-for="(item, index) in $store.state.home.home.second" :key="index"
                />
            </article>
            <div>
                <aside></aside>
                <aside></aside>
            </div>
            <div class="footer">
                <h2>附近商家</h2>
            </div>
            <aside class="main">
                <cell
                 :data="$store.state.home2.home2[index]"
                 v-for="(item, index) in $store.state.home2.home2" :key="index"
                 :apiName="'home'"
                />
            </aside>
        </section>
 
</template>

<script>
    import Choose from '../components/choose' 
    import Cell from '../components/cell' 
    export default {
        name:'home',
        components: {
            Choose,Cell
        },
        data() {
            return {
                data:{
                    img: 'url(http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg)',
                    name: '欧品香坊（回龙观）',
                    distance: 3.9,
                    evaluation: 4.8,
                    pick: 20,
                    delivery: 3,
                    mounth:138
                },
                first:[],
                second: [],
            }
        },
        mounted() {
            /* axios({
                url:'data/choose.json'
            }).then(
                res => {
                    this.first = res.data[0].first
                    this.second = res.data[0].second
                }
            ) */
            this.$store.dispatch(`home/${this.$types.HOME}`)

            this.$store.dispatch(`home2/${this.$types.HOME2}`)
        },
    }
</script>
<style scoped>
    section{display:flex;flex-flow:column;padding:0.15rem 0.1rem;flex:1;overflow:auto;background: #fff;}
    section nav img{width:100%;}
    section .nav2{margin:0.05rem 0;}
    section article{display:flex;height:0.64rem;justify-content:space-between;padding:0 0.05rem;}
    section article:nth-of-type(2){margin:0.11rem 0;}
    section article:first-of-type{margin:0.05rem 0;}
    section div{display:flex;justify-content:center;}
    section div aside{width:0.15rem;height:0.04rem;background:red;border-radius:10px;}
    section div aside:last-of-type{background:#e4e4e4;margin-left:5px;}
    section div aside:first-of-type{background:#ffd161;margin-right:5px;}
    section .footer{height:0.59rem;justify-content:flex-start;align-items:flex-end;}
    section .footer h2{font-size:0.20rem;font-weight: bold;}
    section .main{display: flex;flex-flow: column;padding-top:0.19rem}
</style>