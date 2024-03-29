import MovieCarousel from "../components/MovieCarousel";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function HomePage() {
  const [mostPopularList, setMostPopularList] = useState([]);
  const [comingSoonList, setComingSoonList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);

  useEffect(() => {
    (async () => {
      const packet = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=ee3bf23ca6ee40ece5d8b91daed50a29&language=en-US&page=1"
      );
      const json = await packet.json();
      const results = json.results;
      setMostPopularList(results);
      console.log("popular:", results);
    })();
    (async () => {
      const packet = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=ee3bf23ca6ee40ece5d8b91daed50a29&language=en-US&page=1"
      );
      const json = await packet.json();
      const results = json.results;
      setComingSoonList(results);
      console.log("coming soon:", results);
    })();
    (async () => {
      const packet = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=ee3bf23ca6ee40ece5d8b91daed50a29&language=en-US&page=1"
      );
      const json = await packet.json();
      const results = json.results;
      setNowPlayingList(results);
      console.log("now playing:", results);
    })();
    (async () => {
      const packet = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=ee3bf23ca6ee40ece5d8b91daed50a29&language=en-US&page=1"
      );
      const json = await packet.json();
      const results = json.results;
      setTopRatedList(results);
      console.log("top rated:", results);
    })();
    //Scroll to top everytime this component mounts
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div id="HomePage" className="page">
      <h1>Most Popular</h1>
      <MovieCarousel id="mostPopularList" movieList={mostPopularList} />
      <h1>Coming Soon</h1>
      <MovieCarousel id="comingSoonList" movieList={comingSoonList} />
      <h1>Now Playing</h1>
      <MovieCarousel id="nowPlayingList" movieList={nowPlayingList} />
      <h1>Top Rated</h1>
      <MovieCarousel id="topRatedList" movieList={topRatedList} />
      <Footer />
    </div>
  );
}
