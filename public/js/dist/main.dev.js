"use strict";

$(function _callee() {
  var tooltip, fetchSpotifyApiAccesssToken, token, _getTracks, UIControl;

  return regeneratorRuntime.async(function _callee$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          $('audio').removeAttr('controls');
          $('.controls-wrapper').css('visibility', 'visible');
          tooltip = $('output[for="volume-slider"]');
          $('#volume-slider').on('input', function () {
            var val = $(this).val();
            console.log(val);
            tooltip.text(val); // Calculate the position of the tooltip

            var trans = "-" + val + "%";
            var width = $(this).outerWidth();
            tooltip.css({
              left: val + "%",
              transform: "translate(".concat(trans, ")")
            });
          }); // Fetch access token

          fetchSpotifyApiAccesssToken = function fetchSpotifyApiAccesssToken() {
            var res, data;
            return regeneratorRuntime.async(function fetchSpotifyApiAccesssToken$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    authOptions = {
                      method: 'POST',
                      url: 'https://accounts.spotify.com/api/token',
                      headers: {
                        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
                        'Content-Type': 'application/x-www-form-urlencoded'
                      },
                      body: 'grant_type=client_credentials',
                      json: true
                    };
                    _context.next = 3;
                    return regeneratorRuntime.awrap(fetch(authOptions.url, authOptions));

                  case 3:
                    res = _context.sent;
                    _context.next = 6;
                    return regeneratorRuntime.awrap(res.json());

                  case 6:
                    data = _context.sent;
                    console.log(data);
                    return _context.abrupt("return", data);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          _context4.next = 7;
          return regeneratorRuntime.awrap(fetchSpotifyApiAccesssToken());

        case 7:
          token = _context4.sent;

          _getTracks = function _getTracks() {
            var result, data;
            return regeneratorRuntime.async(function _getTracks$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl', {
                      method: 'GET',
                      headers: {
                        Authorization: 'Bearer ' + token.access_token,
                        'Content-Type': 'application/json'
                      }
                    }));

                  case 2:
                    result = _context2.sent;
                    _context2.next = 5;
                    return regeneratorRuntime.awrap(result.json());

                  case 5:
                    data = _context2.sent;
                    return _context2.abrupt("return", data);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          };

          UIControl = function UIControl() {
            var trackData;
            return regeneratorRuntime.async(function UIControl$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return regeneratorRuntime.awrap(_getTracks());

                  case 2:
                    trackData = _context3.sent;
                    console.log(trackData);
                    $('audio').append("<source src= ".concat(trackData.external_urls.spotify, " type=\"audio/mpeg\">"));
                    $(".fa-play").on('click', function () {
                      $('audio')[0].play(); // Play audio
                    });

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          };

          fetchSpotifyApiAccesssToken();

          _getTracks();

          UIControl();

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  });
});