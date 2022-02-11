import "./Reel.css";

function Reel() {
  return (
    <div>
      <h1 className="text-center">Christina Chin</h1>
      <h2 className="text-center">Reel</h2>
      <div className="d-flex justify-content-around">
        <div>
          <iframe className="mr-5" src="https://www.youtube.com/embed/EU0LjkAUQ6E"></iframe>
        </div>
        <div>
          <p className="font-weight-bold">SPIDER-MAN: Across The Spider-verse Trailer (2022) </p>
          <p>Into The Spider-verse 2 is a film where Christina was the lead cinematographer. She was on camera on almost all the shots and worked directly with the directors</p>
        </div>
      </div>
    </div>
  );
}

export default Reel;
