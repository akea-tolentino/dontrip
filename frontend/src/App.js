import NavBar from "./components/NavBar/NavBar";
import Splash from "./components/MainPage/Splash/Splash";
import { MainPage } from "./components/MainPage/MainPage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/session";




function App() {

  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);




  return loaded && (
    <>
      <NavBar/>
      <MainPage />
    </>
  );
}

export default App;
