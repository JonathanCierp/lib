<template>
  <Story title="BaseAlert">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <div style="padding: 1rem">
          <BaseAlert :color="state.color" :outlined="state.outlined" :bordered="state.bordered">
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
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {
    color: 'success',
    outlined: false
  }
}
</script>
