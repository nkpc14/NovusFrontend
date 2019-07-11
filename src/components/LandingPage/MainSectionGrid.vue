<template>
    <div class="mainSection">

        <div class="mainSection--content">

            <h1     data-aos="zoom-out-right"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false">
                <span data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-delay="800"
                      data-aos-easing="ease-in-out"
                     class="mainSection--content-novus">Novus</span>
                is a digital studio
                that develop websites and
                Mobile applications.

            </h1>

        </div>
        <div  class="mainSection--arts">
          <img src="../../assets/images/multi.png" alt="">
            <!--<img class="mainSection&#45;&#45;arts-semi_cir_empty" src="../../assets/images/semi_cir_empty.png" alt="">-->
            <!--<img class="mainSection&#45;&#45;arts-semi_cir_fill" src="../../assets/images/semi_cir_fill.png" alt="">-->
            <!--<img class="mainSection&#45;&#45;arts-rectangle" src="../../assets/images/rectangle.png" alt="">-->
            <!--<img class="mainSection&#45;&#45;arts-Ellipse" src="../../assets/images/Ellipse.png" alt="">-->
            <!--<img class="mainSection&#45;&#45;arts-dots" src="../../assets/images/dots.png" alt="">-->
        </div>



        <div  data-aos="fade-up"

                      data-aos-delay="50"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
              class="mainSection--scroll">
            <p        data-aos="fade-up"
                      data-aos-delay="500"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false">
                Novus is a student organisation since 2017 led by aspiring minds and is driven by passion and believe in innovation.
                 We are a digital studio that develops websites and mobile applications for various businesses.
            </p>
            <div      data-aos="slide-right"
                      data-aos-delay="400"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                 class="mainSection--scroll-in">
                <p
                    >Scroll to see more</p>
                <img src="../../assets/images/Arrow.png" alt="">
            </div>
        </div>

        <div data-aos="fade-up"

                      data-aos-delay="50"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false" class="mainSection--photo">
            <p data-aos="fade-up"

                      data-aos-delay="500"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false">
                Innovation drives us and we are hunting for it; hunting hunting for people who stand
                out in crowd, like you.
            </p>

            <router-link to="">View Photos / videos</router-link>

        </div>

        <div data-aos="fade-up-left"

                      data-aos-delay="50"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false" class="mainSection--video">

            <!--<img src="../../assets/images/video.png" alt="">-->
          <video  controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
          Your browser does not support the video tag.
          </video>
        </div>
        </div>
</template>

<script>
    import Header from './Header'
    import axios from 'axios'
    export default {
        name: "MainSectionGrid",
        components:{
            Header
        },
      methods:{
      
      },
      created(){
            axios.get('api').then((response)=>{
              console.log(response);
              console.log('created!')
            }).catch(err =>{
              console.log(err)
            })
      }
    }
</script>

<style scoped lang="scss">

    @media only screen and (max-width: 768px)  {
      .mainSection{
      display: grid;
      grid-template-columns: auto  auto auto auto auto;
      grid-template-rows: auto auto;
      padding: 8vw;
      font-family: Poppins,sans-serif;
      grid-row-gap: 15rem;
      grid-column-gap: 13rem;
      &--content{
          grid-column: 1/6;
          grid-row: 1/2;
          /*padding: 2rem;*/
          font-size: 2.5vw;
          max-width: 80vw;
          &-novus{
              border-top:solid 0.2rem #FF4E00;
          }
      }

      &--arts{
          display: none;
          position: relative;
          grid-column:4/6;

      }

      &--scroll{
          grid-row:2/3;
          grid-column:1/6;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          font-size: 1.8rem;
          /*padding: 3rem;*/
      max-width: 80vw;
          &-in{
              display: none;
            /*margin-top: 4rem;*/
          }
      }

      &--photo{
      max-width: 80vw;
          grid-row:3/4;
          grid-column:1/6;
          display: flex;
          justify-content: space-between;
          align-items: end;
          flex-direction: column;
          font-size: 1.8rem;
          /*padding: 3rem;*/

          & a{
              color: #fff;
              border: solid 0.02rem #FF4E00;
              padding: 1rem 2rem;
              margin-top: 4rem;
              width: 90%;
            text-align: center;
          }
      }

      &--video{
          grid-column:1/6;
          width: 80vw;
        & video{
          width: 100%;
          height: 25rem;
        }

      }
  }
    }

    @media only screen and (min-width: 768.1px)  {
      .mainSection{
      display: grid;
      grid-template-columns: 10vw  auto auto auto auto;
      grid-template-rows: auto auto;
      padding: 6vw;
      font-family: Poppins,sans-serif;
      grid-row-gap: 15rem;
      grid-column-gap: 13rem;

      &--content{
          grid-column: 1/4;
          grid-row: 1/2;
          padding: 2rem;
          font-size: 1.2vw;
          &-novus{
              border-top:solid 0.2rem #FF4E00;
          }
      }

      &--arts{
          position: relative;
          grid-column:5/6;

          & img{
            width: 20vw;
          }

          /*&-semi_cir_empty{
              transform: translate(15rem,-6rem);
          }
          &-semi_cir_fill{
              transform: translate(1rem,5rem);
          }
          &-rectangle{
                transform: translate(5rem,15rem);
          }
          &-Ellipse{
            transform: translate(-23rem,5rem);
          }
          &-dots{
            transform: translate(40rem,-12rem);
          }*/
      }

      &--scroll{
          grid-row:2/3;
          grid-column:1/3;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          font-size: 1.2vw;
          padding-left: 2rem;
          &-in{
              display: flex;
          }
      }

      &--photo{
          grid-row:2/3;
          grid-column:3/5;
          display: flex;
          justify-content: space-between;
          align-items: end;
          flex-direction: column;
          font-size: 1.2vw;
          /*padding: 3rem;*/

          & a{
            font-size: 1.2rem;
              color: #fff;
              border: solid 0.02rem #FF4E00;
              padding: 1rem 2rem;
          }
      }

      &--video{
          grid-column:5/6;
          padding: 1rem;
          & video{
            width: 30vw;
          }

      }
  }
    }


</style>
