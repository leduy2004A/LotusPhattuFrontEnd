import { hienthidaotrang,adddaotrang } from "@/apis/daotrang"
const state = ()=>{
    return{
        daotrangs:[
            {
                "daotrangid": 5,
                "daketthuc": false,
                "noidung": "Tham gia đi để học giỏi",
                "noitochuc": "Đà Nẵng",
                "sothanhvienthamgia": 5,
                "thoigiantochuc": "2023-10-11T17:00:00.000+00:00",
                "nguoitrutri": 4,
                "dondangkysList": [
                    {
                        "dondangkyid": 24,
                        "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                        "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                        "nguoixuly": 3,
                        "trangthaidon": 1,
                        "daotrangid": 5,
                        "phattuid": 1
                    },
                    {
                        "dondangkyid": 30,
                        "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                        "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                        "nguoixuly": 2,
                        "trangthaidon": 1,
                        "daotrangid": 5,
                        "phattuid": 1
                    },
                    {
                        "dondangkyid": 32,
                        "ngayguidon": "2023-07-21T15:20:35.677+00:00",
                        "ngayxuly": "2023-07-21T15:52:29.871+00:00",
                        "nguoixuly": 2,
                        "trangthaidon": 1,
                        "daotrangid": 5,
                        "phattuid": 2
                    },
                    {
                        "dondangkyid": 33,
                        "ngayguidon": "2023-07-21T15:22:07.632+00:00",
                        "ngayxuly": "2023-07-21T15:49:47.462+00:00",
                        "nguoixuly": 2,
                        "trangthaidon": 1,
                        "daotrangid": 5,
                        "phattuid": 2
                    },
                    {
                        "dondangkyid": 34,
                        "ngayguidon": "2023-07-21T15:22:07.632+00:00",
                        "ngayxuly": "2023-07-21T15:59:49.494+00:00",
                        "nguoixuly": 2,
                        "trangthaidon": 1,
                        "daotrangid": 5,
                        "phattuid": 2
                    }
                ],
                "phattudaotrangsList": []
            }
        ]
    }
}
const mutations ={
    hienthidaotrangMutaitions(state,payload)
    {
        state.daotrangs = payload;
    },
    loctheodiachiMutaitions(state,payload)
    {
        return state.daotrangs = state.daotrangs.filter((daotrang) => daotrang.noitochuc.toLowerCase().includes(payload.toLowerCase()) );
    },
    xoadaotrangMutaitions(state,payload)
    {
        for(let i=0;i<= state.daotrangs.length-1;i++)
        {
            if(state.daotrangs[i].daotrangid === payload)
            {
                state.daotrangs.splice(i,1);
            }
        }
    },
    themdaotrangMutaitions(state,payload)
    {
        state.daotrangs.push(payload);
    },
    suadaotrangMutaitions(state,payload)
    {
        for(let i = 0;i<= state.daotrangs.length-1;i++)
        {
            if(state.daotrangs[i].daotrangid === payload.daotrangid)
            {
                state.daotrangs[i] = payload;
            }
        }
    }
}
const actions = {
   async hienthidaotrang(context,payload)
   {
    const {page,pageSize} = payload
    let data = await hienthidaotrang(page,pageSize);
    context.commit("hienthidaotrangMutaitions",data);
   },
   loctheodiachi(context,payload){
    context.commit("loctheodiachiMutaitions",payload);
   },
   xoadaotrang(context,payload)
   {
    context.commit("xoadaotrangMutaitions",payload);
   },
   async  themdaotrang(context,payload)
   {
    let data = adddaotrang(payload);
    console.log(data);
    context.commit("themdaotrangMutaitions",payload);
   },
   suadaotrang(context,payload)
   {
    context.commit("suadaotrangMutaitions",payload);
   }

}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}