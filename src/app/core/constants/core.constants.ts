export class AppConstants {
  public static readonly top5Url =
    "http://www.mocky.io/v2/5dc3c053300000540034757b";
  public static readonly localStoreKey = "moviesAppList";
  public static readonly mainMenu = [
    {
      text: "Home",
      link: "/home"
    },
    {
      text: "New",
      link: "/new"
    },
    {
      text: "Top 5",
      link: "/top"
    },
    {
      text: "Favorites",
      link: "/favorites"
    }
  ];
}
