<template>
  <div>
    <component
      ref="tabsEl"
      v-for="(tab, i) in tabs"
      :key="i"
      :is="tab"
      :index="i"
      :max="tabs.length"
      :collapse-icon="collapseIcon"
      :expand-icon="expandIcon"
      :flush="flush"
      @open="onTabOpen"
      @close="onTabClose"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, watch } from 'vue'
import type { TabEvent } from './BaseAccordion'

interface BaseAccordionTabProps {
  multiple?: boolean
  activeIndex?: number | number[] | null
  collapseIcon?: string
  expandIcon?: string
  flush?: boolean
}

const slots: any = useSlots()

const props = withDefaults(defineProps<BaseAccordionTabProps>(), {
  multiple: false,
  activeIndex: null,
  collapseIcon: 'chevron-up',
  expandIcon: 'chevron-down',
  flush: false,
})

const emit = defineEmits(['update:active-index', 'tab-open', 'tab-close'])

const tabs = ref<any[]>([])
const tabsEl = ref()

if (slots.default && slots.default()[0].children?.toString()) {
  for (const slot of slots.default()) {
    if (slot.type?.__name) {
      tabs.value = [...tabs.value, slot]
    }
  }
}

const openActiveAccordions = () => {
  const indexToOpen: string = props.activeIndex?.toString() || ''

  if (indexToOpen) {
    const indexToOpenArray: number[] = indexToOpen.split(',').map(Number)

    tabsEl.value
      .filter((tab: any) => indexToOpenArray.includes(tab.index))
      .forEach((tab: any) => tab.openTab())
  }
}
const closeNotActiveAccordions = (index: number | number[] | null) => {
  const indexToStayOpen: string = index?.toString() || ''

  if (indexToStayOpen) {
    const indexToStayOpenArray: number[] = indexToStayOpen
      .split(',')
      .map(Number)

    tabsEl.value
      .filter((tab: any) => !indexToStayOpenArray.includes(tab.index))
      .forEach((tab: any) => tab.closeTab())
  }
}
const onTabOpen = ({ originalEvent, index }: TabEvent) => {
  const result: TabEvent = { originalEvent, index }

  if (props.multiple) {
    const indexToOpen: string = props.activeIndex?.toString() || ''
    const indexToOpenArray: number[] = indexToOpen
      ? indexToOpen.split(',').map(Number)
      : []

    const resultIndexToOpen: string = result.index?.toString() || ''
    const resultIndexToOpenArray: number[] = resultIndexToOpen
      .split(',')
      .map(Number)

    // @TODO : to order by index ASC
    result.index = [...indexToOpenArray, ...resultIndexToOpenArray]
  } else {
    closeNotActiveAccordions(index)
  }

  emit('update:active-index', result.index)
  emit('tab-open', result)
}
const onTabClose = ({ originalEvent, index }: TabEvent) => {
  const result: TabEvent = { originalEvent, index }

  if (props.multiple) {
    const indexToOpen: string = props.activeIndex?.toString() || ''
    const indexToOpenArray: number[] = indexToOpen.split(',').map(Number)

    result.index = indexToOpenArray?.filter((v: number) => v !== result.index)
  } else {
    result.index = null
  }

  emit('update:active-index', result.index)
  emit('tab-close', result)
}

watch(
  () => props.activeIndex,
  () => {
    openActiveAccordions()
  }
)

onMounted(() => {
  openActiveAccordions()
})
</script>
