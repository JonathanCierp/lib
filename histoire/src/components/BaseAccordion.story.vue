<template>
  <Story title="BaseAccordion">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <div style="padding: 1rem">
          <BaseAccordion :multiple="state.multiple"
                         v-model:active-index="state.activeIndex" :flush="state.flush" @tab-open="open"
                         @tab-close="close">
            <BaseAccordionTab header="aa">
              <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                buttons, dropdowns, modals, navbars, and more.</p>
              <br>
              <p>Check out this guide to learn how to get started and start developing websites even faster with
                components on top of Tailwind CSS.</p>
            </BaseAccordionTab>
            <br>
            <BaseAccordionTab header="bb">
              <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                buttons, dropdowns, modals, navbars, and more.</p>
              <br>
              <p>Check out this guide to learn how to get started and start developing websites even faster with
                components on top of
              </p>
            </BaseAccordionTab>
            <br>
            <BaseAccordionTab header="cc">
              <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                buttons, dropdowns, modals, navbars, and more.</p>
              <br>
              <p>Check out this guide to learn how to get started and start developing websites even faster with
                components on top of
              </p>
            </BaseAccordionTab>
            <br>
            <BaseAccordionTab header="dd">
              <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                buttons, dropdowns, modals, navbars, and more.</p>
              <br>
              <p>Check out this guide to learn how to get started and start developing websites even faster with
                components on top of
              </p>
            </BaseAccordionTab>
          </BaseAccordion>
        </div>
      </template>

      <template #controls="{ state }">
        <!--        <HstSelect-->
        <!--            v-model="state.color"-->
        <!--            title="Color"-->
        <!--            :options="[-->
        <!--            { value: 'default', label: 'default' },-->
        <!--            { value: 'success', label: 'success' },-->
        <!--            { value: 'error', label: 'error' },-->
        <!--            { value: 'info', label: 'info' },-->
        <!--            { value: 'warning', label: 'warning' },-->
        <!--          ]"-->
        <!--        />-->
        <HstText v-model.number="state.activeIndex" title="ActiveIndex" readonly/>
        <HstCheckbox v-model="state.multiple" title="Multiple"/>
        <HstCheckbox v-model="state.flush" title="Flush"/>
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
const initState = () => {
  return {
    activeIndex: null,
    multiple: false,
    flush: false
  }
}

const open = () => {
  console.log('open')
}
const close = () => {
  console.log('close')
}
const open2 = () => {
  console.log('open2')
}
const close2 = () => {
  console.log('close2')
}
</script>
