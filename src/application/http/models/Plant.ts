export type Plant = {
  id: number;
  title: string;
  price: number;
  image: {
    uri: string;
    width: string;
    height: string;
  };
  isFavorite?: boolean;
  isAdd?: boolean;
};
