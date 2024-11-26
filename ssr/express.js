const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");
const { matchPath } = require("react-router-dom");
const { getSelectorsByUserAgent } = require("react-device-detect");

// create express application
const app = express();
require("dotenv").config();
const useragent = require("express-useragent");
app.use(useragent.express());

// import App component
const App = require("../src/App").default;
const routes = require("./routes");
// serve static assets
app.get(
	/\.(js|css|svg|png|jpg|jpeg|gif|webp|map|xml|txt|mp4|ico)$/,
	express.static(path.resolve(__dirname, "../dist"))
);

// for any other requests, send `index.html` as a response
app.use("*", async (req, res) => {
	// get matched route
	const matchRoute = routes.find((route) =>
		matchPath(route.path, req.originalUrl)
	);
	const lastSegment = req.originalUrl.split("/").pop();

	let componentData = null;
	if (matchRoute && typeof matchRoute.component === "function") {
		const PreloadComponent = matchRoute.component;
		componentData = <PreloadComponent />;
	}

	// read `index.html` file
	let indexHTML = fs.readFileSync(
		path.resolve(__dirname, "../dist/index.html"),
		{
			encoding: "utf8",
		}
	);

	// get HTML string from the `App` component
	let appHTML = ReactDOMServer.renderToString(
		<StaticRouter location={req.originalUrl} context={componentData}>
			<App />
		</StaticRouter>
	);

	// populate `#app` element with `appHTML`
	indexHTML = indexHTML.replace(
		'<div id="root"></div>',
		`<div id="root">${appHTML}</div>`
	);

	// set value of `initial_state` global variable
	indexHTML = indexHTML.replace(
		"var initial_state = null;",
		`var initial_state = ${JSON.stringify(componentData)};`
	);

	let { isMobile, isDesktop, isTablet, isMobileOnly, mobileModel } =
		getSelectorsByUserAgent(req.useragent.source);
	isMobile = isMobile || mobileModel === "iPhone" || mobileModel === "iPad";
	isTablet = isTablet || mobileModel === "iPad";

	indexHTML = indexHTML.replace(
		"var device_type = { isMobile: false, isDesktop: true, isTablet: false, isMobileOnly: false};",
		`var device_type = ${JSON.stringify({
			isMobile,
			isDesktop,
			isTablet,
			isMobileOnly,
		})};`
	);

	if (
		appHTML.indexOf("Oops! The page you’re looking for can’t be found.") !==
		-1
	) {
		return res.status(404).send(indexHTML);
	}

	return res.send(indexHTML);
});

const PORT = process.env.SERVER_PORT || 3000;
// run express server on port 8888
app.listen(PORT, () => {
	console.log(`Express server started at http://localhost:${PORT}`);
});
