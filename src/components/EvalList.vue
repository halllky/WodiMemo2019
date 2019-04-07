<template>
  <div>
    <ul>
      <li v-for="(item, index) in model" :key="index">
        <EvalItem :model="item"></EvalItem>
      </li>
    </ul>
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
}
</script>
