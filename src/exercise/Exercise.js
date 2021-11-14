// Question 6C
import Bonus from "../Bonus/Bonus";

// Question 1A, Question 3D
function Exercise({good = `Great`, bad = `Not Great`}) {
    // Question 2A 
    return (
        <div>
            {/* Question 3C */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            <Bonus/>
        </div>
    )
}





export default Exercise;