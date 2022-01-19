export default {
  state: {
    languages: [
      { id: 1, name: 'PHP', logo: 'php.png' },
      { id: 2, name: 'Python', logo: 'python.png' },
      { id: 3, name: 'Javascript', logo: 'javascript.png' },
    ],
    projects: {
      PHP: [
        {
          id: 1,
          language: 'PHP',
          title: 'Интеграционные микросервисы получения атрибутивных и геопространственных данных объектов корпоративной ГИС',
          stack: ['PHP 7.2', 'Slim 4', 'Doctrine DBAL', 'PostgreSQL', 'twig', 'Vuejs 2', 'Vuex', 'Materialize', 'Swagger', 'Webpack 5'],
          description: `Назначение микросервиса в предоставлении атрибутивных и
           геопространственных данных для нескольких типов объектов учёта.`
        },
        {
          id: 2,
          language: 'PHP',
          title: 'Интеграционный микросервис загрузки графических, атрибутивных и геопространственных данных в БД корпоративной ГИС',
          description: '',
          stack: ['PHP 7.2', 'Slim 4', 'Doctrine DBAL', 'PostgreSQL', 'twig', 'Vuejs 2', 'Vuex', 'Materialize', 'Swagger', 'Webpack 5']
        },
        {
          id: 3,
          language: 'PHP',
          title: 'Сервис внутренней автоматизации персональной рассылки учётных данных пользователям корпоративной ГИС',
          description: '',
          stack: ['PHP 7.2', 'PHPMailer', 'Bootstrap 4']
        },
        {
          id: 4,
          language: 'PHP',
          title: 'Сервис рассылки писем пользователям корпоративной ГИС',
          description: '',
          stack: ['PHP 7.2', 'PHPMailer', 'jQuery', 'Bootstrap 4']
        }
      ],
      Python: [
        {
          id: 1,
          language: 'Python',
          title: 'Интеграционный микросервис получения атрибутивных и геопространственных данных объектов корпоративной ГИС',
          description: ''
        },
        {
          id: 2,
          language: 'Python',
          title: 'Интеграционный микросервис получения атрибутивных и геопространственных данных объектов корпоративной ГИС',
          description: ''
        }
      ],
      Javascript: [
        {
          id: 1,
          language: 'Javascript',
          title: 'Интеграционный микросервис получения атрибутивных и геопространственных данных объектов корпоративной ГИС',
          description: ''
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
