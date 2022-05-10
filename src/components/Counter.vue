<template>
  <div>
    {{ count }}
    <button class="inc" @click="inc()">
      +
    </button>
    <button class="dec" @click="dec()">
      -
    </button>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    initial: number
  }>()

  const {
    count,
    inc,
    dec
  } = useCounter(props.initial)
</script>
