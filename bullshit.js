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
	]);
}

function company() {
	return random([
		"Google",
		"Microsoft",
		"Apple",
		"Amazon",
		"Twitter",
		"ThoughtWorks"
	]);
}

function ux_bullshit() {
	var result = [
		"You should try a " + adjective() +" " + ux_technique() + " with a " + role(),
		"Go and fire a " + role(),
		ux_technique() + " is the new " + ux_technique(),
		company() + " is killing " + ux_technique(),
 	];
	return result[Math.floor(Math.random()*result.length)];
}

var item = document.getElementById("technique");
setTimeout(function(){
	item.textContent = '“' + ux_bullshit() + '”';
}, 2000);

