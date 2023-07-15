import { useGetAllProductsQuery, useGetProductQuery, useLazyGetAllProductsQuery } from "../features/apiSlice";

const Data = () => {
  const [trigger, result, lastPromiseInfo] = useLazyGetAllProductsQuery();
  const { data, isError, error, isLoading } = result;

  // const { data, isError, error, isLoading } = useGetAllProductsQuery();

  // const data = useGetProductQuery('apple');

  if(isLoading) return <h2>Loading...</h2>

  return (
    <div style={{color: '#fff'}}>
      <button style={{backgroundColor: 'red'}} onClick={() => {
        trigger()
      }}>
        Press Me
      </button>
        Data:
        <ul>
        {
          data?.products?.map(ele => (
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