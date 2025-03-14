
export interface WeatherData {
    main : {
        temp : number
        humidity : number

    }
    weather : [
        {
            description : string
        }
    ]
    wind : {
        speed : number
    }
}


export default function WeatherCard({data} : {data : WeatherData}){
    return(
        <div className="weather-card">
            <h2>{data.weather[0].description}</h2>
            <p>Tem : {data.main.temp}</p>
            <p>hum : {data.main.humidity}</p>
            <p>wind : {data.wind.speed}</p>
        </div>
    )
}