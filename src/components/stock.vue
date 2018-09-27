<template>
<div id="stock">
    <h2>Add in Stock</h2>
    <form >
        <label>Category:</label>
        <select v-model="items">
            <option v-for="category in categorys" :key="category.id">{{category}}</option>
        </select>
        <label>Date:</label>
        <input type="date" id="date" v-model="dates" placeholder="Date">
        <label>Quantity:</label> 
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
        items: "",
        idN:0
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
                    id: this.idN,
                    item: this.items,
                    date: this.dates,
                    quantity : this.quantitys
                });
            alert("Added");
            localStorage.setItem("stock",JSON.stringify(this.stocks));
            this.idN++;
            this.dates = "";
            this.quantitys = "";
            this.items = "";
            }
        },
      }    
}    
</script>
<style scoped>
h2{
    color: #209cee;
}
form label{
    color: #16bdbd;
    margin: 0 10px;
}
select{
    height: 25px;
    width: 150px;
    border-radius: 3px;
}
input{
    height: 20px;
    width: 150px;
    border-radius: 3px;
    border: 1px solid lightgrey;
}
button{
    height: 23px;
    width: 80px;
    margin-left: 20px;
    background: #16bdbd;
    border-radius: 5px;
}
#stock {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



