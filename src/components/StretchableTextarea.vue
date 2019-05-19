<template>
  <textarea
    v-model="_value"
    spellcheck="false"
    class="stretch-text">
  </textarea>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class StretchableTextarea extends Vue {
  @Prop() public value!: string;
  public get _value(): string { return this.value; }
  public set _value(newVal) { this.$emit('input', newVal); }

  public mounted() {
    this.resize();
  }
  public updated() {
    this.resize();
  }
  private resize(): void {
    const textarea = this.$el as HTMLElement;
    textarea.style.height = '0';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
</script>


<style lang="scss">
.stretch-text{
  outline: none;
  overflow: hidden;
  resize: none;
  width: 100%;
}
</style>
