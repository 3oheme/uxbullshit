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
		"eyetracking"
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
		"Alan Cooper",
		"Bill Buxton",
    "John Ive",
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
	]);
}

function ux_bullshit() {
	var result = [
		"You should try a " + adjective() +" " + ux_technique() + " with a " + role() + " to " + outcome(),
		"Go and fire a " + role(),
		"Think in " + ux_technique() + " as the new " + ux_technique(),
		company() + " is killing " + ux_technique(),
		"You should use " + adjective() +" " + ux_technique() + " to " + outcome(),
		"Don't trust " + ux_people() + " and use a " + adjective() +" " + ux_technique() + " if you need to to " + outcome(),
    "To " + outcome() + " try thinking in a " + adjective() +" " + ux_technique(),
 	];
	return result[Math.floor(Math.random()*result.length)];
}

var item = document.getElementById("technique");
setTimeout(function(){
	item.textContent = '“' + ux_bullshit() + '”';
}, 2000);

