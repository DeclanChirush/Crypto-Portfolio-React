import axios from "axios";

const FLASK_API = 'http://127.0.0.1:5000/crypto-currency';

class CurrencyService {

    checkPing() {
        return axios.get(FLASK_API + '/');
    }

    getPrediction() {
        return axios.get(FLASK_API + '/predict')
    }

    getPredictionByCurrency(currency) {
        return axios.get(FLASK_API + '/predict/' + currency)
    }

    getPredictionByCurrencyAction(currency, action) {
        return axios.get(FLASK_API + '/predict/' + currency + '/' + action)
    }
}

export default new CurrencyService();
