import "./Home.css";
import Reel from "./Reel";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        {/* Twitter Profile Card */}
        <div className="col-md-4 profile align-self-center pt-3">
          <div className="card">
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/70467024_231718311135637_4297899719281082368_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nXiSKaFoFfwAX_Gvw2o&tn=RL-ENmwJ72XxvLvi&_nc_ht=scontent-lga3-1.xx&oh=00_AT-oWraVnReLpfELpiwN5f0c576Yqyc6E6kVA2-HQCWv6Q&oe=622CF858"
              className="card-img-top profile-img rounded-circle mx-auto"
              alt="logo"
            />
            <div className="card-body">
              <h3 className="card-title text-center">Christina G. Chin</h3>
              <p className="card-text">
                Undergraduate Student at Fairleigh Dickinson studying Cinematography. I've worked on numerous amounts of thesis with roles including, director, camera assistant, and cinematographer.
                You can view my{" "}
                <a href="https://www.imdb.com/name/nm12534273/?ref_=ttfc_fc_cr32" target="_blank">
                  IMDb
                </a>{" "}
                page for more of my work
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-8 pt-5 align-self-center">
          <Reel />
        </div>
      </div>
    </div>
  );
}

export default Home;
