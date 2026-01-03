import LiberationCampaign from "../components/LiberationCampaign";
import NavBar from "../components/NavBar";
import img1 from './../assets/galacticwar-helldivers2.jpg';
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
                <img src ={img1} className="img1" />
            </div>

            
            <p className="statement">
                Here you will find up to date info on the current state of the of the Galatic War in the most imporant Liberation campaigns
            </p>
          

            <LiberationCampaign />
        </>
    )
}

export default Liberation;