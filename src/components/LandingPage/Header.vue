<template>
    <div class="header">
              <div class="header--logo">
                    <router-link class="animated bounce lightSpeedIn " to="/"><img src="../../assets/images/novus_logo.png" alt=""></router-link>
              </div>
        <div
            class="header--menu animated fadeInUp">
            <router-link  to="">About</router-link>
            <router-link to="">Approach</router-link>
            <router-link to="">Team</router-link>
            <router-link to="">Events</router-link>
            <router-link to="">Projects</router-link>
            <router-link to="">Contact Us</router-link>
            <router-link class=" animated bounce" to="gallery">Gallery</router-link>
            <router-link class="animated fadeInDown slow" id="reg" to="regForm">Register</router-link>


            <!--MOBILE VIEW MENU-->
           <router-link  class=" animated fadeInDown slow menu" to="#"><p @click="menuStatusFunction">Menu</p></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
          return{
          show:true
          }
        },
      props:{
        menuBarStatus:Boolean,
        menuStatusFunction:Function
      },

    }
</script>

<style scoped lang="scss">

  @media only screen and (max-width: 768px){
    .header{
        z-index: 500000000000;
        /*background-color: red;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8rem;
        &--logo{
            z-index: 500000000000;
            position: fixed;
            top: 2rem;
            display: flex;
            align-items: center;
            & img {
                height: 4rem;
                /*margin-top: 2rem;*/
                margin-left: 5rem;
            }
        }

        &--menu{
            z-index: 500000000000;
            position: fixed;
            top: 2rem;
            right: 0;
            /*padding-top: 2.8rem;*/
            padding-right: 5rem;
            display: flex;
            font-family: Poppins;
            justify-content: space-between;
            & a{
              display: none;
                /*color: #fff;*/
                /*margin-right: 2rem;*/

            }
            .menu{
              display: block;
              color: #fff;
              margin-right: 2rem;
            }
        }
    }
  }

  @media only screen and (min-width: 768px){
    .header{
        /*background-color: red;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8rem;
        &--logo{
            display: flex;
            align-items: center;
            & img {
                height: 4rem;
                /*margin-top: 2rem;*/
                margin-left: 5rem;
            }
        }

        &--menu{
            /*padding-top: 2.8rem;*/
            padding-right: 5rem;
            display: flex;
            font-family: Poppins;
            justify-content: space-between;
            & a{
                color: #fff;
                margin-right: 2rem;

            }
            & #reg{
                /*background-color: red;*/
                padding:0.4rem 2rem;
                margin-top: -0.4rem;
                border: solid #FF4E00 0.01rem;
            }
          .menu{
            display: none;
          }
        }
    }
  }



</style>
