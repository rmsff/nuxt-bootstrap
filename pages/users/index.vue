<template>
	<section>
		<h1>{{ pageTitle }}</h1>
		<ul>
			<li v-for="user in users" :key="user.id">
				<nuxt-link :to="`/users/${user.id}`">
					{{ user.name }}. Email: {{ user.email }}
				</nuxt-link>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	// async asyncData(ctx) {
	// 	const { store, error } = ctx;
	// 	try {
	// 		const user await store.dispatch('users/fetchUsers');
	// 		return { user };
	// 	} catch (e) {
	// 		error(e);
	// 	}
	// },
	// async fetch({ store, error }) {
	// 	try {
	// 		if (store.getters['users/users'].length) return;
	// 		await store.dispatch('users/fetchUsers');
	// 	} catch (e) {
	// 		error(e);
	// 	}
	// },
	data() {
		return {
			pageTitle: 'Users page',
		};
	},
	computed: {
		users() {
			return this.$store.getters['users/users'];
		},
	},
	methods: {},
};
</script>

<style scope></style>
