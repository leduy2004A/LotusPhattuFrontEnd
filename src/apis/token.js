import axiosApi from ".";
export const getTokenApi = (gmail) =>{
    return axiosApi.get(`laytoken?gmail=${gmail}`);
}