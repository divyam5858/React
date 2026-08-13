import profilePic from '../assets/profile.jpeg'

function Card(){

return(
    <div className="card">
        <img className="card-image" src={profilePic} alt="image loadinggg..." />
        <h2>Divyashree Mallrapu</h2>
        <p>Im a software engineer</p>
    </div>
)
}

export default Card