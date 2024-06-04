export default function Item({item}) {
    let {name, quantity, category} = item
 
    const itemStyle = "flex flex-col p-2 mb-4 bg-blue-800 text-white rounded-md shadow-lg";
    const titleStyle = "text-lg font-bold";
    const textStyle = "text-white-900";
 
    return(
        <div>
            <ul className={itemStyle} style ={{ width: "300px"}}>
                <li className={titleStyle}>{name}</li>
                <li  className={textStyle}>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}