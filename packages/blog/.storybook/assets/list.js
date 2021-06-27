const tags = ['Android', 'Material Design', 'Kotlin', 'Kotlin/JS', 'JavaScript', 'Webpack', 'Advent Calendar', '怪文書'];

const articles = Array.from(Array(20), (_, i) => ({
  title: `title${i + 1}`,
  displayTitle: `記事タイトル${i + 1}`,
  description: '記事内容の要約文章が入ります。大体2行くらいで収まる長さだとちょうどよし。',
  publishedAt: new Date(2020, 1, i + 1),
  tags: tags.sort(() => 0.5 - Math.random()).slice(0, 5),
})).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

export default articles;