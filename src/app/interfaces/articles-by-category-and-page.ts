import { Article } from './article';

export interface ArticlesByCategoryAndPage {
  [key: string]: {
    page: number;
    articles: Article[];
  };
}
