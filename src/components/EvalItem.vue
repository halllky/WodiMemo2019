<template>
<tbody class="eval-list__tbody eval-list__normal-color">
  <tr class="eval-list__tr">
    <th class="eval-list__tr__title eval-list__header-color">
      {{ model.game.name }}
    </th>
    <td v-for="item in model.evalItems" :key="item.key" class="eval-list__tr__eval-item">
      <select v-model="item.value">
        <option v-for="i in item.option" :key="i" :value="i" :selected="i === item.value">
          {{ i }}
        </option>
      </select>
    </td>
    <td class="eval-list__tr__sum">
      <span>{{ sum() }}</span>
    </td>
  </tr>
  <tr class="eval-list__tr">
    <th class="eval-list__tr__title eval-list__header-color">
    </th>
    <td class="eval-list__tr__comment">
      <ul>
        <li v-for="(c, index) in model.comment" :key="index">
          <span>{{ c.timestamp | asDate }}</span>
          <StretchableTextarea v-model="c.text"></StretchableTextarea>
        </li>
        <li>
          <a @click="addComment">add</a>
        </li>
      </ul>
    </td>
  </tr>
</tbody>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import StretchableTextarea from './StretchableTextarea.vue';
import Game from '../ts/game';
import EvalItemModel from '../ts/eval-item';
import Evaluation from '../ts/evaluation';
import Comment from '../ts/comment';

@Component({
  components: {
    StretchableTextarea,
  },
})
export default class EvalItem extends Vue {
  @Prop() public model!: Evaluation;

  private sum(): number {
    let sum = 0;
    this.model.evalItems.forEach((item) => sum += item.value);
    return sum;
  }
  private addComment(index: number): void {
    this.model.comment.push(new Comment());
  }
}
</script>
