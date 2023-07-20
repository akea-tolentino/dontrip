import { useCallback, useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import './Globe.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ScaleLoader from 'react-spinners/ScaleLoader';

export default function GlobePage(props) {

    const history = useHistory();
    const[loading, setloading] = useState(false);

    const [data, setData] = useState(null);
    const [mapCenter, setMapCenter] = useState({lat: 37.70091, lng: -122.18210, altitude: 2.5});

    const [userLocation, setUserLocation] = useState("")
    const globeEl = useRef();

    const locations = props.location.state.params
    const experience = props.location.state.experience
    const month = props.location.state.month
    const chatApiKey = process.env.REACT_APP_GPT_KEY;

    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.15;
        globeEl.current.pointOfView(mapCenter, 2000);
      }, [mapCenter]);

    const newLocations = locations.map(place=> ({
        lat: place.latitude.replace(/[°NS]/gi, "")*(place.latitude.includes("S") ? -1 : 1),
        lng: place.longitude.replace(/[°EW]/gi, "")*(place.longitude.includes("W") ? -1 : 1),
        location: place.location
    }))

    useEffect(()=>{
        const loc = locations.map(place=>({
            lat: place.latitude.replace(/[°NS]/gi, "")*(place.latitude.includes("S") ? -1 : 1),
            lng: place.longitude.replace(/[°EW]/gi, "")*(place.longitude.includes("W") ? -1 : 1),
            label:''
        }))
        setData(loc)
    },[])

    const handleRadioClick = (event) => {
        const selectedLocation = newLocations.find(place => place.location === event.target.id);
        if (selectedLocation) {
          setMapCenter({ lat: selectedLocation.lat, lng: selectedLocation.lng, altitude: 2.5 });
        }
        setUserLocation(selectedLocation);
    };

    const handleAiRequest = async (e) => {
        e.preventDefault();

        let events = []

        setloading(true)


        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [{
                "role": "user",
                "content": `return only a un-numbered list of 10 activities, including ${experience} to do in ${userLocation.location}, formatted in a string of "activity name, activity company website", split by a | without any text before and after, without line breaks`
            }],
            "temperature": 0,
            "max_tokens": 4000
        };

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + chatApiKey,
                "Content-type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            events = data.choices[0].message.content.split("|")
            if (events.length !== 10) events = data.choices[0].message.content.split("\n")
        });


        const eventsObject = await events.map( (event) => {
            let info = event.split(', ')
            return {
                "description": info[0],
                "address": info[1],
            }
        })
   

        if (eventsObject.length !== 10) return handleAiRequest(e)
        setloading(false)

        return history.push("/itinerary", {params: eventsObject, location: userLocation.location, experience: experience, month: month})


    }

    return (
        <>
            {loading ? (
                    <div className="experiences-loading-container">
                        <ScaleLoader color={"white"} height={100} width={30} radius={20} margin={5}/>
                    </div>

                ) : <div className='globe-page-container'>
                <div className='globe-container'>
                    <Globe
                    ref={globeEl}

                    backgroundColor='rgba(4, 32, 79, 0.815)'
                    globeImageUrl='https://cdn.jsdelivr.net/npm/three-globe@2.27.4/example/img/earth-blue-marble.jpg'
                    width={800}
                    height={700}

                    labelsData={data}
                    labelText={"label"}
                    labelSize={1.6}
                    labelColor={() => "red"}
                    labelDotRadius={1}
                    labelAltitude={0.01}


                    />
                </div>

                <div className='location-options-container'>
                    <form onSubmit={handleAiRequest}>
                        <ul className='location-radio-ul'>
                            <h2>
                                Choose a location from the following selections:
                            </h2>
                            {newLocations.map(place=>(
                                <li>
                                    <input name='location-radio' id={place.location} type='radio' value={place.latitude}
                                    onClick={handleRadioClick} className='radio'
                                    />
                                        <label htmlFor={place.location}>
                                            {place.location}
                                        </label>
                                </li>
                            ))}
                        <button type='submit' className="globe-submit-button">Submit Location</button>
                        </ul>

                    </form>

                </div>
            </div>}

        </>
    )
}
