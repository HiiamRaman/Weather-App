// import Search from "../Search/index";
// import { useState, useEffect } from "react";
// export default function Weather() {
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [weatherdata, setWeatherdata] = useState(null);
//   async function fetchWeatherdata(param) {
//     setLoading(true);
//     try {
//       const resp = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=35ac726d23ec370168af35f54e911aa5`
//       );
//       const data = await resp.json();
//       console.log(data);
//       if (data) {
//         setWeatherdata(data);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   function handleSearch() {
//     fetchWeatherdata(search);
//   }
//   function getcurrentDate(){
//     const now = new Date(); // Get the current date and time
  
//     // Extract components
//     const month = now.toLocaleString("default", { month: "long" }); // Full month name
//     const day = now.getDate(); // Day of the month
//     const year = now.getFullYear(); // Year
//     const time = now.toLocaleTimeString(); // Time in HH:MM:SS AM/PM format
  
//     return `${month} ${day}, ${year} ${time}`;
//   }
//   useEffect(() => {
//     fetchWeatherdata("Mumabi");
//   }, []);

//   return (
//     <div>
//       <Search
//         search={search}
//         setSearch={setSearch}
//         handleSearch={handleSearch}
//       />

//       {loading ? (
//         "Weather data is loading"
//       ) : (
//         <div>
//           {weatherdata?.name} <br />
//           {weatherdata?.sys?.country}{" "}
//           <div> {getcurrentDate()}</div>
//           <div>{weatherdata?.main?.temp} </div>
          
//         </div>
//       )}
//     </div>
//   );
// }
//ABOVE CODE ARE WRITTEN MANUALLY WITH NO ANY CSS AND THESE BELOW CODES ARE MODIFIED AND GENERATED FOR CSS PURPPOSE
import Search from "../Search/index";
import { useState, useEffect } from "react";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherdata, setWeatherdata] = useState(null);

  async function fetchWeatherdata(param) {
    setLoading(true);
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=35ac726d23ec370168af35f54e911aa5`
      );
      const data = await resp.json();
      console.log(data);
      if (data) {
        setWeatherdata(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch() {
    fetchWeatherdata(search);
  }

  function getcurrentDate() {
    const now = new Date();

    const month = now.toLocaleString("default", { month: "long" });
    const day = now.getDate();
    const year = now.getFullYear();
    const time = now.toLocaleTimeString();

    return `${month} ${day}, ${year} ${time}`;
  }

  useEffect(() => {
    fetchWeatherdata("kathmandu");
  }, []);

  return (
    <div className="weather-app">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        className="search-component"
      />

      {loading ? (
        <div className="loading-message">Weather data is loading...</div>
      ) : (
        <div className="weather-info">
          <div className="location">
            {weatherdata?.name} <br />
            {weatherdata?.sys?.country}
          </div>
          <div className="current-date">{getcurrentDate()}</div>
          
<div className="temperature">
  {weatherdata?.main?.temp ? (
    <>
      <span>Temperature: </span>
      {weatherdata.main.temp}°C
    </>
  ) : (
    "Temperature data not available"
  )}
</div>

        </div>
      )}
    </div>
  );
}



