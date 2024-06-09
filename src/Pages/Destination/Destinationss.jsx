const Destinationss =({image, name, description,groupprice,individualprice}) =>{
    return (
      <div className="dest-container">
        <div className="destination-card">
          <div className="destination-image">
            <img className="img" src={image}></img>
          </div>

          <div className="destination-detail">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className="prices">
            <p>{groupprice}</p>
            <p>{individualprice}</p>
          </div>
          <button className="destination-button">Learn More &#8594;</button>
        </div>
      </div>
    );
}
export default Destinationss;