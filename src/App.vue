<template>
  <div id="app">
    <EvalList :model="model"></EvalList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EvalList from './components/EvalList.vue';
import Evaluation from './ts/evaluation';
import ServerSideDataManager from './ts/server-side-data-manager';
import Game from './ts/game';
import MyStorage from './ts/my-storage';

@Component({
  components: {
    EvalList,
  },
})
export default class App extends Vue {
  private model: Evaluation[] = [];

  public mounted(): void {
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
  justify-content: center;
  margin-bottom: 50vh;
}
</style>
