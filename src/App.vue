<template>
    <div>
      
        <GmapMap
        :center="coordinats"
        :zoom="7"
        map-type-id="terrain"
        style="width:100%;  height: 300px;">
            <GmapMarker
              :position="coordinats"
              :clickable="true"
              :draggable="true"
              @click="center=coordinats"
            />
        </GmapMap>  
	<v-btn id="location" @click="getLocation()" >Get Location</v-btn>   
    
  </div>
</template>

<script>

 
export default {
    data() {
    return {
      coordinats: { lat: 45.508, lng: -73.587 }      
    };
  },
  

  methods: {
    getLocation() {
      if (navigator.geolocation) {
        console.debug('calling navigator.geolocation.getCurrentPosition')
        navigator.geolocation.getCurrentPosition(position => {
          console.debug('navigator.geolocation.getCurrentPosition: ', position)
          this.coordinats = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      } else {
        console.debug('navigator.geolocation== null')
        this.error = "Geolocation is not supported.";
      }
    }
  }
};
</script>

<style scoped>
</style>
