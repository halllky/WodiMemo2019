<template>
  <li>
    <span>{{ game.name }}</span>
    <ul>
      <li v-for="item in items" :key="item.key">
        {{ item.key }}
        <select v-model="item.value">
          <option v-for="i in item.option" :key="i" :value="i" :selected="i === item.value">
            {{ i }}
          </option>
        </select>
      </li>
      <li>
        <span>合計{{ sum() }}</span>
      </li>
    </ul>
  </li>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import StretchableTextarea from './StretchableTextarea.vue';
import Game from '../ts/game';
import EvalItemModel from '../ts/eval-item';

@Component({
  components: {
    StretchableTextarea,
  },
})
export default class EvalItem extends Vue {
  @Prop() public game!: Game;
  @Prop() public items!: EvalItemModel[];

  private sum(): number {
    let sum = 0;
    this.items.forEach((item) => sum += item.value);
    return sum;
  }
}
</script>
