<template>
  <div class="body">
     <b-navbar
      class="navbar bg-info  p-3 mb-5"
      toggleable="lg"
      variant="info"
    >
      <b-navbar-brand class="navbar-brand" href=""
        >HYPERBIZZ</b-navbar-brand
      >
    
      <b-navbar-toggle
        class="navbar-toggler"
        target="nav-collapse"
      ></b-navbar-toggle>
        
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-link " href="/#"
            > <input type="search " placeholder="search brands or items" class="search-box sm-none"></b-nav-item>

          <b-nav-item class="nav-link  " href="/#"
            ><i class="fa-solid fa-user"></i></b-nav-item
          >
          <b-nav-item class="nav-link " href="/#"
            ><i class="fa-solid fa-heart"></i></b-nav-item
          >
          <b-nav-item class="nav-link  " href="/#"
            ><i class="fa-solid fa-bag-shopping"></i></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
         <div class="align-right">
          <button class="btn btn-signup  ">Sign up</button>
          
          <button class="btn btn-signin  ">Sign in</button>

         </div>
      </b-collapse>

      <div><input type="search" placeholder="search brands or items" class="lg-none searchBox"></div>
    </b-navbar>
    
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  width:90%;
  margin: 0 auto;
}
.navbar{
  background-color:white  !important;
}
.navbar-brand{
  font-family: 'Anton', sans-serif;
  font-size: 25px;
}
.align-right{
  margin-left: 10em;
}
.nav-link{
  margin: 0px 5px 0px 5px;
}
.navbar-toggler{
  font-size: 14px;
  color: #d9d9d9;
}
.btn{
 margin: 0px 5px 0px 5px;
  border-radius:15px;
  }
.btn:hover{
  background-color: #d9d9d9;
  
}
.search-box{
  margin-left: 10em;
}
.lg-none{
  display: none;
}
@media(max-width:400px){
  .lg-none{
    display: block;
  }
  .searchBox{
    margin-top: 10px;
  }
}
@media (max-width:1000px){


.sm-none{
  display: none;
}

.align-right{
  margin-left: 1em;
}

}
</style>
