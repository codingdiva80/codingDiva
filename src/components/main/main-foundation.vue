<template>
  <div>
    <div id='main'>
      <MainHeader />
      <MainBody />
    </div>
    <div id='visualizations-container'>
      <DevsByGender />
      <PrimaryLanguages />
      <SoftwareExperience />
    </div>
    <MainFooter />
  </div>

</template>

<script>
import MainHeader from './main-header';
import MainBody from './main-body';
import MainFooter from './main-footer';
import DevsByGender from '@/components/global/visualizations/devs-by-gender';
import PrimaryLanguages from '@/components/global/visualizations/primary-languages';
import SoftwareExperience from '@/components/global/visualizations/software-experience';

export default {
 name: 'MainComponent', 
 components: {
   MainHeader,
   MainBody,
   MainFooter,
   DevsByGender,
   PrimaryLanguages,
   SoftwareExperience
 }
}
</script>

<style>
  #main {
    width: 100%;
    height: 600px;
    background-image: url('../../assets/images/bg2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  #visualizations-container {
    display: flex;
    width: 1000px;
    margin: 0 auto;
    justify-content: center;
  }
  .vis {
    margin-right: 20px;
    margin-top: 20px;
    text-align: center;
  }
  
</style>
