$(async () => {


    $('audio').removeAttr('controls');
    $('.controls-wrapper').css('visibility', 'visible');
    
    const tooltip = $('output[for="volume-slider"]');

    $('#volume-slider').on('input', function () {
       
        const val = $(this).val();
        console.log(val)
        tooltip.text(val);
       
        // Calculate the position of the tooltip
        const trans = "-" + val + "%";
        const width = $(this).outerWidth();
        tooltip.css({
            left: val + "%",
            transform: `translate(${trans})`
        });
    });

    
    // Fetch access token
    const fetchSpotifyApiAccesssToken = async () => {
        authOptions = {
            method: 'POST',
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials',
            json: true
        };
        const res = await fetch(authOptions.url, authOptions);
        const data = await res.json();
        console.log(data)
        return data;
    }

    const token = await fetchSpotifyApiAccesssToken();
    const _getTracks = async () => {
        const result = await fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl', {
            method: 'GET',
            headers: { Authorization:'Bearer ' + token.access_token,'Content-Type': 'application/json' }
        });
        const data = await result.json();
        
        return data;
    }

    const  UIControl =  async () => {
        const trackData = await _getTracks();
        console.log(trackData)
        $('audio').append(`<source src= ${trackData.external_urls.spotify} type="audio/mpeg">`);
        
        $(".fa-play").on('click', function() {
        $('audio')[0].play(); // Play audio
        });
    }
    
    fetchSpotifyApiAccesssToken();
    _getTracks()
    UIControl()
});