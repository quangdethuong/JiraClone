import Axios from "axios"
import { DOMAIN_CYBERBUG, TOKEN } from "../util/constants/settingSystem"

export class BaseService {
    //put json ve login
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_CYBERBUG}/${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_CYBERBUG}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }

    get = (url, model) => {
        return Axios({
            url: `${DOMAIN_CYBERBUG}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }

    delete = (url, model) => {
        return Axios({
            url: `${DOMAIN_CYBERBUG}/${url}`,
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
}