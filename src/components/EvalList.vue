<template>
  <table class="eval-list">
    <thead class="eval-list__thead">
      <tr class="eval-list__tr eval-list__header-color">
        <th class="eval-list__tr__title eval-list__hidariue-color"></th>
        <th v-for="item in header.evalItems" :key="item.key" class="eval-list__tr__eval-item">
          {{ item.key }}
        </th>
        <th class="eval-list__tr__sum">合計</th>
        <th class="eval-list__tr__comment">コメント</th>
      </tr>
    </thead>
    <tbody class="eval-list__tbody">
      <EvalItem
        v-for="(item, index) in model"
        :key="index"
        :model="item">
      </EvalItem>
    </tbody>
    </table>
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

<style lang="scss">
.eval-list{
  display: flex;
  flex-direction: column;
  position: relative;
  &__thead{
    display: flex;
    position: sticky;
    top: 0;
  }
  &__tbody{
    display: flex;
    flex-direction: column;
  }
  &__tr{
    display: flex;
    &__title{
      display: flex;
      width: 12em;
    }
    &__eval-item{
      display: flex;
      width: 4em;
    }
    &__sum{
      display: flex;
      width: 4em;
    }
    &__comment{
      display: flex;
      width: 20em;
    }
  }
  &__header-color{
    background-color: $col_header;
  }
  &__hidariue-color{
    background-color: $col_hidariue;
  }
  &__normal-color{
    background-color: $col_base;
  }
}
</style>
