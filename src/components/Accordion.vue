<template>
  <div>
    <ul
      class="collapsible"
      data-collapsible="accordion"
      ref="collapsible_elems"
    >
      <li v-for="elem of languagesGetter" :key="elem.id">
        <div class="collapsible-header">
          <div class="lang-row">
            <div class="lang-logo">
              <img :src="'images/' + elem.logo" alt="logo" />
            </div>
            <div class="lang-name">
              <h6>{{ elem.name }}</h6>
            </div>
          </div>
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
