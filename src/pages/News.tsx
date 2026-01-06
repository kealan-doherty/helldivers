import NavBar from "../components/NavBar";
import NewsMessage from "../components/NewsMessage";
import img from '../assets/Helldivers-2.png';
import './News.css';

const News = () => {
    return(
        <>
            <NavBar/>
            <div className = 'logocontainer'>
                <img src = {img} className= "logo" />
            </div>
            
            <div>
                <h1 className="header">Welcome to the News page </h1>
            </div>

            <div>
                <p className = 'welcome'>This page will display the most update to date news and Major Orders. Allowing our heroic Helldivers and Citizens to stay up to data 
                    on the fight for Managed Democracy. 
                </p>
            </div>

            <NewsMessage />
        </>
    )
}

export default News;