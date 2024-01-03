export interface Coin {
  attributes: {
    title: string;
    discord_link: string;
    telegram_link: string;
    x_link: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
