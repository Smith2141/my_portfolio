<template>
  <div>
    <ul
      class="collapsible"
      data-collapsible="accordion"
      ref="collapsible_elems"
    >
      <li v-for="elem of languagesGetter" :key="elem.id">
        <div class="collapsible-header lighten-3" :class="elem.color">
          <div class="lang-row">
            <div class="lang-logo">
              <img :src="'images/' + elem.logo" alt="logo" />
            </div>
            <div class="lang-name">
              <h5 class="blue-text text-darken-4">{{ elem.name }}</h5>
            </div>
          </div>
        </div>
        <div class="collapsible-body">
          <div class="row">
            <Card
              v-for="project of projectsGetter[elem.name]"
              :key="project.id"
              :card_data = "project"
              :card_color = "elem.color"
            >
            </Card>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '@/components/Card.vue'

export default {
  name: 'Accordion',
  components: {
    Card
  },
  mounted() {
    M.Collapsible.init(this.$refs.collapsible_elems)
    // console.log(this.languagesGetter)
  },
  computed: {
    ...mapGetters(['languagesGetter', 'projectsGetter'])
  }
}
</script>
