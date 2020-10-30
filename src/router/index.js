import Vue from 'vue';
import VueRouter from 'vue-router';
import PhotosIndex from '../views/PhotosIndex.vue';
import FirstFloor from '../views/FirstFloor.vue';
import SecondFloor from '../views/SecondFloor.vue';
import ThirdFloor from '../views/ThirdFloor.vue';
import FourthFloor from '../views/FourthFloor.vue';
import FifthFloor from '../views/FifthFloor.vue';
import SixthFloor from '../views/SixthFloor.vue';
import SeventhFloor from '../views/SeventhFloor.vue';
import Entrance119 from '../views/Entrance119.vue';
import Basement from '../views/Basement.vue';
import BoilerRoom from '../views/BoilerRoom.vue';
import Building119 from '../views/Building119.vue';
import Building129 from '../views/Building129.vue';
import EverettStParking from '../views/EverettStParking.vue';
import FreightElevator119 from '../views/FreightElevator119.vue';
import Horseshoe from '../views/Horseshoe.vue';
import LoadingDock119 from '../views/LoadingDock119.vue';
import RampRoom from '../views/RampRoom.vue';
import SupplyRoom from '../views/SupplyRoom.vue';
import TrackRoom from '../views/TrackRoom.vue';
import WorkshopRoom from '../views/WorkshopRoom.vue';
import SeventhFloorRoof from '../views/SeventhFloorRoof.vue';
import PaintRoom from '../views/PaintRoom.vue';
import ParkingLot119 from '../views/ParkingLot119.vue';
import ParkingLot129 from '../views/ParkingLot129.vue';
import Passenger119 from '../views/Passenger119.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'photos-index',
    component: PhotosIndex,
  },
  {
    path: '/firstfloor',
    name: 'first-floor',
    component: FirstFloor,
  },
  {
    path: '/secondfloor',
    name: 'second-floor',
    component: SecondFloor,
  },
  {
    path: '/thirdfloor',
    name: 'third-floor',
    component: ThirdFloor,
  },
  {
    path: '/fourthfloor',
    name: 'fourth-floor',
    component: FourthFloor,
  },
  {
    path: '/fifthfloor',
    name: 'fifth-floor',
    component: FifthFloor,
  },
  {
    path: '/sixthfloor',
    name: 'sixth-floor',
    component: SixthFloor,
  },
  {
    path: '/seventhfloor',
    name: 'seventh-floor',
    component: SeventhFloor,
  },
  {
    path: '/entrance119',
    name: 'entrance-119',
    component: Entrance119,
  },
  {
    path: '/basement',
    name: 'basement',
    component: Basement,
  },
  {
    path: '/boilerroom',
    name: 'boiler-room',
    component: BoilerRoom,
  },
  {
    path: '/building119',
    name: 'building-119',
    component: Building119,
  },
  {
    path: '/building129',
    name: 'building-129',
    component: Building129,
  },
  {
    path: '/everettstpkaring',
    name: 'everett-st-parking',
    component: EverettStParking,
  },
  {
    path: '/freightelevator119',
    name: 'freight-elevator-119',
    component: FreightElevator119,
  },
  {
    path: '/horseshoe',
    name: 'horseshoe',
    component: Horseshoe,
  },
  {
    path: '/loadingdock119',
    name: 'loading-dock-119',
    component: LoadingDock119,
  },
  {
    path: '/ramproom',
    name: 'ramp-room',
    component: RampRoom,
  },
  {
    path: '/supplyroom',
    name: 'supply-room',
    component: SupplyRoom,
  },
  {
    path: '/trackroom',
    name: 'track-room',
    component: TrackRoom,
  },
  {
    path: '/workshoproom',
    name: 'workshop-room',
    component: WorkshopRoom,
  },
  {
    path: '/seventhfloorroof',
    name: 'seventh-floor-roof',
    component: SeventhFloorRoof,
  },
  {
    path: '/paintroom',
    name: 'paint-room',
    component: PaintRoom,
  },
  {
    path: '/parkinglot119',
    name: 'parkinglot-119',
    component: ParkingLot119,
  },
  {
    path: '/parkinglot129',
    name: 'parkinglot-129',
    component: ParkingLot129,
  },
  {
    path: '/passenger119',
    name: 'passenger-119',
    component: Passenger119,
  },
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
