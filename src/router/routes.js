import Router from "vue-router";
import AppHome from "../components/AppHome"
import ShoeList from"../components/ShoeList";
// import ShoeDetails from "../components/ShoeDetails";


const router = new Router({
//   mode:"history",
  routes:[

    {
      name:"home",
      path:'',
      component:AppHome
    },
    {
        name:"shoelist",
        path:'/men/mens-footwear',
        component:ShoeList
    },

   
    
  ]
})
export default router;