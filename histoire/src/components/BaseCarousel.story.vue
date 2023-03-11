<template>
  <Story title="BaseCarousel">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <BaseCarousel :value="state.value" :controls="state.controls" :showIndicators="state.showIndicators"
                      :animation="state.animation"/>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.animation" title="Animation"/>
        <HstCheckbox v-model="state.controls" title="Controls"/>
        <HstCheckbox v-model="state.showIndicators" title="ShowIndicators"/>
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {
    value: [
      'https://picsum.photos/1000',
      'https://picsum.photos/900',
      'https://picsum.photos/800',
      'https://picsum.photos/700',
      'https://picsum.photos/600',
      'https://picsum.photos/500',
    ],
    animation: 'ease-in-out',
    controls: true,
    showIndicators: true
  }
}
</script>
