export const state = () => ({
  menuPanel: false,
  aboutPage: null,
})

export const getters = {
  menuPanel: (state) => {
    return state.menuPanel
  },

  aboutPage: (state) => {
    return state.aboutPage
  },
}

export const mutations = {
  toggleMenuPanel: (state) => {
    state.menuPanel = !state.menuPanel
  },

  setAboutPage: (state, aboutPage) => {
    state.aboutPage = aboutPage
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const about = await $content('contatti').fetch()
    commit('setAboutPage', about)
  },
}
