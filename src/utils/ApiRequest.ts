import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  POLYGON_BASE_URL,
  POLYGON_API_URL,
  POLYGON_API_KEY,
} from '@env';

class ApiRequest {
  private path: string;
  private client: AxiosInstance;

  private baseURL = POLYGON_BASE_URL;
  private apiURL = POLYGON_API_URL;
  private apiKey = POLYGON_API_KEY;

  private headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  private queries: Record<string, string> = {};

  constructor(
    path: string
  ) {
    this.path = path;
    this.client = axios.create({
      baseURL: `${this.baseURL}${this.apiURL}`,
      params: { apiKey: this.apiKey },
      timeout: 2000,
    });

    this.client.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  public addHeader(name: string, value: string): this {
    this.headers[name] = value;
    return this;
  }

  public addQuery(name: string, value: string): this {
    this.queries[name] = value;
    return this;
  }

  private applyCustomConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...config,
      headers: {
        ...this.headers,
        ...(config?.headers || {}),
      },
      params: {
        ...this.queries,
        ...(config?.params || {}),
      },
    };
  }


  private handleSuccess<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  private handleError(error: any) {
    // Customize error handling here
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }

  public async GET<T>(config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(this.path, this.applyCustomConfig(config));
    return response as T;
  }

  public async POST<T>(data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(this.path, data, this.applyCustomConfig(config));
    return response as T;
  }

  public async PUT<T>(data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(this.path, data, this.applyCustomConfig(config));
    return response as T;
  }

  public async DELETE<T>(config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(this.path, this.applyCustomConfig(config));
    return response as T;
  }
}

export default ApiRequest;
