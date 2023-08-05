import {createStore} from 'vuex';
import user from "./modules/user";
import chua from "./modules/chua";
import daotrang from './modules/daotrang';
const store = createStore({
    modules:{
        user:user,
        chua:chua,
        daotrang:daotrang
    }
})
export default store