<template>
  <Story title="BaseAvatarGroup">
    <Variant :init-state="initState" title="playground">
      <template #default="{ state }">
        <div style="padding: 1rem">
          <BaseAvatarGroup :max="state.max" :total="state.total">
            <BaseAvatar alt="Photo 1"
                        src="https://picsum.photos/200"/>
            <BaseAvatar alt="Photo 2"
                        src="https://picsum.photos/200"/>
            <BaseAvatar alt="Photo 3"
                        src="https://picsum.photos/200"/>
            <BaseAvatar alt="Photo 4"
                        src="https://picsum.photos/200"/>
            <BaseAvatar alt="Photo 5"
                        src="https://picsum.photos/200"/>
            <BaseAvatar alt="Photo 6"
                        src="https://picsum.photos/200"/>
            <BaseAvatar alt="Photo 7"
                        src="https://picsum.photos/200"/>
          </BaseAvatarGroup>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.max" title="Max"/>
        <HstText v-model="state.total" title="Total"/>
      </template>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
const initState = () => {
  return {
    max: 5,
    total: 0
  }
}
</script>
