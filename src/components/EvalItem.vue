<template>
  <li>
    <span>{{ model.game.name }}</span>
    <ul>
      <li v-for="item in model.evalItems" :key="item.key">
        {{ item.key }}
        <select v-model="item.value">
          <option v-for="i in item.option" :key="i" :value="i" :selected="i === item.value">
            {{ i }}
          </option>
        </select>
      </li>
      <li>
        <span>合計{{ model.sum() }}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(c, index) in model.comment" :key="index">
        <span>{{ c.timestamp | asDate }}</span>
        <StretchableTextarea v-model="c.text"></StretchableTextarea>
      </li>
      <li>
        <a @click="addComment">add</a>
      </li>
    </ul>
  </li>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import StretchableTextarea from './StretchableTextarea.vue';
import Evaluation from '../ts/evaluation';
import Comment from '../ts/comment';

@Component({
  components: {
    StretchableTextarea,
  },
})
export default class EvalItem extends Vue {
  @Prop() public model!: Evaluation;

  private addComment(index: number): void {
    this.model.comment.push(new Comment());
  }
}
</script>
