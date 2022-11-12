<template>
  <Story title="BaseBadge">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <div style="padding: 1rem">
          <BaseBadge
            v-model="state.value"
            :position="state.position"
            :color="state.color"
            :dot="state.dot"
            :invisible="state.invisible"
            :show-zero="state.showZero"
            :max="state.max"
          >
            <BaseButton color="success"> BaseBadge </BaseButton>
          </BaseBadge>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.value" title="Value" />
        <HstText v-model="state.max" title="Max" />
        <HstCheckbox v-model="state.invisible" title="Invisible" />
        <HstCheckbox v-model="state.dot" title="Dot" />
        <HstCheckbox v-model="state.showZero" title="ShowZero" />
        <HstSelect
          v-model="state.color"
          title="Color"
          :options="[
            { value: 'default', label: 'default' },
            { value: 'success', label: 'success' },
            { value: 'error', label: 'error' },
            { value: 'info', label: 'info' },
            { value: 'warning', label: 'warning' },
          ]"
        />
        <HstSelect
          v-model="state.position"
          title="Position"
          :options="[
            { value: 'top', label: 'top' },
            { value: 'top_right', label: 'top_right' },
            { value: 'right', label: 'right' },
            { value: 'bottom_right', label: 'bottom_right' },
            { value: 'bottom', label: 'bottom' },
            { value: 'bottom_left', label: 'bottom_left' },
            { value: 'left', label: 'left' },
            { value: 'top_left', label: 'top_left' },
          ]"
        />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {
    value: 0,
    max: 99,
    invisible: false,
    dot: false,
    position: 'top_right',
    color: 'error',
    showZero: false,
  }
}
</script>
