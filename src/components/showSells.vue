<template>
    <div id="preview">
        <h2>Sold Amount: {{totalAmount}} Taka</h2>
        <div id="show" v-for="(sell,index) in sales" :key="sell.id">
            <span>{{sell.date}}</span>
            <span>{{sell.money}} Taka</span>
            <div class="remove" v-on:click="remove(index)">
                &times;
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            totalAmount: 0,
            sales : JSON.parse(localStorage.getItem("items"))
        }
    },
    methods:{
        remove:function(index){
            alert("removed");
            this.sales.splice(index,1);
            localStorage.setItem("items",JSON.stringify(this.sales));
        },
    },
    created(){
        for(var i=0;i<this.sales.length;i++){
                this.totalAmount = parseInt(this.totalAmount)+ parseInt(this.sales[i].money);
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

