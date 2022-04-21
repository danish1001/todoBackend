import API from "./API";
import setAuthToken from "../utils/SetAuthToken";

class ToDoService {

    static async getToDOItems() {
        
        const url = "/api/todo/get";

        try {

            const token = localStorage.getItem("token");
            setAuthToken(token);
            let res = await API.get(url);
            return res;

        } catch (error) {

            console.log("error found in getToDoItems Service: " + error.message);
            throw new Error(error);

        }

    }

    static async postToDoItem(e) {

        const url = "/api/todo/add";

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const payload = {
            "todoItem": e
        }

        try {

            const res = await API.post(url, payload, config)
            return res;
        
        } catch (error) {
            
            console.log("error found in postToDoItem Service: " + error.message);
            throw new Error(error);
            
        }
        
    }

    static async postLoginDetails(payload) {

        const url = "/api/auth/login";

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {

            const res = await API.post(url, payload, config);
            return res;
        
        } catch (error) {

            console.log("Error found in postLoginDetails Service: " + error.message)
            throw new Error(error);
            
        }
        
    }

    static async deleteItem(id) {
        const url = "/api/todo/delete/";

        try {

            return await API.delete(url, id);
            
        } catch (error) {

            console.log("error found in deleteItem Service: " + error.message);
            throw new Error(error);

        }
    }

    static async getCurrentUser() {
        try {

            const url = "api/auth/getUserByToken";
            const token = localStorage.getItem("token");
            setAuthToken(token);
            const user = await API.getCurrentUser(url);
            
            return user;

        } catch (error) {

            console.log("error found in getCurrentUser Service: " + error.message);
            throw new Error(error);
        }
    }

}

export default ToDoService;