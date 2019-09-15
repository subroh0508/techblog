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

const forHome = () => {
  document.title = '横須賀第765管区情報局'
  document.querySelector("meta[name='description']")
    .setAttribute('content', 'Subroh Nishikoriの技術ブログ');
}

const forArticles = (query) => {
  if (query.tag) {
    document.title = `タグ検索: ${query.tag} - 横須賀第765管区情報局`;
    document.querySelector("meta[name='description']")
      .setAttribute('content', `${query.tag}タグ付きの全ての記事`);
  } else {
    document.title = '全ての記事 - 横須賀第765管区情報局';
    document.querySelector("meta[name='description']")
      .setAttribute('content', '全ての記事');
  }
}

const forAbout = () => {
  document.title = 'このサイトについて - 横須賀第765管区情報局'
  document.querySelector("meta[name='description']")
    .setAttribute('content', 'このサイトや筆者について');
}

const forLinks = () => {
  document.title = 'リンク集 - 横須賀第765管区情報局'
  document.querySelector("meta[name='description']")
    .setAttribute('content', '筆者のネットにおける位置情報');
}

const forArticle = ({ displayTitle, description }) => {
  document.title = `${displayTitle} - 横須賀第765管区情報局`
  document.querySelector("meta[name='description']")
    .setAttribute('content', description);
}
