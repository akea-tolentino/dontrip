import { useState } from "react"
import './MainPage.css'
import img from './snow.png'

export default function MainPage() {
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
                        <img src={img} alt=""/>
                            Ski / Snowboard
                    </li>

                    <li>
                        <img src={img} alt=""/>
                        Lake 
                    </li>

                    <li>
                        <img src={img} alt=""/>
                        Beach 
                    </li>

                    <li>
                        <img src={img} alt=""/>
                        Surf
                    </li>

                    <li>
                        <img src={img} alt=""/>
                        Clubbing
                    </li>

                    <li>
                        <img src={img} alt=""/>
                        Backpacking
                    </li>

                    <li>
                        <img src={img} alt=""/>
                        Camping
                    </li>

                    <li>
                        <img src={img} alt=""/>
                        Wine tasting
                    </li>

                </ul>
            </label>
            </div>

            </div>

        </form>
    )
}