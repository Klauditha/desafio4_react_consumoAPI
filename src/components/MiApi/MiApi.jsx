import { useEffect, useState } from "react";
import MyCard from "../Card/MyCard";
import Container from "react-bootstrap/Container";

const MiApi = () => {
  const [data, setData] = useState([]);
  const urlApi = "https://api.themoviedb.org//3/discover/movie?language=es-cl";
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzY4NTI5NGZhNTdlNWQzNGU2Y2Y4Zjc0ZmFhNjA4OCIsInN1YiI6IjY1MjA1YjM1OTY3Y2M3MzQyNDZhMTJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7s6vAx8hFfJ92mTYx1fMKlfUgcJLwpTVt5YjDd72TFc",
    },
  };
  useEffect(() => {
    fetch(urlApi, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  /*
      fetch('https://api.themoviedb.org/3/authentication', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));*/

  return (
    <Container fluid id="contenedorCards">
      {data?.map((item) => (
        <MyCard
          key={item.id}
          title={item.title}
          backdrop_path={urlImage + item.poster_path}
          overview={item.overview}
          release_date={item.release_date}
          vote_average={item.vote_average}
        />
      ))}
    </Container>
  );
};

export default MiApi;
