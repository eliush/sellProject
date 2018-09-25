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
        seles : localStorage.getItem("items")
        }
    }
}
</script>
<style scoped>

</style>

