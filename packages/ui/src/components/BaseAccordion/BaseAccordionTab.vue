<template>
  <div>
    <h2>
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-medium text-left"
        :class="[
          index === 0 && !flush ? 'rounded-t-xl' : '',
          max === index + 1 || flush ? '' : 'border-b-0',
          activeHeaderClass,
          flushHeaderClass,
        ]"
        @click="onToggleTab"
      >
        <slot name="title">
          <span>{{ header }}</span>
        </slot>
        <BaseIcon v-if="isOpen" :name="collapseIcon" :size="1.25" />
        <BaseIcon v-else :name="expandIcon" :size="1.25" />
      </button>
    </h2>
    <div
      v-if="isOpen"
      class="p-5 font-light text-gray-500 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-900"
      :class="[
        max === index + 1 ? 'border-t-0' : 'border-b-0',
        flushContentClass,
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { colors } from './BaseAccordion'

interface BaseAccordionTabProps {
  index?: number
  max?: number
  header?: string
  activeClass?: string
  collapseIcon?: string
  expandIcon?: string
  flush?: boolean
}

const props = withDefaults(defineProps<BaseAccordionTabProps>(), {
  index: 0,
  max: 0,
  header: '',
  activeClass: colors.header.active,
  collapseIcon: 'chevron-up',
  expandIcon: 'chevron-down',
  flush: false,
})

const emit = defineEmits(['open', 'close'])

const isOpen = ref<boolean>(false)

const activeHeaderClass = computed(() => {
  let classes = ''

  if (!props.flush) {
    if (isOpen.value) {
      classes = props.activeClass
    } else {
      classes = colors.header.base
    }
  }

  return classes
})
const flushHeaderClass = computed(() => {
  let classes = ''

  if (isOpen.value) {
    classes = colors.header.flushActive
  } else {
    classes = colors.header.flushBase
  }

  return classes
})
const flushContentClass = computed(() =>
  props.flush ? colors.content.flush : colors.content.base
)

const onToggleTab = (e: Event) => {
  isOpen.value = !isOpen.value

  emit(isOpen.value ? 'open' : 'close', {
    originalEvent: e,
    index: props.index,
  })
}

const openTab = () => {
  isOpen.value = true
}
const closeTab = () => {
  isOpen.value = false
}

defineExpose({
  index: props.index,
  openTab,
  closeTab,
})
</script>
