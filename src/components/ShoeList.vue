<template>
  <div class="body">
    <div class="shoe-list-container">
     <div class="shoe-card">
      <div class="shoe-img "><img v-bind:src="shoecard"/></div>
      <div class="brand-name title-text">Brandname</div>
      
      <div class="shoe-price title-text">price</div>
     </div>
     <div class="shoe-card">
      <div class="shoe-img"><img v-bind:src="shoecard2"/></div>
      <div class="brand-name title-text">Brandname</div>
    
      <div class="shoe-price title-text">price</div>
     </div>
     <div class="shoe-card">
      <div class="shoe-img"><img v-bind:src="shoecard"/></div>
      <div class="brand-name title-text">Brandname</div>
  
      <div class="shoe-price title-text">price</div>
     </div>
     <div class="shoe-card">
      <div class="shoe-img"><img v-bind:src="shoecard"/></div>
      <div class="brand-name title-text">Brandname</div>
    
      <div class="shoe-price title-text">price</div>
     </div>
     <div class="shoe-card">
      <div class="shoe-img"><img v-bind:src="shoecard"/></div>
      <div class="brand-name title-text">Brandname</div>
      
      <div class="shoe-price title-text">price</div>
     </div>
     <div class="shoe-card">
      <div class="shoe-img "><img v-bind:src="shoecard"/></div>
      <div class="brand-name title-text">Brandname</div>
  
      <div class="shoe-price title-text">price</div>
     </div>

    </div>
   
  </div>
</template>

<script>
export default {
    name:"ShoeList",
  data(){
    return{
      shoecard:require("../assets/shoe2.jpg"),
      shoecard2:require("../assets/shoe1.webp")
    }
  }
}
</script>

<style scoped>
.body{
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
  font-size: 19px;
  font-weight: 500;
}
.shoe-price{
  font-size: 17px;
  color: darkred;
}

@media(max-width:1000px){
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