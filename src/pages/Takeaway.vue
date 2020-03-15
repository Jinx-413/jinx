<template>
    <div class="takeaway">
        <order-cell :data="data[index]" @click="push" 
            v-for="(item, index) in data" :key="index"
        />
    </div>
</template>

<script>
    import orderCell from '../components/order-cell'
    export default {
        name: 'takeaway',
        components:{orderCell},
        data() {
            return {
                data: {}
            }
        },
        methods: {
            push(){
                alert('jinx')
            }
        },
        mounted() {
            axios({
                url: '/api/goods/takeaway'
            }).then(
                res => {
                    this.data = res.data.data
                }
            )
        },
        
    }
</script>
<style scoped>
    .takeaway{width:100%;flex:1;flex-flow: column;overflow: auto;margin-bottom:0.38rem;}
</style>