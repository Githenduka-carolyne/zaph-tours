
const Newsletter = ()=>{
    return (
      <section className="newsinfo-subscription">
        {/* <div className="background-image">
            <img className="img-bg" src={landscape2}></img>
        </div> */}
        <div className="newsinfo-textbox">
          <div className="news-details">
            <h4>
              Sign Up for Zaph Tours for weekely email updates on matters
              safaris and adventers.
            </h4>
          </div>

          <form className="form-input">
            <input type="text" placeholder="email address" required />
            <button className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </section>
    );
};
export default Newsletter;