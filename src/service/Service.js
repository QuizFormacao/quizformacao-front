import HttpHelper from "./HttpHelper";

const Service = function () {
    const sessionStorageKey = 'user';

    this.signup = (data) => {
        return HttpHelper.put('user', data);
    }

    this.login = (login, password) => {
        return HttpHelper.login(login, password).then((json) => {
            if(json.auth) {
                sessionStorage.setItem(sessionStorageKey, JSON.stringify(json));
            }
            return json;
        });
    }

    this.logout = () => {
        sessionStorage.removeItem(sessionStorageKey);
        //TODO: Criar logout backend
    }

    this.getUser = () => {
        return JSON.parse(sessionStorage.getItem(sessionStorageKey)) || {token: null};
    }
}

export default new Service();