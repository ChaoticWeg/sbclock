const Tagline = (() => {

    let exposed = {};
    let CHANGE_INTERVAL_MS = 45000;
    let next_exec = null;

    let update = () => {
        let nextTagline = TaglineUtils.random();

        $('.tagline').fadeOut('slow', () => {
            $('.tagline').text(nextTagline);
            $('.tagline').fadeIn('slow', () => {
                next_exec = setTimeout(update, CHANGE_INTERVAL_MS);
            });
        });
    };

    exposed.init = () => {
        update();
    };

    exposed.kill = (message = null) => {
        return new Promise((resolve, _) => {

            // cancel next update if queued
            if (next_exec !== null) {
                clearTimeout(next_exec);
                next_exec = null;
            }

            // fade out
            $('.tagline').fadeOut('slow', () => {
                // if no message was provided, we're done
                if (message === null) {
                    return resolve();
                }

                // message was provided; set text and fade back in
                $('.tagline').text(message);
                $('.tagline').fadeIn('slow', resolve);
            });
        });
    };

    return exposed;

})();
