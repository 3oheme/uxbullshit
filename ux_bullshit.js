function ux_bullshit() {
	var result = [
		"You should try a " + adjective() +" " + technique() + " with a " + role() + " to " + outcome(),
		"Go and fire a " + role(),
		"Think in " + technique() + " as the new " + technique(),
		company() + " is killing " + technique(),
		"You should use " + adjective() +" " + technique() + " to " + outcome(),
		"Don't trust " + people() + " and use a " + adjective() +" " + technique() + " if you need to " + outcome(),
		"Follow " + people() + " and " + outcome() + " using a " + adjective() +" " + adjective() + " " + technique(),
	    "To " + outcome() + " try thinking in a " + adjective() +" " + technique(),
	    "A wise man would use a " + adjective() + " " + adjective() + " " + technique() + " to " + outcome(),
	    "Think outside the box to " + outcome() + " and " + outcome(),
	    "You can simply " + outcome() + " applying a " + adjective() +" " + technique(),
	    "Stop using a " + adjective() +' '+ adjective() +" " + technique() + " if you need to " + outcome(),
 	];
	return result[Math.floor(Math.random()*result.length)];
}
