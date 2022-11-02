<template>
  <Story title="BaseTag">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <BaseTag
          :rounded="state.rounded"
          :rounded-full="state.roundedFull"
          :outlined="state.outlined"
          :disabled="state.disabled"
          :size="state.size"
          :color="state.color"
          :icon-left="state.iconLeft"
          :icon-right="state.iconRight"
          :link="state.link"
          @click-left="logEvent('Click Left', $event)"
          @click-right="logEvent('Click Right', $event)"
        >
          {{ state.content }}
        </BaseTag>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.content" title="Content" />
        <HstCheckbox v-model="state.rounded" title="Rounded" />
        <HstCheckbox v-model="state.roundedFull" title="RoundedFull" />
        <HstCheckbox v-model="state.outlined" title="Outlined" />
        <HstCheckbox v-model="state.disabled" title="Disabled" />
        <HstCheckbox v-model="state.link" title="Link" />
        <HstSelect
          v-model="state.size"
          title="Size"
          :options="[
            { value: 'sm', label: 'sm' },
            { value: 'lg', label: 'lg' },
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
        <HstText v-model="state.iconLeft" title="iconLeft" />
        <HstText v-model="state.iconRight" title="iconRight" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client'

const initState = () => {
  return {
    content: 'Default',
    rounded: false,
    roundedFull: false,
    outlined: false,
    disabled: false,
    link: false,
    size: 'sm',
    color: 'default',
    iconLeft: '',
    iconRight: '',
  }
}
</script>
