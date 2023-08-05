import axiosApi from "."
export const hienthidaotrang = (page,pageSize) => {
   return axiosApi.get(`hienthidaotrang?page=${page}&pageSize=${pageSize}`)
}
export const xoadaotrang = (daotrangid) =>{
   return axiosApi.delete(`xoadaotrang?daotrangid=${daotrangid}`)
}
export const adddaotrang = (daotrang) => {
   let daotrangthem = JSON.stringify(daotrang)
   return axiosApi.post("adddaotrang",daotrangthem)
}
export const suadaotrang = (daotrang) => {
   let daotrangsua = JSON.stringify(daotrang);
   return axiosApi.put("suadaotrang",daotrangsua);
}