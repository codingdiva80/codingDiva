<template>
  <div>
    <div id='main'>
      <MainHeader />
      <MainWelcome />
    </div>
    <MainFooter />
  </div>

</template>

<script>
import MainHeader from './main-header';
import MainWelcome from './main-welcome';
import MainFooter from './main-footer';

export default {
 name: 'MainComponent', 
 components: {
   MainHeader,
   MainWelcome,
   MainFooter
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
</style>
