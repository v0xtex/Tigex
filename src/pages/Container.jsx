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
      <center><h1 style="color: white; font-family: Arial; font-weight: bold;">TIGEX, C'EST {visits} UTILISATEURS</h1></center>
      {query ? <Search query={query} /> : <Movies />}
    </section>
  )
}

export default Container;
