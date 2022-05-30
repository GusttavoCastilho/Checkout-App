export type Plant = {
  id: number;
  title: string;
  price: number;
  about: string;
  category: string;
  image: {
    uri: string;
    width: string;
    height: string;
  };
  isFavorite?: boolean;
  isAdd?: boolean;
};
