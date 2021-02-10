import axios, { AxiosRequestConfig } from 'axios'
import { env } from '../env'

const request = async (params: AxiosRequestConfig) => {
    const secondsInMinute = 60;
    const millisecondsInSecond = 1000;
    const timeout = secondsInMinute * millisecondsInSecond;

    params.timeout = timeout;

    const headers = {
        ...params.headers,
        'Content-Type': 'application/json',
    };


    params.headers = headers;

    return axios({
        ...params,
    }).then(
        event => event,
        error => {
            throw error;
        },
    );
};


export const get = (props: AxiosRequestConfig, baseURL?: string) =>
    request({
        baseURL: baseURL || env.urlServerHttp,
        ...props,
        method: 'GET',
    });


