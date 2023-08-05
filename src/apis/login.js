import axiosApi from ".";
export const loginPhattu = (gmail,password) =>{
 return axiosApi.post(`authenticate?gmail=${gmail}&password=${password}`)
 
}