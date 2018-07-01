<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Home'">
      <div>
        <label>
          <gmap-autocomplete
            @place_changed="setPlace">
          </gmap-autocomplete>
        </label>
        <br/>

      </div>
    </custom-toolbar>
    <div>
      <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 400px;">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </v-ons-page>
</template>



<script>
  import customToolbar from './CustomToolbar';
  import page3 from './Page3';
  import app from './App';
  export default {
    data() {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        center: { lat: 45.508, lng: -73.587 },
        markers: [],
        places: [],
        currentPlace: null,
      };
    },
    methods: {
      pop() {
        this.pageStack.pop();
      },
      push() {
        this.pageStack.push(page3);
      },
      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
        console.log(this.currentPlace);
        this.addMarker();
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          };
          this.markers.push({ position: marker });
          this.places.push(this.currentPlace);
          this.center = marker;
          this.currentPlace = null;
          setTimeout(() => {
            this.push();
          }, 1000);
        }

      },
      geolocate: function() {
       navigator.geolocation.getCurrentPosition(position => {
         this.center = {
           lat: position.coords.latitude,
           lng: position.coords.longitude
         };
       });
       if (this.center) {
         const marker = {
           lat: this.center.lat,
           lng: this.center.lng
         };
         this.markers.push({ position: marker });
         this.center = marker;
         this.currentPlace = null;
       }
     }
    },
    props: ['pageStack'],
    mounted(){
      this.center.lat = this.$store.state.lat;
      this.center.lng = this.$store.state.long;
      this.geolocate();
    },
    components: { customToolbar }
  }
</script>
