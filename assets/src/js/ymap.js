var cont = document.getElementById("map");
ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [55.355515, 86.173300],
        zoom: 17, 
        controls: []
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark([55.355424, 86.174204], {
        hintContent: 'пр-т Ленина, д. 152, корпус Б',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-icon.png',
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, -40]
    });
    map.geoObjects
        .add(myPlacemark)
    function fitMapToViewport () {
        map.container.fitToViewport(true);
    }
});