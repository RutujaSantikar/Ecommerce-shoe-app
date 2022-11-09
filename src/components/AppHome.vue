<template>
  <div class="body">
   <div class="headline"> DISCOVER LIMITED SNEAKERS WITHOUT LIMITATIONS  </div>
   <div class="padding"></div>
   <div><button class="shopbtn"><router-link to="/men/mens-footwear" class="routlink">Shop Now</router-link></button></div>
   <div class="padding"></div>
   <div class="imgcont">
    <div class="leftimg"><img v-bind:src="img1" class="imgOne"> </div>
    <div class="right"><img v-bind:src="img2" class="imgTwo"></div>
   </div>

 </div>
</template>

<script>
export default { 
name:"AppHome",

data(){
  return{
    img1:require("../assets/shoe2.jpg"),
    img2:require("../assets/shoe1.webp")
    
}
}
}
</script>

<style scoped>
.body{
  width: 90%;
  margin: 0 auto;
 
}
.headline{
  font-family: 'Anton', sans-serif;
  font-size: 6.5em;
  width: 100%;
}
.padding{
  padding: 20px;
}
.shopbtn{
  padding: 15px;
  background-color: #d9d9d9;
  color: black;
  border: none;
  font-weight:200;
  font-family:'Anton', sans-serif;
  letter-spacing: 0.3em;
  width: 30%;
  
}
.shopbtn:hover{
  background-color: black;
  color: white;
}

.imgcont{
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
}
img{
  border: 8px solid rgba(117,117,117,1);
  width: 500px;
}
.imgTwo{
  height: 500px;
  width: 450px;
}
img:hover{
  border-color: black;
}
a{
  text-decoration: none;
  color: black !important;
}
a:hover{
  color: white !important;
}

@media(max-width:1000px){
  .headline{
    font-size: 2.8em;
  }
  .shopbtn{
    width: 100%;
  }
  .imgcont{
    grid-template-columns: auto;
    grid-gap:2em;
  }

  img{
  border: 6px solid rgba(117,117,117,1);
  width: 100%;
}
.imgTwo{
  height: 350px;
  width: 100%;
}
}
</style>