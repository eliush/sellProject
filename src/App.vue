<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>    
  </div>
</template>

<script>
import home from './components/home.vue'
import header from './components/header.vue'
import stock from './components/stock.vue'
import sell from './components/sell.vue'
import showSells from './components/showSells.vue'
import showStocks from './components/showStocks.vue'

export default {
  name: 'app',
  components:{
    "home": home,
    "app-header": header,
    "stock": stock,
    "sell": sell,
    "showSells": showSells,
    "showStocks": showStocks
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
