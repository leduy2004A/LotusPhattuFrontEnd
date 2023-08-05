import QuanLiCacPhat from '../components/QuanLiCacPhat.vue'
import ForwardRo from '../components/ForwardRo.vue'
import QuanLiChua from '../components/QuanLiChua.vue'
import PhatTuMain from '../components/PhattuMain.vue'
import QuanLiDaoTrang from '../components/QuanLiDaoTrang.vue'
import LotusLogin from '../view/LotusLogin.vue'
import DangKi from '../view/DangKi.vue'
import QuanLiDon from '../components/QuanLiDon.vue'
import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    {
        path:'/quanlicacphat',
        component:QuanLiCacPhat
    },
    {
        path:'/',
        component:ForwardRo
    },
    {
        path:'/quanlicacphatmain',
        component:QuanLiCacPhat
    },
    {
        path:'/quanlichua',
        component:QuanLiChua
    },
    {
        path:'/phattumain',
        component:PhatTuMain
    },
    {
        path:'/quanlidaotrang',
        component:QuanLiDaoTrang
    },
    {
        path:'/logincacphat',
        component:LotusLogin
    },
    {
        path:'/formdangki',
        component:DangKi
    },
    {
        path:'/quanlidondangki',
        component:QuanLiDon
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:"active"
})
export default router