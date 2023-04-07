class UnsplashLoader {
  private static url = 'https://api.unsplash.com/photos';
  private static apiKey = import.meta.env.VITE_API_KEY;

  static getPhotos(): Promise<Response> {
    return fetch(UnsplashLoader.url, {
      method: 'GET',
      headers: { Authorization: `Client-ID ${UnsplashLoader.apiKey}` },
    });
  }
}

export default UnsplashLoader;
