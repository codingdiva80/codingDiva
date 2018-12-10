import * as d3 from 'd3';

export default class PieChart {

  constructor(options={}){
    this.keyname = (options.keyname) ? options.keyname : "Key";
    this.svgWidth = (options.width) ? options.width : 250;
    this.svgHeight = (options.height) ? options.height : 250;
    this.id = (options.id) ? options.id : "svg";
    this.radius = Math.min(this.svgWidth, this.svgHeight)/2;
    this.border = (options.border) ? options.border : true;
    this.colorScale = d3.scaleOrdinal(d3.schemeDark2);
  }

  create(data){
    this.data = data;
    this.setSvg(); 
    this.setGroupItem();
    this.createPieChart();
  }

  setSvg(){
    this.svg = d3.select(this.id)
                 .attr('width', this.svgWidth)
                 .attr('height', this.svgHeight);
  }

  setGroupItem(){
    this.g = this.svg.append('g')
                     .attr('transform', `translate(${this.radius}, ${this.radius})`);
  }

  createPieChart(){
    const self = this;
    const pie = d3.pie().value( d => d.pct);

    const path = d3.arc()
                   .outerRadius(self.radius)
                   .innerRadius(0);

    const arc = this.g.selectAll('arc')
                      .data(pie(self.data))
                      .enter()
                      .append('g');

    arc.append('path')
        .attr('d', path)
        .attr('fill', d => {
          return self.colorScale(d.data.pct);
        });

    const label = d3.arc()
                    .outerRadius(this.radius)
                    .innerRadius(0);

    arc.append('text')
        .attr('transform', d => `translate(${label.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .text( d => `${d.data[this.keyname]}:${d.data.pct}`);
      
    if(this.border){
      this.addBorder();
    }

  }

  addBorder(){

  }


}