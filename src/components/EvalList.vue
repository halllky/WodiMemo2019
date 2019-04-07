<template>
  <div>
    <ul>
      <li v-for="(item, index) in model" :key="index">
        <EvalItem :game="item.game" :items="item.evalItems"></EvalItem>
        <EvalComment :model="item.comment"></EvalComment>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import EvalItem from './EvalItem.vue';
import EvalComment from './EvalComment.vue';
import Evaluation from '../ts/evaluation';

@Component({
  components: {
    EvalItem,
    EvalComment,
  },
})
export default class EvalList extends Vue {
  @Prop() public model!: Evaluation[];
}
</script>
