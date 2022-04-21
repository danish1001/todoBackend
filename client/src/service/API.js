import axios from "axios";

class API {

    static async axiosMethod(method, url, payload, config) {
        try {
            let res = axios({
                method: method,
                url: url,
                data: payload,
            })
        } catch (error) {
            console.log("error found in axiosMethod in API: " + error.message);
            throw new Error(error);
        }
    }

    static async get(url) {
        try {
            let res = await axios.get(url);
            return res.data;
        } catch (error) {
            console.log("error found in get api: " + error.message);
            throw new Error(error);
    
        }
    }

    static async post(url, payload, config) {
        try {
            const res = await axios.post(url, payload, config);
            console.log(res);
            return res;
        } catch (error) {
            console.log("error in post api: " + error.message);
            throw new Error(error);
        }
    }

    static async delete(url, id) {

        try {
            return await axios.delete(`${url}${id}`);
        } catch (error) {
            console.log("error found in delete api: " + error.message);
            throw new Error(error);
        }
    }

    static async getCurrentUser(url) {
        try {

            const user = await axios.get(url);
            return user;

        } catch (error) {

            console.log("error found in getCurrentUser API: " + error.message);
            throw new Error(error);

        }
    }

}

export default API;

