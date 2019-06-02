<template>
  <div id="app">
    <div style="width: 100%; flex: 1; overflow-y: scroll; display: flex; justify-content: center;">
      <EvalList :model="model" @sort="sort"></EvalList>
    </div>
    <div style="flex: 1; width: 100%;">
      <LineChart
        :chartData="chartData"
        :chartOptions="chartOptions"
      ></LineChart>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EvalList from './components/EvalList.vue';
import Evaluation from './ts/evaluation';
import ServerSideDataManager from './ts/server-side-data-manager';
import Game from './ts/game';
import MyStorage from './ts/my-storage';
import LineChart from './components/LineChart.vue';
import * as firebase from './ts/firebase-config';

@Component({
  components: {
    EvalList,
    LineChart,
  },
})
export default class App extends Vue {
  private model: Evaluation[] = [];
  private isAsc: boolean = false;
  private get visibleModel() { return this.model.filter((e) => e.visible); }
  private get chartData(): Chart.ChartData {
    return {
      labels: this.visibleModel.map((m) => m.game.name),
      datasets: [
        {
          label: '熱中度',
          data: this.visibleModel.map((m) => m.evalItems[0].value),
          backgroundColor: ['rgba(242, 95, 62, 0.1)'],
          borderColor: ['rgba(242, 95, 62, 10.8)'],
        },
        {
          label: '斬新さ',
          data: this.visibleModel.map((m) => m.evalItems[1].value),
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
          data: this.visibleModel.map((m) => m.evalItems[3].value),
          backgroundColor: ['rgba(130, 201, 108, 0.1)'],
          borderColor: ['rgba(130, 201, 108, 10.8)'],
        },
        {
          label: '遊びやすさ',
          data: this.visibleModel.map((m) => m.evalItems[4].value),
          backgroundColor: ['rgba(233, 131, 247, 0.1)'],
          borderColor: ['rgba(233, 131, 247, 10.8)'],
        },
        {
          label: 'その他',
          data: this.visibleModel.map((m) => m.evalItems[5].value),
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
          { ticks: { autoSkip: false, maxRotation: 15, minRotation: 15 } },
        ],
        yAxes: [
          { ticks: { beginAtZero: true, min: 0, max: 10 } },
        ],
      },
    };
  }

  public sort(key: string) {
    this.isAsc = !this.isAsc;
    this.model = this.model.sort((a, b) => {
      if (key === '合計') {
        const aSum = a.evalItems.map((e) => e.value).reduce((prev, curr) => prev + curr);
        const bSum = b.evalItems.map((e) => e.value).reduce((prev, curr) => prev + curr);
        if (aSum === bSum) {
          return 0;
        } else if (aSum < bSum) {
          return this.isAsc ? 1 : -1;
        } else {
          return this.isAsc ? -1 : 1;
        }
      }
      const aa = a.evalItems.find((e) => e.key === key);
      const bb = b.evalItems.find((e) => e.key === key);
      if (!aa || !bb || aa.value === bb.value) {
        return 0;
      } else if (aa.value < bb.value) {
        return this.isAsc ? 1 : -1;
      } else {
        return this.isAsc ? -1 : 1;
      }
    });
  }

  public mounted(): void {
    const fb = firebase.default.connect().firestore();
    fb.collection('users').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        alert(JSON.stringify(doc.data()));
      });
    });
    ServerSideDataManager.getGameList().then((res) => {
      this.model = [];
      res.forEach((game) => {
        const ev = new Evaluation();
        ev.game = game;
        this.model.push(ev);
      });
      return (this.$store.state.storage as MyStorage).loadAll();
    }).then((savedData) => {
      this.model.forEach((m) => {
        const sv = savedData.find((s) => s.game.id === m.game.id);
        if (sv !== undefined) { Object.assign(m, sv); }
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
  width: 100%;
  height: 100%;
}
</style>
