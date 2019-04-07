<template>
  <li>
    <span>{{ model.game.name }}</span>
    <ul>
      <li v-for="item in model.evalItems" :key="item.key">
        {{ item.key }}
        <select>
          <option v-for="i in item.option" :key="i" :value="i" :selected="i === item.value">
            {{ i }}
          </option>
        </select>
      </li>
    </ul>
    <ul>
      <li v-for="(c, index) in model.comment" :key="index">
        <textarea v-model="c.text"></textarea>
      </li>
      <li>
        <a @click="addComment">add</a>
      </li>
    </ul>
  </li>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Evaluation from '../ts/evaluation';
import Memo from '../ts/memo';

@Component({
  components: {
  },
})
export default class EvalItem extends Vue {
  @Prop() public model!: Evaluation;

  private addComment(index: number): void {
    this.model.comment.push(new Memo());
  }
}
</script>
