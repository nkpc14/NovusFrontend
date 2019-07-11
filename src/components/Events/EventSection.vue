<template>
    <div>

        <div   data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
               class="divider">
            <h3>Events</h3>
            <hr>
        </div>
        <div class="events">
            <div
               class="events__info">
                <h3 data-aos="slide-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in"
                data-aos-mirror="true"
                data-aos-once="false">
                  <span>Join us</span> on our live events.</h3>
                <p
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  class="events__info">
                    We regularly keep on organising events inside our university
                    so anyone who is interested could reach us over there.
                    We’ll be really happy to assist you.
                </p>
            </div>

            <div class="events__main">
                <p class="events__main--current-event">Current event</p>
                <div
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                  class="events__main--event">
                    <div>
                        <h3>Event Title</h3>
                        <h4>Tagline for the event</h4>
                    </div>
                    <div>
                        <p>Ticket Price: <span>$5</span></p>
                    </div>
                </div>
                <p class="events__main--last">Last events</p>
                <div
                      data-aos="slide-up"
                      data-aos-offset="100"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                  class="events__main--lastevents">
                    <div class="events__main--lastevents--in">
                        <h4>Event Title</h4>
                        <span>Tagline</span>
                    </div>
                    <div class="events__main--lastevents--in">
                        <h4>Event Title</h4>
                        <span>Tagline</span>
                    </div>
                    <div class="events__main--lastevents--in events__main--lastevents--in-lastIndex">
                        <h4>Event Title</h4>
                        <span>Tagline</span>
                    </div>
                </div>
                <div
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-delay="500"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                  class="events__main--eventDetails">
                    <h4>About the event</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                  class="events__main--venue">
                    <p>Venue</p>
                    <p>Lovely Professional University,
                        Punjab, 144007, IN.</p>
                </div>
                <div
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="400"
                      data-aos-duration="600"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      class="events__main--date">
                    <p>Date</p>
                    <span>Friday, June 14</span>
                </div>
                <div

                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="1000"
                      data-aos-duration="100"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                  class="events__main--seeMore">
                    <a href="">See all events</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "EventSection",
        methods:{

        },
        created(){
            axios.get('api').then((response)=>{
              console.log(response);
              const events = response.data
              const eventList = []
              for( let event in events){
                    const id = events[event].id
                    const title = events[event].title
                    const image = events[event].image
                    const status= events[event].status
                    const tag_line = events[event].tag_line
                    const ticket_Price = events[event].ticket_Price
                    const time_of_event = events[event].time_of_event
                    const venue =  events[event].venue
              }

            }).catch(err =>{
              console.log(err)
            })
        }
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
    @media only screen and (max-width: 768px){
      .events{
        &__info{
            font-family: Poppins,sans-serif;
            & h3{
                font-size: 8vw;
                padding: 6rem;
                & span{
                    color: #FF4E00;
                }
            }

            & p{
                padding-left: 6rem;
                max-width: 65vw;
                font-size: 2rem;
            }
        }

        &__main{
            display: grid;
            margin-top: 8rem;
            padding-bottom: 4rem;
            grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
            grid-template-rows: auto auto auto auto auto ;
            font-family: Poppins,sans-serif;
            &--current-event{
                grid-column: 1/6;
                grid-row: 1/2;
                display: flex;
                justify-content: center;
                /*background-color: chartreuse;*/
                font-size: 3.5rem;
                font-weight: 800;
            }
            &--event{
                grid-column: 1/6;
                grid-row: 2/3;
                background-color: #444153;
                padding: 3vw;
                height: 30rem;
                margin-left: 6rem;
                margin-right: 8rem;
                margin-top: 2rem;
                display: flex;
                flex-direction: column;
                align-items: end;
                justify-content: space-between;

                & h3{
                    font-size: 5vw;
                }
                & h4{
                    font-weight: 300;
                }
                & p{
                    font-weight: bold;
                }
                & span{
                    font-size: 3rem;
                    font-weight: 700;
                    color: #FF4E00;
                }
            }

            &--eventDetails{
                grid-column: 1/6;
                grid-row: 3/4;
                /*background-color: black;*/
                padding: 7rem;
                & h4{
                    font-size: 6vw;
                    margin-bottom: 1rem;
                }
            }
            &--venue{
                grid-column: 1/3;
                grid-row: 4/5;
                /*background-color: rebeccapurple;*/
                padding-left: 7rem;
            }
            &--date{
                grid-column: 1/3;
                grid-row: 5/6;
                padding-left: 7rem;
              padding-top: 2rem;
              /*background-color: green;*/
            }
            &--seeMore{
                grid-column: 1/6;
                grid-row: 10/11;
                /*background-color: red;*/
                margin-left: 20%;
                margin-top: 3rem;
                & a{
                    color: #fff;
                    border-bottom: solid 0.02rem #FF4E00;
                }
            }
            &--last{
                grid-column: 1/6;
                grid-row: 7/8;
                padding-left: 7rem;
                font-size: 3rem;
                font-weight: 700;
                color: #FF4E00;
                padding-top: 5rem;
              padding-bottom: 5rem;
              /*background-color: aquamarine;*/
            }
            &--lastevents{
                /*background-color: pink;*/
                grid-row: 9/10;
                grid-column: 1/6;
                padding-left: 1vw;
                &--in{
                    background-color: #444153;
                    margin: 1rem;
                    height: 16rem;
                    width: 80vw;
                    display: flex;
                    align-items: start;
                    justify-content: end;
                    padding: 2rem;
                    flex-direction: column;
                    & h4{
                        font-size: 2rem;
                    }
                    & span {
                      font-weight: 300;
                    }

                    &-lastIndex{
                        background: linear-gradient(rgba(#444153,1),rgba(#fff,0));
                    }

                }
            }
        }
    }
    }




    @media only screen and (min-width: 1290.1px){
      .events{
        &__info{
            font-family: Poppins,sans-serif;
            & h3{
                font-size: 6rem;
                padding: 6rem;
                & span{
                    color: #FF4E00;
                }
            }

            & p{
                padding-left: 6rem;
                max-width: 66rem;
                font-size: 2rem;
            }
        }

        &__main{
            display: grid;
            margin-top: 8rem;
            padding-bottom: 4rem;
            grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
            grid-template-rows: auto auto auto auto auto ;
            font-family: Poppins,sans-serif;
            &--current-event{
                grid-column: 1/4;
                grid-row: 1/2;
                display: flex;
                justify-content: center;
                /*background-color: chartreuse;*/
                font-size: 3.5rem;
                font-weight: 800;
            }
            &--event{
                grid-column: 1/4;
                grid-row: 2/4;
                background-color: #444153;
                padding: 3rem;
                height: 30rem;
                margin-left: 6rem;
                margin-right: 8rem;
                margin-top: 2rem;
                display: flex;
                align-items: end;
                justify-content: space-between;

                & h3{
                    font-size: 5rem;
                }
                & h4{
                    font-weight: 300;
                }
                & p{
                    font-weight: bold;
                }
                & span{
                    font-size: 3rem;
                    font-weight: 700;
                    color: #FF4E00;
                }
            }

            &--eventDetails{
                grid-column: 1/3;
                grid-row: 4/5;
                /*background-color: black;*/
                padding: 7rem;
                & h4{
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
            }
            &--venue{
                grid-column: 1/3;
                grid-row: 5/6;
                /*background-color: rebeccapurple;*/
                padding-left: 7rem;
            }
            &--date{
                grid-column: 3/4;
                grid-row: 5/6;
                /*background-color: green;*/
            }
            &--seeMore{
                grid-column: 4/6;
                grid-row: 5/6;
                /*background-color: red;*/
                margin-left: 30%;
                & a{
                    color: #fff;
                    border-bottom: solid 0.02rem #FF4E00;
                }
            }
            &--last{
                grid-column: 4/6;
                grid-row: 1/2;
                /*background-color: aquamarine;*/
            }
            &--lastevents{
                /*background-color: pink;*/
                grid-row: 2/5;
                grid-column: 4/6;
                &--in{
                    background-color: #444153;
                    margin: 1rem;
                    height: 16rem;
                    width: 30rem;
                    display: flex;
                    align-items: start;
                    justify-content: end;
                    padding: 2rem;
                    flex-direction: column;
                    & h4{
                        font-size: 2rem;
                    }
                    & span {
                      font-weight: 300;
                    }

                    &-lastIndex{
                        background: linear-gradient(rgba(#444153,1),rgba(#fff,0));
                    }

                }
            }
        }
    }
    }



    @media only screen and (min-width: 768px){
      .events{
        &__info{
            font-family: Poppins,sans-serif;
            & h3{
                font-size: 3vw;
                padding: 6rem;
                & span{
                    color: #FF4E00;
                }
            }

            & p{
                padding-left: 6rem;
                max-width: 66rem;
                font-size: 1.2vw;
            }
        }

        &__main{
            display: grid;
            margin-top: 8rem;
            padding-bottom: 4rem;
            grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
            grid-template-rows: auto auto auto auto auto ;
            font-family: Poppins,sans-serif;
            &--current-event{
                grid-column: 1/4;
                grid-row: 1/2;
                display: flex;
                justify-content: center;
                /*background-color: chartreuse;*/
                font-size: 3rem;
                font-weight: 800;
            }
            &--event{
                grid-column: 1/4;
                grid-row: 2/4;
                background-color: #444153;
                padding: 3rem;
                height: 30rem;
                margin-left: 6rem;
                margin-right: 8rem;
                margin-top: 2rem;
                display: flex;
                align-items: end;
                justify-content: space-between;

                & h3{
                    font-size: 5vw;
                }
                & h4{
                    font-weight: 300;
                }
                & p{
                    font-weight: bold;
                }
                & span{
                    font-size: 3vw;
                    font-weight: 700;
                    color: #FF4E00;
                }
            }

            &--eventDetails{
                grid-column: 1/3;
                grid-row: 4/5;
                /*background-color: black;*/
                padding-left: 7rem;
                padding-top: 7rem;
                & h4{
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
            }
            &--venue{
                margin-top: 4rem;
                grid-column: 1/3;
                grid-row: 5/6;
                /*background-color: rebeccapurple;*/
                padding-left: 7rem;
            }
            &--date{
                margin-top: 4rem;
                grid-column: 3/4;
                grid-row: 5/6;
                /*background-color: green;*/
            }
            &--seeMore{
                margin-top: 4rem;
                grid-column: 4/6;
                grid-row: 5/6;
                /*background-color: red;*/
                margin-left: 30%;
                & a{
                    color: #fff;
                    border-bottom: solid 0.02rem #FF4E00;
                }
            }
            &--last{
                grid-column: 4/6;
                grid-row: 1/2;
                /*background-color: aquamarine;*/
            }
            &--lastevents{
                /*background-color: pink;*/
                grid-row: 2/5;
                grid-column: 4/6;
                &--in{
                    background-color: #444153;
                    margin-right: 6rem;
                    height: 16rem;
                    width: auto;
                    display: flex;
                    align-items: start;
                    justify-content: end;
                    padding: 2rem;
                    flex-direction: column;;
                    & h4{
                        font-size: 2rem;
                    }
                    & span {
                      font-weight: 300;
                    }

                    &-lastIndex{
                        background: linear-gradient(rgba(#444153,1),rgba(#fff,0));
                    }

                }
            }
        }
    }
    }
</style>
