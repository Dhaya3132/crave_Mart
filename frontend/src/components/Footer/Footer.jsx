import { assets } from "../../assets/frontend_assets/assets"

const Footer = () => {
    return (
        <div id="footer" className="mt-10 bg-black p-10 text-white rounded-sm mb-10">
            <div id="footer_content" className="flex md:flex-row flex-col justify-evenly w-full md:gap-0 gap-10">
                <div id="leftPart">
                    <img src={assets.Logo} alt="logo" className="w-28 h-28 rounded-full" />
                    <p className="italic font-semibold text-sm mt-4">Best shop in town</p>
                    <div className="social-icons flex gap-4 mt-5">
                        <img src={assets.facebook_icon} alt="" className="w-7 h-7" />
                        <img src={assets.linkedin_icon} alt="" className="w-7 h-7" />
                        <img src={assets.twitter_icon} alt="" className="w-7 h-7" />
                    </div>
                </div>
                <div id="centerPart">
                    <h2 className="font-semibold text-xl">Company</h2>
                    <ul className="font-light text-sm mt-2 flex flex-col gap-1">
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Policy</li>
                    </ul>
                </div>
                <div id="rightPart">
                    <h2 className="font-semibold text-xl">Get in touch</h2>
                    <ul className="font-light text-sm mt-2 flex flex-col gap-1">
                        <li>+0 00012 1234-</li>
                        <li>contact@gmail.coms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer