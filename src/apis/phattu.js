import axiosApi from '../apis/index'
export const getListPhatTu = () => {
   return axiosApi.get("hienthiphattu")
}
export const xoaPhatTu = (id) =>{
    return axiosApi.put(`xoaphattu?id=${id}`)
}
export const addPhatTu = (phattu) =>{
    const phattuadd = JSON.stringify(phattu);
    return axiosApi.post("addphattu",phattuadd)
}
export const phantrangphat = (page,pageSize) =>{
    return axiosApi.get(`phantrangphat?page=${page}&pageSize=${pageSize}`);
}
export const suaphattu = (phattu) => {
   let phattusua = JSON.stringify(phattu);
    return axiosApi.put("suaphat",phattusua);
}