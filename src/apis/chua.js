import axiosApi from ".";
export const hienthichua = ()=>{
    return axiosApi.get("hienthichua");
}
export const themchua = (chua) =>{
    const chuaadd = JSON.stringify(chua)
    return axiosApi.post("themchua",chuaadd);
}
export const xoachua = (chuaid) =>{
    return axiosApi.delete(`xoachua?chuaid=${chuaid}`);
}
export const suachua = (chuasua) =>{
    const suachuakhac = JSON.stringify(chuasua); 
    return axiosApi.put("suachua",suachuakhac);
}
export const phantrangchua = (page,pageSize) => {
    return axiosApi.get(`phantrangchua?page=${page}&pageSize=${pageSize}`)
}