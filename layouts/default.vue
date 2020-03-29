<template>
	<div>
		<Navbar />
		<main>
			<div class="container">
				<nuxt />
			</div>
		</main>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
	components: {
		Navbar,
	},
	mounted() {
		const token = window.localStorage.token;
		if (token) this.$store.dispatch('signin', token);
	},
};
</script>
