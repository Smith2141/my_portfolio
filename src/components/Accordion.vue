<template>
  <div>
    <ul
      class="collapsible"
      data-collapsible="accordion"
      ref="collapsible_elems"
    >
      <li v-for="elem of languagesGetter" :key="elem.id">
        <div class="collapsible-header">
          <img class="lang-logo" :src="'images/' + elem.logo" alt="logo" />
          {{ elem.name }}
        </div>
        <div class="collapsible-body">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Accordion',
  mounted() {
    M.Collapsible.init(this.$refs.collapsible_elems)
    // console.log(this.languagesGetter)
  },
  computed: {
    ...mapGetters(['languagesGetter'])
  }
}
</script>
