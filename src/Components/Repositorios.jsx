import React from "react";
import { useState, useEffect } from "react";

import Star from "../assets/star.png";

import Loader from "./Loader.jsx";

const Repositorio = (props) => {
  const [repository, setRepository] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(async () => {
    const response = await fetch("https://api.github.com/users/Micalli/repos");
    const data = await response.json();
    setRepository(data);
    {
      repository ? setloading(true) : setloading(false);
    }
  }, []);

  return (
    <>
      <ul>
        {loading ? (<h1></h1>) : (<Loader />)}
        {repository.map((repo) => (
          <a href={repo.url} key={repo.id}>
            <li key={repo.id}>
              {repo.name}
              <div>
                <span>{repo.stargazers_count}</span>
                {repo.stargazers_count == 0 ? (
                  <img src={Star} className="star-off" />
                ) : (
                  <img src={Star} />
                )}
              </div>
            </li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default Repositorio;
