<template>
  <div class="body">
     <b-navbar
      class="navbar bg-info  p-3 mb-5"
      toggleable="lg"
      variant="info"
    >
      <b-navbar-brand class="navbar-brand" href="/home"
        >HYPERBIZZ</b-navbar-brand
      >
    
      <b-navbar-toggle
        class="navbar-toggler"
        target="nav-collapse"
      ></b-navbar-toggle>
        
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          

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
          <button class="btn btn-signup"><router-link to="/signup">Sign up</router-link></button>
          
          <button class="btn btn-signin"><router-link to="/signin">Sign in</router-link></button>

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
  width:100%;
  margin: 0 auto;
 

}
.navbar{
  background-color:white  !important;
  width: 90%;
  margin: 0 auto;
}
.navbar-brand{
  font-family: 'Anton', sans-serif;
  font-size: 25px;
}
.align-right{
  margin-left: 20em;
}
.nav-link{
  margin: 0px 20px 0px 20px;
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

.lg-none{
  display: none;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  color:black;
}

@media (max-width:1000px){


.align-right{
  margin-left: 1em;
}


}
</style>
