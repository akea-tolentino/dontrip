import NavBar from "./components/NavBar/NavBar";
import Splash from "./components/MainPage/Splash/Splash";
import { MainPage } from "./components/MainPage/MainPage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/session";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./components/Routes/Routes";
import Experiences from "./components/MainPage/Experiences/Experiences";
import GlobePage from "./components/Globe/Globe";
import { CoolCarousel } from "./components/CoolCarousel/CoolCarousel";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar/>
      <Switch>
        <ProtectedRoute exact path="/location" component={GlobePage} />
        <ProtectedRoute exact path="/experiences" component={Experiences} />
        <ProtectedRoute path="/" component={CoolCarousel} />        
        <AuthRoute path="/" component={MainPage} />        


       
      </Switch>
    </>
  );
}


export default App;


