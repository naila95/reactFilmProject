class URLS {
  constructor() {}
  baseUrl(page) {
    return `${
      import.meta.env.VITE_BASE_URL
    }movie/popular?language=en-US&page=${page}&api_key=${
      import.meta.env.VITE_API_KEY
    }`;
  }
  detailUrl(id) {
    return `${
      import.meta.env.VITE_BASE_URL
    }movie/${id}?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`;
  }
  searchUrl(query, page) {
    return `${
      import.meta.env.VITE_BASE_URL
    }search/movie?language=en-US&page=${page}&api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${query}`;
  }
}
export const { baseUrl, detailUrl, searchUrl } = new URLS();
