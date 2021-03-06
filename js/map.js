
      /*=================== MAP ===================*/

      function initMap() {
      
          // MAP LOCATION
          // Got Chicago!  
          var myLatLng = {lat: 41.8755616, lng: -87.6244212};

            // STYLE MAP
            var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng, 
            zoom: 14,
            disableDefaultUI: true,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
            },
              styles: [
        {
            "stylers": [
                {
                    "hue": "#ff1a00"
                },
                {
                    "invert_lightness": true
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 33
                },
                {
                    "gamma": 0.5
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2D333C"
                }
            ]
        }
        ]
            });


        // CUSTOM MAP MARKER. 
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: 'img/marker.png',
            title: '',
        });


    }


