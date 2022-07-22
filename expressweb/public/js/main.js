const submitBtn = document.getElementById('submitBtn')
const cityName= document.getElementById('cityName');

const city_name= document.getElementById('city_name');

const temp=document.getElementById('temp')
const temp_status=document.getElementById('temp_status')



const getInfo = async(event) =>  {
    event.preventDefault();
   
    let cityval= cityName.value ;
    if(cityval==="")
        {
              city_name.innerText="Please write name before search"
 
            
        }
    else{
        try
        { 
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=0f04d4999a371b5713c7d348411197ec`
            const response = await fetch(url)
            const data =  await response.json()
            const arrdata = [data];
            city_name.innerText =  `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp.innerText = arrdata[0].main.temp;
            
           
            const tempMood =arrdata[0].weather[0].main;

            //connection to check cloud or sun
                if(tempMood == "Clear")
                {
                 
                      temp_status.innerHTML= "<i class='fas fa-sun' style='color: #FCE570;'></i>"
                }
                else if(tempMood == "Clouds")
                {
                    temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
                }
                else if(tempMood == "Rain")
                {
                    temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
                }
                else 
                {
                    temp_status.innerHTML= "<i class=' fas fa-cloud' style='color: #a4b0be;'></i>"
                }
             
        }
        catch{
            city_name.innerText="Please enter the city name";
            
        }
    }
}
submitBtn.addEventListener('click',getInfo)
