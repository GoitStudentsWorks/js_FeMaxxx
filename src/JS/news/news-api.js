const axios = require("axios").default;

export default class SearchNewsApiService {
  constructor() {
    (this.searchQuery = ""), (this.page = 0);
  }
  async getNews() {
    try {
      const result = await axios.get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        {
          params: {
            q: this.searchQuery,
            "api-key": "hYdAIGAbt4pXLLmHAgP103gawKcPWVRr",
            page: this.page,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.page += 1;
      return result.data.response.docs;
    } catch (error) {
      error.message;
    }
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
