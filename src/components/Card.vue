<template>
  <div class="col s12 m6">
    <div class="card">
      <div class="card-panel">

        <p>Name</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  // data() {
  //   return {
  //     card_data: this.card_data
  //   }
  // },
  props: {
    card_data: {
      type: Object,
      default: null
    }
  },
  mounted() {
    // console.log(this.card_data)
  }
}
</script>
