<template>
  <Story title="BaseAvatar">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <div style="padding: 1rem">
          <BaseAvatar
            src="https://picsum.photos/200"
            alt="Photo 1"
            :placeholder="state.placeholder"
            :size="state.size"
            :rounded="state.rounded"
            :rounded-full="state.roundedFull"
          >
            {{ state.content }}
          </BaseAvatar>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.content" title="Content" />
        <HstCheckbox v-model="state.placeholder" title="Placeholder" />
        <HstCheckbox v-model="state.rounded" title="Rounded" />
        <HstCheckbox v-model="state.roundedFull" title="RoundedFull" />
        <HstSelect
          v-model="state.size"
          title="Size"
          :options="[
            { value: 'sm', label: 'sm' },
            { value: 'md', label: 'md' },
            { value: 'lg', label: 'lg' },
          ]"
        />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {
    content: '',
    placeholder: false,
    rounded: false,
    roundedFull: true,
    size: 'md',
  }
}
</script>
