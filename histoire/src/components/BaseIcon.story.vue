<template>
  <Story title="BaseIcon">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <BaseIcon :name="state.name" :type="state.type" :size="state.size" />
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.name" title="Name" />
        <HstSelect
          v-model="state.type"
          title="Type"
          :options="[
            { value: 'outline', label: 'outline' },
            { value: 'solid', label: 'solid' },
          ]"
        />
        <HstNumber v-model="state.size" title="Size" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {
    name: 'academic-cap',
    type: 'outline',
    size: 1.5,
  }
}
</script>
