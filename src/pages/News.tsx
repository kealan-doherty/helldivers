import NavBar from "../components/NavBar";
import NewsMessage from "../components/NewsMessage";

const News = () => {
    return(
        <>
            <NavBar/>
            
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