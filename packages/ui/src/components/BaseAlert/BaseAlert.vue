<template>
  <div
    v-if="modelValue"
    class="flex p-4 text-sm"
    :class="[
      colorClass,
      outlinedClass,
      borderedClass,
      accentClass,
      roundedClass,
    ]"
    role="alert"
  >
    <slot />
    <BaseButton
      v-if="closeable"
      size="xxs"
      rounded
      text
      class="ml-auto -mx-1.5 -my-1.5"
      :color="color"
      @click="$emit('update:model-value', false)"
    >
      <BaseIcon name="x-mark" size="1.25" />
    </BaseButton>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { COLORS, colors } from './BaseAlert'

interface BaseAlertProps {
  modelValue: boolean
  outlined?: boolean
  bordered?: boolean
  closeable?: boolean
  accent?: boolean
  rounded?: boolean
  color?: 'default' | 'success' | 'error' | 'info' | 'warning' | undefined
}

const props = withDefaults(defineProps<BaseAlertProps>(), {
  outlined: false,
  bordered: false,
  closeable: false,
  accent: false,
  rounded: false,
  color: COLORS.default,
})

const colorClass = computed(() =>
  !props.outlined || !props.bordered ? colors[props.color].base : ''
)
const outlinedClass = computed(() =>
  props.outlined ? colors[props.color].outlined : ''
)
const borderedClass = computed(() =>
  props.bordered ? colors[props.color].bordered : ''
)
const accentClass = computed(() =>
  props.accent ? colors[props.color].accent : ''
)
const roundedClass = computed(() => (props.rounded ? 'rounded-lg' : ''))
const showAlert = computed(() => props.modelValue)
</script>
