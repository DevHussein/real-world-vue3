<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { onMounted, ref, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import type Event from '@/types/Event'

const props = defineProps(['page'])
const page = computed(() => props.page)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})
const events = ref<Event[] | null>()
const totalEvents = ref(0)
onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value).then((response) => {
      console.log(response.data)
      events.value = response.data
      totalEvents.value = response.headers['x-total-count']
    }).catch((error) => {
      console.log(error)
    })
  })

})
</script>

<template>
  <main>
    <h1>Events For Good</h1> <!-- new element -->
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <div class="pagination">
        <router-link id="page-prev" :to="{name:'event-list', query:{page: page - 1}}" rel="prev" v-if="page != 1">&#60;
          Previous
        </router-link>
        <router-link id="page-next" :to="{name:'event-list', query:{page: page + 1}}" rel="next" v-if="hasNextPage">Next
          &#62;
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>