import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    setTimeout(() => {}, 1000);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  function removeTour(id) {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  }

  if (isLoading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Our Tours</h1>
      <div className="tours">
        {tours.map((tour) => {
          return <Card key={tour.id} info={tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default App;
