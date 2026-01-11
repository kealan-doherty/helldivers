import { useQuery } from "@tanstack/react-query";
import img from './../assets/helldivers.png';
import './NewsMessage.css';



function NewsMessage() {
    const {data: comments, isLoading, error} = useQuery({
        queryFn: () => 
            fetch('https://helldiverstrainingmanual.com/api/v1/war/news').then(
                (res) => res.json()
            ),
            queryKey: ['comments'],  
    });

    if (isLoading) {
        return <h2> Loading...</h2>
    }

    if (error){
        return <div className="error"> Error: error fetching current News </div>
    }

    return(
        <>
        {comments.map((comment: any) => (
            <div className = 'newsMessage' >
                <ul className="newsBanner">
                    <li>
                        <img src = {img} className ='bannerImg1' />
                    </li>

                    <li className ='alert'>
                        MAJOR NEWS ALERT 
                    </li>

                    <li>
                        <img src = {img} className ='bannerImg2' />
                    </li>
                </ul>
                <div> 
                     {comment.message}
                </div>
            </div>
        ))};
        </>
    )

}


export default NewsMessage;