<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService.js'
import type Event from '@/types/Event'

const event = ref<Event>()
const props = defineProps({
  id: { type: String, required: true }
})
onMounted(() => {
  // fetch event (by id) and set local event data
  EventService.getEvent(props.id).then((response) => {
    console.log(response.data)
    event.value = response.data
  }).catch((error) => {
    console.log(error)
  })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>