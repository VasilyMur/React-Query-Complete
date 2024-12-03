import { useState } from "react";
import CarsPageOne from './CarsPageOne'
import CarsPageTwo from './CarsPageTwo'
import Car from './Car'
import CreateCar from './CreateCar'


function AppExample() {
  const [currentPage, setCurrentPage] = useState(<CarsPageOne/>)


  return (
    <div className="wrap">
      <div className="controls">
        <button 
          className="button"
          onClick={() => setCurrentPage(<CarsPageOne/>)}
          >
            Страница 1
        </button>

        <button 
          className="button"
          onClick={() => setCurrentPage(<CarsPageTwo/>)}
          >
            Страница 2
        </button>

        <button 
          className="button"
          onClick={() => setCurrentPage(<Car id={2}/>)}
          >
            Автомобиль
        </button>

        <button 
          className="button"
          onClick={() => 
            setCurrentPage(<CreateCar setCurrentPage={setCurrentPage}/>)}
          >
            Создать Автомобиль
        </button>

      </div>

      {currentPage}
    </div>
  )
}


export default AppExample;
