import "./App.css";

function CreatePlaylist() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-wrapper">
          <h1>Create Playlist</h1>
          <form>
            <label>
              <p>Title</p>
              <input type="text" />
            </label>
            <label>
              <p>Description</p>
              <input type="text" />
            </label>
            <div>
              <button type="submit">Add Playlist</button>
            </div>
          </form>
        </div>
        );
      </header>
    </div>
  );
}

export default CreatePlaylist;
