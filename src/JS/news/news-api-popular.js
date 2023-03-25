const axios = require("axios").default;

export default class PopularNewsApiService {
  async getNews() {
    try {
      const result = await axios.get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json",
        {
          params: {
            "api-key": "hYdAIGAbt4pXLLmHAgP103gawKcPWVRr",
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return result.data.results;
    } catch (error) {
      error.message;
    }
  }
}
