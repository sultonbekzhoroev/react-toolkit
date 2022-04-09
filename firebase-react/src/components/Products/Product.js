import { useState, useContext } from "react";
import { CardContext } from "../../context/GeneralCards";
import * as actions from "../../context/actions";

function Product({ id, data }) {
  const [qqt, setQtt] = useState(0);
  const { dispatcher } = useContext(CardContext);

  const handlerAddToCard = () => {
    dispatcher({
      type: actions.ADDTOCARD,
      payload: { ...data, id: id, qqt: qqt },
    });
  };
  return (
    <>
      <div>
        <h2>{data.name}</h2>
        <img src={data.img} alt="jfkj" width="150px" />
        <h3>{data.price}</h3>
        <button onClick={() => setQtt((prev) => prev + 1)}>+</button>
        <span>{qqt}</span>
        <button onClick={() => setQtt((prev) => prev - 1)}>-</button>
        <button onClick={() => handlerAddToCard()}>Add to Card</button>
      </div>
    </>
  );
}

export default Product;
