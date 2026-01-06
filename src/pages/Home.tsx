import NavBar from "../components/NavBar";
import './Home.css'
import img from './../assets/Helldivers_2_Header_copy.png'
import CampaignLink from "../components/campaignLink";
import GitHubLink from "../components/GithubLink";
import NewsLink from "../components/NewsLink";
import WarbondsLink from "../components/WarbondLink";
import img2 from './../assets/helldivers propoganda.jpg';

const Home = () => {
    return(
        <>
            <NavBar />
            <div className="container">
                <h1 className='header'>
                    Welcome to the HellDivers Hub
                </h1>
            </div>

            <div className="container">
                <img src = {img2} className='img3' />

                <img src = {img} className="img1" />

                <img src = {img2} className='img2' />
            </div>


            <p className='welcome'>
                Here you will be able to find real time info on current liberation campagins,
                Major Orders, and all helldivers news. 

                We are able to achieve this via the Helldivers2 API which allows us to 
                pull the current info on the fight against tryanny for you when you aren't 
                actively fighting the enemies of manged democracy
            </p>


            <div className="container">
                <h2 className='header2'>
                    Site Links
                </h2>
            </div>


            <div className="container">
                <ul>
                    <li>
                        <GitHubLink />
                    </li>

                    <li>
                        <CampaignLink />
                    </li>

                    <li>
                        <NewsLink />
                    </li>

                    <li>
                        <WarbondsLink />
                    </li>
                </ul>
            </div>
            <div className="container"/>
        </>
    )
}


export default Home;