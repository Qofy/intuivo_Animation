export { debounce } from "./validation";

export const createPageUrl = (pageName) => {
	const routeMap = {
		Dashboard: "/dashboard",
		Login: "/login",
		Register: "/register",
	};

	// Handle query parameters
	const [basePage, queryString] = pageName.split("?");
	const route =
		routeMap[basePage] ||
		`/${pageName
			.toLowerCase()
			.replace(/([A-Z])/g, "-$1")
			.replace(/^-/, "")}`;
	return queryString ? `${route}?${queryString}` : route;
};
