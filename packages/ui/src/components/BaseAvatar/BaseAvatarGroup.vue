<template>
  <div class="flex -space-x-3.5">
    <component
      v-for="(component, i) in components.items"
      :key="`${component.name} ${i}`"
      :is="component.name"
      v-bind="component.props"
    />
    <a
      v-if="componentsLength > 0"
      class="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800 z-10 overflow-hidden"
      href="#"
    >
      +{{ componentsLength }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'

interface BaseAvatarProps {
  max?: number
  total?: number
}

const props = withDefaults(defineProps<BaseAvatarProps>(), {
  max: 5,
  total: 0,
})

const slots: any = useSlots()

const components = computed(() => {
  if (slots.default) {
    const c = slots
      .default()
      .filter((c: any) => c.type.__name === 'BaseAvatar')
      .map((c: any) => ({
        name: c.type.__name,
        props: c.props,
      }))

    return {
      originalItems: c,
      items: c.slice(0, props.max),
    }
  }

  return {
    originalItems: [],
    items: [],
  }
})
const componentsLength = computed(() => {
  if (slots.default) {
    const cLength = components.value.originalItems.length - props.max

    return props.total > 0 ? props.total : cLength
  }

  return 0
})
</script>
