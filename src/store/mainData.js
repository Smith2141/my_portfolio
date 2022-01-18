export default {
  state: {
    languages: [
      { id: 1, name: 'PHP', logo: 'php.png' },
      { id: 3, name: 'Javascript', logo: 'javascript.png' },
      { id: 2, name: 'Python', logo: 'python.png' },
    ]
  },

  mutations: {},

  actions: {},

  getters: {
    languagesGetter (state) {
      return state.languages
    }
  }
}
