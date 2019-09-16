import { findArticle } from './pages/article/finder';

export default (to) => {
  switch (to.name) {
    case 'articles':
      forArticles(to.query);
      break;
    case 'about':
      forAbout();
      break;
    case 'links':
      forLinks();
      break;
    case 'article':
      const article = findArticle(to.params.title)
      article ? forArticle(article) : forHome();
      break;
    default:
      forHome();
      break;  
  }
};

const SITE_NAME = '横須賀第765管区情報局';

const TYPE_WEBSITE = 'website';
const TYPE_ARTICLE = 'article';

const forHome = () => setAllAttributes(
  TYPE_WEBSITE,
  SITE_NAME,
  'Subroh Nishikoriの技術ブログ',
);

const forArticles = (query) => {
  if (query.tag) {
    setAllAttributes(
      TYPE_WEBSITE,
      `タグ検索: ${query.tag} - ${SITE_NAME}`,
      `${query.tag}タグ付きの全ての記事`,
    );
  } else {
    setAllAttributes(
      TYPE_WEBSITE,
      `全ての記事 - ${SITE_NAME}`,
      '全ての記事',
    );
  }
};

const forAbout = () => setAllAttributes(
  TYPE_WEBSITE,
  `このサイトについて - ${SITE_NAME}`,
  'このサイトや筆者について',
);

const forLinks = () => setAllAttributes(
  TYPE_WEBSITE,
  `リンク集 - ${SITE_NAME}`,
  '筆者のネットにおける位置情報',
);

const forArticle = ({ displayTitle, description, publishedAt, updatedAt, tags }) => setAllAttributes(
  TYPE_ARTICLE,
  `${displayTitle} - ${SITE_NAME}`,
  description,
  publishedAt,
  updatedAt,
  tags,
);

const setAllAttributes = (
  type, title, description, publishedAt, updatedAt, tags,
) => {
  document.title = title;
  document.querySelector("meta[name='description']")
    .setAttribute('content', description);

  document.querySelector("meta[property='og:type']")
    .setAttribute('content', type);
  document.querySelector("meta[property='og:title']")
    .setAttribute('content', title);
  document.querySelector("meta[property='og:description']")
    .setAttribute('content', description);
  document.querySelector("meta[property='og:url']")
    .setAttribute('content', window.location.href);

  removeArticleTags();
  if (type === TYPE_ARTICLE) {
    appendArticleTags(publishedAt, updatedAt, tags);
  }

  document.querySelector("meta[name='twitter:title']")
    .setAttribute('content', title);
  document.querySelector("meta[name='twitter:description']")
    .setAttribute('content', type === TYPE_ARTICLE ? description : '');
  document.querySelector("meta[name='twitter:url']")
    .setAttribute('content', window.location.href);
};

const appendArticleTags = (publishedAt, updatedAt, tags) => {
  const fragment = document.createDocumentFragment();

  const published = document.createElement('meta');
  const modified = document.createElement('meta');
  const author = document.createElement('meta');

  published.setAttribute('property', 'article:published_time');
  modified.setAttribute('property', 'article:modified_time');
  author.setAttribute('property', 'article:author');

  published.setAttribute('content', publishedAt);
  modified.setAttribute('content', updatedAt);
  author.setAttribute('content', 'subroh_0508');

  fragment.appendChild(published);
  fragment.appendChild(modified);
  fragment.appendChild(author);

  tags.forEach(t => {
    const tag = document.createElement('meta');
    tag.setAttribute('property', 'article:tag');
    tag.setAttribute('content', t);
    fragment.appendChild(tag);
  })

  document.head.appendChild(fragment);
};

const removeArticleTags = () => {
  const published = document.querySelector("meta[property='article:published_time']");
  const modified = document.querySelector("meta[property='article:modified_time']");
  const author = document.querySelector("meta[property='article:author']");
  const tags = document.querySelectorAll("meta[property='article:tag']");

  const head = document.head;

  if (published) head.removeChild(published);
  if (modified) head.removeChild(modified);
  if (author) head.removeChild(author);
  if (tags.length) {
    tags.forEach(tag => head.removeChild(tag));
  }
};
