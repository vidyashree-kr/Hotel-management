import React from 'react';
// import searchPic from "../../../img/search.svg";


export default class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: this.props.width !== undefined ? this.props.width : "300px",
      height: this.props.height !== undefined ? this.props.height : "400px",
      location: "",
      alertMaps: false,
      placeName: "",
    }

  }

  componentDidMount() {
    const onLocationChange = this.props.onLocationChange;
    const google = window.google;
    // const mapId = document.getElementById("map")
    var myLatLng = {lat: -25.363, lng: 131.044};
    var map,infoWindow;
    
     map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 6
      });
      infoWindow = new google.maps.InfoWindow;
     
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(position)
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          
          infoWindow.open(map);
          map.setCenter(pos);
          var marker = new google.maps.Marker({
            position: myLatLng,
            title:"Hello World!"
            });
        
            // To add the marker to the map, call setMap();
            marker.setMap(map);
        }, function() {
            this.handleLocationError(true, infoWindow, map.getCenter());
        });
        
      } else {
        // Browser doesn't support Geolocation
        this.handleLocationError(false, infoWindow, map.getCenter());
      }

    }

    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        // infoWindow.open(map);
      }

    // map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 6
    //   });
    //   infoWindow = new google.maps.InfoWindow;

    //   // Try HTML5 geolocation.
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       var pos = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //       };

    //       infoWindow.setPosition(pos);
    //       infoWindow.setContent('Location found.');
    //       infoWindow.open(map);
    //       map.setCenter(pos);
    //     }, function() {
    //       handleLocationError(true, infoWindow, map.getCenter());
    //     });
    //   } else {
    //     // Browser doesn't support Geolocation
    //     handleLocationError(false, infoWindow, map.getCenter());
    //   }
    // }
    // // Check if google has been loaded into script
    // // if (mapId && google)
    // if (mapId && google) {
    //   var formattedAddress = {}
    //   var mapObject = {
    //     center: { lat: 41.850, lng: -87.653 },
    //     zoom: 3,
    //     streetViewControl: false,
    //     mapTypeControl: false,
    //     fullscreenControl: false
    //   }

    //   var map = new google.maps.Map(mapId, mapObject);
     
    //   var marker = new google.maps.Marker({
    //     map: map,
    //     anchorPoint: new google.maps.Point(0, -29),
    //     draggable: true,
    //   });

    //   //putting this in a variable to use it inside the event and setting  state
    //   var self_this = this;
    //   autocomplete.addListener('place_changed', function () {
    //     infowindow.close();
    //     marker.setVisible(true);
    //     var place = autocomplete.getPlace();
    //     if (!place.geometry) {
    //       // User entered the name of a Place that was not suggested
    //       // alert("No details available for input: '" + place.name + "'");
    //       self_this.setState({
    //         alertMaps: true,
    //         placeName: place.name
    //       })
    //       return;
    //     }
    //     else {
    //       map.setCenter(place.geometry.location);
    //       map.setZoom(17);
    //     }
    //     marker.setPosition(place.geometry.location);
    //     marker.setVisible(true);
    //     // ONce you have the lat and long over here
    //     // Call the reverse geo location API
    //     var latlng = place.geometry.location
    //     var latitude = latlng.lat();
    //     var longitude = latlng.lng();
       
    //     marker.addListener('dragend', function () {
    //       infowindow.close();
    //       var latLng = marker.getPosition();
    //       var latitude = latLng.lat()
    //       var longitude = latLng.lng();

    //       geocoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
    //         if (status === 'OK') {
    //           if (results[0]) {
    //             map.setZoom(17);
    //             map.panTo({ lat: latitude, lng: longitude });
    //             infowindow.setContent(results[0].formatted_address);
    //             infowindow.open(map, marker);
    //             formattedAddress = results[0].formatted_address
    //             onLocationChange(latitude, longitude, formattedAddress)
    //           } else {
    //             window.alert('No results found');
    //           }
    //         } else {
    //           window.alert('Geocoder failed due to: ' + status);
    //         }
    //       });

    //     })

    //   });
    // } else {
    //   swal("Unable to load maps");
    // }
  

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({
        width: nextProps.width
      })
    }
    if (this.props.height !== nextProps.height) {
      this.setState({
        height: nextProps.height
      })
    }

    if (this.props.placeholder !== nextProps.placeholder) {
      this.setState({
        placeholder: nextProps.placeholder
      })
    }
  }

  closeAlertMapsHandler() {
    this.setState({
      alertMaps: false,
      placeName: ''
    })
  }

  render() {
    var styles = {
      width: "100%",
      height: "40px",
      borderRadius: '4px',
      backgroundColor: 'red',
      border: 'solid 1px #dce0e6',
      padding: "10px",
      fontSize: "14px",
      zIndex: "9999999",
    //   backgroundImage: "url(" + searchPic + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 50%',
      backgroundPosition: '306px 10px'
    }

    var mapStyles = {
        width: "100%",
        height: "400px",
        margin:"auto"
    }

    return (
      <React.Fragment>
        <div>
          <div
            id="map" style={mapStyles}>
          </div>
          <div id="info_content"></div>
        </div>
       
      </React.Fragment>

    )
  }
}
