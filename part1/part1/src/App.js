import CV from './CV'
import Store from "./Store";
import React, {useState} from 'react'

const Hello = (props) => {
    const {name, age} = props;
    const bornYear = () => {
        return new Date().getFullYear() - age;
    }

    const getPhoto = () => {
        return "This is a photo";
    }

    const buildCV = ({name, age}) => {
        return "CV " + name + " - " + age;
    }

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were probably born in {bornYear()}</p>
            <div>
                {getPhoto()}
            </div>
            <div>
                {buildCV("As", 11)}
            </div>
        </div>
    )
}


const App = (props) => {
    const [counter, setCounter] = useState(0)

    setTimeout(
        () => setCounter(counter + 1),
        1000
    )
    console.log('rendering...', counter)


    return (
        <div>
            {counter}

            <div>Hello World</div>

        </div>
    )
}

export default App
