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

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Counters = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    return (
        <div>
            {left}
            <Button text={"left1"} onClick={() => setLeft(left + 1)}/>
            <Button text={"right1"} onClick={() => setRight(right + 1)}/>

            {right}
        </div>
    )
}

const Order = () => {
    const [orders, setOrders] = useState({
        espresso: 0, cappuccino: 0
    })

    const addEspresso = () => {
        const newEspresso = {
            ...orders,
            espresso: orders.espresso + 1,
            // cappuccino: orders.cappuccino,
        }
        setOrders(newEspresso);
    }

    const addCappuccino = () => {
        const newCappuccino = {
            // espresso: orders.espresso,
            ...orders,
            cappuccino: orders.cappuccino + 1,
        }
        setOrders(newCappuccino);
    }

    return (
        <div>
            {orders.espresso}
            <Button text={"espresso"} onClick={addEspresso}/>
            <Button text={"cappuccino"} onClick={addCappuccino}/>
            {orders.cappuccino}
        </div>
    )
}

const App = () => {

    return (
        <div>
            <Order/>
        </div>
    )
}

export default App
