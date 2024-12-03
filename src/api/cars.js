import axios from "axios";

export function getCars() {
  return axios
    .get("http://localhost:3004/cars")
    .then(res => res.data)
}

export function getCar(id) {
  return axios
    .get(`http://localhost:3004/cars/${id}`)
    .then(res => res.data)
}

export function createCar({ brand, model, year, body, dealerId, id }) {
  return axios
    .post(`http://localhost:3004/cars`, 
      { brand, model, year, body, dealerId, id })
    .then(res => res.data)
}


