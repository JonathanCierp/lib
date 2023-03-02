<template>
  <div class="inline">
    <Component :is="iconName" :style="[iconSize]" />
  </div>
</template>

<script setup lang="ts">
import * as HeroiconSolid from '@heroicons/vue/24/solid'
import * as HeroiconOutline from '@heroicons/vue/24/outline'
import { computed } from 'vue'

interface BaseIconProps {
  name: string
  type?: 'solid' | 'outline'
  size?: number
}

const props = withDefaults(defineProps<BaseIconProps>(), {
  type: 'outline',
  size: 1.5,
})

const pascalize = (s: string) => {
  return s
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase())
}
const iconName = computed(() =>
  // @ts-ignore
  props.type === 'solid'
    ? // @ts-ignore
      HeroiconSolid[`${pascalize(props.name)}Icon`]
    : // @ts-ignore
      HeroiconOutline[`${pascalize(props.name)}Icon`]
)
const iconSize = computed(() => ({
  width: `${props.size}rem`,
  height: `${props.size}rem`,
}))
</script>
