import home from './components/home.vue'
import stock from './components/stock.vue';
import sell from './components/sell.vue';
import showSells from './components/showSells.vue';
export default[
    {path:'/', component: home},
    {path:'/stock', component: stock},
    {path:'/sell', component: sell},
    {path:'/showSells', component: showSells}
]