<template>
    <dl @click="$router.push('/jinx')">
        <dt><div :style="{backgroundImage:img}"></div></dt>
        <dd>
            <span>{{val}}</span>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'choose',
        props: {
            img: {
                type: String,
            },
            val: {
                type: String,
                default: 'jinx'
            }
        }
    }
</script>
<style scoped>
    dl{display:flex;flex-flow:column;justify-content:space-between;align-items:center;}
    dl dt div{width:0.44rem;height:0.44rem;background-size: 100%;background-image: url(./img/default.jpg);}
    dl dd span{font-size:0.12rem;color:#262626;}
</style>