import axios from "axios";

const FLASK_API = 'http://127.0.0.1:5000/crypto-currency';

class CurrencyService {

    checkPing() {
        return axios.get(FLASK_API + '/');
    }

    getPrediction() {
        return axios.get(FLASK_API + '/predict')
    }
}

export default new CurrencyService();
