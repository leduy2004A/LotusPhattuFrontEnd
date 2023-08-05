import axios from 'axios'
const axiosApi = axios.create({
    baseURL: 'http://localhost:8080/api/vers1/',
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  axiosApi.interceptors.request.use(function (config) {
    let data = localStorage.getItem("token");
    let data2 = JSON.parse(data);
    let token = data2.stoken;
    config.headers.Authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axiosApi.interceptors.response.use(
    response => {
      // Nếu phản hồi thành công, trả về dữ liệu
      return response.data;
    },
    error => {
      // Nếu có lỗi phản hồi từ server
      if (error.response && error.response.status === 403) {
        console.error('Lỗi 403 - Quyền truy cập bị từ chối:', error.response.data);
        // Trả về một Promise bị reject với thông báo lỗi
        return null;
      }
      // Nếu không phải lỗi 403, tiếp tục trả về lỗi gốc
      return Promise.reject(error);
    }
  );

  export default axiosApi