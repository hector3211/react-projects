import "bootstrap/dist/css/bootstrap.css";
import AllCards from "./Pages/AllCards";
import Favorites from "./Pages/Favorites";
import NewCard from "./Pages/NewCards";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App container-fluid">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllCards />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/newcard" element={<NewCard />} />
      </Routes>
    </div>
  );
}

export default App;
