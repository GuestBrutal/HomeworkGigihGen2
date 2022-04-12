/*import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const CLIENT_ID = "e33c959f4ce44195a90b8a8a2f5722b9";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    });

    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <button
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {token ? (
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}

        {renderArtists()}
      </header>
    </div>
  );
}

export default App;*/

// import "./App.css";
// import React, { useState } from "react";
// import CreatePlaylist from "./CreatePlaylist";
// import Login from "./Login";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
//   const [token, setToken] = useState();

//   if (!token) {
//     return <Login setToken={setToken} />;
//   }

//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <Switch>
//             <Route path="/CreatePlaylist" component={CreatePlaylist} />
//             <Route path="/" component={Login} />
//           </Switch>
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Signika"
      />
      <h1>Skrillex & Diplo Present Jack U</h1>
      <div className="Container">
        <div className="Card-left">
          <div className="Picture">
            <img
              className="Song"
              src="https://ukf.com/wp-content/uploads/2015/05/jack-u-selects.jpg"
            />
          </div>
          <div className="Detail">
            <h2>Mind (feat. Kai)</h2>
            <h3>Jack U, Skrillex, Diplo, Kai</h3>
            <h4>Skrillex and Diplo Present Jack U</h4>
          </div>
        </div>
        <div className="Card-right">
          <div className="Picture">
            <img
              className="Song"
              src="https://ukf.com/wp-content/uploads/2015/05/jack-u-selects.jpg"
            />
          </div>
          <div className="Detail">
            <h2>Mind (feat. Kai)</h2>
            <h3>Jack U, Skrillex, Diplo, Kai</h3>
            <h4>Skrillex and Diplo Present Jack U</h4>
          </div>
        </div>
      </div>
      <div className="Container">
        <div className="Card-left">
          <div className="Picture">
            <img
              className="Song"
              src="https://ukf.com/wp-content/uploads/2015/05/jack-u-selects.jpg"
            />
          </div>
          <div className="Detail">
            <h2>Mind (feat. Kai)</h2>
            <h3>Jack U, Skrillex, Diplo, Kai</h3>
            <h4>Skrillex and Diplo Present Jack U</h4>
          </div>
        </div>
        <div className="Card-right">
          <div className="Picture">
            <img
              className="Song"
              src="https://ukf.com/wp-content/uploads/2015/05/jack-u-selects.jpg"
            />
          </div>
          <div className="Detail">
            <h2>Mind (feat. Kai)</h2>
            <h3>Jack U, Skrillex, Diplo, Kai</h3>
            <h4>Skrillex and Diplo Present Jack U</h4>
          </div>
        </div>
      </div>

      <div className="Container">
        <div className="Card-left">
          <div className="Picture">
            <img
              className="Song"
              src="https://ukf.com/wp-content/uploads/2015/05/jack-u-selects.jpg"
            />
          </div>
          <div className="Detail">
            <h2>Mind (feat. Kai)</h2>
            <h3>Jack U, Skrillex, Diplo, Kai</h3>
            <h4>Skrillex and Diplo Present Jack U</h4>
          </div>
        </div>
        <div className="Card-right">
          <div className="Picture">
            <img
              className="Song"
              src="https://ukf.com/wp-content/uploads/2015/05/jack-u-selects.jpg"
            />
          </div>
          <div className="Detail">
            <h2>Mind (feat. Kai)</h2>
            <h3>Jack U, Skrillex, Diplo, Kai</h3>
            <h4>Skrillex and Diplo Present Jack U</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
