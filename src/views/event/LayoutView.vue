<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import EventService from '../../services/EventService'
import type Event from '@/types/Event'
import router from '@/router'

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
    if (error.response && error.response.status == 404) {
      router.push({
        name: '404-resource',
        params: { resource: 'event' }
      })
    } else {
      router.push({ name: 'network-error' })
    }
  })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'event-details' }"
      >Details
      </router-link
      >
      |
      <router-link :to="{ name: 'event-register'}"
      >Register
      </router-link
      >
      |
      <router-link :to="{ name: 'event-edit' }"
      >Edit
      </router-link
      >
    </div>
    <router-view :event="event" />
  </div>
</template>