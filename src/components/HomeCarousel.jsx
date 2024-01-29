import BannerMac from   "../assets/products/mac/videoBanner.mp4"
import BanneriPhone from "../assets/products/iPhone/video.mp4";
import  BanneriPad  from "../assets/products/iPad/iPadBanner.mp4";
import  BanneriWatch  from "../assets/products/iWatch/iWatchBanner_2.webm";
import  BannerairPods  from "../assets/products/airPods/video.mp4";

export const HomeCarousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <video src={BannerMac} muted autoPlay loop></video>
                    </div>
                    <div id="banneriPhone" className="carousel-item" >
                        <video src={BanneriPhone} muted autoPlay loop></video>
                    </div>
                    <div className="carousel-item" >
                        <video src={BanneriPad} muted autoPlay loop></video>
                    </div>
                    <div className="carousel-item" >
                        <video src={BanneriWatch} muted autoPlay loop></video>
                    </div>
                    <div className="carousel-item" >
                        <video src={BannerairPods} muted autoPlay loop alt="airPods"> </video>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
