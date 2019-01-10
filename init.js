setTimeout(function(){
	magic_ux_shit = ux_bullshit()
	var item = document.getElementById("technique");
	item.textContent = '“' + magic_ux_shit + '”';

	var more = document.getElementById("more-info");
	more.removeAttribute("style");

	var tweet = document.getElementById("tweet");
	var technique_encoded = encodeURIComponent(magic_ux_shit + " — via @uxbullshit");
	var url_encoded = encodeURIComponent('http://uxbullshit.com')
	var tweet_link = 'https://twitter.com/intent/tweet?text=' + technique_encoded + "&url=" + url_encoded;
	tweet.href = tweet_link
}, 1100);

