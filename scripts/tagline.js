const Tagline = (() => {

    let exposed = {};
    let CHANGE_INTERVAL_MS = 45000;

    let update = () => {
        let nextTagline = TaglineUtils.random();

        $('.tagline').fadeOut('slow', () => {
            $('.tagline').text(nextTagline);
            $('.tagline').fadeIn('slow', () => {
                setTimeout(update, CHANGE_INTERVAL_MS);
            })
        });
    };

    exposed.init = () => {
        update();
    };

    return exposed;

})();
