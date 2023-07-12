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
import GroupIndex from "./components/Groups/GroupIndex";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import UserShowPage from "./components/userShowPage/userShow.jsx";
import { CoolCarousel } from "./components/CoolCarousel/CoolCarousel";
import Itinerary from "./components/Itinerary/Itinerary";
import LinksFooter from "./components/LinksFooter/LinksFooter";
import { Redirect } from "react-router-dom/cjs/react-router-dom";


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


        <ProtectedRoute path="/users/:userId/trips" component={UserShowPage} />
        <ProtectedRoute exact path="/location" component={GlobePage} />
        <ProtectedRoute exact path="/experiences" component={Experiences} />
        <ProtectedRoute exact path="/groups" component={GroupIndex} />
        <ProtectedRoute exact path="/itinerary" component={Itinerary} />

        <AuthRoute path="/" component={MainPage} />
        {/* <Redirect /> */}

      </Switch>
      <LinksFooter/>
    </>
  );
}


export default App;
