<template>
<nav>
  <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/stock" exact>Stock</router-link></li>
      <li><router-link to="/showStocks" exact>Stocked</router-link></li>
      <li><router-link to="/sell" exact>Sell</router-link></li>
      <li><router-link to="/showSells" exact>Sales</router-link></li>
  </ul>
</nav>
</template>

<script>
export default {

  data () {
    return {
    }
  },
  methods: {
    
  }
 
}
</script>

<style scoped> /* scoped use for style individual*/
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: rgb(8, 171, 192);
    color: white;
}
</style>
