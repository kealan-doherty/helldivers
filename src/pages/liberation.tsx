import LiberationCampaign from "../components/LiberationCampaign";
import NavBar from "../components/NavBar";
import img1 from './../assets/galacticwar-helldivers2.jpg';
import img2 from './../assets/warbondpageimg.png';
import img3 from './../assets/libimg3.jpg';
import './liberation.css';

const Liberation = () =>{
    return(
        


        <>
            <NavBar />

            <div className = 'container'>
                <h1 className="header">
                    Liberations 
                </h1>
            </div>

            <div className="container">
                <img src = {img2} className='libimg2' />
                <img src ={img1} className="libimg1" />
                <img src = {img3} className="libimg3" />
            </div>

            <div>
                <p className="statement">
                    Here you will find up to date info on the current state of the of the Galatic War in the most imporant Liberation campaigns
                </p>
            </div>

            <div>
                <h1 className = 'header '> Each Planet will contain the following infomation </h1>
            </div>


            <div>
                <ul className='planetInfo'>
                    <li> Player Count </li>
                    <li> Liberation rate </li>
                    <li> Planet Health </li>
                </ul>
            </div>
            <LiberationCampaign />
        </>
    )
}

export default Liberation;