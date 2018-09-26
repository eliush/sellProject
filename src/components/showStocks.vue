<template>
    <div id="preview">
        <h2>Stocked Quantity {{total}} pcs</h2>
        <label>Category</label>
        <select v-model="items" @change="gets">
            <option v-for="category in categorys" :key="category.id" >{{category}}</option>
        </select>
        <div id="show" v-for="(stock,index) in aStock" :key="stock.id">
            <span>Date: {{stock.date}} {{stock.item}}</span>
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
            aStock: "",
            total: 0,
            items: "",
            categorys: ["Chinese Shawl","IC Shawl","Gents Shawl"],
        }
    },
    methods:{
        remove:function(index){
            alert("removed");
            this.stocked.splice(index,1);
            localStorage.setItem("stock",JSON.stringify(this.stocked));
        },
        
    },
    computed:{
        gets: function(){
            if(this.items=="Chinese Shawl"){
                return this.aStock = this.stocked.filter(stock => {stock.item=="Chinese Shawl"});
            }
        }
    },
    created(){
        for(var i=0;i<this.stocked.length;i++){
                this.total = parseInt(this.total)+ parseInt(this.stocked[i].quantity);
            }
        
    },
    beforeUpdate(){
        alert("update");
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
  background: #16bdbd;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
</style>



