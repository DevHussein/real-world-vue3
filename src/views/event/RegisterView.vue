<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const GStore = inject('GStore')
const { event } = defineProps(['event'])
const register = () => {
  GStore.flashMessage = 'You are successfully registered for ' + event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({
    name: 'event-details'
  })
}
</script>

<template>
  <p>Register the event here</p>
  <button @click="register">Register Me!</button>
</template>