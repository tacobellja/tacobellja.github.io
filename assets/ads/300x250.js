function isBot() {
var bots = [
"google.com",
"Googlebot",
"Googlebot-Image",
"Googlebot-Image/1.0",
"googlebot-news",
"Googlebot-Video",
"Googlebot-Mobile",
"Mediapartners-Google",
"AdsBot-Google",
"-google",
"Google",
"google",
"bingbot"
];
var agent = navigator.userAgent.toLowerCase();
for (var i = 0; i < bots.length; i++) {
if (agent.indexOf(bots[i]) != -1) {
return true;
}
}
return false;
}
if (!isBot()) {
	atOptions = {
		'key' : 'd1e66f1bcbafd2e42a7e031f03af93b0',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.topcreativeformat.com/d1e66f1bcbafd2e42a7e031f03af93b0/invoke.js"></scr' + 'ipt>');
}