<template>
	<div>
		<h1>User page.</h1>
		<br />
		<h2>Name: {{ user.name }},</h2>
		<h2>id: {{ $route.params.id }},</h2>
		<h2>catch phrase: {{ user.company.catchPhrase }}</h2>
	</div>
</template>

<script>
export default {
	async asyncData({ params, error, store }) {
		try {
			const user = await store.dispatch('users/fetchUserById', params.id);
			return { user };
		} catch (err) {
			error(err);
		}
	},
	validate({ params: { id } }) {
		return /^\d+$/.test(id);
	},
};
</script>
