<template>
    <div>
        <div  data-aos="fade-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false" class="divider">
            <h3>Approach</h3>
            <hr>
        </div>
        <div class="approach">

            <div
              data-aos="fade-down-right"
              data-aos-delay="50"
              data-aos-duration="100"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"

              class="approach__content">
                <img
                   data-aos="fade-down-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
                  src="../../assets/images/Ellipse_oragange.png" alt="">
                <h1
                  data-aos="fade-down-right"
                  data-aos-delay="50"
                  data-aos-duration="100"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                > We are driven by passion and believe in innovation.</h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"

                > We are currently having our studio in Punjab, India. Our experienced team is capable enough
                    to take up clients from all around the globe. So if your from foreign country, you’re
                    most welcome.
                </p>
            </div>
            <div class="approach__circle">
<!--              <img src="../../assets/images/multi_cir.png" alt="">-->
                <!--<img class="approach__circle-1" src="../../assets/images/Ellipse_empty.png" alt="">-->
                <!--<img class="approach__circle-2" src="../../assets/images/Ellipse_empty.png" alt="">-->
                <!--<img class="approach__circle-3" src="../../assets/images/Ellipse_empty.png" alt="">-->
            </div>

            <div data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                 class="approach__map">
                <img  src="../../assets/images/world.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Approach"
    }
</script>

<style scoped lang="scss">
    .divider{
        margin: 15rem 6rem 0 6rem;
        font-family: Poppins,sans-serif;

    }
    hr{
        height: 0.01rem;
        margin-bottom: 10rem;
        color: white;
        background-color: white;
    }
    
    @media only screen and (max-width: 768px) {
       .approach{
        height: 100vh;
        padding: 6vw;
        font-family: Poppins,sans-serif;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-template-rows: auto 20rem  auto;
      position: relative;
        &__content{
            grid-column: 1/6;
            grid-row:1/2;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            /*background-color: red;*/
            height: 30rem;
            position: relative;
            max-width: 80vw;
             & img{
                position: absolute;
                top: 0;
                left: 0;
            }
            & h1{
                font-size: 10vw;
                z-index: 2;
            }

            & p{
                font-size: 1.8rem;
                /*max-width: 62rem;*/
                z-index: 2;
            }
        }

        &__circle{
            display: none;
        }

        &__map{
          z-index: 0;
            grid-column: 1/5;
            grid-row: 4/5;
          & img{
            max-width: 80vw;
            margin-top: 15vw;
          }
        }
    }
    }

  @media only screen and (min-width: 1024.1px) {
    .approach{
        height: 100vh;
        padding: 6rem;
        font-family: Poppins,sans-serif;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-template-rows: auto 20rem auto auto;
      position: relative;
        &__content{
            grid-column: 1/3;
            grid-row:1/2;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            /*background-color: red;*/
            height: 30rem;
            position: relative;
            & img{
                position: absolute;
                top: 0;
                left: 0;
            }
            & h1{
                font-size: 5rem;
                z-index: 2;
            }

            & p{
                font-size: 1.8rem;
                max-width: 62rem;
                z-index: 2;
            }
        }

        &__circle{
            grid-column: 3/6;
            grid-row: 1/2;
            position: absolute;
            &-1{
                transform: translate(8rem,0rem);
            }
            &-2{

            }
            &-3{
                transform: translate(7.5rem,-8.8rem);
            }
        }

        &__map{
          z-index: 0;
            grid-column: 2/5;
            grid-row: 4/5;
        }
    }
  }


  @media only screen and (min-width: 768px) {
    .approach{
        height: 100vh;
        padding: 6rem;
        font-family: Poppins,sans-serif;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-template-rows: auto 20rem auto auto;
      position: relative;
        &__content{
            grid-column: 1/3;
            grid-row:1/2;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            /*background-color: red;*/
            height: 30rem;
            position: relative;
            & img{
                position: absolute;
                top: 0;
                left: 0;
            }
            & h1{
                font-size: 3vw;
                z-index: 2;
            }

            & p{
                font-size: 1.3vw;
                max-width: 62rem;
                z-index: 2;
            }
        }

        &__circle{
            grid-column: 3/6;
            grid-row: 1/2;
          /*  position: absolute;
            &-1{
                transform: translate(8rem,0rem);
            }
            &-2{

            }
            &-3{
                transform: translate(7.5rem,-8.8rem);
            }*/
          & img{
            width: 30vw;
          }
        }

        &__map{
            grid-column: 2/5;
            grid-row: 4/5;
          & img{
            width: 65vw;
            height: 75vh;
          }
        }
    }
  }
</style>
