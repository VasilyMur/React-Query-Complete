import axios from "axios"

export function getDealer(id) {
  return axios
    .get(`http://localhost:3004/dealers/${id}`)
    .then(res => res.data)
}