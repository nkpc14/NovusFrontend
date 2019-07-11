<template>
  <div class="landingPage">

    <Header :menuStatus="menuBarStatus" :menuStatusFunction="changeMenuBarStatus"/>
    <MenuBar v-if="menuBarStatus" :menuStatus="menuBarStatus"/>
    <div class="login-box">
      <div class="heading">
        <h2>Event Registration</h2>
      </div>

      <form>
        <div class="form-data">
          <label>Name</label>
          <input type="text" name="uname" placeholder="Enter your name">
          <label>Registration No.</label>
          <input type="text" name="uname" placeholder="Registration number">
          <label>Email</label>
          <input type="text" name="uemail" placeholder="Enter your email">
          <label>Mobile Number</label>
          <input type="number" name="umobile" placeholder="Enter your mobile number">
          <label>Course</label>
          <input type="text" name="course" placeholder="Choose your password">
          <label>Batch year</label>
          <input type="text" name="year" placeholder="Repeat your password">
          <label>Batch year</label>
          <select class="select">
            <option>Event 1</option>
            <option>Event 2</option>
            <option>Event 3</option>
          </select>
          <input class="hover" type="submit" name="submit_signup" value="Register">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import MenuBar from '../MenuBar/MenuBar'
  import Header from '../LandingPage/Header'

  export default {
    name: "RegistrationForm",
    components: {
      MenuBar,
      Header
    }, data: function () {
      return {
        menuBarStatus: false
      }
    },
    methods: {
      changeMenuBarStatus() {
        this.menuBarStatus = !this.menuBarStatus;
        // console.log(this.menuBarStatus)
      }
    }
  }
</script>

<style scoped lang="scss">

  hr {
    height: 0.01rem;
    margin-bottom: 10rem;
    color: white;
    background-color: white;
  }

  .landingPage {
    background-color: #262334;
    min-height: 100vh;
    color: #fff;
    font-size: 1.6rem;
    height: auto;
    width: 100%;
    overflow-x: hidden;
    position: relative;
  }
  .hover:hover{
    background-color: #ffffff;
    color: #000;
    cursor: pointer;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  .heading {
    position: relative;
    text-align: center;
    color: white;

    margin-top: 30px;
    margin-bottom: 10px;
  }

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    height: auto;
    width: 40%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: orangered solid 0.1rem;
    margin-top: 80px;

  }

  .logo {
    position: relative;
    max-width: 150px;
    width: 100%;
    max-height: 150px;
    height: 100%;
    left: 50%;
    background: #ccc;

    border-radius: 50%;
    border: 4px solid #fff;
    transform: translate(-50%, 0%);
  }

  .logo img {
    position: relative;
    max-width: 150px;
    width: 100%;
    border-radius: 50%;
    max-height: 150px;
    height: 100%;
  }

  .form-data {
    position: relative;

    width: auto;
    margin-top: 10px;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
  }

  label {
    position: relative;
    font-weight: bold;
    padding: 5px 0px;
    margin-top: 10px;
    color: white;
  }

  .select,input {
    position: relative;
    padding: 16px;
    margin: 2px 0px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 16px;

  }

  input[type="submit"] {
    position: relative;
    margin-top: 30px;
    padding: 12px;
    background: transparent;
    border: 2px solid #fff;
    font-size: 22px;
    font-weight: bold;
    color: white;
  }

  .checkbox {
    position: relative;
    padding: 5px 0px;
    padding-left: 20px;
    width: auto;
  }

  .checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0
  }

  .checkmark {
    position: absolute;
    top: 10px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
  }

  .checkbox input:checked ~ .checkmark {
    background-color: #fff;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox .checkmark:after {
    left: 5px;
    top: 2px;
    width: 3px;
    height: 7px;
    border: solid purple;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  @media(max-width: 768px) {
    .login-box {
      position: absolute;
      top: 0px;
      height: auto;

      left: 0%;
      max-width: 768px;
      width: 100%;
      transform: translate(0%, 0%);
      padding: 0px;
      border: orangered solid 0.1rem;
      border-radius: 0px;
    }
    .form-data {
      position: relative;

      width: auto;
      margin-top: 10px;
      padding: 30px 30px;
      display: flex;
      flex-direction: column;
    }
  }
</style>
