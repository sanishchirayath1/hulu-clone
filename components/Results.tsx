import Thumbnail from './Thumbnail';
import ResultStyle from '../styles/Results.module.scss';


function Results({ results }) {
    return (
        <div className={ResultStyle.container}>
            {results.map((result) => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    )
}

export default Results
