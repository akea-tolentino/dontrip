import NavBar from "./components/NavBar/NavBar";
import Splash from "./components/MainPage/Splash/Splash";
import { MainPage } from "./components/MainPage/MainPage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/session";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./components/Routes/Routes";
import Experiences from "./components/MainPage/Experiences/Experiences";


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
        <AuthRoute exact path="/" component={MainPage} />
        <ProtectedRoute exact path="/experiences" component={Experiences} />
      </Switch>
    </>
  );
}


export default App;


