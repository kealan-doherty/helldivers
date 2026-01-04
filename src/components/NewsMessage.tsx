import { useQuery } from "@tanstack/react-query";
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
            <div>
                <div className = 'newsMessage'> 
                    Major News Alert Hellidvers!: {comment.message}
                </div>
            </div>
        ))};
        </>
    )

}


export default NewsMessage;