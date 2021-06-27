import articles from '@articles/list';

export const findArticle = title => articles.find(a => a.title === title);

export const findFullArticle = async title => {
  const article = findArticle(title);
  if (!article) {
    return null;
  }

  const fullArticle = await import(/* webpackPreload: true */ `@articles/articles/${title}`);

  return {
    ...fullArticle,
    publishedAt: new Date(fullArticle.publishedAt),
    updatedAt: new Date(fullArticle.updatedAt),
  };
};

export const searchArticles = (query = {}) => {
  const list = [];
  if (!Object.keys(query).length) {
    list.push(...articles);
  } else if (query.hasOwnProperty('tag')) {
    list.push(...articles.filter(a => a.tags.includes(query.tag)));
  }

  return list.map(article => ({
    ...article,
    publishedAt: new Date(article.publishedAt),
    updatedAt: new Date(article.updatedAt),
  })).sort((a, b) => b.updatedAt - a.updatedAt)
};

export default { searchArticles, findArticle, findFullArticle };
