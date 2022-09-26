<!-- <template>
  <div>
    <h1>{{pageData.title}}</h1>
    <div v-html="pageData.content">      
    </div>
  </div>
</template>
<script>
import PagesApiService from '../mixins/services/pages-api-service'
import {PAGES_NAMES,APP_SETTINGS} from '../../config'
const PATH = APP_SETTINGS.API_PATH.GAS_STATION_NETWORK_MAP
export default {
    name:PAGES_NAMES.GAS_STATION_NETWORK_MAP_WITHOUT_SPACE_PAGE,

  data: () => ({
      pageData:{
            id:'',
            title:'',
            content:''
        },
    pagesApi:  new  PagesApiService(),
  }),
    created () {
      this.initialize()
    },
     methods: {
      async initialize () {
        const res  = await this.pagesApi.getPages(PATH.Gas_station_network_map)
        this.pageData=res.data
      },
     },
};
</script>
<style>

</style>
 -->

 <template>
  <div>
    <br>
    <h1>Gas Station Map</h1>

    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m"
        @click="center=m"
      ></gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
import PagesApiService from '../mixins/services/pages-api-service'
import {PAGES_NAMES,APP_SETTINGS} from '../../config'
const PATH = APP_SETTINGS.API_PATH.GAS_STATION_NETWORK_MAP
export default {
  name:PAGES_NAMES.GAS_STATION_NETWORK_MAP_WITHOUT_SPACE_PAGE,
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      currentPlace: null,
      pageData:{
            id:'',
            title:'',
            content:''
        },
    pagesApi:  new  PagesApiService(),
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    async initialize () {
        const res  = await this.pagesApi.getPages(PATH.Gas_station_network_map)
        this.pageData=res.data
      },
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {

        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });

        this.markers = [
          {
              lat: 21.1594627,
              lng: 72.6822083,
              label: 'Surat'
          },
          {
              lat: 23.0204978,
              lng: 72.4396548,
              label: 'Ahmedabad'
          },
          {
              lat: 22.2736308,
              lng: 70.7512555,
              label: 'Rajkot'
          }
      ];

    }
  }
};
</script>