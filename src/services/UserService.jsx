import axios from "axios";
import Connection from "./connection.json"

const FLASK_API = Connection.localAddress + '/auth/';

class UserService{

    // User login
    login(username, password){
        return axios.post(FLASK_API + "login", {
            username,
            password
        }).then(response => {
            if(response.data){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    // User register
    register(fullName, email, contactNo, username, password){
        return axios.post(FLASK_API + "register", {
            fullName,
            email,
            contactNo,
            username,
            password
        });
    }

    // Get current user
    getCurrentUser() {
        return JSON.parse(sessionStorage.getItem('user'));
    }

    //Remove current user
    logout() {
        sessionStorage.removeItem("user");
        sessionStorage.clear();
    }

}

export default new UserService();