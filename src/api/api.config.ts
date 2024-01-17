import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

export enum Methods {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

const makeApiRequest = async (method: Methods, path: string, data = {}) => {
  try {
    const res = await axios({
      method: method,
      url: `${url}${path}`,
      data: data,
    });
    return res;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const requests = { makeApiRequest };
