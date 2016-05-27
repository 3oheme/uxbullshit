function ux_bullshit() {

    var allSentences = [];

    // allSentences.push(
    //     function() {
    //         return "You should try a " + adjective() +" " + ux_technique() + " with a " + role() + " to " + outcome();
    //     }
    // );

    allSentences.push(
        function() {
            var actualRole = role();
            return "Go and fire " + nlp.noun(actualRole).article() + " " + actualRole;
        }
    );

    // allSentences.push(
    //     function() {
    //         return "Think in " + ux_technique() + " as the new " + ux_technique();
    //     }
    // );

    // allSentences.push(
    //     function() {
    //         return company() + " is killing " + ux_technique();
    //     }
    // );

    // allSentences.push(
    //     function() {
    //         return "You should use " + adjective() +" " + ux_technique() + " to " + outcome();
    //     }
    // );

    // allSentences.push(
    //     function() {
    //         return "Don't trust " + ux_people() + " and use a " + adjective() +" " + ux_technique() + " if you need to " + outcome();
    //     }
    // );

    // allSentences.push(
    //     function() {
    //         return "Follow " + ux_people() + " and " + outcome() + " using a " + adjective() +" " + adjective() + " " + ux_technique();
    //     }
    // );

    // allSentences.push(
    //     function() {
    //         return "To " + outcome() + " try thinking in a " + adjective() +" " + ux_technique();
    //     }
    // );

    // allSentences.push(
    //     function() {
    //         return "A wise man would use a " + adjective() + " " + adjective() + " " + ux_technique() + " to " + outcome();
    //     }
    // );
    // allSentences.push(
    //     function() {
    //         return "Think outside the box to " + outcome() + " and " + outcome();
    //     }
    // );
    // allSentences.push(
    //     function() {
    //         return "You can simply " + outcome() + " applying a " + adjective() +" " + ux_technique();
    //     }
    // );
    // allSentences.push(
    //     function() {
    //         return "Stop using a " + adjective() +' '+ adjective() +" " + ux_technique() + " if you need to " + outcome();
    //     }
    // );

    return random(allSentences)();

}
