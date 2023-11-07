export type FilmCardProps = {
  id: string;
  filmTitle: string;
  img: string;
}

export type FilmCardStateProps = FilmCardProps & {
  active: boolean;
  setActiveCardId: React.Dispatch<React.SetStateAction<string | null>>;
}

export type PromoFilm = {
  title: string;
  genre: string;
  year: string | number;
}

export type MainPageProps = PromoFilm & {
  filmsInfo: FilmCardProps[];
};

export type FilmReviewsProps = {
  id: string | number;
  text: string;
  author: string;
  date: string;
  rating: string;
}

export type PropsList<T> = {
  list: T[];
};

export type PropsHeader = {
  linkLogo: string;
};

export type PropsFooter = PropsHeader;

export type PropsPoster = {
  path: string;
}

export type PropsRatingStar = {
  id: string;
}

export type PropsPlayer = {
  videoLink: string;
}

export type PropsAddReview = {
  filmInfo: FilmCardProps;
}

export type BreadcrumbsListProps = Omit<FilmCardProps, 'img'>
