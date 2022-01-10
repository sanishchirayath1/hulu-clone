import Thumbnail from './Thumbnail';
import ResultStyle from '../styles/Results.module.scss';
import FlipMove from 'react-flip-move';


function Results({ results }) {
    return (
        <FlipMove className={ResultStyle.container}>
            {results.map((result) => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </FlipMove>
    )
}

export default Results
