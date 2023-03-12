import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


export class ApiClient {

    private token = '';

    constructor(token: string) {
        this.token = token;
    }

    public async Get(endpoint = "", params?: object): Promise<any> {
        try {
            const client = this.CreateApiClient();
            const response = await client.get(endpoint, { params: params });
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }

    public async Post(endpoint = "", data?: object): Promise<any> {
        try {
            const client = this.CreateApiClient();
            const response = await client.post(endpoint, data);
            return response.data
        } catch(error) {
            console.log(error);
        }
    }

    public async Update(endpoint = "", data?: object): Promise<any> {
        try {
            const client = this.CreateApiClient();
            const response = await client.put(endpoint, data);
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }

    public async Delete(endpoint = "", data?: object): Promise<any> {
        try {
            const client = this.CreateApiClient();
            const response = await client.delete(endpoint, data);
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }

    private CreateApiClient(): AxiosInstance {
        const config: AxiosRequestConfig = {
            baseURL: process.env.VUE_APP_API_URL,
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${ (this.token) ? this.token : '' }`
            },
        }
        return axios.create(config);
    }
}