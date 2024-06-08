import "./banner.css";
const Bannerpart = ({maintitle, description}) =>{
    return(
        <section className="banner-part">
            <h2>{maintitle}</h2>
            <p>{description}</p>

        </section>
    )
}
export default Bannerpart;