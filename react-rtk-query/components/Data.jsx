import { useGetAllProductsQuery, useGetProductQuery } from "../features/apiSlice";

const Data = () => {
  const { data, isError, error, isLoading } = useGetAllProductsQuery();
  // const data = useGetProductQuery('apple');

  if(isLoading) return <h2>Loading...</h2>

  return (
    <div style={{color: '#fff'}}>
        Data:
        <ul>
        {
          data.products.map(ele => (
            <li key={ele.id}>
              {ele.title}
            </li>
          ))
        }
        </ul>
    </div>
  )
}

export default Data;