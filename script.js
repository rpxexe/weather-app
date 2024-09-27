let container=document.querySelector('.container')
let search=document.querySelector('.search-box button')
let weatherbox=document.querySelector('.weather-box')
let containerdetails=document.querySelector('.weather-details')
let search_box=document.querySelector('.search-box input')


search_weather=()=>{
    
        weatherbox.style.display='block'
        containerdetails.style.display='flex'
        container.style.height="555px"
     // console.log("clicked")
    // const APIkey='645a9750b4fdbbd75843131d7ccc9e2d';
    let city=document.querySelector('.search-box input').value;
    if(city==''){
        return
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=645a9750b4fdbbd75843131d7ccc9e2d`).then(response=>response.json()).then(json=>{
           
        let image=document.querySelector('.weather-box img')
        let description=document.querySelector('.weather-box .description')
        let temperature=document.querySelector('.weather-box .temperature')
        if(json.cod=='404'){
            containerdetails.style.display='none'
            image.src="assets/404.png"
            container.style.height="400px"
            temperature.innerHTML=""
            description.innerHTML="Please Enter a Proper Location"
        }
        if(city.toLowerCase()==='rishabh'){
            image.src="assets/rishabh.jpg"
            description.innerHTML="Developer of this app"
        }

        
        
        let humidity=document.querySelector('.weather-details .humidity span')
        let wind=document.querySelector('.weather-details .wind span')
        switch (json.weather[0].main) {
            case 'Clear':
                image.src="assets/clear.png";
                break;
            case 'Rain':
                image.src="assets/rain.png";
                break;
            case 'Fog':
                image.src="assets/snow.png";
                break;
            case 'Snow':
                image.src="assets/snow.png";
                break;
            case 'Clouds':
                image.src="assets/cloud.png";
                break;
            case 'Mist':
                image.src="assets/mist.png";
                break;
            case 'Haze':
                image.src="assets/mist.png";
                break;
        
            default:
                image.src="assets/cloud.png";
             
        }
        
        temperature.innerHTML=parseFloat(json.main.temp)+"<span>°C</span>";
        description.innerHTML=json.weather[0].description
        humidity.innerHTML=parseFloat(json.main.humidity)+"%"
        wind.innerHTML=parseFloat(json.wind.speed)+"Km/h"
        
        
        
        
    })
}
search.addEventListener('click',search_weather);
search_box.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
        search_weather();
    }
})