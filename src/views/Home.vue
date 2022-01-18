<template>
  <div>
    <Card />
    <a class="waves-effect waves-light btn">button</a>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>
