import logo from "./logo.svg";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Twitter Profile Card */}
        <div className="col-4 profile">
          <div className="card">
            <img src={logo} className="card-img-top" alt="logo" />
            <div className="card-body">
              <h5 className="card-title">Christina Chin</h5>
              <p className="card-text">Undergraduate Student at Farleigh Dickinson studying Cinematography</p>
              <a href="#" className="btn btn-primary">
                IMDB
              </a>
            </div>
          </div>
        </div>

        <div className="col-4"></div>

        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Home;
