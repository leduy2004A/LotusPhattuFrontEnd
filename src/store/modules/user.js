import {getListPhatTu,xoaPhatTu,addPhatTu,phantrangphat,suaphattu} from '../../apis/phattu'
import {loginPhattu} from '../../apis/login'
import {getTokenApi} from '../../apis/token'
const state = ()=>{
    {
    return{
        phattu:[
                {
                    "phattuid": 1,
                    "anhchup": null,
                    "dahoantuc": true,
                    "email": "con@gmail.com",
                    "gioitinh": 0,
                    "ho": "Lê",
                    "ngaycapnhap": "2023-07-16T07:43:42.000+00:00",
                    "ngayhoantuc": "2023-07-16T07:43:44.000+00:00",
                    "ngaysinh": "2023-07-16T07:43:46.000+00:00",
                    "ngayxuatgia": "2023-07-16T07:43:47.000+00:00",
                    "password": "leduy2004",
                    "phapdanh": "Thích Duy",
                    "sodienthoai": "0355512589",
                    "ten": "Duy",
                    "tendem": "Văn",
                    "matkhaugoc": "leduy2004",
                    "trangthaiphattu":false,
                    "chuaid": 1,
                    "kieuthanhvienid": 1,
                    "phattudaotrangsList": [],
                    "dondangkysList": [
                        {
                            "dondangkyid": 3,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 4,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 5,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 6,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 7,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 8,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 9,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 10,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 11,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 14,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 15,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 16,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 17,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 18,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 4,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 19,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 4,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 20,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 4,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 21,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 22,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 4,
                            "phattuid": 1
                        },
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
                            "dondangkyid": 25,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 26,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 3,
                            "trangthaidon": 0,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 27,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 0,
                            "trangthaidon": 0,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 28,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-07-21T09:08:39.316+00:00",
                            "nguoixuly": 2,
                            "trangthaidon": 1,
                            "daotrangid": 3,
                            "phattuid": 1
                        },
                        {
                            "dondangkyid": 29,
                            "ngayguidon": "2023-10-11T17:00:00.000+00:00",
                            "ngayxuly": "2023-10-12T17:00:00.000+00:00",
                            "nguoixuly": 2,
                            "trangthaidon": 1,
                            "daotrangid": 3,
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
                        }
                    ],
                    "tokenList": [],
                    "active": false
                },
                {
                    "phattuid": 2,
                    "anhchup": null,
                    "dahoantuc": false,
                    "email": "leduy03555@gmail.com",
                    "gioitinh": 1,
                    "ho": "Lê",
                    "ngaycapnhap": "2004-02-11T17:00:00.000+00:00",
                    "ngayhoantuc": "2003-12-31T17:00:00.000+00:00",
                    "ngaysinh": "1984-12-11T17:00:00.000+00:00",
                    "ngayxuatgia": "1999-12-31T17:00:00.000+00:00",
                    "password": "$2a$10$4eQAuYMZmXITIY55vNosWuc/V8qsqa2vmwT1kv9WJB6YuiPG4u8NO",
                    "phapdanh": "thích bạn",
                    "sodienthoai": "03833453453",
                    "ten": "Thị",
                    "tendem": "Duy",
                    "trangthaiphattu":true,
                    "matkhaugoc": "leduy2004",
                    "chuaid": 1,
                    "kieuthanhvienid": 1,
                    "phattudaotrangsList": [],
                    "dondangkysList": [
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
                    "tokenList": [
                        {
                            "id": 1,
                            "stoken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWR1eTAzNTU1QGdtYWlsLmNvbSIsImlhdCI6MTY5MDQ2MzczOCwiZXhwIjoxNjkwNDY1NTM4fQ.lc8S2mfizHAvk58KB_kSxtqQVk8Fv86EJKQFjfdkXuY",
                            "phattuid": 2
                        }
                    ],
                    "active": false
                },
        ],
        ten:"",
        email:"",
        gioitinh:null,
        trangthai:null,
        gmail:"",
        password:"",
        userLogin:null
    }
}
}
const getters = {
    loctheoten(state) {
        return state.phattu = state.phattu.filter((user) => user.phapdanh.toLowerCase().includes(state.ten.toLowerCase()));
    },
    loctheoemail(state) {
        return state.phattu = state.phattu.filter((user) => user.email.toLowerCase().includes(state.email.toLowerCase()));
    },
};
const mutations = {
   async xoaptmutations(state,payload){
       let data = "";
        for(let i=0;i<=state.phattu.length-1;i++)
        {
            if(state.phattu[i].phattuid === payload)
            {
                state.phattu.splice(i,1)
            }
            
        }
          data = await xoaPhatTu(payload);
          return data;
    },
    timphapdanhmutations(state,payload)
    {
        state.ten = payload;
        getters.loctheoten(state);
    },
    timphattheoemailmutations(state,payload)
    {
        state.email = payload;
        console.log(state.email);
        getters.loctheoemail(state);
    },
   async themptmutaitions(state,payload)
    {
        let phattu = payload;
        let data= await addPhatTu(phattu) 
        state.phattu.push(payload)
        return data;
    },
    suaptmutaitions(state,payload)
    {
        const{id,doiphattu} = payload;
        for(let i= 0;i<=state.phattu.length-1;i++)
        {
            if(state.phattu[i].phattuid === id)
            {
                const{hoten,email,phapdanh,sodienthoai,ngaysinh,ngayxuatgia,gioitinh,dahoantuc,ngayhoantuc} = doiphattu;
                state.phattu[i].phapdanh = phapdanh;
                state.phattu[i].email = email;
                state.phattu[i].sodienthoai = sodienthoai;
                state.phattu[i].ngaysinh = ngaysinh;
                state.phattu[i].ngayxuatgia = ngayxuatgia;
                state.phattu[i].gioitinh = gioitinh;
                state.phattu[i].dahoantuc = dahoantuc === 0?true:false;
                state.phattu[i].ngayhoantuc = ngayhoantuc;
                let arrname = hoten.split(" ");
                let ho = arrname[0];
                let ten =arrname[arrname.length -1];
                state.phattu[i].ho = ho;
                state.phattu[i].ten = ten;
                state.phattu[i].phattuid = id;
                suaphattu(state.phattu[i]);
            }
        }
    },
    addphattuapi(state,payload)
    {
        state.phattu = payload
    },
    async loginPhatTuMutations(state,payload)
    {
        const {gmail,password} = payload;
       const data = await loginPhattu(gmail,password);
       state.gmail = gmail;
       state.password = password;
       
       console.log(data);
       
    },
    async saveloginMutations(state,payload)
    {
        const data = await getTokenApi(payload);
        state.userLogin = data;
        localStorage.setItem('token',JSON.stringify(data));
        // router.push("quanlicacphat");
        // if(localStorage.getItem('token') === "")
        // {
        //     router.push("logincacphat");
        // }
        // else{
        //     router.push("quanlicacphatmain");
        // }
        console.log(data);
    },
    phantrangphatMutaitions(state,payload)
    {
        state.phattu = payload;
    }
}
const actions ={
    themptactions(context,payload)
    {
        console.log(payload)
        context.commit('themptmutaitions',payload);
    },
    xoaptactions(context,payload){
        context.commit('xoaptmutations',payload);
    },
    suaptaction(context,payload)
    {
        console.log(payload);
        context.commit('suaptmutaitions',payload);
    },
    timphapdanhactions(context,payload)
    {
        context.commit('timphapdanhmutations',payload)
    },
    timphattheoemailactions(context,payload)
    {
        console.log(payload)
        context.commit('timphattheoemailmutations',payload)
    },
    timtheogioitinhactions(context,payload)
    {
        console.log(payload);
        context.commit('timtheogioitinhmutations',payload);
    },
    timtheotrangthaiphattuas(context,payload)
    {
        console.log(payload)
        context.commit('timtheotrangthaiphattu',payload);
    },
    async getPhatTuListAction(context)
    {
        const data= await getListPhatTu();
        context.commit('addphattuapi',data)
    },
      loginPhatTuAction(context,payload)
    {
        
        // const data = await loginPhattu(gmail,password)
        context.commit('loginPhatTuMutations',payload)
    },
    savelogin(context,payload)
    {
        context.commit('saveloginMutations',payload)
    },
    async phantrangphat(context,payload)
    {
        const {page,pageSize} = payload
        let data = await phantrangphat(page,pageSize);
        context.commit("phantrangphatMutaitions",data)
    },
}
export default{
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}