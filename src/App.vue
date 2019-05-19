<template>
  <div id="app">
    <div style="width: 100%; height: 50vh;">
      <LineChart
        :chartData="chartData"
        :chartOptions="chartOptions"
      ></LineChart>
    </div>
    <EvalList :model="model"></EvalList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EvalList from './components/EvalList.vue';
import Evaluation from './ts/evaluation';
import ServerSideDataManager from './ts/server-side-data-manager';
import Game from './ts/game';
import LineChart from './components/LineChart.vue';

@Component({
  components: {
    EvalList,
    LineChart,
  },
})
export default class App extends Vue {
  private model: Evaluation[] = [];
  private get chartData(): Chart.ChartData {
    return {
      labels: this.model.map((m) => m.game.name),
      datasets: [
        {
          label: '熱中度',
          data: this.model.map((m) => m.evalItems[0].value),
          backgroundColor: ['rgba(242, 95, 62, 0.1)'],
          borderColor: ['rgba(242, 95, 62, 10.8)'],
        },
        {
          label: '斬新さ',
          data: this.model.map((m) => m.evalItems[1].value),
          backgroundColor: ['rgba(62, 185, 242, 0.1)'],
          borderColor: ['rgba(62, 185, 242, 10.8)'],
        },
        {
          label: '物語性',
          data: this.model.map((m) => m.evalItems[2].value),
          backgroundColor: ['rgba(219, 202, 50, 0.1)'],
          borderColor: ['rgba(219, 202, 50, 10.8)'],
        },
        {
          label: '画像・音声',
          data: this.model.map((m) => m.evalItems[3].value),
          backgroundColor: ['rgba(130, 201, 108, 0.1)'],
          borderColor: ['rgba(130, 201, 108, 10.8)'],
        },
        {
          label: '遊びやすさ',
          data: this.model.map((m) => m.evalItems[4].value),
          backgroundColor: ['rgba(233, 131, 247, 0.1)'],
          borderColor: ['rgba(233, 131, 247, 10.8)'],
        },
        {
          label: 'その他',
          data: this.model.map((m) => m.evalItems[5].value),
          backgroundColor: ['rgba(0, 0, 0, 0.1)'],
          borderColor: ['rgba(0, 0, 0, 10.8)'],
        },
      ],
    };
  }
  private get chartOptions(): Chart.ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          { ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 } },
        ],
        yAxes: [
          { ticks: { beginAtZero: true, min: 0, max: 10 } },
        ],
      },
    };
  }

  public mounted(): void {
    ServerSideDataManager.getGameList().then((res) => {
      this.model = [];
      res.forEach((game) => {
        const ev = new Evaluation();
        ev.game = game;
        this.model.push(ev);
      });
    }).catch((error) => {
      alert(error);
    });
  }
}
</script>

<style lang="scss">
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50vh;
}
</style>
