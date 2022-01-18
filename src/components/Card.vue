<template>
  <div>
    <ul
      class="collapsible"
      data-collapsible="accordion"
      ref="collapsible_elems"
    >
      <li>
        <div class="collapsible-header">
          <i class="material-icons">filter_drama</i>First
        </div>
        <div class="collapsible-body">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </li>
      <li>
        <div class="collapsible-header">
          <i class="material-icons">place</i>Second
        </div>
        <div class="collapsible-body">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </li>
      <li>
        <div class="collapsible-header">
          <i class="material-icons">whatshot</i>Third
        </div>
        <div class="collapsible-body">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Card',
  mounted() {
    M.Collapsible.init(this.$refs.collapsible_elems)
  }
}
</script>
