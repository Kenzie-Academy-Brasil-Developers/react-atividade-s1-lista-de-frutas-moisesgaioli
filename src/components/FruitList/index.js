import "./styles.css";


function FruitList ({ fruits }) {
    
    return (
        <div>
            <ul className="list">
                {fruits.map((item, index) => <li key={index}>{item.name}</li> )}
            </ul>
        </div>
    )
}

export default FruitList;