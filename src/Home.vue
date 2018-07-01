<template>
  <v-ons-page>
    <div class="background-purple">
      <p style="text-align: center">Home Page</p>
      <v-ons-button modifier="large" class="gps-btn" @click="openGPS">Tap me</v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import page1 from './Page1';
  import app from './App';

  export default {
    data(){
      return{
        deviceLocation: {
          lat: '',
          long: ''
        }
      }
    },
    methods: {
      push() {
        this.pageStack.push(page1);
      },
      pop() {
        this.pageStack.pop();
      },
      openGPS() {
        let onSuccess = (position) => {
          console.log('hello');
          this.deviceLocation.lat = position.coords.latitude;
          this.deviceLocation.long = position.coords.longitude;
          this.$store.commit('setDeviceLocation', this.deviceLocation);
          this.push();
        };
        function onError(error) {
          alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
        };
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }
    },
    props: ['pageStack'],
    components: { customToolbar }
  }
</script>
