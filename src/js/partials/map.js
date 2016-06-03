function initMap() {
    var customMapType = new google.maps.StyledMapType([
        {
            stylers: [
                {visibility: 'simplified'},
                {saturation: -90},
                {gamma: 0.5},
                {weight: 0.5}
            ]
        }
    ], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';


    var map = new google.maps.Map(document.getElementById('map__body'), {
        zoom: 13,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        center: {lat: 40.671, lng: -73.94},  // Brooklyn.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });

    var image = 'img/flag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 40.674, lng: -73.996},
        map: map,
        icon: image
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}