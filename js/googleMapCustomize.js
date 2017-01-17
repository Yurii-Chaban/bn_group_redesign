	try {

		var point = {
			lat: 50.4589227,
			lng: 30.5138492
		};
		var markerSize = {
			x: 109,
			y: 117
		};


		google.maps.Marker.prototype.setLabel = function(label) {
			this.label = new MarkerLabel({
				map: this.map,
				marker: this,
				text: label
			});
			this.label.bindTo('position', this, 'position');
		};

		var MarkerLabel = function(options) {
			this.setValues(options);
			this.span = document.createElement('span');
			this.span.className = 'map-marker-label';
		};

		MarkerLabel.prototype = $.extend(new google.maps.OverlayView(), {
			onAdd: function() {
				this.getPanes().overlayImage.appendChild(this.span);
				var self = this;
				this.listeners = [
				google.maps.event.addListener(this, 'position_changed', function() {
					self.draw();
				})
				];
			},
			draw: function() {
				var text = String(this.get('text'));
				var position = this.getProjection().fromLatLngToDivPixel(this.get('position'));
				this.span.innerHTML = text;
				this.span.style.left = (position.x - (markerSize.x / 2)) - (text.length * 3) + 80 + 'px';
				this.span.style.top = (position.y - markerSize.y + 100) + 'px';
			}
		});

		function initialize() {    
			var myLatLng = new google.maps.LatLng(point.lat, point.lng);
			var gmap = new google.maps.Map(document.getElementById('mapWrapper'), {
				zoom: 17,
				center: myLatLng,
				zoomControl: false,
				disableDoubleClickZoom: false,
				mapTypeControl: false,
				scaleControl: false,
				scrollwheel: true,
				panControl: false,
				streetViewControl: false,
				draggable : true,
				overviewMapControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "administrative.neighborhood",
					"elementType": "labels.text.fill",
					"stylers": [
					{
						"color": "#333333"
					}
					]
				},
				{
					"featureType": "poi.business",
					"elementType": "labels.text",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "poi.business",
					"elementType": "labels.icon",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "poi.place_of_worship",
					"elementType": "labels.text",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "poi.place_of_worship",
					"elementType": "labels.icon",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
					{
						"visibility": "simplified"
					}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text",
					"stylers": [
					{
						"weight": 0.5
					},
					{
						"color": "#333333"
					}
					]
				},
				{
					"featureType": "transit.station",
					"elementType": "labels.icon",
					"stylers": [
					{
						"gamma": 1
					},
					{
						"saturation": 50
					}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"saturation": 50
					},
					{
						"hue": "#50a5d1"
					}
					]
				}
				]
			});
			var myMarker = new google.maps.Marker({
				map: gmap,
				icon: "images/map-icon.png",
				position: myLatLng,
				label: 'BNgroup',
			});
		}

		google.maps.event.addDomListener(window, "load", initialize);  
	} catch (e) {
		alert(e);
	}