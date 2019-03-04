const TaglineUtils = (() => {

    let exposed = {};

    const lines = [
        "Fork bomb looks bad in this font",
        "ChaoticWeg",
        "40% of cops",
        "The Absolute Boy",
        "Go on Chapo",
        "Fasten your seatbelts",
        "World is a fuck",
        "Free Lil C-Note"
    ];

    // get line by index if in range, else null
    exposed.byIndex = index => index > 0 && index < lines.length ? lines[index] : null;

    // 0 <= n < len(lines) for line
    let lastSelected = -1;

    // show time if coin flip decides to (never twice in a row) else random line
    exposed.random = () => {
        let index = undefined;
        while ((index = Math.floor(Math.random() * lines.length)) == lastSelected);
        return lines[index];
    };

    // expose!
    return exposed;

})();
