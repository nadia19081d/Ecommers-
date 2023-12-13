import { useEffect, useState } from "react";
import { getItems } from "../../services/itemServices";
import { Link } from 'react-router-dom'
import "./Items.scss";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getItems();
        console.log(response.data);
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.log("el error se producjo por ", error);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <h1>Loaging...</h1>;
  } else {
    return (
    <section className="items-container">
      <div className="items">
        {items.map((item) => (
         <Link to={`/item/${item.id}`} key={item.id}>
          <div  className="item">
            <img src={item.image} />
            <h3>{item.product_name}</h3>
            <p>{item.price}</p>
          </div>
         </Link>
        ))}
      </div>
    </section>
    )
  }
}
