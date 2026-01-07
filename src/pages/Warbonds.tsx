import NavBar from "../components/NavBar";
import freedomsFlame from './../assets/freedoms flame.jpg';
import ChemicalAgents from './../assets/chemical agents.png';
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

           
        </>
        
        

        
    )
}


export default Warbonds;