<template>
  <div class="body">
    <div class="signin-container">
      <div class="left-part sm-none">
      <p class="signin-text"> Get access to your orders and favorites</p>
      
      </div>
      <div class="right-part">
       <div class="signin-form">
        
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Email</label>
          <div><input
                  type="email"
                  id="email"
                  v-model="email"
                  placeholder="john@example.com"></div>
        </div>
        <div class="input">
          <label for="password">Password</label>
          <div><input
                  type="password"
                  id="password"
                  v-model="password"></div>
        </div>
        <div class="submit">
          <button type="submit" class="signin-btn">Signin</button>
        </div>
      </form>
       <p class="newuser">New to hyperbizz ? <router-link to="/signup">Signup</router-link></p>
       </div>
       
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
name:"UserSignin",

}
</script>

<style scoped>
.body{
  width: 50%;
  margin: 0 auto;
}
.signin-container{
  display: flex;
  border: 1px solid black;
}
.left-part{
  background-color: black;
  color: white;
  width: 40%;
}
.signin-text{
  font-size: 22px;
  padding: 25px 20px 10px 20px;
}
.right-part{
  width: 70%;
}
.signin-form{
  width: 80%;
  margin:1.5em auto;
}
label{
  padding: 5px;
}
input{
  padding: 6px;
  width:100%;
  outline: none;
  
}
.submit{
  display: flex;
  justify-content: center;
   margin-top: 20px;
 
}
.signin-btn{
  border: none;
  background-color: rgba(117,117,117,1);
  color: white;
  padding: 10px;
  width: 40%;
}
.newuser{
  text-align: center;
  padding-top: 10px;
}

@media(max-width:1000px){
    .sm-none{
        display: none;
    }
    .body{
        width: 80%;
    }
   .right-part{
    width: 100%;
   }
}

</style>