<template>
  <Story title="BaseButton">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <BaseButton
            :label="state.label"
            :icon-left="state.iconLeft"
            :icon-right="state.iconRight"
            :type="state.type"
            :rounded="state.rounded"
            :rounded-full="state.roundedFull"
            :outlined="state.outlined"
            :disabled="state.disabled"
            :text="state.text"
            :loading="state.loading"
            :loading-text="state.loadingText"
            :size="state.size"
            :color="state.color"
        />
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.label" title="Label"/>
        <HstText v-model="state.iconLeft" title="IconLeft"/>
        <HstText v-model="state.iconRight" title="IconRight"/>
        <HstText v-model="state.type" title="Type"/>
        <HstCheckbox v-model="state.rounded" title="Rounded"/>
        <HstCheckbox v-model="state.roundedFull" title="Rounded Full"/>
        <HstCheckbox v-model="state.outlined" title="Outlined"/>
        <HstCheckbox v-model="state.text" title="Text"/>
        <HstCheckbox v-model="state.disabled" title="Disabled"/>
        <HstCheckbox v-model="state.loading" title="Loading"/>
        <HstText v-model="state.loadingText" title="loadingText"/>
        <HstSelect
            v-model="state.size"
            title="Size"
            :options="[
            { value: 'xxs', label: 'xxs' },
            { value: 'xs', label: 'xs' },
            { value: 'sm', label: 'sm' },
            { value: 'md', label: 'md' },
            { value: 'lg', label: 'lg' },
            { value: 'xl', label: 'xl' },
          ]"
        />
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
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {
    label: 'Hello world',
    iconLeft: '',
    iconRight: '',
    type: 'button',
    rounded: false,
    roundedFull: false,
    outlined: false,
    disabled: false,
    text: false,
    loading: false,
    loadingText: 'Loading ...',
    size: 'md',
    color: 'success',
  }
}
</script>
