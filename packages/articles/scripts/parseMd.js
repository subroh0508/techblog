import { highlight, highlightAuto } from 'highlight.js';
import marked from 'marked';

const mdRenderer = new marked.Renderer();

mdRenderer.heading = (text, level, _, slugger) => {
  const id = slugger.slug(text);
  const lv = level + 1;

  return (
    `<h${lv} id=${id}>` +
    `<a href='#${id}' data-hash-link>#</a>` +
    `<span>${text}</span>` +
    `</h${lv}>`
  )
}

mdRenderer.link = (href, title, text) => href.match(/^(https?:\/\/|\/\/)/)
  ? `<a href="${href}" title="${title || ''}" target="_blank" rel="noopener">${text}</a>`
  : `<a href="${href}" title="${title || ''}" data-vue-router-link>${text}</a>`;

const IMAGE_PREFIX = 'images/';
const THUMBS_BASE_URL = 'https://storage.googleapis.com/thumbs.subroh0508.net';

mdRenderer.image = (href, title, text) => href.startsWith(IMAGE_PREFIX)
  ? `<img src="${THUMBS_BASE_URL}/${href.replace(IMAGE_PREFIX, '')}" alt="${text || ''}">${title || ''}</img>`
  : `<img src="${href}" alt="${text || ''}">${title || ''}</img>`;

mdRenderer.code = function(code, infostring, escaped) {
  const lang = infostring.split(':')[0];
  const fileName = infostring.split(':')[1];
  const fileTag = fileName ? `<div class=filename>${fileName}</div>` : '';

  let codeContent = code;
  let isEscaped = escaped;
  if (this.options.highlight) {
    const out = this.options.highlight(code, lang);
    if (out !== null && out !== code) {
      isEscaped = true;
      codeContent = out;
    }
  }

  if (!lang) {
    return (
      `<pre>${fileTag}` +
      `<code>${isEscaped ? codeContent : escape(codeContent, true)}</code>` +
      `</pre>`
    );
  }

  return (
    `<pre>${fileTag}` +
    `<code class='${this.options.langPrefix + escape(lang, true)}'>` +
    (isEscaped ? codeContent : escape(codeContent, true)) +
    `</code>` +
    `</pre>`
  );
}

const options = {
  gfm: true,
  breaks: true,
  langPrefix: 'hljs ',
  highlight(code, lang) {
    return lang ? highlight(lang, code).value : highlightAuto(code).value
  },
  renderer: mdRenderer
}

export default md => marked(md, options);
