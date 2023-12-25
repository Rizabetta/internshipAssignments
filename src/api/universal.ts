import axios from "axios";

export enum Methods {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

const universal = async (method: Methods, path = "", element = {}) => {
  try {
    const res = await axios({
      method: method,
      url: `https://jsonplaceholder.typicode.com/posts/${path}`,
      data: element,
    });
    return res;
  } catch (error) {
    throw new Error("F to fetch data");
  }
};

export const requests = { universal };
