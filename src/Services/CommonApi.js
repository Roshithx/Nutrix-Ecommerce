import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
  };

  try {
    const response = await axios(reqConfig);
    return response;
  } catch (error) {
    // Check if the error has a response property (from Axios)
    if (error.response) {
      return error.response; // Return the response object with status and data
    } else {
      // Return a custom error object if no response is available
      return {
        status: 500,
        data: { message: "An unknown error occurred" }
      };
    }
  }
};

export default commonAPI;
