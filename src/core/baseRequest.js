import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ 
    position    :   "top-right"
});
const  apiUrl   =   "https://osm.dzfullstack.com/api";

export default {
    get(url) {
        var link    =   apiUrl + url;
        return axios.get(link);
    },
    post(url, data) {
        var link    =   apiUrl + url;
        return axios.post(link, data);
    },
}