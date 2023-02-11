<template>
  <Story title="BaseBadge">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <div style="padding: 1rem">
          <!--          <BaseBadge-->
          <!--              v-model="state.value"-->
          <!--              :position="state.position"-->
          <!--              :color="state.color"-->
          <!--              :dot="state.dot"-->
          <!--              :overlap="state.overlap"-->
          <!--              :invisible="state.invisible"-->
          <!--              :show-zero="state.showZero"-->
          <!--              :max="state.max"-->
          <!--          >-->
          <!--            <BaseButton color="success"> BaseBadge</BaseButton>-->
          <!--          </BaseBadge>-->
          <div style="display: flex;gap: 2rem;">
            <BaseBadge
                v-model="state.value"
                :position="state.position"
                :color="state.color"
                :dot="true"
                overlap="rounded"
                :invisible="state.invisible"
                :show-zero="state.showZero"
                :max="state.max"
            >
              <BaseAvatar alt="Photo 1"
                          src="https://picsum.photos/200"/>
            </BaseBadge>
            <BaseBadge
                v-model="state.value"
                :position="state.position"
                :color="state.color"
                :dot="true"
                :invisible="state.invisible"
                :show-zero="state.showZero"
                :max="state.max"
            >
              <BaseAvatar alt="Photo 1"
                          src="https://picsum.photos/200"
                          :rounded-full="false" :rounded="true"/>
            </BaseBadge>
            <BaseBadge
                v-model="state.value"
                :position="state.position"
                :color="state.color"
                :dot="true"
                :invisible="state.invisible"
                :show-zero="state.showZero"
                :max="state.max"
            >
              <BaseAvatar alt="Photo 1"
                          src="https://picsum.photos/200"
                          :rounded-full="false"/>
            </BaseBadge>
          </div>
          <br>
          <div style="display: flex;gap: 2rem;">
            <BaseBadge
                v-model="state.value"
                :position="state.position"
                :color="state.color"
                :dot="false"
                overlap="rounded"
                :invisible="state.invisible"
                :show-zero="state.showZero"
                :max="state.max"
            >
              <BaseAvatar alt="Photo 1"
                          src="https://picsum.photos/200"/>
            </BaseBadge>
            <BaseBadge
                v-model="state.value"
                :position="state.position"
                :color="state.color"
                :dot="false"
                :invisible="state.invisible"
                :show-zero="state.showZero"
                :max="state.max"
            >
              <BaseAvatar alt="Photo 1"
                          src="https://picsum.photos/200"
                          :rounded-full="false" :rounded="true"/>
            </BaseBadge>
            <BaseBadge
                v-model="state.value"
                :position="state.position"
                :color="state.color"
                :dot="false"
                :invisible="state.invisible"
                :show-zero="state.showZero"
                :max="state.max"
            >
              <BaseAvatar alt="Photo 1"
                          src="https://picsum.photos/200"
                          :rounded-full="false"/>
            </BaseBadge>
          </div>
          <!--          <div class="flex" style="gap: 2rem">-->
          <!--            <BaseBadge overlap="rounded" color="success" dot>-->
          <!--              <BaseAvatar alt="Photo 1" src="https://picsum.photos/200"/>-->
          <!--            </BaseBadge>-->
          <!--            <BaseBadge overlap="rounded" color="success">-->
          <!--              <BaseAvatar alt="Photo 1" src="https://picsum.photos/200"/>-->
          <!--            </BaseBadge>-->
          <!--          </div>-->
          <!--          <br>-->
          <!--          <div class="flex" style="gap: 2rem">-->
          <!--            <BaseBadge color="success" dot>-->
          <!--              <BaseAvatar alt="Photo 1" src="https://picsum.photos/200" :rounded-full="false"/>-->
          <!--            </BaseBadge>-->
          <!--            <BaseBadge color="success">-->
          <!--              <BaseAvatar alt="Photo 1" src="https://picsum.photos/200" :rounded-full="false"/>-->
          <!--            </BaseBadge>-->
          <!--          </div>-->
          <!--          <br>-->
          <!--          <div class="flex" style="gap: 2rem">-->
          <!--            <BaseBadge color="success" dot>-->
          <!--              <BaseAvatar alt="Photo 1" src="https://picsum.photos/200" :rounded-full="false" :rounded="true"/>-->
          <!--            </BaseBadge>-->
          <!--            <BaseBadge color="success">-->
          <!--              <BaseAvatar alt="Photo 1" src="https://picsum.photos/200" :rounded-full="false" :rounded="true"/>-->
          <!--            </BaseBadge>-->
          <!--          </div>-->
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.value" title="Value"/>
        <HstText v-model="state.max" title="Max"/>
        <HstCheckbox v-model="state.invisible" title="Invisible"/>
        <HstCheckbox v-model="state.dot" title="Dot"/>
        <HstCheckbox v-model="state.showZero" title="ShowZero"/>
        <HstSelect
            v-model="state.overlap"
            title="Overlap"
            :options="[
            { value: 'rounded', label: 'rounded' },
            { value: 'square', label: 'square' },
          ]"
        />
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
    value: 5,
    max: 99,
    invisible: false,
    dot: true,
    position: 'top_right',
    overlap: 'rounded',
    color: 'error',
    showZero: false,
  }
}
</script>
