import { useEffect, useState } from "react";
import MyCard from "../MyCard/MyCard";
import Container from "react-bootstrap/Container";
import "./MiApi.css";
const MiApi = ({ busqueda, ordenar }) => {
  const [data, setData] = useState([]);
  const urlApiMovie =
    "https://api.themoviedb.org//3/discover/movie?language=es-cl";
  const urlImage = "https://image.tmdb.org/t/p/w500/";
  const APIKey =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzY4NTI5NGZhNTdlNWQzNGU2Y2Y4Zjc0ZmFhNjA4OCIsInN1YiI6IjY1MjA1YjM1OTY3Y2M3MzQyNDZhMTJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7s6vAx8hFfJ92mTYx1fMKlfUgcJLwpTVt5YjDd72TFc";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: APIKey,
    },
  };

  useEffect(() => {
    fetch(urlApiMovie, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  let dataResultado = "";
  if (!busqueda) {
    dataResultado = data;
  } else {
    dataResultado = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(busqueda.toLowerCase()) ||
        item.release_date.toLowerCase().includes(busqueda.toLowerCase())
      );
    });
  }

  if (ordenar) {
    switch (ordenar) {
      case "titleAsc":
        {
          dataResultado.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
        }
        break;
      case "titleDesc":
        {
          dataResultado.sort((a, b) => {
            if (a.title < b.title) {
              return 1;
            }
            if (a.title > b.title) {
              return -1;
            }
            return 0;
          });
        }
        break;
      case "dateAsc":
        {
          dataResultado.sort((a, b) => {
            if (a.release_date < b.release_date) {
              return -1;
            }
            if (a.release_date > b.release_date) {
              return 1;
            }
            return 0;
          });
        }
        break;
      case "dateDesc":
        {
          dataResultado.sort((a, b) => {
            if (a.release_date < b.release_date) {
              return 1;
            }
            if (a.release_date > b.release_date) {
              return -1;
            }
            return 0;
          });
        }
        break;
      case "AverageAsc":
        {
          dataResultado.sort((a, b) => {
            if (a.vote_average < b.vote_average) {
              return 1;
            }
            if (a.vote_average > b.vote_average) {
              return -1;
            }
            return 0;
          });
        }
        break;
      case "AverageDesc":
        {
          dataResultado.sort((a, b) => {
            if (a.vote_average < b.vote_average) {
              return -1;
            }
            if (a.vote_average > b.vote_average) {
              return 1;
            }
            return 0;
          });
        }
        break;
    }
  }

  return (
    <Container fluid id="contenedorCards">
      {dataResultado?.map((item) => (
        <MyCard
          key={item.id}
          title={item.title}
          poster_path={urlImage + item.poster_path}
          backdrop_path={urlImage + item.backdrop_path}
          overview={item.overview}
          release_date={item.release_date}
          vote_average={item.vote_average}
        />
      ))}
    </Container>
  );
};

export default MiApi;
