<template>
    <div class="landingPage">
          <Header :menuStatus="menuBarStatus" :menuStatusFunction="changeMenuBarStatus" />
          <MenuBar v-if="menuBarStatus" :menuStatus="menuBarStatus" class="Menubar" />
          <!--<PhotoGallery v-if="$route.params.page === ''" />-->
          <MainSectionGrid v-if="!menuBarStatus" />
          <Approach v-if="!menuBarStatus" class="Approach"/>
          <EventSection v-if="!menuBarStatus" class="EventSection"/>
          <ProjectSection v-if="!menuBarStatus" />
          <ContactUsSection  v-if="!menuBarStatus" />

    </div>
</template>

<script>
    import MainSectionGrid from "./LandingPage/MainSectionGrid";
    import Approach from './Approach/Approach';
    import Header from './LandingPage/Header';
    import EventSection from './Events/EventSection';
    import ProjectSection from './Projects/ProjectsSection';
    import ContactUsSection from './ContactUs/ContactUsSection';
    import MenuBar from './MenuBar/MenuBar';
    import PhotoGallery from './PhotoGallery/PhotoGallery'
    import TeamHierarchy from './TeamHierarchy/TeamHierarchy'
    export default {
        name: "LandingPage",
        components: {
            MainSectionGrid,
            Approach,
            Header,
            EventSection,
            ProjectSection,
            ContactUsSection,
            MenuBar,
            PhotoGallery,
            TeamHierarchy
        },
      data:function () {
        return{
          menuBarStatus: false
        }
      },
      computed:{

      },
      methods:{
          changeMenuBarStatus(){
              this.menuBarStatus = !this.menuBarStatus;
              // console.log(this.menuBarStatus
          }
      },
    }
</script>

<style scoped lang="scss">
    .Menubar{
      position: absolute;
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

    .Approach{
        margin-top: 10rem;
    }

    .EventSection{
        margin-top: 30rem;
    }
</style>
