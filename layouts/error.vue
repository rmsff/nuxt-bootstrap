<template>
	<section>
		<h1>Error 404</h1>
		<h2>This page does not exist.</h2>
		<a href="#" @click.prevent="$router.back()">Return to previous page</a>
	</section>
</template>

<script>
export default {
	layout: 'empty',
	methods: {
		getPrevPath() {
			const paths = this.$route.path.split('/').filter((item) => item !== '');
			paths.pop();
			const prevPath = '/' + paths.join('/');
			return prevPath;
		},
	},
};
</script>
<style scoped>
h1 {
	color: red;
}
section {
	height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
}
</style>
