<template>
  <div class="relative w-fit">
    <slot />
    <span
      class="transition-transform duration-200 inline-flex items-center justify-center text-xs rounded-full absolute"
      :class="[positionClass, colorClass, sizeClass, invisibleClass]"
    >
      <slot v-if="!props.dot" name="content">{{ content }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { POSITIONS, positions, COLORS, colors } from './BaseBadge'

interface BaseButtonProps {
  modelValue: number
  position?:
    | 'top'
    | 'top_right'
    | 'right'
    | 'bottom_right'
    | 'bottom'
    | 'bottom_left'
    | 'left'
    | 'top_left'
  color?: 'default' | 'success' | 'error' | 'info' | 'warning' | undefined
  dot?: boolean
  invisible?: boolean
  showZero?: boolean
  max?: number
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  position: POSITIONS.top_right,
  color: COLORS.default,
  dot: false,
  invisible: false,
  showZero: false,
  max: 99,
})

const positionClass = computed(() => positions[props.position])
const colorClass = computed(() => colors[props.color].base)
const sizeClass = computed(() =>
  props.dot
    ? 'w-2 h-2 -m-1'
    : 'min-w-[1.25rem] h-[1.25rem] px-1 border-2 border-white'
)
const invisibleClass = computed(() => {
  if (
    props.invisible ||
    (!isNaN(props.modelValue) &&
      (+props.modelValue === 0 || !props.modelValue) &&
      !props.showZero)
  ) {
    return 'scale-0'
  }

  return 'scale-100'
})
const content = computed(() =>
  !isNaN(props.modelValue) && +props.modelValue > props.max
    ? `${props.max}+`
    : props.modelValue
)
</script>
