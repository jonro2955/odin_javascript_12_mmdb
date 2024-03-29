import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import avatar from "../images/avatar.png";

export default function ActorPage() {
  let actorId = useParams().actorId;
  const [actor, setActor] = useState();
  useEffect(() => {
    (async () => {
      const actorPacket = await fetch(
        `https://api.themoviedb.org/3/person/${actorId}?api_key=ee3bf23ca6ee40ece5d8b91daed50a29&language=en-US`
      );
      const actorJson = await actorPacket.json();
      setActor(actorJson);
      console.log(actorJson);
    })();
  }, [actorId]);

  return (
    actor && (
      <div id="ActorPage" className="page">
        <div className="sideBarContainer">
          <h1>{actor.name}</h1>
          <Link target="_blank" to={`/poster${actor.profile_path}`}>
            <img
              style={{ borderRadius: "15px", border: "2px solid #b30000" }}
              width="300"
              alt={actor.name}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                  : avatar
              }
            />
          </Link>
          <h3>Birthday: {actor.birthday}</h3>
          <h3>Place of birth: {actor.place_of_birth}</h3>
          <div>{actor.biography}</div>
          {actor.homepage && (
            <a
              className="actorLink"
              target="_blank"
              rel="noopener noreferrer"
              href={actor.homepage}
            >
              <h3>Website</h3>
            </a>
          )}
          <a
            className="actorLink"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.themoviedb.org/person/${actor.id}`}
          >
            <h3>TMDB Profile</h3>
          </a>
        </div>
      </div>
    )
  );
}
