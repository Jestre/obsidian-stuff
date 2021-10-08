/*
    Grab the weather from Open Weather Map

    Cities:
                4487042: Raleigh
                4460943: Clayton
    
    SwS - 2021-10-08
*/
async function openweather(apikey, location_id) {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${location_id}&appid=${apikey}&units=imperial`;
    return await fetch(url, {
                        "method": "GET"
                })
                .then(response => response.json())
                .then(data => 
                    data['main']['temp'] + '°F / ' + 
                    data['main']['humidity'] + '% / ' +
                    data['weather'][0]['main']
                )
                .catch(err => {
                    console.error(err);
                });
}
module.exports = openweather;

