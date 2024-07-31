import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return; // Early return

  const mainMovie = movies[0];
  

  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={573435} />
    </div>
  );
};

export default MainContainer;

// {
//     "id": 573435,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Don’t Disrupt BubbaDub Watching Bad Boys",
//         "key": "UwdWkxEjCKU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-07-26T16:00:34.000Z",
//         "id": "66a3f23c12d845f6bfb12547"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Extended Preview",
//         "key": "8LdzWbIz8DA",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-07-23T19:00:06.000Z",
//         "id": "66a1998411d677d93026453c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Special Features Preview",
//         "key": "9cldCuMk9Ao",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-07-22T13:00:16.000Z",
//         "id": "66a1cb0876eb26a1ca383eea"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "We ride together, we die together",
//         "key": "76U3y2aIfxw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-06-09T19:00:02.000Z",
//         "id": "66698bf9f11438c572aa1ac1"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "When there's too many words to describe Bad Boys: Ride or Die",
//         "key": "Og4G7j430m4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-06-08T16:30:03.000Z",
//         "id": "66698bc8bbc32b9a857ab793"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "These bad boys just became Wanted Men.",
//         "key": "PoV5LL6u4TI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-06-05T14:00:28.000Z",
//         "id": "66619d131ea251313f448104"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Ride or Diet [Subtitled]",
//         "key": "w_xfIYNIYcc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-06-04T08:41:07.000Z",
//         "id": "666419bacc48bfd820905441"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Make My Move [Subtitled]",
//         "key": "4N1EytON0W0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-06-04T08:40:14.000Z",
//         "id": "66641a1d8aca51a8a209e6e4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Gator [Subtitled]",
//         "key": "zdTPCtbdRTo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-06-04T08:39:03.000Z",
//         "id": "666419deee4eda5be0905542"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Rating Marcus Burnett's snacks",
//         "key": "lGoXxUdPwSk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-06-02T14:15:02.000Z",
//         "id": "66619d7c0d48b3f88ff2a085"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Whatcha Gonna Do Jimmy Butler?",
//         "key": "me9fXz54J4M",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-05-28T02:59:12.000Z",
//         "id": "66554d94248970fa043da40a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Reload [Subtitled]",
//         "key": "LA8jqkyh-co",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-05-24T05:17:31.000Z",
//         "id": "66641aba48075b2ad2917167"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Suspects :15 [Subtitled]",
//         "key": "UZncyEROXe8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-05-24T05:16:47.000Z",
//         "id": "66641b19abfaf62134e998a0"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Locked and loaded. Tickets are on sale now.",
//         "key": "Mnn__q2Pwh4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-05-16T22:00:11.000Z",
//         "id": "664e006dcfdf77a0ae90de4c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Final UK Trailer",
//         "key": "uWLNl_KQCAU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-05-16T19:03:25.000Z",
//         "id": "664de133600de8cb549b9659"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Final Trailer",
//         "key": "ZTQyMmz-cQE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-05-16T19:00:30.000Z",
//         "id": "664de00de42668f23bb9960b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas June 6",
//         "key": "suAlMplmf_A",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-04-19T06:34:31.000Z",
//         "id": "6622557078570e0164108284"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Look Back",
//         "key": "ZoHv46OAoEk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-04-07T20:00:08.000Z",
//         "id": "661a6665d363e5017c5f36d2"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official IMAX Trailer",
//         "key": "g1sdO-u79Ks",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-03-27T23:00:34.000Z",
//         "id": "662259ec78570e017e11750f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Will Smith and Martin Lawrence are back",
//         "key": "XYzYqDeRr2g",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-03-26T13:04:13.000Z",
//         "id": "6624f9afb2681f01a973c43c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "hRFY_Fesa9Q",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-03-26T13:00:32.000Z",
//         "id": "6602ca6562f335017d54b0d9"
//       }
//     ]
//   }
