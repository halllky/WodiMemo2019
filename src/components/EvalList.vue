<template>
  <table class="eval-list">
    <thead class="eval-list__thead">
      <tr class="eval-list__tr eval-list__header-color">
        <th class="eval-list__tr__title eval-list__hidariue-color"></th>
        <th v-for="item in header.evalItems" :key="item.key"
          class="eval-list__tr__eval-item eval-list__header"
          @click="sort(item.key)">
            <a v-text="item.key" class="eval-list__header__text"></a>
        </th>
        <th class="eval-list__tr__sum eval-list__header" @click="sort('合計')">
          <a class="eval-list__header__text">合計</a>
        </th>
        <th class="eval-list__tr__comment">コメント</th>
        <th class="eval-list__tr__visible">
          <label style="width: 100%; height: 100%;">
            <input type="checkbox" :checked="isAllItemsVisible" @input="switchVisible">
            グラフに表示
          </label>
        </th>
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
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
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
  private get isAllItemsVisible() { return this.model.some((m) => m.visible); }
  @Emit() public sort(key: string) {/* */}
  private switchVisible() {
    if (this.model.some((m) => m.visible)) {
      this.model.forEach((m) => m.visible = false);
    } else {
      this.model.forEach((m) => m.visible = true);
    }
  }
}
</script>

<style lang="scss">
.eval-list{
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: $col_base;
  border-left: 1px solid $col_hidariue;
  border-top: 1px solid $col_hidariue;
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
    &__visible{
      display: flex;
      justify-content: center;
      width: 5em;
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
  &__header{
    justify-content: center;
    align-items: center;
    &:hover{
      color: darken($color: $col_header, $amount: 30);
      cursor: pointer;
    }
    &__text{
      text-decoration: underline;
    }
  }
  & th,td{
    border-right: 1px solid $col_hidariue;
    border-bottom: 1px solid $col_hidariue;
  }
  & td{
    justify-content: center;
  }
}
</style>
