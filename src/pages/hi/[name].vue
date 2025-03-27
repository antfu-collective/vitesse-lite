<script setup lang="ts">
const params = useRoute('/hi/[name]').params
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <p>
      Hi, {{ params.name }}
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button text-sm m-3 mt-8 btn @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
