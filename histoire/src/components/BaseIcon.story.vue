<template>
  <Story title="BaseIcon">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        outline : <BaseIcon name="academic-cap" /> solid :
        <BaseIcon name="academic-cap" type="solid" /> outline :
        <BaseIcon name="arrow-path" /> solid :
        <BaseIcon name="arrow-path" type="solid" /> outline :
        <BaseIcon name="banknotes" /> solid :
        <BaseIcon name="banknotes" type="solid" size="2" /> outline :
        <BaseIcon name="video-camera" size="3" /> solid :
        <BaseIcon name="video-camera" type="solid" size="4" />
      </template>

      <template #controls="{ state }">
        <!-- <HstText v-model="state.label" title="Label" /> -->
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {}
}
</script>
