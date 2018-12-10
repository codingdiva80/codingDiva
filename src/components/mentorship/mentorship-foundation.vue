<template>
  <div>
    <MainHeader />
    <div class='centered-div padding-50'>
      <p>
        The mentorship area will allow those seeking help to connect to those who can offer advice and expertiese 
        to junior developers and students
      </p>
    </div>
    <MainFooter />
  </div>
</template>

<script>
  import MainHeader from '@/components/main/main-header';
  import MainFooter from '@/components/main/main-footer';

  export default {
    name: 'Mentorship', 
    components: {
      MainHeader,
      MainFooter,
    }
  }
</script>