export default {
  state: {
    languages: [
      { id: 1, name: 'PHP', logo: 'php.png' },
      { id: 3, name: 'Javascript', logo: 'javascript.png' },
      { id: 2, name: 'Python', logo: 'python.png' },
    ],
    projects: [
      {
        id: 1,
        language: 'PHP',
        title: 'Интеграционный микросервис получения атрибутивных и геопространственных данных объектов корпоративной ГИС',
        description: ''
      }
    ]
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
