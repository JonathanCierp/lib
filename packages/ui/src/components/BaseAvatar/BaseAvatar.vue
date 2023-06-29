<template>
  <div
    :class="[placeholderClass, sizeClass, roundedClass, roundedFullClass]"
    class="overflow-hidden relative border-2 border-white dark:border-gray-800"
  >
    <svg
      v-if="placeholder"
      :class="[sizePlaceholderClass, roundedClass, roundedFullClass]"
      class="absolute -left-1 text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        fill-rule="evenodd"
      />
    </svg>
    <span
      v-else-if="$slots.default && content"
      :class="[sizeLetterClass]"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-medium"
    >
      {{ content }}
    </span>
    <img
      v-else
      :class="[sizeClass, roundedClass, roundedFullClass]"
      v-bind="$attrs"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { SIZES, sizes } from './BaseAvatar'

interface BaseAvatarProps {
  placeholder?: boolean
  rounded?: boolean
  roundedFull?: boolean
  size?: 'sm' | 'md' | 'lg' | undefined
}

const props = withDefaults(defineProps<BaseAvatarProps>(), {
  placeholder: false,
  rounded: false,
  roundedFull: true,
  size: SIZES.md,
})
const slots: any = useSlots()

const placeholderClass = computed(() =>
  props.placeholder ? ' bg-gray-100 dark:bg-gray-600' : ''
)
const roundedClass = computed(() => (props.rounded ? 'rounded' : ''))
const roundedFullClass = computed(() =>
  props.roundedFull ? 'rounded-full' : ''
)
const sizeClass = computed(() => (props.size ? sizes[props.size].base : ''))
const sizePlaceholderClass = computed(() =>
  props.size ? sizes[props.size].placeholder : ''
)
const sizeLetterClass = computed(() =>
  props.size ? sizes[props.size].letters : ''
)
const content = computed(() => {
  if (slots.default && slots.default()[0].children?.toString()) {
    const letters = slots.default
      ? slots
          .default()[0]
          .children?.toString()
          .split(' ')
          .filter((v: any) => !!v) || []
      : []

    return letters?.length > 1
      ? `${letters[0][0]}${letters[1][0]}`
      : letters[0][0]
  }

  return ''
})
</script>
