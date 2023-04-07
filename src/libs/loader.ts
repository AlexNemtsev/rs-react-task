class UnsplashLoader {
  private static url = 'https://api.unsplash.com';
  private static apiKey = import.meta.env.VITE_API_KEY;

  static getPhotos(search: string): Promise<Response> {
    const searchRoute = search ? `/search/photos?page=1&query=${search}` : '/photos';

    return fetch(`${UnsplashLoader.url}${searchRoute}`, {
      method: 'GET',
      headers: { Authorization: `Client-ID ${UnsplashLoader.apiKey}` },
    });
  }
}

export default UnsplashLoader;
