<template>


  <div class="body">
     <div class="search-product"><input type="search " placeholder="search brands or items" class="search-box sm-none"></div>

    
    <div class="shoe-list-container">
      
     <div class="shoe-card" v-for= "productinfo in apiData" :key= "productinfo.id"  @click="productdetail(productinfo.id)">
      <div class="shoe-img "><img :src= "img1" /></div>
      <div class="brandname"><h5>{{ productinfo.brandName}}</h5></div>
      <div class="brand-name title-text">{{ productinfo.name }}</div>
      <div class="shoe-price title-text"> {{ productinfo.price.current.text }}</div>
     </div>
     

    </div>
  
  </div>
</template>

<script>
 import axios from "axios";
export default {
    name:"ShoeList",
  data(){
    return{
      apiData:[],
   
     
     img1:require("../assets/shoe1.webp")
    }
  },

  methods:{
    productdetail(id){
      this.$router.push(`/shoedetails/${id}`);
    }
  },
  mounted(){
   const options = {
   method: 'GET',
    url: 'https://asos2.p.rapidapi.com/products/v2/list',
    params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '48',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
  headers: {
    'X-RapidAPI-Key': 'a7d6170542msh95535dd546dd907p1d8c25jsn568bff2c8d3f',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  }
};

axios.request(options).then((response) => {
	console.log(response.data);
  this.apiData = response.data.products;
}).catch(function (error) {
	console.error(error);
});
  }
}
</script>

<style scoped>
.body{
 width: 100%;

}
.search-product{
  width: 60%;
  margin: 1.5em auto;
}
input{
  width: 100%;
}
.shoe-list-container{
  width: 90%;
  margin: 0  auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap:15px;
}
img{
  width: 100%;
  height: 380px;
}
.title-text{
  padding: 3px;
}
.brand-name{
  font-size: 16px;
  color: rgba(117,117,117,1);
}
.shoe-price{
  font-size: 17px;
  color: darkred;
}

@media(max-width:1000px){
  .search-product{
  width: 80%;
  margin: 1.5em auto;
}
  .shoe-list-container{
  
  grid-template-columns: auto auto ;
  grid-gap:10px;
}
img{
  height: 280px;
}
.brand-name{
  font-size: 15px;
  font-weight: 500;
}
.shoe-price{
  font-size: 14px;
  color: darkred;
}
}
</style>