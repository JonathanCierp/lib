<template>
  <div class="relative">
    <slot />
    <span
      class="flex items-center justify-center absolute border-white dark:border-gray-800 rounded-full border-2 text-xs transform"
      :class="[colorClass, invisibleClass, positionClass, sizeClass]"
    >
      <slot v-if="!props.dot" name="content">{{ content }}</slot>
    </span>
  </div>
  <!--  <div class="relative">-->
  <!--    <span-->
  <!--      class="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"-->
  <!--    ></span>-->
  <!--  </div>-->
  <!--  <br />-->
  <!--  <div class="relative w-fit">-->
  <!--    <slot />-->
  <!--    <span-->
  <!--      class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"-->
  <!--      :class="[sizeClass]"-->
  <!--    >-->
  <!--      <slot v-if="!props.dot" name="content">{{ content }}</slot>-->
  <!--    </span>-->
  <!--  </div>-->
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
  overlap?: 'rounded' | 'square'
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  position: POSITIONS.top_right,
  color: COLORS.default,
  dot: false,
  invisible: false,
  showZero: false,
  max: 99,
  overlap: 'square',
})

const positionClass = computed(
  () =>
    `${positions[props.position].base} ${
      positions[props.position][props.overlap][props.dot ? 'dot' : 'base']
    }`
)
const colorClass = computed(() => colors[props.color].base)
const sizeClass = computed(() => (props.dot ? 'w-3 h-3' : 'w-5 h-5'))
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
