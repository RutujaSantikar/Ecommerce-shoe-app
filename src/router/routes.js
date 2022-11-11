import Router from "vue-router";
import AppHome from "../components/AppHome";
import ShoeList from"../components/ShoeList";
import UserSignup from "../components/UserSignup";
import UserSignin from "../components/UserSignin";
import ShoeDetails from "../components/ShoeDetails";


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
    {
       name:"shoedetails",
       path:'/shoedetails/:id',
       component:ShoeDetails
    },
    {
      name:"signup",
      path:'/signup',
      component:UserSignup
    },
    {
      name:"signin",
      path:'/signin',
      component:UserSignin
    }

   
    
  ]
})
export default router;