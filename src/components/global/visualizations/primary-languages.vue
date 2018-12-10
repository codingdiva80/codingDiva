<template>
  <div class='vis'>
    <div>Primary Languages</div>
    <svg id="languages-pie-chart" />
    <div>
      The trend towards front-end technologies continues upward, while the 
      demand for Java remains relatively strong.
    </div>
  </div>
</template>

<script>
  import data from '@/assets/data/primary-languages';
  import PieChart from '@/components/global/charts/pie-chart';

  export default {
    name: 'PrimaryLanguages',
    methods: {
      createPieChart(){
        const options = {
          keyname: "language",
          width: 250,
          height: 250,
          id: "#languages-pie-chart"
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