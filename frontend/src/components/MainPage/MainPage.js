import { useState } from "react"

export default function MainPage() {
    const [category, setCategory] = useState('')

    return (
        <>
            <label className="choose-month">Choose a time of month
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
                </select>
            </label>

            <label className="choose-experience">and Choose a trip
                <ul className="experience-ul">
                    <li>
                        Ski / Snowboard
                    </li>

                    <li>
                        Lake 
                    </li>

                    <li>
                        Beach 
                    </li>

                    <li>
                        Surf
                    </li>

                    <li>
                        Clubbing
                    </li>

                    <li>
                        Backpacking
                    </li>

                    <li>
                        Camping
                    </li>

                    <li>
                        Wine tasting
                    </li>

                </ul>
            </label>
        </>
    )
}