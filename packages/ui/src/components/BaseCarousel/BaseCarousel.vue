<template>
  <div class="relative">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <div
        v-for="(item, i) in value"
        :key="`carousel-item-${i}`"
        class="duration-700 absolute inset-0 transition-transform transform"
        :class="[computedClass(i), animationClass]"
      >
        <img
          :src="item"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          :alt="`carousel-item-${i}`"
        />
      </div>
    </div>
    <div
      v-if="showIndicators"
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
    >
      <BaseButton
        v-for="(_, i) in value"
        :key="`carousel-indicator-${i}`"
        :class="[i === selectedItem ? '!bg-gray-600' : '']"
        class="w-3 h-3 !p-0 border shadow-md"
        rounded-full
        @click="onChange(i)"
      />
    </div>
    <BaseButton
      v-if="controls"
      rounded-full
      size="xs"
      class="w-10 h-10 !p-0 absolute top-1/2 left-0 -translate-y-1/2 z-30 border flex items-center justify-center ml-4 shadow-md"
      @click="onPrev"
    >
      <BaseIcon name="chevron-left" :size="1.3" class="text-gray-600" />
    </BaseButton>
    <BaseButton
      v-if="controls"
      rounded-full
      size="xs"
      class="w-10 h-10 !p-0 absolute top-1/2 right-0 -translate-y-1/2 z-30 border flex items-center justify-center mr-4 shadow-md"
      @click="onNext"
    >
      <BaseIcon name="chevron-right" :size="1.3" class="text-gray-600" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import useBaseCarousel from './BaseCarousel'

interface BaseCarouselProps {
  controls: boolean
  showIndicators: boolean
  animation: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
  value: any[]
}

const props = withDefaults(defineProps<BaseCarouselProps>(), {
  controls: true,
  showIndicators: true,
  animation: 'ease-in-out',
})

const { animations } = useBaseCarousel()

const selectedItem = ref(0)
const adjacentItemMinus = ref(props.value.length - 1)
const adjacentItemPlus = ref(1)

const animationClass = computed(() =>
  props.animation.includes('ease')
    ? animations[props.animation]
    : props.animation
)
const computedClass = (i: number) => {
  let classes: string[] = []

  classes = [
    ...classes,
    i === selectedItem.value ? 'translate-x-0 z-20' : 'z-10',
  ]

  if (
    i !== selectedItem.value &&
    i !== adjacentItemMinus.value &&
    i !== adjacentItemPlus.value
  ) {
    classes = [...classes, 'hidden']
  }

  if (i === adjacentItemMinus.value) {
    classes = [...classes, '-translate-x-full']
  } else if (i === adjacentItemPlus.value) {
    classes = [...classes, 'translate-x-full']
  }

  return classes.join(' ')
}
const onChange = (i: number) => {
  selectedItem.value = i

  adjacentItemMinus.value = selectedItem.value - 1
  adjacentItemPlus.value = selectedItem.value + 1

  if (selectedItem.value === 0) {
    adjacentItemMinus.value = props.value.length - 1
  }
  if (selectedItem.value === props.value.length - 1) {
    adjacentItemPlus.value = 0
  }
}
const onPrev = () => {
  if (selectedItem.value > 0) {
    selectedItem.value = selectedItem.value - 1
  } else {
    selectedItem.value = props.value.length - 1
  }

  onChange(selectedItem.value)
}
const onNext = () => {
  if (selectedItem.value < props.value.length - 1) {
    selectedItem.value = selectedItem.value + 1
  } else {
    selectedItem.value = 0
  }

  onChange(selectedItem.value)
}
</script>
