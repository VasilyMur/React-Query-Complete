import { useQuery } from "@tanstack/react-query";
import { getCars } from "./api/cars";

export default function CarsPageTwo() {
  const carsQuery = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  })

  if (carsQuery.status === "loading") return <h1>Loading...</h1>
  if (carsQuery.status === "error") {
    return <h1>{carsQuery.error}</h1>
  }

  console.log(' query page 2 > ', carsQuery.fetchStatus)

  return (
    <div>
      <h1>Cars Page 2</h1>
      <ol>
        {carsQuery?.data?.map(car => (
          <li key={car.id}>{car.model}</li>
        ))}
      </ol>
    </div>
  )
}
