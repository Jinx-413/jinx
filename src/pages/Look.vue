<template>
    <div class="look">
        <back :bl=0 bgColor="#ffc74a" nav="发现"/>
        <Loading/>
    </div>
</template>

<script>
    import back from '../components/back'
    import Loading from '../components/loading'
    export default {
        name: 'Look',
        components: {
            back,Loading
        }
    }
</script>
<style scoped>
</style>