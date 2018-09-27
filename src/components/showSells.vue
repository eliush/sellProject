<template>
    <div id="preview">
        <div id="sel">
        <h2>Sold Quantity: {{total}} pcs</h2>
        <label>Category</label>
        <select v-model="items" @change="gets">
            <option v-for="category in categorys" :key="category.id" >{{category}}</option>
        </select>
        </div>
        <div id="show" v-for="(sell,index) in aSales" :key="sell.id">
            <span>Item: {{sell.item}}</span>
            <span>Date: {{sell.date}}</span>
            <span>{{sell.quantity}} pcs</span>
            <div v-if="show" class="remove" v-on:click="remove(index)">
                &times;
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            total: 0,
            sales : JSON.parse(localStorage.getItem("sold")),
            aSales : "",
            categorys: ["Chinese Shawl","IC Shawl","Gents Shawl","All"],
            show: false,
            items: "",
        }
    },
    methods:{
        remove:function(index){
            alert("removed");
            this.aSales.splice(index,1);
            localStorage.setItem("items",JSON.stringify(this.aSales));
        },
        gets: function(){
                if(this.items=== "Chinese Shawl"){
                    this.aSales = this.sales.filter(sale=>{
                        return sale.item === "Chinese Shawl";
                    });
                    this.show = false;
                    this.total = 0;
                    for(var i=0;i<this.aSales.length;i++){
                        this.total = parseInt(this.total)+parseInt(this.aSales[i].quantity)
                    }
                }else if(this.items === "IC Shawl"){
                    this.aSales = this.sales.filter(sale =>{
                        return sale.item === "IC Shawl";
                    });
                    this.show = false;
                    this.total = 0;
                    for(var i=0;i<this.aSales.length;i++){
                        this.total = parseInt(this.total)+parseInt(this.aSales[i].quantity)
                    }
                }else if(this.items === "Gents Shawl"){
                    this.aSales = this.sales.filter(sale=>{
                        return sale.item === "Gents Shawl";
                    });
                    this.show = false;
                    this.total = 0;
                    for(var i=0;i<this.aSales.length;i++){
                        this.total = parseInt(this.total)+parseInt(this.aSales[i].quantity)
                    }
                }else{
                    this.aSales = this.sales;
                    this.show = true;
                    this.total = 0;
                    for(var i=0;i<this.aSales.length;i++){
                        this.total = parseInt(this.total)+parseInt(this.aSales[i].quantity);
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

