<template>
  <div class="body">
        <div class="shoedetails-container">
            <div class="img-cont"><img v-bind:src="shoe"></div>
            <div class="details-cont">
                <div class="shoe-info">
                    <div class="brandname"><h4>{{ apiData.brandName }}</h4></div>
                    <div class="shoe-name">{{ apiData.name }}</div>
                    <div class="shoe-price"> {{ apiData.price.current.text }} </div>
                    <div class="shoe-color"> {{ apiData.colour }}</div>
                     <div class="shoe-color"><label for="cars">Size</label><br>
                    <select name="size" id="size">
                        <option value="six">6</option>
                        <option value="seven">7</option>
                        <option value="eight">8</option>
                        <option value="nine">9</option>
                        <option value="ten">10</option>
                    </select></div>
                    <div class="shoe-code"> Code:{{ apiData.productCode }}</div>
                     <div class="shoe-add-btn"><button class="add-btn">ADD TO BAG</button></div>


                </div>
            </div>
        </div>
        
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:"ShoeDetails",

    data(){
        return{
            apiData:[],
            shoe:require("../assets/shoe1.webp")
        }
    },

    mounted(){
        

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v3/detail',
  params: {id:this.$route.params.id },
  headers: {
    'X-RapidAPI-Key': 'a7d6170542msh95535dd546dd907p1d8c25jsn568bff2c8d3f',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  }
};

axios.request(options).then( (response) => {
	console.log(response.data);
    this.apiData = response.data
}).catch(function (error) {
	console.error(error);
});
    }

}
</script>

<style scoped>
.body{
    width: 70%;
    margin: 0 auto;
}
.shoedetails-container{
    display: flex;
  
}
.img-cont{
    width: 60%;
}
.details-cont{
    
    width: 40%;
}
.shoe-info{
    padding-left: 25px;
    
}
.shoe-info div{
    
    margin: 10px 0px 25px 0px;
}
.shoe-name{
    color:rgba(117,117,117,1);
    font-weight: 600;
    font-size: 20px;
}
.shoe-price,.shoe-color,.shoe-code{
    font-weight: 600;
    font-size: 20px;
}
select{
    width: 90%;
}
.add-btn{
    background-color: black;
    border: none;
    padding: 10px;
    color: white;
    width: 60%;
}
img{
     transition: transform .2s;
     width: 512px;
     height: 424px;
}
img:hover{
    transform: scale(1.1);
   
}

@media(max-width:1000px){
    .shoedetails-container{
    display:block;
  
}
.img-cont{
    width: 100%;
}
.details-cont{
    
    width: 100%;
}
img{
    transition: transform .2s;
    width: 100%;
    height: 250px;

}
img:hover{
    transform: scale(1.1);
   
}
.shoe-info div{
    
    margin: 8px 0px 20px 0px;
}
.shoe-name{
    
    font-weight: 400;
    font-size: 18px;
}
.shoe-price,.shoe-color,.shoe-code{
    font-weight: 400;
    font-size: 18px;
}

}

</style>>

