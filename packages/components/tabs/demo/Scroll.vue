<template>
  <IxSpace block size="lg" vertical>
    <IxTabs v-model:selectedKey="selectedKey" :dataSource="dataSource">
      <template #content="{ key }"> Content of Tab {{ key }} </template>
    </IxTabs>
    <IxTabs v-model:selectedKey="selectedKey" :dataSource="dataSource" type="line">
      <template #content="{ key }"> Content of Tab {{ key }} </template>
    </IxTabs>
    <IxTabs v-model:selectedKey="selectedKey" :dataSource="dataSource" type="segment">
      <template #content="{ key }"> Content of Tab {{ key }} </template>
    </IxTabs>
    <IxSpace align="center">
      <IxInputNumber v-model:value="selectedKey" :max="98" :min="0"></IxInputNumber>
    </IxSpace>
  </IxSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedKey = ref(0)

const dataSource = Array.from({ length: 99 }).map((_, index) => {
  return { key: index, title: `Tab ${index}` }
})
</script>
