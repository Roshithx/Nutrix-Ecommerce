import axios from "axios";
import commonAPI from "./CommonApi";
import SERVER_URL from "./Server";

export const registerAPI = async (reqBody) => {
  try {
    const response = await commonAPI("POST", `${SERVER_URL}/register`, reqBody);
    return response; // Return the response so it can be handled by the caller
  } catch (error) {
    // Optionally, you could log the error here or handle it further if needed
    console.error("Error in registerAPI:", error);
    throw error; // Rethrow the error so it can be caught by the calling function
  }
};

export const loginAPI=async(reqBody)=>{
  try{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
  }catch(er){
    console.log(er);
    
  }
}