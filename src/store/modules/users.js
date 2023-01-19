export default {
  namespaced: true,
  state: {
    users: [],
    filteredUsers: [],
    currentFilters: {
      country: null,
      score: null,
    },
    filterList: [
      {
        name: "country",
        content: ["russia", "usa"],
      },
      {
        name: "score",
        content: ["> 20", "< 10"],
      },
    ],
  },
  getters: {
    // users: (state) => state.users.filter((item) => {
    //   let filtered = [];
    //   for (let [key, value] of Object.entries(state.currentFilters)) {
    //       item[key] === value || !value ? filtered.push(true) : filtered.push(false);
    //   }
    //   if (!filtered.includes(false)) return item;
    // }),
    filteredUsers: (state) => state.filteredUsers,
    filterList: (state) => state.filterList,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setFilter(state, filter) {
      state.currentFilters[filter.name] = filter.data;
    },
    filtering(state) {
      state.filteredUsers = [];
      
      setTimeout(() => {
        state.filteredUsers = state.users.filter((item) => {
          let filtered = [];
          for (let [key, value] of Object.entries(state.currentFilters)) {
            item[key] === value || !value
              ? filtered.push(true)
              : filtered.push(false);
          }
          if (!filtered.includes(false)) return item;
        });
      }, 500);
    },
  },
  actions: {
    setFilter({ commit }, filter) {
      commit("setFilter", filter);
      commit("filtering");
    },
    setUsers({ commit }, users) {
      commit("setUsers", users);
      commit("filtering");
    },
  },
};
