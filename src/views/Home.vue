<template>
  <div>
    <div id="main-text" class="card-panel">
      <h5 class="blue-text text-darken-3">Мои основные проекты</h5>
      <blockquote class="blue-text text-darken-3">
        В настоящий момент занимаюсь поддержкой и развитием рабочих проектов на
        Php, в то же время есть личные проекты на Python и Javascript (Vuejs),
        которые периодически дорабатываю.<br />
        Список проектов сгруппирован по языкам программирования.
        В карточке каждого из проектов указаны основные
        использованные технологии и краткое описание.
      </blockquote>
    </div>
    <Accordion />
  </div>
</template>

<script>
// @ is an alias to /src
import Accordion from '@/components/Accordion.vue'

export default {
  name: 'Home',
  components: {
    Accordion
  }
}
</script>
