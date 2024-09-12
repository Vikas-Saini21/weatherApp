const  inputbox= document.querySelector('.inputbox')
const searchbtn=document.getElementById('searchbtn')
const wimg=document.querySelector('.wimg')
const temp=document.querySelector('.temp')
const des=document.querySelector('.description')
const humidity=document.getElementById('humidity')
const wind_speed=document.getElementById('wind_speed')
searchbtn.addEventListener('click',()=>{
    chkWeather(inputbox.value)
})
async function chkWeather(city){
    const myApiKey="caacfbf2fb1cf2287412b9851cf9b394"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}`
    //here we will use the fetch function to carry the value from the url
    const wData=await fetch(`${url}`)
    .then(response=>response.json())

   temp.innerHTML=`${Math.round(wData.main.temp-273)}&degC`
    des.innerHTML=`${wData.weather[0].description}`
    wind_speed.innerHTML=`${wData.wind.speed}km/h`
    humidity.innerHTML=`${wData.main.humidity}%`

    //here we will use case steps for weather

    switch ( wData.weather[0].main ) {
        case 'Clear':
            wimg.src = 'clear.png';
            break;

        case 'Rain':
            wimg.src = 'rain.png';
            break;

        case 'Snow':
            wimg.src = 'snow.png';
            break;

        case 'Clouds':
            wimg.src = 'cloud.png';
            break;

        case 'Haze':
            wimg.src = 'haze.png';
            break;

        case 'Mist':
            wimg.src = 'mist.png';
            break;

        case 'Drizzle':
            wimg.src = 'drizzle.png';
            break;

        case 'Thunderstorm':
            wimg.src = 'thunderstorm.png';
            break;

        case 'Tornado':
            wimg.src = 'tornado.png';
            break;

        case 'Fog':
            wimg.src = 'fog.png';
            break;

        case 'Sand':
            wimg.src = 'sand.png';
            break;

        case 'Ash':
            wimg.src = 'ash.png';
            break;

        case 'Squall':
            wimg.src = 'squall.png';
            break;

        case 'Tsunami':
            wimg.src = 'tsunami.png';
            break;

        case 'Dust':
            wimg.src = 'dust.png';
            break;

        case 'Sandstorm':
            wimg.src = 'sandstorm.png';
            break;

        case 'Vortex':
            wimg.src = 'vortex.png';
            break;

        case 'Windy':
            wimg.src = 'windy.png';
            break;

        case 'Hurricane':
            wimg.src = 'hurricane.png';
            break;

       case 'Sun rise':
            wimg.src = 'sunrise.png';
        break;

        case 'Sun set':
            wimg.src = 'sunset.png';
            break;

        case 'Party cloudy':
            wimg.src = 'party_cloudy.png';
            break;

        case 'hail':
            wimg.src = 'hail.png';
            break;        
    }
    }
     
