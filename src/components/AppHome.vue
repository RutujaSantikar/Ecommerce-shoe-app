<template>
  <div class="body">
   
   <div class="headline"> DISCOVER LIMITED SNEAKERS WITHOUT LIMITATIONS  </div>
   <div class="padding"></div>
   <div><button class="shopbtn">Shop Now</button></div>

  </div>
</template>

<script>
export default { 
name:"AppHome"
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
  width: 35%;
  
}
.shopbtn:hover{
  background-color: black;
  color: white;
}

@media(max-width:1000px){
  .headline{
    font-size: 2.8em;
  }
  .shopbtn{
    width: 100%;
  }
}
</style>