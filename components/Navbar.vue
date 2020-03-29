<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<nuxt-link class="navbar-brand" to="/">NuxtJS</nuxt-link>
			<div class="collapse navbar-collapse">
				<ul class="navbar-nav navbar-nav-left">
					<li class="nav-item">
						<nuxt-link exact active-class="active" class="nav-link" to="/">
							Home
						</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link active-class="active" class="nav-link" to="/users">
							Users
						</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">
							About
						</nuxt-link>
					</li>
				</ul>
				<ul class="navbar-nav">
					<li v-if="isAuth" class="nav-item">
						<a href="/signin" class="nav-link" @click="handleLogout">
							Logout
						</a>
					</li>
					<li v-else class="nav-item">
						<nuxt-link
							:prefetch="false"
							active-class="active"
							class="nav-link"
							to="/signin"
						>
							Sign in
						</nuxt-link>
					</li>
				</ul>
			</div>
		</nav>
		<b-breadcrumb>
			<b-breadcrumb-item
				v-for="item in getPaths()"
				:key="item.href"
				:to="item.href"
				:active="item.active"
			>
				{{ item.text }}
			</b-breadcrumb-item>
		</b-breadcrumb>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['isAuth']),
	},
	methods: {
		getPaths() {
			const getText = (path) => {
				const mapping = { signin: 'Sign in' };
				return mapping[path] || path[0].toUpperCase() + path.slice(1);
			};

			const paths = this.$route.path.split('/').filter((item) => item !== '');

			const items = paths.map((path, index) => {
				const newPath = [...paths];
				newPath.length = index + 1;
				const href = `/${newPath.join('/')}`;
				return {
					path,
					text: getText(path),
					href,
					active: paths.length === index + 1,
				};
			});

			return items.length
				? items
				: [
						{
							path: 'home',
							text: 'Home',
							href: '/home',
							active: true,
						},
				  ];
		},
		handleLogout() {
			this.$store.dispatch('logout');
		},
	},
};
</script>

<style scoped>
.navbar-collapse {
	display: flex;
	justify-content: space-between;
}
</style>
