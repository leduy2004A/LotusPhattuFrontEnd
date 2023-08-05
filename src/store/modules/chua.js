import { hienthichua } from "@/apis/chua"
import { themchua,xoachua,suachua,phantrangchua } from "../../apis/chua"
const state = ()=>{
 return {
    chuas:[
        {
         "chuaid": 1,
    "capnhat": "2023-07-17T17:00:00.000+00:00",
    "diachi": "Duy Hà Lội",
    "ngaythanhlap": "2011-12-31T17:00:00.000+00:00",
    "tenchua": "chùa tựu",
    "trutri": 3,
    "phattuList":[]   
        }
    ],
    tenchua:""
    
    
 }   
}
const mutations = {
    hienthichuaMutations(state,payload){
        state.chuas = payload;
        console.log(state.chuas);
    },
    themchuaMutations(state,payload){
        state.chuas.push(payload);

    },
    xoachuaMutaitions(state,payload){
        for(let item in state.chuas)
        {
            if(state.chuas[item].chuaid === payload)
            {
                state.chuas.splice(state.chuas[item],1);
            }
        }
    },
    suachuaMutaitions(state,payload)
    {
        
        
        for(let i=0;i<=state.chuas.length-1;i++)
        {
            if(state.chuas[i].chuaid === payload.chuaid)
            {
                state.chuas[i] = payload;
            }
        }
    },
    timtheotenMutaitions(state,payload)
    {
        state.tenchua  = payload
        return state.chuas =  state.chuas.filter(chua => chua.tenchua.toLowerCase().includes(state.tenchua.toLowerCase()))
    },
    phantrangchuaMutaitions(state,payload)
    {
        state.chuas = payload;
    }
}
const actions ={
   async hienthichuaAction(context){
        let data = await hienthichua();
        context.commit("hienthichuaMutations",data)
    },
    async themchua(context,payload)
    {
        let data = await themchua(payload);
        console.log(data);
        context.commit("themchuaMutations",payload);
    },
    async xoachua(context,payload)
    {
        let data = await xoachua(payload);
        console.log(data);
        context.commit("xoachuaMutaitions",payload);
    },
    async suachua(context,payload)
    {
        
        let data = await suachua(payload);
        console.log(data);
        context.commit("suachuaMutaitions",payload);
    },
     timtheoten(context,payload)
{
        context.commit("timtheotenMutaitions",payload)
},
async phantrangchua(context,payload)
{
    const {page,pageSize} = payload
    let data = await phantrangchua(page,pageSize);
    context.commit("phantrangchuaMutaitions",data)
}

}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}