<template>
  <footer class="page-footer">
    <div class="footer-copyright">
      <div class="blue-grey-text text-darken-1">
        &copy;
        {{ footer_year }}
        <a
          href="https://ru.freepik.com/vectors/background"
          target="_blank"
          class="blue-grey-text text-darken-1"
          >Background вектор создан(а) rawpixel.com - ru.freepik.com</a
        ><a
          href="https://www.pngegg.com/en/search?q=programming+language"
          target="_blank"
          class="blue-grey-text text-darken-1"
          >Логотипы взяты с pngegg.com</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footer_year: new Date().getFullYear()
    }
  }
}
</script>
