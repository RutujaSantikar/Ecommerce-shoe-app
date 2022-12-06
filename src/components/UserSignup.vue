<template>
<div class="body">
    <div class="signup-container">
      <div class="left-part sm-none">
      <p class="signup-text"> Looks like you are new here ! signup with your emailId to get started</p>
      
      </div>
      <div class="right-part">
       <div class="signup-form">
        
      <div>
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
        <div class="input">
          <label for="confirmpassword">Confirm Password</label>
          <div><input
                  type="password"
                  id="confirm-password"
                  v-model="confirmPassword"></div>
        </div>
        <div class="submit">
          <button @click = "authenticate" type="submit" class="signup-btn">Signup</button>
        </div>
      </div>
       <p class="newuser">Already a customer ? <router-link to="/signin">Signin</router-link></p>
       </div>
       
      </div>

    </div>
    
  </div>
 
</template>

<script>
export default {
name:"UserSignup",
data(){
  return{
    email:'',
    password:'',
    confmpassword:''
  }
},
mathods:{
  authenticate(){

  },
  signup(){
    
  }
}
}
</script>

<style scoped>
.body{
  width: 50%;
  margin: 0 auto;
}
.signup-container{
  display: flex;
  border: 1px solid black;
}
.left-part{
  background-color: black;
  color: white;
  width: 40%;
}
.signup-text{
  font-size: 22px;
  padding: 25px 20px 10px 20px;
}
.right-part{
  width: 70%;
}
.signup-form{
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
.signup-btn{
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