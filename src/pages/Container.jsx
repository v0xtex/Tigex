import React, { useEffect, useContext, useState } from "react";
import Contextpage from '../Contextpage'
import Movies from "../components/Movies";
import Searchbar from "../components/Searchbar";
import { useParams } from 'react-router-dom'
import Search from "../pages/Search"
const fs = require('fs');

function Container() {
  const { setMovies } = useContext(Contextpage);
  const { query } = useParams();
  const [visits, setVisits] = useState(0);

  const VISITS_FILE = './visits.txt';

  if (!fs.existsSync(VISITS_FILE)) {
    fs.writeFileSync(VISITS_FILE, '0');
  }

  const currentVisits = parseInt(fs.readFileSync(VISITS_FILE));

  useEffect(() => {
    const newVisits = currentVisits + 1;
    setVisits(newVisits);
    fs.writeFileSync(VISITS_FILE, newVisits.toString());
  }, []);

  return (
    <h1>Tigex c'est {visits} utilisateurs !</h1>
    <section>
      <Searchbar />
      {query ? <Search query={query} /> : <Movies />}
    </section>
  )
}

export default Container;
