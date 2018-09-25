<template>
<div id="sell">
    <h4>Total Sell</h4>
    <form>
        <input type="date" id="date" v-model="dates" placeholder="Date"> 
        <input type="text" id="buy" v-model="moneys" placeholder="Sell">
        <button v-on:click.prevent="addSell">Add</button>
    </form>
</div>
</template>
<script>
export default {
    data() {
      return {
        dates: '',
        moneys: '',
        sells: JSON.parse(localStorage.getItem("items")) || [],
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
          alert("Added");
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



