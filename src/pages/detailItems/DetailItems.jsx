import { useEffect, useState } from 'react'
import { getItem } from '../../services/itemServices'
import { useParams } from 'react-router-dom'

export default function DetailItems() {

    const [item , setItem] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItem(id)
            setItem(data.data)
            console.log(data);
            setLoading(false)
            } catch (error) {
                console.log("Sucedio un error", error);
            }
        }
        fetchData()
    }, [])

  if (loading) {
    return ( <h1>Loading</h1>)
  } else {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.image} alt="" />
                </div>
    
                <div className="col">
                    <h3>{item.product_name}</h3>
                    <p>{item.brand}</p>
                    <p> {item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.category}</p>
                </div>
            </div>
        </div>
        </>
      )
  }
}