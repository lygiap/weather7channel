import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {
    private http: any;
    private data: any;
                               //"http://api.openweathermap.org/data/2.5/forecast          /city?id=524901                 &appid={APIKEY}
    private url_cidade: string = "http://api.openweathermap.org/data/2.5/forecast?q=CIDADE&units=metric&appid=7d29c85b415d4474c680c00a31a60eb9";
    private url_coords: string = "http://api.openweathermap.org/data/2.5/forecast?lat=LATITUDE&lon=LONGITUDE&units=metric&appid=7d29c85b415d4474c680c00a31a60eb9";

    public temp: any;

    constructor(http: Http) {
        this.http = http;
    }

    obterPrevisaoPorCidade(nomeDaCidade: string) {
        var url = this.url_cidade.replace('CIDADE', nomeDaCidade);

        this.http.get(url)
            .subscribe(res => {
                this.data = res.json();
                console.log("RESULTADO: ", this.data);
            }, error => {
                console.log(error);
            });
    }

    obterPrevisaoPorCoordenadas(latitude: any, longitude: any) {
      var url = this.url_coords.replace('LATITUDE', latitude).replace('LONGITUDE', longitude);

      this.http.get(url)
          .subscribe(res => {
              this.data = res.json();
              this.temp = this.data.list[0].main.temp;
              console.log("RESULTADO: ", this.data);
          }, error => {
              console.log(error);
          });
    }
}
