<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type Event from '@/types/Event'
import type { PropType } from 'vue'

defineProps({
  event: Object as PropType<Event>
})

</script>

<template>
  <RouterLink class="event-link" :to="{name: 'event-details' , params: {id: event?.id}}">
    <div v-if="event" class="event-card">
      <h2>{{ event?.title }}</h2>
      <h4>{{ event?.category }}</h4>
      <span>@{{ event?.title }} on {{ event?.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
