<script lang="ts">
import { Component, Prop, Mixins, Vue } from 'vue-property-decorator';
import Chart from 'chart.js';
import { mixins, Line } from 'vue-chartjs';

@Component({})
export default class LineChart extends Mixins(Line, mixins.reactiveProp) {
  @Prop() public chartData!: Chart.ChartData;
  @Prop() public chartOptions!: Chart.ChartOptions;

  public mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  }
}
</script>
