import { useCallback, useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import './Globe.css'

export default function GlobePage({locations}) {
    const [data, setData] = useState(null);
    const [mapCenter, setMapCenter] = useState({lat: 37.70091, lng: -122.18210, altitude: 2.5});

    const globeEl = useRef();

    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.15;
        globeEl.current.pointOfView(mapCenter, 2000);
      }, [mapCenter]);
      
    //   const locations = [
    //     {latitude: "39.0968° N", location: "Lake Tahoe California United States", longitude: "120.0324° W"}, 
    //     {latitude: "45.9650° N", location: "Lake Como Lombardy Italy", longitude: "9.1859° E"}, 
    //     {latitude: "51.4253° N", location: " Lake Louise Alberta Canada", longitude: "116.1776° W"}, 
    //     {latitude: "46.36269 N", location: " Lake Bled Julian Alps Slovenia", longitude: "14.0937° E"}, 
    //     {latitude: "15.9254° S", location: " Lake Titicaca Andes Mountains Peru and Bolivia", longitude: "69.3356° W"}];
    
    const newLocations = locations.map(place=> ({
        lat: place.latitude.replace(/[°NS]/gi, "")*(place.longitude.includes("S") ? -1 : 1), 
        lng: place.longitude.replace(/[°EW]/gi, "")*(place.longitude.includes("W") ? -1 : 1), 
        location: place.location
    }))
    
    useEffect(()=>{
        const loc = locations.map(place=>({ 
            lat: place.latitude.replace(/[°NS]/gi, "")*(place.longitude.includes("S") ? -1 : 1), 
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
                            onClick={handleRadioClick}
                            />
                                <label htmlFor={place.location}>
                                    {place.location}
                                </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}