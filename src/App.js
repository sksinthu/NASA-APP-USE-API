import { useEffect, useState } from "react";
import Footer from "./Component/Footer";
import Main from "./Component/Main";
import SideBar from "./Component/Sidebar";

function App() {
  const [showModel, setShowmode] = useState(false);
  const [data, setData] = useState([]);
  const handleClick = () => {
    setShowmode(!showModel);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
        );

        const apiData = await res.json();
        console.log(apiData);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModel && <SideBar handleClick={handleClick} data={data} />}

      {data && <Footer handleClick={handleClick} data={data} />}
    </>
  );
}

export default App;
