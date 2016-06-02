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
        center: {lat: 40.674, lng: -73.946},  // Brooklyn.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}