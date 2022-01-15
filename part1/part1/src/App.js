import React from 'react'
import CV from './CV'
import Store from "./Store";

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
    var products = ["cartofi prajiti", "carnati", "suc"]
    return (
        <div>
            <Store menuList={products} />
        </div>
    )
}

export default App
