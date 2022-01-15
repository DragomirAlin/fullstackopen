import React from 'react'

const Store = (props) => {
    let menuList = props.menuList;

    let products = [];
    let ul = document.getElementById("productList");
    menuList.forEach(product => {
        products.push(<li key={product}>{product}</li>)
    })

    return (
        <div>
            Menu
            <ul>
                {products}
            </ul>
        </div>
    )
}

export default Store;
