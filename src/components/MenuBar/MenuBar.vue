<template>
    <div class="menubar">
            <router-link to="">About</router-link>
            <router-link to="">Approach</router-link>
            <router-link to="">Team</router-link>
            <router-link to="">Events</router-link>
            <router-link to="">Projects</router-link>
            <router-link to="">Contact Us</router-link>
            <router-link class=" animated bounce" to="gallery">Gallery</router-link>
            <router-link class="animated fadeInDown slow" id="reg" to="regForm">Register</router-link>
    </div>
</template>

<script>
    export default {
        name: "MenuBar",
        props:{
          menuBarStatus:Boolean,

        }
    }


</script>

<style scoped lang="scss">
  .menubar{
    display: none;
  }

@media only screen and (max-width: 768px) {
      .menubar{
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 91vh;
        background-color: #262334;
        justify-content: center;
        align-items: center;
        z-index: 500000000;
        position: fixed;
        top: 9vh;
      & a{
        color: #ffffff;
        font-family: Poppins,sans-serif;
        padding: 2.5rem;
        width: 60vw;
        text-align: center;
        font-weight: bolder;
        &:hover{
          background-color: #ffffff;
          color:#262334 ;
          transition: all 1s;
        }
        &:active{
          background-color: rgba(#ffffff,0.2);
          color:#262334 ;
          transition: all 1s;
        }
      }
        #reg{
          color: #FF4E00;
        }
    }
}

</style>
