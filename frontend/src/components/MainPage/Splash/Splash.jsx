import './Splash.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Splash () {

    return (
        <div className='splash-background'>
            <article className='splash'>
                <p className='splash-message'>
                    Welcome to don'trip, an AI assisted web application <br/>
                    designed to help you plan your next vacation. <br/>
                    Sign in or sign up to get started! <br/>
                    Alternatively, take a look at how it works with our demo.
                    {/* <br/> Don't trip, we've got you covered. */}
                </p>
                <ul className='splash-buttons'>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                    <button>Demo</button>
                </ul>
            </article>
        </div>
    )
}