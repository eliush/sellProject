<template>
    <div id="preview">
        <h2>Stocked Quantity {{total}} pcs</h2>
        <div id="show" v-for="(stock,index) in stocked" :key="stock.id">
            <span>{{stock.date}}</span>
            <span>{{stock.quantity}} pcs</span>
            <div class="remove" v-on:click="remove(index)">
                &times;
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            stocked : JSON.parse(localStorage.getItem('stock')),
            total: 0
        }
    },
    methods:{
        remove:function(index){
            alert("removed");
            this.stocked.splice(index,1);
            localStorage.setItem("stock",JSON.stringify(this.stocked));
        },
    },
    created(){
        for(var i=0;i<this.stocked.length;i++){
                this.total = parseInt(this.total)+ parseInt(this.stocked[i].quantity);
            }
    }
}
</script>
<style scoped>
h2{
    text-align: center;
    color: #209cee;
}
#show{
  height:30px;
  width: 100%;
  background: #209cee;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
</style>



