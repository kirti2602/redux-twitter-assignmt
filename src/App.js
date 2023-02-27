import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Liked from "./pages/liked/Liked";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
    <Provider store={store}>
    <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="homepage" element={ <Homepage/> } />
        <Route path="likedTweets" element={ <Liked/> } />
        {/* <Route path="profile" element={ <Profile/> } /> */}
        {/* <Route path= "error" element = {<Error />} /> */}
      </Routes>
      </Provider>
    </>
  );
}

export default App;
