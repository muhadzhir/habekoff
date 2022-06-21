export const header = {
  namespaced: true,
  state: () => ({
    expanded: false
  }),
  mutations: {
    setExpanded: (state, expanded) => {
      state.expanded = expanded
    }
  }
}
