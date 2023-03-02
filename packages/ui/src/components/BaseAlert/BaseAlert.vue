<template>
  <div class="flex p-4 text-sm rounded-lg" :class="[colorClass]" role="alert">
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
  //   placeholder?: boolean
  //   rounded?: boolean
  //   roundedFull?: boolean
  //   size?: 'sm' | 'md' | 'lg' | undefined
  outlined?: boolean
  color?: 'default' | 'success' | 'error' | 'info' | 'warning' | undefined
}

const props = withDefaults(defineProps<BaseAlertProps>(), {
  //   placeholder: false,
  //   rounded: false,
  //   roundedFull: true,
  //   size: 'md',
  outlined: false,
  color: COLORS.default,
})
// const slots = useSlots()
//
const colorClass = computed(() =>
  !props.outlined ? colors[props.color].base : ''
)
// const placeholderClass = computed(() =>
//   props.placeholder ? ' bg-gray-100 dark:bg-gray-600' : ''
// )
// const roundedClass = computed(() => (props.rounded ? 'rounded' : ''))
// const roundedFullClass = computed(() =>
//   props.roundedFull ? 'rounded-full' : ''
// )
// const sizeClass = computed(() => (props.size ? sizes[props.size].base : ''))
// const sizePlaceholderClass = computed(() =>
//   props.size ? sizes[props.size].placeholder : ''
// )
// const sizeLetterClass = computed(() =>
//   props.size ? sizes[props.size].letters : ''
// )
// const content = computed(() => {
//   if (slots.default && slots.default()[0].children?.toString()) {
//     const letters = slots.default
//       ? slots
//           .default()[0]
//           .children?.toString()
//           .split(' ')
//           .filter((v) => !!v) || []
//       : []
//
//     return letters?.length > 1
//       ? `${letters[0][0]}${letters[1][0]}`
//       : letters[0][0]
//   }
//
//   return ''
// })
</script>
