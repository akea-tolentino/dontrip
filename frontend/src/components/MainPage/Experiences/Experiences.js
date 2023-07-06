import { useState } from "react"
import '../MainPage.css'

export default function Experiences() {
    const[category, setCategory] = useState('');
    const[experience, setExperience] = useState('');

    return (
        <form>
            <label className="choose-month"> Choose a time of month 
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option value={'January'}>January</option>
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

                    <li onClick={()=>setExperience('Ski')}>
                        <img src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/ski.png'} alt="snow"/>
                        Snow sports
                    </li>

                    <li>
                        <img src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/lake.png'} alt="lake"/>
                        Lake 
                    </li>

                    <li>
                        <img src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/beach.png'} alt="beach"/>
                        Beach 
                    </li>

                    <li>
                        <img src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/surf.png'} alt="surf"/>
                        Surf
                    </li>

                    <li>
                        <img src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/clubbing.png'} alt="clubbing"/>
                        Clubbing
                    </li>

                    <li>
                        <img src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/backpacking.png'} alt="backpacking"/>
                        Backpacking
                    </li>

                    <li>
                        <img src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/camping.png'} alt="camping"/>
                        Camping
                    </li>

                    <li>
                        <img src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/winetasting.png'} alt="wine tasting"/>
                        Wine tasting
                    </li>

                </ul>
            </label>
            </div>

            </div>

        </form>
    )
}