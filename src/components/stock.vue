<template>
<div id="stock">
    <h4>Add in Stock</h4>
    <form >
        <label>Category</label>
        <select v-model="items">
            <option v-for="category in categorys" :key="category.id">{{category}}</option>
        </select>
        <input type="date" id="date" v-model="dates" placeholder="Date"> 
        <input type="text" id="buy" v-model="quantitys" placeholder="Quantity">
        <button v-on:click.prevent="add">Add</button> 
    </form>
</div>
</template>
<script>
export default {
    data() {
      return {
        stocks: JSON.parse(localStorage.getItem("stock")) || [],
        dates: '',
        quantitys: '',
        categorys: ["Chinese Shawl","IC Shawl","Gents Shawl"],
        items: ""
      }
    },
    methods: {
      add: function(){
          if(this.dates.trim().length==0 && this.quantitys.trim().length==0 && this.items.trim().length==0){
              alert("Its can`t be Empty");
              return
          }
          else{
                this.stocks.push({
                    item: this.items,
                    date: this.dates,
                    quantity : this.quantitys
                });
            alert("Added");
            localStorage.setItem("stock",JSON.stringify(this.stocks));
            }
        },
      }    
}    
</script>
<style scoped>
#stock {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



