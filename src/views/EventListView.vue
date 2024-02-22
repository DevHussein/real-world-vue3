<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { onMounted, ref } from 'vue'
import EventService from '@/services/EventService'
import type Event from '@/types/Event'

const events = ref<Event[]>()
onMounted(() => {
  EventService.getEvents().then((response) => {
    console.log(response.data)
    events.value = response.data
  }).catch((error) => {
    console.log(error)
  })
})
</script>

<template>
  <main>
    <h1>Events For Good</h1> <!-- new element -->
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>