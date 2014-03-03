function random(elements) {
	return elements[Math.floor(Math.random()*elements.length)]; 
}

function role() {
	return random([
		"developer",
		"visual designer",
		"tech lead",
		"stakeholder",
		"business analyst",
		"project manager"
	]);
}

function ux_technique() {
	return random([
		"competitor analysis",
		"user survey",
		"interview",
		"contextual enquiry",
		"focus group",
		"brainstorming",
		"ideation session",
		"affinity diagramming",
		"task analysis",
		"paper prototyping",
		"heuristic evaluation",
		"storyboarding",
		"performance testing",
		"subjective evaluation",
		"critical incidence technique",
		"remote evaluation",
		"personas",
    	"gamification",
		"user journey",
		"longitudinal study",
		"ethnography research",
		"cultural probe",
		"participant observation",
		"eyetracking",
		"keystroke level modelling"
	]);
}

function adjective() {
	return random([
		"in-house",
		"empowering",
		"end-to-end",
		"disruptive",
		"innovative",
		"strategic",
		"guerilla",
		"hyper-personalized",
		"enterprise",
		"contextually aware",
		"ninja grade",
		"omni-channel",
	    "holistic",
	    "pragmatic",
	    "hedonistic",
	    "lean",
	    "dinamically generated",
	    "static-positioned",
	    "situational aware",
	    "self-descriptive",
	    "tangential"
	]);
}

function company() {
	return random([
		"Google",
		"Microsoft",
		"Apple",
		"Amazon",
		"Twitter",
		"ThoughtWorks",
		"Facebook",
		"Adobe",
		"Reddit",
		"Yahoo",
		"Oracle",
	    "37 degrees",
	    "Mailchimp",
	    "Netflix",
	    "Dropbox",
	]);
}

function ux_people() {
	return random([
		"Jakob Nielsen",
		"Don Norman",
		"Steve Jobs",
		"Alan Cooper",
		"David Carson",
		"Bill Buxton",
		"John Ive",
		"Douglas Adams",
		"Albert Einstein",
		"Paul Graham",
		"Jef Raskin",
		"Tim Berners-Lee",
	]);
}

// you should use user testing to ...
function outcome() {
	return random([
		"increase conversion rates",
		"identify pain points",
		"decrease pain expectations",
		"benchmark transversal resources",
		"empower taxonomy transformation",
		"increase ROI",
		"change the game plan",
		"go viral in social media channels",
		"enhance user experience",
		"reduce system leverage",
		"pivot around future markets",
		"position HCI strategies",
		"foster new paradigms in research",
		"avoid assumption reversal",
		"increase deliverables quality",
		"create long-lasting experiences",
		"cross-pollinate ideas between underpowered disciplines",
		"increase systemic innovation and take entrepreneurial action",
		"encourage jazz-like improvisation within a guiding structure",
		"create a mindset of creative dissatisfaction to reduce resistance to change",
		"develop a vision-focused innovation strategy",
		"unpack competitive self-confidence innovation",
		"lower combinatorial impairment"
	]);
}

function ux_bullshit() {
	var result = [
		"You should try a " + adjective() +" " + ux_technique() + " with a " + role() + " to " + outcome(),
		"Go and fire a " + role(),
		"Think in " + ux_technique() + " as the new " + ux_technique(),
		company() + " is killing " + ux_technique(),
		"You should use " + adjective() +" " + ux_technique() + " to " + outcome(),
		"Don't trust " + ux_people() + " and use a " + adjective() +" " + ux_technique() + " if you need to " + outcome(),
		"Follow " + ux_people() + " and " + outcome() + " using a " + adjective() +" " + adjective() + " " + ux_technique(),
	    "To " + outcome() + " try thinking in a " + adjective() +" " + ux_technique(),
	    "A wise man would use a " + adjective() + " " + adjective() + " " + ux_technique() + " to " + outcome(),
	    "Think outside the box to " + outcome() + " and " + outcome()
 	];
	return result[Math.floor(Math.random()*result.length)];
}


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
}, 2000);

