<template>
  <div class="jh-select">
    <component :is="name"></component>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue';
import { EBusinessType } from '../../src/enum';

export default defineComponent({
  props: {
    businessType: {
      type: String,
      default: EBusinessType.ACCOUNT,
      validator: (value: string) => value in EBusinessType,
    },
  },

  setup(props) {
    const name: ComputedRef<String> = computed(() => `${props.businessType}-select`);

    return {
      name,
    };
  },
});
</script>
