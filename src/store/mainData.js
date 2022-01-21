export default {
  state: {
    languages: [
      { id: 1, name: 'PHP', logo: 'php.png', color: 'deep-purple' },
      { id: 2, name: 'Python', logo: 'python.png', color: 'indigo' },
      { id: 3, name: 'Javascript', logo: 'javascript.png', color: 'orange' },
    ],
    projects: {
      PHP: [
        {
          id: 1,
          language: 'PHP',
          title: 'Предоставление данных',
          description: `Интеграционные микросервисы получения атрибутивных и геопространственных данных
          объектов корпоративной ГИС`,
          stack: ['Nginx', 'PHP 7.2', 'Slim 4', 'Doctrine DBAL', 'PostgreSQL', 'Twig', 'Vuejs 2', 'Vuex', 'Materialize',
            'Swagger', 'Webpack 5'],
          details: `Реализация задач предоставления данных в установленном формате по запросу внешних систем.
          Один из микросервисов был спроектирован на основе реверс-инжиниринга предыдущей версии. Для контроля
          статистики использования, в каждый из микросервисов добавлена frontend визуализация в виде таблиц и
          диаграмм c данными парсинга лог-файлов.`
        },
        {
          id: 2,
          language: 'PHP',
          title: 'Загрузка данных',
          description: 'Интеграционный микросервис загрузки графических, атрибутивных и геопространственных данных в БД корпоративной ГИС',
          stack: ['PHP 7.2', 'Slim 4', 'Doctrine DBAL', 'PostgreSQL', 'Twig', 'Vuejs 2', 'Vuex', 'Materialize', 'Swagger', 'Webpack 5'],
          details: `Реализация задачи загрузки изображений и семантической информации с привязкой к объектам ГИС.
          Запросы загрузки данных выполняются по SOAP протоколу. На основе парсинга лог-файлов на frontend
          визуализируется статистика обращения к микросервису количество и результаты выполнения запросов.`
        },
        {
          id: 3,
          language: 'PHP',
          title: 'Внутренняя автоматизация',
          description: 'Сервис внутренней автоматизации персональной рассылки учётных данных пользователям корпоративной ГИС',
          stack: ['PHP 7.2', 'PHPMailer', 'Bootstrap 4'],
          details: `Реализация задачи персонализированной рассылки учётных данных пользователям корпоративной ГИС
          по предварительно списку в формате .xlsx. На frontend визуализируются статус и данные для отправки,
          контролируется полнота заполнения данных для корректного формирования письма пользователю.`
        },
        {
          id: 4,
          language: 'PHP',
          title: 'Почтовая рассылка',
          description: `Сервис автоматизированной рассылки писем пользователям корпоративной ГИС`,
          stack: ['PHP 7.2', 'PHPMailer', 'jQuery', 'Bootstrap 4'],
          details: `Реализация задачи уведомления пользователей корпоративной ГИС о предстоящем обновлении
          web-приложения, деталях обновления, а также о временных рамках технических работ.
          UI сервиса содержит редактор сообщения, индикаторы отображения текущего состояния: количество
          сообщений общее/отправлено, список недоставленных адресов. По окончании рассылки по отдельному
          списку администраторам системы высылается отчёт о результатах рассылки.`
        }
      ],
      Python: [
        {
          id: 1,
          language: 'Python',
          title: 'Тестирование UI',
          description: 'Проектирование и реализация тест кейсов пользовательского интерфейса корпоративной ГИС',
          stack: ['Python 3', 'SeleniumBase'],
          details: `Реализация задачи автоматизированного тестирования функционала корпоративной ГИС.
          Тесты созданы на основе программы и методики испытаний в части проверки полноты и корректности
          выполнения функциональных задач системой. Автоматизировано тестирование таких задач, как авторизация
          пользователя в системе, позиционирование карты по координатам, включение и выключение слоёв объектов ГИС,
          создание, редактирование и удаление объектов ГИС.`
        },
        {
          id: 2,
          language: 'Python',
          title: 'Автоматизация формирования отчётов',
          description: 'Формирование отчётов в формате .xlsx на основе данных выгрузки внешней системы',
          stack: ['Python 3', 'openpyxl'],
          details: `Реализация задачи автоматизации формирования отчётов на основе данных выгрузки в формате .xlsx.
          При проектировании скрипта решены вопросы выборки и фильтрации данных, сортировки и распределения
          данных по типам отчётов, форматирования результирующих таблиц.`
        }
      ],
      Javascript: [
        {
          id: 1,
          language: 'Javascript',
          title: 'Визуализация состояния инвестиционного портфеля',
          description: `Получение данных по запросу к API информационно-статистического сервера Московской Биржи,
          расчёт и отображение состояния инвестиционного портфеля.`,
          details: `Веб-приложение на основе рыночных данных и списка финансовых инструментов
          инвестиционного портфеля рассчитывает и отображает изменение цены по каждому инструменту.
          По типу финансовых инструментов, реализована обработка для акций, облигаций (корпоративных и ОФЗ)
          и фондов (Etf). Для каждого инструмента отображаются: временная отметка данных, тикер инструмента,
          наименование эмитента, текущие значения изменения стоимости абсолютное и процентное для торговых периодов.
          Реализована цветовая индикация направления движения цены в рамках торгового периода.
          Расчёты выполняются для текущей торговой сессии, недельного и месячного торговых периодов.
          Для удобства рассчитывается так же общая стоимость портфеля.`
        },
      ],
    }
  },

  mutations: {},

  actions: {},

  getters: {
    languagesGetter (state) {
      return state.languages
    },
    projectsGetter (state) {
      return state.projects
    }
  }
}
