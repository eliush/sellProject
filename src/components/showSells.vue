<template>
    <div id="preview">
        <ul>
            <li v-for="sell in sells" :key="sell.id">{{sell.date}}-{{sell.money}}</li>
        </ul>
    </div>
</template>
<script>

export default {
    props: ['sells'],
    data(){
        return{}
    }
}
</script>
<style scoped>

</style>

