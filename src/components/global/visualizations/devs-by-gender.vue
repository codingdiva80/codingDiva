<template>
  <div class='vis'>
    <div id='devs-by-gender-container'>Devs by gender</div>
    <div><svg id="gender-pie-chart" /></div>
    <div>
      With only 7% of the engineering workforce being female, 
      the industry needs to encourge more female participation
      now more than ever.
    </div>
  </div>
</template>

<script>
  import data from '@/assets/data/devs-by-gender';
  import PieChart from '@/components/global/charts/pie-chart';

  export default {
    name: 'DevsByGender',
    methods: {
      createPieChart(){
        const options = {
          keyname: "gender",
          width: 250,
          height: 250,
          id: "#gender-pie-chart"
        }
        const pieChart = new PieChart(options);
        pieChart.create(data);
      }
    },
    mounted() {
      this.createPieChart();
    }
  }
</script>



