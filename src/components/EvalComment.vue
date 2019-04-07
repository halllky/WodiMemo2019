<template>
  <tr>
    <th></th>
    <td colspan="7">
      <ul>
        <li v-for="(c, index) in model" :key="index">
          <span>{{ c.timestamp | asDate }}</span>
          <StretchableTextarea v-model="c.text"></StretchableTextarea>
        </li>
        <li>
          <a @click="addComment">add</a>
        </li>
      </ul>
    </td>
  </tr>
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
  @Prop() public model!: Comment[];

  private addComment(index: number): void {
    this.model.push(new Comment());
  }
}
</script>
