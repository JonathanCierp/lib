<template>
  <Story title="BaseAnimation">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <div style="padding: 1rem">
          <BaseButton @click="state.openAlert = !state.openAlert" style="margin-bottom: 1rem">Toggle alert</BaseButton>
          <BaseAnimation :name="state.name" :duration="1000">
            <BaseAlert v-model="state.openAlert" :animation-name="state.name" style="max-width: 600px">
              <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
            </BaseAlert>
          </BaseAnimation>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
            v-model="state.name"
            title="Name"
            :options="[
            { value: 'fade', label: 'fade' },
            { value: 'scale', label: 'scale' },
            { value: 'slide-up', label: 'slide-up' },
            { value: 'slide-left', label: 'slide-left' },
            { value: 'slide-down', label: 'slide-down' },
            { value: 'slide-right', label: 'slide-right' },
            { value: 'rotate', label: 'rotate' },
          ]"
        />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {
    name: 'fade',
    openAlert: false
  }
}
</script>
