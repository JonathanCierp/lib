<template>
  <transition
    :name="nameTransition"
    :duration="duration"
    @after-leave="$emit('after-leave')"
  >
    <slot />
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface BaseAnimationProps {
  name?:
    | 'fade'
    | 'scale'
    | 'slide-up'
    | 'slide-left'
    | 'slide-down'
    | 'slide-right'
    | 'rotate'
  delay?: number
  duration?: number
}

const props = withDefaults(defineProps<BaseAnimationProps>(), {
  name: 'fade',
  delay: 0,
  duration: 200,
})

defineEmits(['after-leave'])

const nameTransition = computed(() => 'base-animation--' + props.name)
const durationInMs = computed(() => props.duration + 'ms')
</script>

<style scoped>
/* FADE TRANSITION */
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.base-animation--fade-enter-to {
  animation: fade v-bind(durationInMs);
}

.base-animation--fade-leave-to {
  animation: fade v-bind(durationInMs) reverse;
}

/* SCALE TRANSITION*/
@keyframes scale {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.base-animation--scale-enter-to {
  animation: scale v-bind(durationInMs);
}

.base-animation--scale-leave-to {
  animation: scale v-bind(durationInMs) reverse;
}

/* SLIDE UP */
@keyframes slide-up {
  0% {
    transform: translateY(150%);
  }
  100% {
    transform: translateX(0%);
  }
}

.base-animation--slide-up-enter-to {
  animation: slide-up v-bind(durationInMs);
}

.base-animation--slide-up-leave-to {
  animation: slide-up v-bind(durationInMs) reverse;
}

/* SLIDE LEFT */
@keyframes slide-left {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
}

.base-animation--slide-left-enter-to {
  animation: slide-left v-bind(durationInMs);
}

.base-animation--slide-left-leave-to {
  animation: slide-left v-bind(durationInMs) reverse;
}

/* SLIDE DOWN */
@keyframes slide-down {
  0% {
    transform: translateY(-150%);
  }
  100% {
    transform: translateX(0%);
  }
}

.base-animation--slide-down-enter-to {
  animation: slide-down v-bind(durationInMs);
}

.base-animation--slide-down-leave-to {
  animation: slide-down v-bind(durationInMs) reverse;
}

/* SLIDE RIGHT */
@keyframes slide-right {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0%);
  }
}

.base-animation--slide-right-enter-to {
  animation: slide-right v-bind(durationInMs);
}

.base-animation--slide-right-leave-to {
  animation: slide-right v-bind(durationInMs) reverse;
}
</style>
