export default ({ markup, helmet }) => {
	return `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
	${helmet.title.toString()}
	${helmet.meta.toString()}
	<link rel="stylesheet" type="text/css" href="/assets/main.css" />
	${helmet.link.toString()}
</head>
<body ${helmet.bodyAttributes.toString()}>
	<div id="root">${markup}</div>
	<script src="/client.js" async></script>
</body>
</html>`;
};