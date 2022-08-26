<template>
  <div class="col s6 offset-s3">
    <div class="card horizontal lighten-1" :class="card_color">
      <div class="card-content white-text">
        <span class="card-title">{{ card_data.title }}</span>
        <p class="card-description">{{ card_data.description }}</p>
        <div class="row">
          <div class="col s2 tag" v-for="tag of card_data.stack" :key="tag">
            {{ tag }}
          </div>
        </div>
      </div>
      <div class="card-action">
        <a class="waves-effect waves-light activator btn-small">Подробнее</a>
      </div>
      <div class="card-reveal darken-2" :class="card_color">
        <span class="card-title white-text">{{ card_data.title }}</span>
        <p class="white-text">{{ card_data.details }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card_data: {
      type: Object,
      default: null
    },
    card_color: {
      type: String,
      default: 'white'
    }
  },
}
</script>
