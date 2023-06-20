import React from 'react'
import { useSelector } from 'react-redux';

const IcecreamView = () => {
  const numOfIceCreams = useSelector((state) => state.cake.numOfIceCreams);

  return (
    <div>
        <h2>
            Number of Ice Creams - {numOfIceCreams}
        </h2>
        <button>
            Order Ice Cream
        </button>
        <button>
            Restock Ice Creams
        </button>
    </div>
  )
}

export default IcecreamView;