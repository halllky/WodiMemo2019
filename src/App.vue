<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EvalList from './components/EvalList.vue';
import Evaluation from './ts/evaluation';
import ServerSideDataManager from './ts/server-side-data-manager';
import Game from './ts/game';

@Component({
  components: {
    EvalList,
  },
})
export default class App extends Vue {
  public mounted(): void {
    ServerSideDataManager.getGameList().then((res) => {
      alert(res);
    }).catch((error) => {
      alert(error);
    });
  }
}
</script>
