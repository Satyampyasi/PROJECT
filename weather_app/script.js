const btn =document.getElementById('btn');
 const mydiv= document.getElementById('contain');
 const wind = document.getElementById('wind');
 const humidity = document.getElementById('humidity')
 const sealevel = document.getElementById('sealevel');



const getfact = async()=>
     {
      mydiv.textContent=''
        const city = document.getElementById('input').value.trim();
        if(!city){
            alert("Please enter tha city name.");
            return;
        }
  
     const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
     try{
     const response = await fetch(url);
     if(!response.ok){
        throw new Error(`HTTP Error: ${response.status}`)
     }
     const mydata = await  response.json();
     console.log(mydata);
     const p = document.createElement('p');
     p.textContent = city+" Temperature: "+mydata.main.temp+"C";
     wind.textContent = mydata.weather[0].description;
     mydiv.appendChild(p)
     humidity.textContent= "Humidity: "+mydata.main.humidity;
     sealevel.textContent= "Sea_level: "+mydata.main.sea_level;
}
catch(error){
    console.error("An Error occured:",error);
}
}
btn.addEventListener('click',getfact);