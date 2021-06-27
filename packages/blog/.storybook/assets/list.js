const tags = ['Android', 'Material Design', 'Kotlin', 'Kotlin/JS', 'JavaScript', 'Webpack', 'Advent Calendar', '怪文書', 'Event'];

const articles = Array.from(Array(20), (_, i) => ({
  title: `sample${i + 1}`,
  displayTitle: `記事サンプル${i + 1}`,
  description: '記事内容の要約文章が入ります。大体2行くらいで収まる長さだとちょうどよし。',
  publishedAt: new Date(2020, 1, i + 1),
  tags: tags.slice(i % 3 * 3, i % 3 * 3 + 3),
})).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

export default articles;
