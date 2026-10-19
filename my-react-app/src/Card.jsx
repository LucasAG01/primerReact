import profilePic from "./assets/pfp.jpeg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile Picture"></img>
      <h2 className="card-title">Lucas</h2>
      <p className="card-text">Quiero llegar a ser productivo</p>
    </div>
  );
}
export default Card;
