import { useState } from "react"
import '../MainPage.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ScaleLoader from 'react-spinners/ScaleLoader';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

export default function Experiences(props) {



    const[category, setCategory] = useState('January');
    const[experience, setExperience] = useState('');
    const[loading, setloading] = useState(false);

    const[toggle, setToggle] = useState("");

    const[errors, setErrors] = useState(false)

    const history = useHistory();

    const chatApiKey = process.env.REACT_APP_GPT_KEY;

    const handleAiRequest = async (e) => {
        e.preventDefault();
        let places = []

        let counter = 0
        setloading(true)

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [{
                "role": "user",
                "content": `return only a string of 5 ${experience} destinations in ${category}, located in North America, South America, Europe, or Asia, formatted in city, country, and coordinates using the World Geodetic System WGS84 standard", split by a |, on a single line, without any text before and after`
            }],
            "temperature": 0,
            "max_tokens": 1000
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

            if (data.error) {
                setErrors(true)
                return handleAiRequest(e)
            }
            places = data.choices[0].message.content.split("|")
        });

        const placesObject = await places.map( (place) => {
            let info = place.split(', ')
            return {
                "location": info[0] + " " + info[1],
                "latitude": info[2],
                "longitude": info[3]
            }
        })



        if (placesObject.length !== 5) return handleAiRequest(e)
        setloading(false)
        setErrors(false)
        debugger
        return history.push("/location", {params: placesObject, experience: experience, month: category})

    }

    const handleSetExperience = (experience, e) => {
        setExperience(experience);
        setToggle(experience)
    }


    return (
        <>
            {loading ? (
                <>
                    { errors ? (
                    <div className="experiences-loading-container">
                        <ClimbingBoxLoader color={"white"} height={100} width={30} radius={20} margin={5}/>
                    </div>
                    ) : (
                    <div className="experiences-loading-container">
                        <ScaleLoader color={"white"} height={100} width={30} radius={20} margin={5}/>
                    </div>
                    )}
                </>
            ) :
            <div className="page">
                <form className="experience-form">
                    <label className="choose-month"> Choose a time of month
                        <select onChange={(e)=>setCategory(e.target.value)}>
                            <option value={'January'} selected={true}>January</option>
                            <option value={'February'}>February</option>
                            <option value={'March'}>March</option>
                            <option value={'April'}>April</option>
                            <option value={'May'}>May</option>
                            <option value={'June'}>June</option>
                            <option value={'July'}>July</option>
                            <option value={'August'}>August</option>
                            <option value={'September'}>September</option>
                            <option value={'October'}>October</option>
                            <option value={'November'}>November</option>
                            <option value={'December'}>December</option>
                        </select> and Choose a trip
                    </label>

                    <div className="main-container">

                    <div className="experience-container">

                    <label className="experience-label">

                        <ul className="experience-ul">

                            <li onClick={(e)=>handleSetExperience('Ski', e)}>
                                <img className={toggle === 'Ski' ? 'cool-effect' : null} src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/ski.png'} alt="snow"/>
                                Snow sports
                            </li>

                            <li onClick={(e)=>handleSetExperience('Lake', e)}>
                                <img className={toggle === 'Lake' ? 'cool-effect' : null} src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/lake.png'} alt="lake"/>
                                Lake
                            </li>

                            <li onClick={(e)=>handleSetExperience('Beach', e)}>
                                <img className={toggle === 'Beach' ? 'cool-effect' : null} src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/beach.png'} alt="beach"/>
                                Beach
                            </li>

                            <li onClick={(e)=>handleSetExperience('Surf', e)}>
                                <img className={toggle === 'Surf' ? 'cool-effect' : null} src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/surf.png'} alt="surf"/>
                                Surf
                            </li>

                            <li onClick={(e)=>handleSetExperience('Clubbing', e)}>
                                <img className={toggle === 'Clubbing' ? 'cool-effect' : null} src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/clubbing.png'} alt="clubbing"/>
                                Clubbing
                            </li>

                            <li onClick={(e)=>handleSetExperience('Backpacking', e)}>
                                <img className={toggle === 'Backpacking' ? 'cool-effect' : null} src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/backpacking.png'} alt="backpacking"/>
                                Backpacking
                            </li>

                            <li onClick={(e)=>handleSetExperience('Camping', e)}>
                                <img className={toggle === 'Camping' ? 'cool-effect' : null} src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/camping.png'} alt="camping"/>
                                Camping
                            </li>

                            <li onClick={(e)=>handleSetExperience('Wine tasting', e)}>
                                <img className={toggle === 'Wine tasting' ? 'cool-effect' : null} src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/winetasting.png'} alt="wine tasting"/>
                                Wine tasting
                            </li>

                        </ul>
                    </label>
                    </div>

                </div>
                </form>
                <button className="experience-submit" onClick={handleAiRequest}>Find Locations</button>
            </div>}
        </>

    )
}
