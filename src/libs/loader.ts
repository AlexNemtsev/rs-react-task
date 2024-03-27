class UnsplashLoader {
  private static url = 'https://api.unsplash.com';

  static getPhotos(search: string): Promise<Response> {
    const searchRoute = search ? `/search/photos?page=1&query=${search}` : '/photos';

    return fetch(`${UnsplashLoader.url}${searchRoute}`, {
      method: 'GET',
      headers: { Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}` },
    });
  }
}

export default UnsplashLoader;
