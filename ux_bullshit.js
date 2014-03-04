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
