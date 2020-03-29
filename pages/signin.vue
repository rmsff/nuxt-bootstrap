<template>
	<form class="form" @submit.prevent="handleSubmit">
		<h1>
			Sign in
		</h1>
		<div class="form-group">
			<input type="text" class="form-control" />
		</div>
		<div class="form-group">
			<input type="text" class="form-control" />
		</div>
		<div class="btn-wrapper"></div>
		<button class="btn btn-primary" type="submit">Sign in</button>
		<nuxt-link exact class="nav-link" to="/signup">
			Sign up
		</nuxt-link>
		<a href="#" @click.prevent="$router.back()">Return to previous page</a>
	</form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	layout: 'empty',
	computed: {
		...mapGetters(['isAuth']),
	},
	mounted() {
		const token = window.localStorage.token;
		if (token) this.$store.dispatch('signin', token);
		if (this.isAuth) this.$router.push('/');
	},
	methods: {
		handleSubmit() {
			this.$store.dispatch('signin', true);
			this.$router.back();
		},
	},
};
</script>

<style scoped>
.form {
	width: 900px;
	margin: 0 auto;
	min-height: 75vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
}
.form-group {
	padding-top: 20px;
	min-width: 300px;
}
.btn-wrapper {
	padding-top: 10px;
}
.btn-primary {
	min-width: 120px;
}
</style>
