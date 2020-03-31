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
