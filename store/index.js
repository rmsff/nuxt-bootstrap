export const state = () => ({
	token: null,
});

export const actions = {
	signin({ commit }, token = null) {
		commit('setToken', token);
	},
	logout({ commit }) {
		commit('clearToken');
	},

	async nuxtServerInit({ dispatch }) {
		await dispatch('users/fetchUsers');
	},
};

export const mutations = {
	setToken(state, token) {
		state.token = token;
		window.localStorage.token = token;
	},
	clearToken() {
		state.token = null;
		window.localStorage.removeItem('token');
	},
};

export const getters = {
	isAuth: ({ token }) => !!token,
};
