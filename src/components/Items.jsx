import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

const Item = ({id, image, name, price, getId}) =>  {
    const Remove = () => {
        getId(id);
    }
    return <div className="item">
        <figure>
            <img src={image} alt="Cart item" />
        </figure>
        <p className="item-name">{name}</p>
        <p>{price}</p>
        <span className="remove" onClick={Remove} >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </span>
    </div>
}

export default Item