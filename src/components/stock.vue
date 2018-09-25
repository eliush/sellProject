<template>
<div id="stock">
    <h4>Total Stock</h4>
    <form v-if="!show">
        <input type="text" id="date" v-model="dates" placeholder="Date"> 
        <input type="text" id="buy" v-model="buys" placeholder="Quantity">
        <button v-on:click.prevent="add">Add</button> 
    </form>
    <div id="preview" v-if="show">
        <ul>
            <li v-for="stock in stocks" :key="stock.id">{{stock.date}}-{{stock.buy}}</li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    data() {
      return {
        stocks:JSON.parse(localStorage.getItem("items")) || [],
        show: false,
        dates: '',
        buys: ''
      }
    },
    methods: {
      add: function(){
          if(this.dates.trim().length==0 && this.buys.trim().length==0){
              alert("Its can`t be Empty");
              return
          }
          else{this.stocks.push({
              date: this.dates,
              buy : this.buys
          });
          this.show = !this.show;
          localStorage.setItem("items",JSON.stringify(this.stocks));
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



