//START GOGOLE MAPS
//map
var map;
var brooklyn = new google.maps.LatLng(40.732343, -73.993908);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {


    //start snazzy options
    var featureOpts = 
    [
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "stylers": [
            {
                "hue": "#00aaff"
            },
            {
                "saturation": -100
            },
            {
                "gamma": 2.15
            },
            {
                "lightness": 12
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 24
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 57
            }
        ]
    }
    ];
    //end snazzy options
    
    



    //start map options
    var mapOptions = {
        zoom: 14,
        center: brooklyn,
        disableDefaultUI: true,
        scrollwheel: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
    };
    //end map options
    
    
    

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    var styledMapOptions = {
        name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);


    
    //START 2
    
    //marker
    var image_2 = new google.maps.MarkerImage("img/icons/marker-company.png", null, null, null, new google.maps.Size(33,50));
    var positionpin_2 = new google.maps.LatLng(40.726928, -73.994015);
    var marker_2 = new google.maps.Marker({
      position: positionpin_2,
      icon: image_2,
      map: map,
      flat: true,
      title: 'Uluru (Ayers Rock)'
    });
    

    //box
    var boxText_2 = document.createElement("div");
    boxText_2.innerHTML = '<div class="nicdark_sizing nicdark_displaynone_iphoneland nicdark_displaynone_iphonepotr grid grid_6 percentage nicdark_border_white"><img class="nicdark_focus nicdark_border_white" src="img/banners/map-company.jpg"></div><div class="nicdark_displaynone_iphoneland nicdark_displaynone_iphonepotr nicdark_sizing grid grid_6 percentage nicdark_border_white"><div class="nicdark_focus center nicdark_sizing nicdark_padding20 nicdark_paddingright30 nicdark_bg_white"><h4>OUR OFFICE</h4><div class="nicdark_space20"></div><h5 class="grey">OPEN DAILY</h5><div class="nicdark_space20"></div><div class="nicdark_divider center small"><span class="nicdark_bg_grey2 "></span></div><div class="nicdark_space20"></div><p>9:00 - 18:00</p></div></div>';

    var marker_2_options = {
         content: boxText_2
        ,disableAutoPan: false
        ,maxWidth: 0
        ,pixelOffset: new google.maps.Size(-190, -230)
        ,zIndex: null
        ,boxStyle: { 
          opacity: 1,
          width: "380px",
          background: "#fff",
         }
        ,closeBoxMargin: "10px"
        ,closeBoxURL: "img/icons/map-close.png"
        ,infoBoxClearance: new google.maps.Size(1, 1)
        ,isHidden: false
        ,pane: "floatPane"
        ,enableEventPropagation: false
    };

	var info_box_2 = new InfoBox(marker_2_options);
    
    google.maps.event.addListener(marker_2, 'click', function() {
        info_box_2.open(map,marker_2);
    });
    
    info_box_2.open(map,marker_2);
    //end 2

    
    
    


}

google.maps.event.addDomListener(window, 'load', initialize);
//END GOOGLE MAPS 