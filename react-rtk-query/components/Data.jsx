import { useGetAllProductsQuery } from "../features/apiSlice";

const Data = () => {
  const { data } = useGetAllProductsQuery();

  console.log(data);

  return (
    <div style={{color: '#fff'}}>
        Data:
    </div>
  )
}

export default Data;