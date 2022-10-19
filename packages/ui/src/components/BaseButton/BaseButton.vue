<template>
  <button
    :type="type"
    class="transition-all duration-100 text-center inline-flex items-center gap-4 focus:ring-1"
    :class="[roundedClass, outlinedClass, sizeClass, colorClass, disabledClass]"
  >
    <template v-if="loading">
      <svg
        aria-hidden="true"
        role="status"
        class="inline animate-spin"
        :class="sizeIconClass"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="fill-gray-300"
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        />
        <path
          :class="tempColor"
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        />
      </svg>
      {{ loadingText }}
    </template>
    <template v-else>
      <svg
        v-if="iconLeft"
        aria-hidden="true"
        :class="sizeIconClass"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <slot>
        {{ label }}
      </slot>
      <svg
        v-if="iconRight"
        aria-hidden="true"
        :class="sizeIconClass"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { SIZES, sizes, COLORS, colors } from './BaseButton'

interface BaseButtonProps {
  label?: string
  iconLeft?: string
  iconRight?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  rounded?: boolean
  outlined?: boolean
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  color?: 'default' | 'success' | 'error' | 'info' | 'warning' | undefined
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  label: '',
  iconLeft: '',
  iconRight: '',
  type: 'button',
  rounded: false,
  outlined: false,
  disabled: false,
  loading: false,
  loadingText: 'Loading ...',
  size: SIZES.md,
  color: COLORS.default,
})

const roundedClass = computed(() => (props.rounded ? 'rounded-full' : ''))
const outlinedClass = computed(() =>
  props.outlined ? colors[props.color].outlined : ''
)
const sizeClass = computed(() => (props.size ? sizes[props.size].button : ''))
const sizeIconClass = computed(() => (props.size ? sizes[props.size].icon : ''))
const colorClass = computed(() =>
  !props.outlined ? colors[props.color].button : ''
)
const disabledClass = computed(() =>
  props.disabled
    ? 'cursor-not-allowed bg-gray-50 opacity-20 border-0 !text-gray-700 !ring-0 hover:bg-gray-50'
    : ''
)
// @TODO : To remove after progress circular component
const tempColors = {
  default: 'fill-gray-900',
  success: 'fill-green-900',
  error: 'fill-red-900',
  info: 'fill-blue-900',
  warning: 'fill-orange-900',
}
const tempColor = computed(() => tempColors[props.color])
</script>
