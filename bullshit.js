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
    	"hedonistic"
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
	]);
}

function ux_people() {
	return random([
		"Jakob Nielsen",
		"Don Norman",
		"Alan Cooper",
		"Bill Buxton"
	]);
}

// you should use user testing to ...
function outcome() {
	return random([
		"increase conversion rates",
		"identify pain points",
		"decrease pain expectations",
		"benchmark resources",
		"empower taxonomy transformation",
		"enhance user experience",
	]);
}

function ux_bullshit() {
	var result = [
		"You should try a " + adjective() +" " + ux_technique() + " with a " + role(),
		"Go and fire a " + role(),
		ux_technique() + " is the new " + ux_technique(),
		company() + " is killing " + ux_technique(),
		"You should use " + adjective() +" " + ux_technique() + " to " + outcome(),
		"Don't trust " + ux_people() + " and use a " + adjective() +" " + ux_technique()
 	];
	return result[Math.floor(Math.random()*result.length)];
}

var item = document.getElementById("technique");
setTimeout(function(){
	item.textContent = '“' + ux_bullshit() + '”';
}, 2000);

