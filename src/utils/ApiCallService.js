import axios from 'axios';

class ApiCallService {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
    });

    // Initialize headers
    this.headers = {
      'Content-Type': 'application/json',
    };

    // You can add default headers or interceptors here if needed
  }

  // Set headers (e.g., for authorization tokens)
  setHeaders(headers) {
    this.headers = {
      ...this.headers,
      ...headers,
    };
  }

  // Clear headers
  clearHeaders() {
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  // Helper function to set the headers in the Axios instance
  setAxiosHeaders() {
    this.axiosInstance.defaults.headers.common = this.headers;
  }

  get(url, config = {}) {
    // this.setAxiosHeaders(); // Set headers before making the request
    return this.axiosInstance.get(url, config);
  }

  post(url, data = {}, config = {}) {
    this.setAxiosHeaders(); // Set headers before making the request
    return this.axiosInstance.post(url, data, config);
  }

  put(url, data = {}, config = {}) {
    this.setAxiosHeaders(); // Set headers before making the request
    return this.axiosInstance.put(url, data, config);
  }

  delete(url, config = {}) {
    this.setAxiosHeaders(); // Set headers before making the request
    return this.axiosInstance.delete(url, config);
  }
}

export default ApiCallService;
