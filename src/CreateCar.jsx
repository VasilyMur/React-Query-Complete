import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCar } from "./api/cars";
import Car from "./Car";
import { useRef } from "react";

 
// eslint-disable-next-line react/prop-types
export default function CreateCar({ setCurrentPage }) {

  const queryClient = useQueryClient();

  const brandRef = useRef();
  const modelRef = useRef();
  const yearRef = useRef();

  const createCarMutation = useMutation({
    mutationFn: createCar,
    onSuccess: (data) => {
      queryClient.setQueryData(['cars'], (oldCars) => {
        console.log('oldCars >> ', oldCars);
        return [...oldCars, data]
      })
      // queryClient.invalidateQueries({
      //   queryKey: ['cars'],
      //   exact: true
      // })
      setCurrentPage(<Car id={data.id}/>)
    }
  });

  console.log(' Create Car > ')

  function handleSubmit(e) {
    e.preventDefault();

    const newCar = {
      brand: brandRef.current.value,
      model: modelRef.current.value,
      year: Number(yearRef.current.value),
      body: '',
      dealerId: 2,
      id: String(Date.now())
    }

    createCarMutation.mutate(newCar);
    e.target.reset();
  }

  return (
    <div>
      {createCarMutation.isError && createCarMutation.error.message}
      <h1>Создать Автомобиль</h1>
      <form onSubmit={handleSubmit}>
        <div className="formField">
          <label htmlFor="brand">Brand</label>
          <input id="brand" ref={brandRef}/>
        </div>
        <div className="formField">
          <label htmlFor="model">Model</label>
          <input id="model" ref={modelRef}/>
        </div>
        <div className="formField">
          <label htmlFor="year">Year</label>
          <input id="year" ref={yearRef}/>
        </div>
        <button 
          className="button"
          disabled={createCarMutation.isPending}
        >
          {createCarMutation.isPending ? 'Загрузка...' : 'Создать'}
        </button>
      </form>
      
    </div>
  )
}