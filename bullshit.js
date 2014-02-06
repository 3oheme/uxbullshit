function role() {
	var role = [
		"developer",
		"visual designer",
		"tech lead",
		"stakeholder",
		"business analyst",
		"project manager"
	];
	return role[Math.floor(Math.random()*role.length)];
}

function ux_technique() {
	var techn = [
		"competitor analysis",
		"user surveys",
		"interviews",
		"contextual enquiry",
		"focus groups",
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
		"user journeys",
		"longitudinal study",
		"ethnography research",
		"cultural probe",
		"Participant Observation",
	];
	return techn[Math.floor(Math.random()*techn.length)];
}

function adjective() {
	var adj = [
		"in-house",
		"empowering",
		"end-to-end",
		"future",
		"low hanging fruit",
	];
	return adj[Math.floor(Math.random()*adj.length)];
}

function company() {
	var company = [
		"Google",
		"Microsoft",
		"Apple",
		"Amazon",
		"Twitter",
		"ThoughtWorks"
	];
	return company[Math.floor(Math.random()*company.length)]; 
}

function ux_bullshit() {
	var result = [
		// "You should try a " + adjective() +" " + ux_technique() + " with a " + role(),
		// "Go and fire a " + role(),
		// ux_technique() + " is the new " + ux_technique(),
		company() + " is killing " + ux_technique(),
 	];
	return result[Math.floor(Math.random()*result.length)];
}

var item = document.getElementById("technique");
setTimeout(function(){
	item.textContent = '“' + ux_bullshit() + '”';
},2000);

