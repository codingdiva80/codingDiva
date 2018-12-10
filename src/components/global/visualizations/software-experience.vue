<template>
  <div class='vis'>
    <div>Devs by Experience</div>
    <div>
      <svg id="xp-pie-chart" />
    </div>
    <div>
      With demand for software developers ever-increasing, we are seeing
      fairly large numbers of new developers being introduced to the 
      industry every year.  
    </div>
  </div>
</template>

<script>
import data from '@/assets/data/software-experience';
import PieChart from '@/components/global/charts/pie-chart';

  export default {
    name: 'SoftwareExperience',
    methods: {
      createPieChart(){
        const options = {
          keyname: "length",
          width: 250,
          height: 250,
          id: "#xp-pie-chart"
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
