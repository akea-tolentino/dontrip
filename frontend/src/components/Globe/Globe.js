import { useCallback, useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import './Globe.css'

export default function GlobePage(props) {
    const [data, setData] = useState(null);
    const [mapCenter, setMapCenter] = useState({lat: 37.70091, lng: -122.18210, altitude: 2.5});

    const [userLocation, setUserLocation] = useState("")
    const globeEl = useRef();

    const locations = props.location.state.params
  
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
        debugger
      };

    return (
        <>
        <div className='globe-page-container'>
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
                labelColor={useCallback(() => "red", [])}
                labelDotRadius={1}
                labelAltitude={0.01}
                // onLabelClick={()=>console.log('yaa')}	
                />
            </div>

            <div className='location-options-container'>
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
                </ul>
                <button type='submit' className="globe-submit-button">don'trip</button>
            </div>
        </div>
        </>
    )
}