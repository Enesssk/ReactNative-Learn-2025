import axios from 'axios';
import API_KEY, { BASE_URL } from '../constants';


  const apiClient = axios.create({
    method: "POST",
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    }
  })

    //GLOBAL HATA YÖNETİMİ.
  apiClient.interceptors.response.use(
    (response) => response, // başarılıysa direkt dön.
    (error) => {
      // Network hatası.
      if (!error.response) {
        console.error("Network Error:", error.message);
        throw new Error("Network error, please check your connection.");
      }

      // API tarafı hata kodları bunlar.
      const status = error.response.status;
      switch (status) {
        case 400:
          throw new Error("Bad Request — Sunucu isteği anlayamadı.");
        case 401:
          throw new Error("Unauthorized — Lütfen giriş yapın.");
        case 403:
          throw new Error("Forbidden — Bu işlem için yetkiniz yok.");
        case 404:
          throw new Error("Not Found — Kaynak bulunamadı.");
        case 500:
          throw new Error("Server Error — Sunucuda bir hata oluştu.");
        default:
          throw new Error(`Unexpected Error: ${status}`);
      }
    }
  );

  export default apiClient;