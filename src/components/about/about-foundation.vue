<template>
  <div>
    <MainHeader />
    <div class='centered-div padding-50'>
      <p>
        The goal of codingDiva is to have a web portal where women can feel welcomed and mentored 
        as they begin their journey into tech. We want to provide online resources for learning, 
        gaining experience, and networking with others in the technical arena, which, 
        can feel both daunting and intimidating at times.
      </p>
      <p>For now, the primary focus of CodingDiva is to provide an easy-to-use job search to leverage 
        opportunities for junior, female, and new developers.
      </p>
    </div>
    <MainFooter />
  </div>
</template>

<script>
  import MainHeader from '@/components/main/main-header';
  import MainFooter from '@/components/main/main-footer';

  export default {
    name: 'About', 
    components: {
      MainHeader,
      MainFooter,
    }
  }
</script>