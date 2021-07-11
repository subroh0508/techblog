import { findArticle } from '@components/finder';

export default (to) => {
  switch (to.name) {
    case 'articles':
      forArticles(to.query);
      break;
    case 'about':
      forAbout();
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

const SITE_NAME = '横須賀第283管区情報局';

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
  
  removeContentTags();
  appendContentTags(description, type, title);

  removeArticleTags();
  if (type === TYPE_ARTICLE) {
    appendArticleTags(publishedAt, updatedAt, tags);
  }
};

const appendContentTags = (description, type, title) => {
  const fragment = document.createDocumentFragment();

  const metaDescription = document.createElement('meta');
  metaDescription.setAttribute('name', 'description');
  metaDescription.setAttribute('content', description);

  const ogType = document.createElement('meta');
  const ogTitle = document.createElement('meta');
  const ogDescription = document.createElement('meta');
  const ogUrl = document.createElement('meta');
  ogType.setAttribute('property','og:type');
  ogType.setAttribute('content', type);
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.setAttribute('content', title);
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.setAttribute('content', description);
  ogUrl.setAttribute('property', 'og:url');
  ogUrl.setAttribute('content', window.location.href);

  const twitterTitle = document.createElement('meta');
  const twitterDescription = document.createElement('meta');
  const twitterUrl = document.createElement('meta');

  twitterTitle.setAttribute('name', 'twitter:title');
  twitterTitle.setAttribute('content', title);
  twitterDescription.setAttribute('name', 'twitter:description');
  twitterDescription.setAttribute('content', type === TYPE_ARTICLE ? description : '');
  twitterUrl.setAttribute('name', 'twitter:url');
  twitterUrl.setAttribute('content', window.location.href);

  [
    metaDescription,
    ogType, ogTitle, ogDescription, ogUrl,
    twitterTitle, twitterDescription, twitterUrl,
  ].forEach(node => fragment.appendChild(node));

  document.head.appendChild(fragment);
}

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

const removeContentTags = () => {
  const description = document.querySelector("meta[name='description']");

  const ogType = document.querySelector("meta[property='og:type']");
  const ogTitle = document.querySelector("meta[property='og:title']");
  const ogDescription = document.querySelector("meta[property='og:description']");
  const ogUrl = document.querySelector("meta[property='og:url']");

  const twitterTitle = document.querySelector("meta[name='twitter:title']");
  const twitterDescription = document.querySelector("meta[name='twitter:description']");
  const twitterUrl = document.querySelector("meta[name='twitter:url']");

  const head = document.head;

  [
    description,
    ogType, ogTitle, ogDescription, ogUrl,
    twitterTitle, twitterDescription, twitterUrl,
  ].forEach(node => {
    if (node) {
      head.removeChild(node);
    }
  });
}

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
