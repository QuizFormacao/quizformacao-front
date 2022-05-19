export default class HttpHelper {

    static get(path){
        return this._genericFetch('GET', path, null);
    }

    static post(path, data){
        return this._genericFetch('POST', path, data);
    }

    static login(login, password){
        return this._genericFetch('POST', 'user/login', {
            email: login,
            password: password,
        });
    }

    static put(path, data){
        return this._genericFetch('PUT', path, data);
    }

    static _genericFetch(method, path, data){
        let init = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if(data) init["body"] = JSON.stringify(data);
        return fetch(process.env.REACT_APP_SERVER_URL+'/'+path, init)
            .then(response => {
                if(response.ok || response.status === 200){
                    return response.json();
                }else{
                    throw new Error('Request failed with code '+response.status);
                }
            });
    }
}
