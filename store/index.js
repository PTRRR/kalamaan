export const state = () => ({
  menuPanel: false,
})

export const getters = {
  menuPanel: (state) => {
    return state.menuPanel
  },
}

export const mutations = {
  toggleMenuPanel: (state) => {
    state.menuPanel = !state.menuPanel
  },
}
