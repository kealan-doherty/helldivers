import NavBar from "../components/NavBar";
import freedomsFlame from './../assets/freedoms flame.jpg';
import ChemicalAgents from './../assets/chemical agents.png';
import Helldivers from './../assets/Helldivers_Mobilize_Warbond_Cover.jpg';
import forceoflaw from './../assets/force of law.jpg';
import justice from './../assets/borderline justice.jpg';
import polar from './../assets/polar patriots.jpg';
import urban from './../assets/urban legends.jpg';
import cutting from './../assets/CUTTING_EDGE_PREMIUM_WARBOND.jpg';
import steeled from './../assets/steeled-veterans-warbond.jpg';
import viper from './../assets/viper commandos.jpg'
import truth from './../assets/truth-enforcers.jpg';
import demo from './../assets/democratic-detonation.jpg';
import masters from './../assets/mastersofcermony.jpg';
import dust from './../assets/dust devils.jpg';
import control from './../assets/control group.jpg';
import python from './../assets/python commandos.jpg';
import './warbonds.css';

const Warbonds = () => {
    return(
        <>
            <NavBar/>

            <div className="container">

                <h1 className = 'title'>WARBONDS</h1>

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

            <div className ='mobilize'>
                <img src ={Helldivers}  />
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
            
                <h1 className="justiceHeader">
                    Borderline Justice
                </h1>
            </div>

            <div className='forceoflaw'>
                <img src ={forceoflaw}/>

            </div>




            <div className ='imgcontainer'>
                <h1 className='urbanHeader'> 
                    Urban Legends
                </h1>

                <h1 className='polarHeader'>
                    Polar Patriots
                </h1>
            </div>

            <div className='imgcontainer'>
                <img src = {urban} className="urban" />
                <img src = {polar} className='polar' />
            </div>

            <div className="imgcontainer">
                <h1 className="steeledHeader">
                    Steeled Veterans
                </h1>

                <h1 className="cuttingHeader">
                    Cutting Edge
                </h1>
            </div>

            <div className="imgcontainer">
                <img src = {steeled} className = 'steeled' />

                <img src = {cutting} className='cuttingEdge' />
            </div>

            <div className="imgcontainer">
                <h1 className="viperHeader">
                    Viper Commandos
                </h1>

                <h1 className="truthHeader">
                    Truth Enforcers
                </h1>
            </div>

            <div className="imgcontainer">
                <img src = {viper} className="viper" />
                <img src = {truth} className='truth' />
            </div>


            <div className="imgcontainer">
                <h1 className="demoHeader">
                    Democratic Detonation
                </h1>

                <h1 className="mastersHeader">
                    Masters of Ceromony
                </h1>
            </div>

            <div className="imgcontainer">
                <img src = {demo} className="demo" />
                <img src = {masters} className="masters" />
            </div>

            <div className="imgcontainer">
                <h1 className ='dustHeader'>
                    Dust Devils
                </h1>

                <h1 className="controlHeader">
                    Control Group
                </h1>
            </div>

            <div className="imgcontainer">
                <img src = {dust} className="dust" />
                <img src = {control} className="control" />
            </div>

            <div className="imgcontainer">
                <h1 className="pythonHeader">
                    Python Commandos
                </h1>

                <h1 className="comingSoon">
                    Coming Soon Helldivers
                </h1>
            </div>

            <div className="imgcontainer">
                <img src ={python} className="python" />

            </div>

            <div className="imgcontainer">
                <h1 className = 'legend'>
                    LEGENDARY WARBONDS
                </h1>
            </div>


            <div className="imgcontainer">
                <h1 className="killHeader">
                    Kill Zone 
                </h1>

                <h1 className="haloHeader">
                    Halo ODST
                </h1>
            </div>


            <div className="imgcontainer">

            </div>

           
        </>
        
        

        
    )
}


export default Warbonds;