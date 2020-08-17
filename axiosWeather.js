// Importação do axios.
import axios from "axios";

class Api {
  // Método estático.
  // Função assíncrona.
  static async getForecast(city) {
    // URL buscada no site HGBrasil.
    // O "await" vai parar o processo e aguardar o processanento da requisição.
    const response = new Forecast ((await axios.get(`https://api.hgbrasil.com/weather?key=888eb4fc&city_name=${city}`))
      .data.results);
      return response;
  }
}

class Forecast {
    // Construtor utilizado para retornar só os resultados de meu interesse.
  constructor({ city, time, temp, humidity, description }) {
      (this.city = city),
      (this.time = time),
      (this.temp = temp),
      (this.humidity = humidity),
      (this.description = description);
  }
}

Api.getForecast('Gramado').then((v) => {console.log(v);});

//Api.getForecast('Pelotas');
