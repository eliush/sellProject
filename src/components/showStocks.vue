<template>
    <div id="preview">
        <div id="sel">
        <h2>Stocked Quantity: {{total}} pcs</h2>
        <label>Category</label>
        <select v-model="items" @change="gets">
            <option v-for="category in categorys" :key="category.id" >{{category}}</option>
        </select>
        </div>
        <div id="show" v-for="(stock,index) in aStock" :key="stock.id">
            <span>Item: {{stock.item}} </span>
            <span>Date: {{stock.date}} </span>
            <span>{{stock.quantity}} pcs</span>
            <div v-if="show" class="remove" v-on:click="remove(index)">
                &times;
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            stocked : JSON.parse(localStorage.getItem('stock')) ,
            aStock: "",
            total: 0,
            items: "",
            categorys: ["Chinese Shawl","IC Shawl","Gents Shawl","All"],
            show: false
        }
    },
    methods:{
        remove:function(index){
            alert("removed");
            this.aStock.splice(index,1);
            localStorage.setItem("stock",JSON.stringify(this.aStock));
        },
        gets: function(){
            if(this.items === "Chinese Shawl"){
                 this.aStock = this.stocked.filter(stock => {
                   return stock.item === "Chinese Shawl";
                 });
                 this.show = false;
                 this.total = 0;
                for(var i=0;i<this.aStock.length;i++){
                    this.total = parseInt(this.total)+ parseInt(this.aStock[i].quantity);
                }
            }else if(this.items === "IC Shawl"){
                 this.aStock = this.stocked.filter(stock => {
                   return stock.item === "IC Shawl";
                 });
                 this.show = false;
                 this.total = 0;
                for(var i=0;i<this.aStock.length;i++){
                    this.total = parseInt(this.total)+ parseInt(this.aStock[i].quantity);
                }
            }else if(this.items === "Gents Shawl"){
                 this.aStock = this.stocked.filter(stock => {
                   return stock.item === "Gents Shawl";                   
                 });
                 this.show = false;
                 this.total = 0;
                for(var i=0;i<this.aStock.length;i++){
                    this.total = parseInt(this.total)+ parseInt(this.aStock[i].quantity);
                }
            }else if(this.items === "All"){
                this.aStock = this.stocked;
                console.log("hi");
                this.show = true;
                this.total = 0;
                for(var i=0; i<this.stocked.length;i++){
                    this.total = parseInt(this.total)+ parseInt(this.stocked[i].quantity)
                }
            }
        }    
        
    },
}
</script>
<style scoped>
h2{
    text-align: center;
    color: #209cee;
}
#sel{
    text-align: center;
    color: #16bdbd;
    font: caption;
}
#sel select{
    height: 20px;
    border-radius: 8px;
    border: 1px solid lightgrey;
    margin-left: 10px;
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
#show span{
    width: 150px;
    margin: 0 10px;
}
</style>



