<template>
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th v-for="item in header.evalItems" :key="item.key">{{ item.key }}</th>
          <th>合計</th>
        </tr>
      </thead>
      <EvalItem
        v-for="(item, index) in model"
        :key="index"
        :model="item">
      </EvalItem>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import EvalItem from './EvalItem.vue';
import Evaluation from '../ts/evaluation';

@Component({
  components: {
    EvalItem,
  },
})
export default class EvalList extends Vue {
  @Prop() public model!: Evaluation[];
  private header: Evaluation = new Evaluation();
}
</script>
