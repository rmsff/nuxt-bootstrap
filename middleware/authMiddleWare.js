export default (ctx) => {
	const { store, redirect } = ctx;
	if (!store.getters.isAuth) redirect('/signin');
};
