import { env } from "../config/env"


const API_KEY = env.VITE_API_KEY
const BASE_URL = env.VITE_BASE_URL



export async function fetchWeatherData(city  :string){

    try{
        const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        if(!res.ok){
            throw new Error('Failed to fetch')
        }
        const data = await res.json()
        return data

    }catch(err){
        console.log(err)
        return null
    }
}

