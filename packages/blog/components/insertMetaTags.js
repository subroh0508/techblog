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
      forArticle(findArticle(to.params.title));
      break;
    default:
      forHome();
      break;  
  }
}

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
}

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

const forArticle = ({ displayTitle, description }) => setAllAttributes(
  TYPE_ARTICLE,
  `${displayTitle} - ${SITE_NAME}`,
  description,
);

const setAllAttributes = (
  type, title, description,
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

  document.querySelector("meta[name='twitter:title']")
    .setAttribute('content', title);
  document.querySelector("meta[name='twitter:description']")
    .setAttribute('content', type === TYPE_ARTICLE ? description : '');
  document.querySelector("meta[name='twitter:url']")
    .setAttribute('content', window.location.href);
}
