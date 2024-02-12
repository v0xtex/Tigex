import React, { useEffect, useContext, useState } from "react";
import Contextpage from '../Contextpage'
import Movies from "../components/Movies";
import Searchbar from "../components/Searchbar";
import { useParams } from 'react-router-dom'
import Search from "../pages/Search"

function Container() {
  const { setMovies } = useContext(Contextpage);
  const { query } = useParams();
  const [visits, setVisits] = useState(78);

  useEffect(() => {
    setVisits(visits + 1);
  }, []);

  return (
    <section>
      <Searchbar />
      <h1>Tigex c'est {visits} utilisateurs !</h1>
      {query ? <Search query={query} /> : <Movies />}
    </section>
  )
}

export default Container;
