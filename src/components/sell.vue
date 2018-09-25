<template>
<div id="sell">
    <h4>Total Sell</h4>
    <form v-if="!show">
        <input type="text" id="date" v-model="dates" placeholder="Date"> 
        <input type="text" id="buy" v-model="moneys" placeholder="Sell">
        <button v-on:click.prevent="addSell">Add</button>
    </form>
    <div id="preview">
        <ul>
            <li v-for="sell in sells" :key="sell.id">{{sell.date}}-{{sell.money}}</li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    data() {
      return {
        dates: '',
        moneys: '',
        sells: JSON.parse(localStorage.getItem("items")) || [],
        show: false
      }
    },
    methods: {
      addSell: function(){
          if(this.dates.trim().length==0 && this.moneys.trim().length==0){
            alert("its can`t be empty");
            return
          }
          else{this.sells.push({
              date:  this.dates,
              money: this.moneys
          });
          this.show = !this.show
          localStorage.setItem("items",JSON.stringify(this.sells));
          }
          
      },
    }
}    
</script>
<style scoped>
#sell {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



