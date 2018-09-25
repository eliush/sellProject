<template>
    <div id="preview">
        <ul>
            <li v-for="sell in seles" :key="sell.id">{{sell.date}}-{{sell.money}}</li>
        </ul>
    </div>
</template>
<script>

export default {
    props: ['sells'],
    data(){
        return{
        seles : JSON.parse(localStorage.getItem("items"))
        }
    }
}
</script>
<style scoped>

</style>

