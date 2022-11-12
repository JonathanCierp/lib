<template>
  <Component
    v-if="!isDeleted"
    v-bind="$attrs"
    :is="componentTag"
    class="transition-all duration-200 inline-flex items-center gap-1 mr-2 px-2.5 py-0.5"
    :class="[
      roundedClass,
      roundedFullClass,
      outlinedClass,
      sizeClass,
      colorClass,
      disabledClass,
      linkClass,
    ]"
  >
    <BaseIcon
      v-if="iconLeft"
      :name="iconLeft"
      :size="iconSize"
      class="cursor-pointer"
      @click="(e: Event) => emit('click-left', e)"
    />
    <slot />
    <BaseIcon
      v-if="iconRight"
      :name="iconRight"
      :size="iconSize"
      class="cursor-pointer"
      @click="(e: Event) => emit('click-right', e)"
    />
  </Component>
</template>

<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue'
import { colors, sizes } from './BaseTag'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

interface BaseTagProps {
  tag?: string
  rounded?: boolean
  roundedFull?: boolean
  outlined?: boolean
  disabled?: boolean
  link?: boolean
  size?: 'sm' | 'lg' | undefined
  color?: 'default' | 'success' | 'error' | 'info' | 'warning' | undefined
  iconLeft?: string
  iconRight?: string
}

const props = withDefaults(defineProps<BaseTagProps>(), {
  tag: 'div',
  rounded: false,
  roundedFull: false,
  outlined: false,
  disabled: false,
  link: false,
  size: 'sm',
  color: 'default',
  iconLeft: '',
  iconRight: '',
})
const emit = defineEmits(['click-left', 'click-right'])

const attrs = useAttrs()

const isDeleted = ref<boolean>(false)

const componentTag = computed(() => {
  let tag = 'div'

  if (attrs.to) {
    tag = 'RouterLink'
  }

  if (attrs.href) {
    tag = 'a'
  }

  return tag
})

const roundedClass = computed(() => (props.rounded ? 'rounded' : ''))
const roundedFullClass = computed(() =>
  props.roundedFull ? 'rounded-full' : ''
)
const outlinedClass = computed(() =>
  props.outlined ? colors[props.color].outlined : ''
)
const sizeClass = computed(() => (props.size ? sizes[props.size].base : ''))
const iconSize = computed(() => (props.size ? sizes[props.size].icon : 1.25))
const colorClass = computed(() =>
  !props.outlined ? colors[props.color].base : ''
)
const disabledClass = computed(() =>
  props.disabled
    ? 'cursor-not-allowed bg-gray-600 opacity-20 border-0 !text-gray-200 hover:bg-gray-600'
    : ''
)
const linkClass = computed(() =>
  props.link && !props.disabled ? colors[props.color].link : ''
)
</script>
