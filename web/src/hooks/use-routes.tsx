type PageDetails = {
  title?: string;
  path: string;
  description?: string;
  requiredParameters?: boolean;
};
type SiteMap = Record<PageKey, PageDetails>;

enum PageKey {
  Administration = "AdminPage",
  Explore = "ExplorePage",
  Home = "HomePage",
  Login = "LoginPage",
  MyCollection = "MyCollectionPage",
  Trending = "TrendingPage",
  ViewBook = "BookPage",
  ViewBookList = "BookListPage",
  ViewCreator = "CreatorPage",
  ViewPublisher = "PublisherPage",
  ViewPublisherList = "PublisherListPage",
  ViewSeries = "SeriesPage",
  ViewSeriesList = "SeriesListPage",
}

const siteMap: SiteMap = {
  AdminPage: {
    title: "Administrative Settings",
    path: "/",
    description: "My home page",
  },
  ExplorePage: { path: "/explore" },
  HomePage: { path: "/" },
  LoginPage: { path: "/login" },
  MyCollectionPage: { path: "/my-collection" },
  TrendingPage: { path: "/trending" },
  BookPage: { path: "/books/:id", requiredParameters: true },
  BookListPage: { path: "/books" },
  CreatorPage: { path: "/creators/:id", requiredParameters: true },
  PublisherPage: { path: "/publishers/:id", requiredParameters: true },
  PublisherListPage: { path: "/publishers" },
  SeriesPage: { path: "/series/:id", requiredParameters: true },
  SeriesListPage: { path: "/series" },
};

function getPageDetails(key: PageKey): PageDetails {
  return siteMap[key]; // okay
}

function getPath(key: PageKey): string {
  return getPageDetails(key).path;
}

export function usePageRoutes() {
  return { PageKey, getPath };
}
