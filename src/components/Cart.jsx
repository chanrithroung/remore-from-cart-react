import Item from "./Items";
import { useState } from "react";
import ItemAdded from "../cart/Data";
const Cart = () => {
    const [item, setItem] = useState(ItemAdded);
    const getID = (id) => setItem(item.filter(item=>item.id !== id));
    return <div className="cart">
        {item.map(item => <Item {...item} getId={getID} key={item.id} ></Item>)}
    </div>
}


export default Cart;