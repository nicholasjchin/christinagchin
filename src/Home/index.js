import "./Home.css";
import Reel from "../Reel";
// import Portfolio from "../Portfolio";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        {/* Twitter Profile Card */}
        <div className="col-md-3 profile align-self-center pt-3">
          <div className="card border-top-0 border-bottom-0 border-left-0 rounded-0">
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/70467024_231718311135637_4297899719281082368_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nXiSKaFoFfwAX_Gvw2o&tn=RL-ENmwJ72XxvLvi&_nc_ht=scontent-lga3-1.xx&oh=00_AT-oWraVnReLpfELpiwN5f0c576Yqyc6E6kVA2-HQCWv6Q&oe=622CF858"
              className="card-img-top profile-img rounded-circle mx-auto"
              alt="logo"
            />
            <div className="card-body">
            <ul className="nav flex-column">
              <li className="nav-item display-3 text-right">
                <a className="nav-link active" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link display-3 text-right" href="#">Reels</a>
              </li>
              <li className="nav-item">
                <a className="nav-link display-3 text-right" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link display-3 text-right" href="#">Contact</a>
              </li>
          </ul>
            </div>
          </div>
        </div>

        <div className="col-md-9 pt-5 align-self-center">
          <Reel />
          {/* <Portfolio /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
