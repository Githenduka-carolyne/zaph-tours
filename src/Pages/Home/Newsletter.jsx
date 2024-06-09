
const Newsletter = ()=>{
    return (
      <section className="newsinfo-subscription">
       
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