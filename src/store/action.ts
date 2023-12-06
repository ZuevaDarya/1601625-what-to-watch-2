import { createAction } from '@reduxjs/toolkit';
import { FilmCardProps} from '../types/types';
import { AuthorisationStatus } from '../consts';

export const updateGenre = createAction<string>('main/updateGenre');

export const loadFilms = createAction<FilmCardProps[]>('main/loadFilms');

export const requireAuthorization = createAction<AuthorisationStatus>('user/requireAuthorization');

export const setloadingFilms = createAction<boolean>('main/setLoadingFilm');
