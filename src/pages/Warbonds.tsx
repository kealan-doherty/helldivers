import NavBar from "../components/NavBar";
import freedomsFlame from './../assets/freedoms flame.jpg';
import ChemicalAgents from './../assets/chemical agents.png';
import Helldivers from './../assets/Helldivers_Mobilize_Warbond_Cover.jpg';
import forceoflaw from './../assets/force of law.jpg';
import justice from './../assets/borderline justice.jpg';
import './warbonds.css';

const Warbonds = () => {
    return(
        <>
            <NavBar/>

            <div className="container">

                <h1 className = 'welcome'>WARBONDS</h1>

            </div>

            <div className='container'> 

                <p className="welcome">
                    Welcome to the Warbonds Page Helldiver here you will find a basic break down of all of the Warbonds avialable to you in game
                      
                </p>

            </div>


            <div className ='imgcontainer'>
                <h1 className="free">
                    FREE WARBONDS
                </h1>
            </div>

            <div className="imgcontainer">
                <h1 className="mobilizeHeader"> 
                    Helldivers Mobilize
                </h1>
            </div>

            <div className ='imgcontainer'>
                <img src ={Helldivers} className='mobilize' />
            </div>


            <div className="imgcontainer">
                <h1 className='premium'>
                    PREMIUM WARBONDS
                </h1>
            </div>


            <div className='imgcontainer'>
                 <h1 className='freedomHeader'>
                    Freedom's Flame 
                </h1>

                
                <h1 className="chemicalHeader">
                    Chemical Agents
                 </h1>

            </div>

            <div className="imgcontainer">
                <img src = {freedomsFlame} className="freedomflame"/>

                <img src={ChemicalAgents} className="chemicalAgents" />
            </div>

            <div className="imgcontainer" >
                <h1 className="forceHeader">
                    Force of Law
                </h1>
            </div>

            <div className="imgcontainer" >
                <h1 className="justiceHeader">
                    Borderline Justice
                </h1>
            </div>

            <div className='imgcontainer'>
                <img src ={forceoflaw} className ='forceoflaw' />
                <img src ={justice} className ='justice' />

            </div>

           
        </>
        
        

        
    )
}


export default Warbonds;