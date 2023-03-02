<template>
  <div
    class="flex p-4 text-sm rounded-lg"
    :class="[colorClass, outlinedClass, borderedClass]"
    role="alert"
  >
    <slot />
    <BaseButton
      size="xxs"
      rounded
      text
      class="ml-auto -mx-1.5 -my-1.5"
      :color="color"
    >
      <BaseIcon name="x-mark" size="1.25" />
    </BaseButton>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { COLORS, colors } from './BaseAlert'

interface BaseAlertProps {
  outlined?: boolean
  bordered?: boolean
  color?: 'default' | 'success' | 'error' | 'info' | 'warning' | undefined
}

const props = withDefaults(defineProps<BaseAlertProps>(), {
  outlined: false,
  bordered: false,
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
</script>
