import React, { useState } from 'react'
import { ordered, restocked } from './icecreamSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const IcecreamView = () => {
  const [value, setValue] = useState(1);

  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useAppDispatch();

  return (
    <div>
        <h2>
            Number of Ice Creams - {numOfIceCreams}
        </h2>
        <button onClick={() => {
          dispatch(ordered())
        }}>
            Order Ice Cream
        </button>
        <input type='text' value={value} onChange={e => setValue(parseInt(e.target.value))} />
        <button onClick={() => {
          dispatch(restocked(value))
        }}>
            Restock Ice Creams
        </button>
    </div>
  )
}

export default IcecreamView;