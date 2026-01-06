import './LiberationCampaign.css';
import botImg from './../assets/automotons.png';
import bugImg from './../assets/terminds.png';
import squidImg from './../assets/the-illuminate.jpg';
import { useQuery } from '@tanstack/react-query';


function LiberationCampaign() {
    const {data: comments, isLoading, error} = useQuery({
        queryFn: () =>
            fetch('https://helldiverstrainingmanual.com/api/v1/war/campaign').then(
                (res) => res.json()
            ),
        queryKey: ['comments'],
    });

    if (isLoading){
        return <h2> Loading... </h2>;
    }

    if (error){
        return <div className='error' > Error: Error fetching liberation data</div>;
    }


    return(
        <>
           {comments.map((comment: any ) => (
                <div key ={comment.name} className='libcontainer'>
                    <h1 className='planetName'> {comment.name} </h1>

                    {comment.faction == 'Terminids' ? <img src ={bugImg} className='bugsImg'></img> : null}

                    {comment.faction == 'Automatons' ? <img src ={botImg} className='botImg'></img> : null}

                    {comment.faction == 'Illuminates' ? <img src ={squidImg} className='squidImg'></img> : null}

                    <ul className = 'libList'>

                        <li className = 'listItem'> Player Count: {comment.players} </li>

                        <li className= 'listItem'> Liberation Percentage: {comment.percentage} </li>
                        
                    </ul>

                </div>

           ))};
        </>
    );
};

export default LiberationCampaign;