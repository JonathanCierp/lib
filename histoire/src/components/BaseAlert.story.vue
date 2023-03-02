<template>
  <Story title="BaseAlert">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <div style="padding: 1rem">
          <BaseAlert v-model="state.openAlert" :color="state.color" :outlined="state.outlined"
                     :bordered="state.bordered" :closeable="state.closeable" :accent="state.accent"
                     :rounded="state.rounded">
            <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
          </BaseAlert>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
            v-model="state.color"
            title="Color"
            :options="[
            { value: 'default', label: 'default' },
            { value: 'success', label: 'success' },
            { value: 'error', label: 'error' },
            { value: 'info', label: 'info' },
            { value: 'warning', label: 'warning' },
          ]"
        />
        <HstCheckbox v-model="state.outlined" title="Outlined"/>
        <HstCheckbox v-model="state.bordered" title="Bordered"/>
        <HstCheckbox v-model="state.closeable" title="Closeable"/>
        <HstCheckbox v-model="state.accent" title="Accent"/>
        <HstCheckbox v-model="state.rounded" title="Rounded"/>
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {
    openAlert: true,
    color: 'success',
    outlined: false,
    closeable: false,
    accent: false,
    rounded: false,
  }
}
</script>
