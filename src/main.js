import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import CardPhatTuFirst from './components/card-phattu-first.vue'
import CardPhatTuSecond from './components/card-phattu-second.vue'
import HeaderPhattu from './components/HeaderPhattu.vue'
import NavBarPhatTu from './components/NavBarPhatTu.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from "./store"
loadFonts()

const app =createApp(App);
 app.use(vuetify)
 app.component("CardPhatTuFirst",CardPhatTuFirst)
 .component("CardPhatTuSecond",CardPhatTuSecond)
 .component("HeaderPhattu",HeaderPhattu)
 .component("NavBarPhatTu",NavBarPhatTu)
 app.use(router)
 app.use(store)
app.use(VueSweetalert2)
  app.mount('#app')
