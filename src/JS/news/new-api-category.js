const axios = require("axios").default;

export default class CategoryNewsApiService {
  constructor() {
    (this.section = ""), (this.page = 0);
  }
  async getNews() {
    try {
      const result = await axios.get(
        // `https://api.nytimes.com/svc/news/v3/content/nyt/${section}.json`,
        "https://api.nytimes.com/svc/news/v3/content/nyt/automobiles.json",
        {
          params: {
            "api-key": "hYdAIGAbt4pXLLmHAgP103gawKcPWVRr",
            page: this.page,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.page += 1;
      return result.data.results;
    } catch (error) {
      error.message;
    }
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.section;
  }

  set query(newQuery) {
    this.section = newQuery;
  }
}
