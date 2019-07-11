<template>

   <div class="landingPage">

     <Header  :menuStatus="menuBarStatus" :menuStatusFunction="changeMenuBarStatus" />
     <MenuBar v-if="menuBarStatus" :menuStatus="menuBarStatus" />
      <!-- Page Content -->
   <div class="container page-top ">
        <h1 class="image-gallery">Image Gallery</h1>
        <hr>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/0.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/1.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/2.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/3.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/4.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/5.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/6.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/7.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/8.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/9.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/10.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/11.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/12.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/13.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/14.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/15.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
<!--                <a href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">-->
                    <img  src="../../assets/Gallery/16.jpg" class="zoom img-fluid "  alt="">

<!--                </a>-->
            </div>



       </div>
     <hr>
    </div>
     <ContactUsSection/>
   </div>

</template>

<script>
      $(document).ready(function(){
      $(".fancybox").fancybox({
            openEffect: "none",
            closeEffect: "none"
        });

        $(".zoom").hover(function(){

        $(this).addClass('transition');
      }, function(){

        $(this).removeClass('transition');
      });
    });

      import MenuBar from '../MenuBar/MenuBar'
      import Header from '../LandingPage/Header'
      import ContactUsSection from '../ContactUs/ContactUsSection'
    export default {
        name: "PhotoGallery",
      data:function () {
        return{
          menuBarStatus: false
        }
      },
      components: {ContactUsSection, MenuBar, Header},
      methods: {
        changeMenuBarStatus() {
          this.menuBarStatus = !this.menuBarStatus;
          // console.log(this.menuBarStatus)
        }
      }
    }



</script>

<style scoped lang="scss">
    hr{
        height: 0.01rem;
        margin-bottom: 10rem;
        color: white;
        background-color: white;
    }
      .landingPage{
        background-color:#262334;
        min-height: 100vh;
        color: #fff;
        font-size: 1.6rem;
        height: auto;
        width: 100%;
        overflow-x: hidden;
        position: relative;
    }
body {
  background-color:#1d1d1d !important;
  font-family: "Asap", sans-serif;
  color:#989898;
  margin:10px;
  font-size:16px;
}

.image-gallery{
  text-align: center;
  font-size: 4rem;
  font-weight: bolder;
  font-family: Poppins,sans-serif;
  margin-bottom: 5rem;
}

#demo {
  height:100%;
  position:relative;
  overflow:hidden;
}


.green{
  background-color:#6fb936;
}
        .thumb{
            margin-bottom: 30px;
        }

        .page-top{
            margin-top:85px;
        }


img.zoom {
    width: 100%;
    height: 200px;
    border-radius:5px;
    object-fit:cover;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
}


.transition {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}
    .modal-header {

     border-bottom: none;
}
    .modal-title {
        color:#000;
    }
    .modal-footer{
      display:none;
    }

</style>
