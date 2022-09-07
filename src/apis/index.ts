import { apiURL } from "../config";
import { UsersData } from "../types/responses";

// get users
const getUsers = (pageIndex: number, pageSize: number) => {
  return fetch(`${apiURL}/users/${pageIndex * pageSize}/next`, {
    method: 'GET',
  })
    .then((response: Response) => response.json())
    .then((data: UsersData) => data.users)
}

export {
  getUsers
}