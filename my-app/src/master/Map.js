import React from 'react';

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
    const mapId = document.getElementById("map")

    // Check if google has been loaded into script
    // if (mapId && google)
    if (mapId && google) {
      var formattedAddress = {}
      var mapObject = {
        center: { lat: 41.850, lng: -87.653 },
        zoom: 3,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }

      var map = new google.maps.Map(mapId, mapObject);
      var map_input = document.getElementById('search_place');
      var autocomplete = new google.maps.places.Autocomplete(map_input);

      autocomplete.setFields(
        ['address_components', 'geometry']
      );
      var infowindow = new google.maps.InfoWindow();
      var infowindowContent = document.getElementById('info_content');
      infowindow.setContent(infowindowContent);
      var geocoder = new google.maps.Geocoder();
      var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        draggable: true,
      });

      //putting this in a variable to use it inside the event and setting  state
      var self_this = this;
      autocomplete.addListener('place_changed', function () {
        infowindow.close();
        marker.setVisible(true);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested
          // alert("No details available for input: '" + place.name + "'");
          self_this.setState({
            alertMaps: true,
            placeName: place.name
          })
          return;
        }
        else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        // ONce you have the lat and long over here
        // Call the reverse geo location API
        var latlng = place.geometry.location
        var latitude = latlng.lat();
        var longitude = latlng.lng();
        geocoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
          if (status === 'OK') {
            if (results[0]) {
              map.setZoom(17);
              infowindow.setContent(results[0].formatted_address);
              infowindow.open(map, marker);

              formattedAddress = results[0].formatted_address
              onLocationChange(latitude, longitude, formattedAddress)
              // console.log(onchangeofLocation(latitude, longitude, formattedAddress))
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
        marker.addListener('dragend', function () {
          infowindow.close();
          var latLng = marker.getPosition();
          var latitude = latLng.lat()
          var longitude = latLng.lng();

          geocoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            if (status === 'OK') {
              if (results[0]) {
                map.setZoom(17);
                map.panTo({ lat: latitude, lng: longitude });
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
                formattedAddress = results[0].formatted_address
                onLocationChange(latitude, longitude, formattedAddress)
              } else {
                window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
          });

        })

      });
    } else {
      swal("Unable to load maps");
    }
  }

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
      backgroundColor: '#ffffff',
      border: 'solid 1px #dce0e6',
      padding: "10px",
      fontSize: "14px",
      zIndex: "9999999",
      backgroundImage: "url(" + searchPic + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 50%',
      backgroundPosition: '306px 10px'
    }

    var mapStyles = {
      height: this.props.height,
      width: this.props.width,
    }

    return (
      <React.Fragment>
        <div>
          <input id="search_place" type="text" style={styles} />
          <div
            id="map" style={mapStyles}>
          </div>
          <div id="info_content"></div>
        </div>
        {
          this.state.alertMaps ? (
            <PopUp>
              <CardView
                width="500px"
                height="120px"
                backgroundColor="white"
              >
                <p style={{ fontFamily: 'RalewayRegular', fontSize: '16px' }}>
                  No details available for input: <span style={{ fontFamily: 'RalewayMedium' }}>{this.state.placeName}</span></p>
                <p style={{ fontSize: '12px', fontFamily: 'RalewayRegular' }}>Make sure your search is spelled correctly. Try adding a city, state, or zip code.</p>
                <button
                  style={{
                    fontSize: '16px',
                    fontFamily: 'RalewayMedium',
                    height: '36px',
                    width: '100px',
                    borderRadius: '18px',
                    background: 'red',
                    color: '#fff',
                    border: 'red',
                    float: 'right',
                    cursor: 'pointer'
                  }}
                  onClick={this.closeAlertMapsHandler.bind(this)}
                >OK</button>
              </CardView>
            </PopUp>
          ) : null
        }
      </React.Fragment>

    )
  }
}
