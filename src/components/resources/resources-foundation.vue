<template>
  <div>
    <MainHeader />
    <div class='centered-div padding-50'>
      <p>
        This area of the site is under development, but it will eventually be a place where
        those seeking to learn more about web development can find a curated cache of resources around
        the web to help you get started with your journey into web programming. 
      </p>
    </div>
    <MainFooter />
  </div>
</template>

<script>
  import MainHeader from '@/components/main/main-header';
  import MainFooter from '@/components/main/main-footer';

  export default {
    name: 'Resources', 
    components: {
      MainHeader,
      MainFooter,
    }
  }
</script>