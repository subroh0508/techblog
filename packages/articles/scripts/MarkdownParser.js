import { highlight, highlightAuto } from 'highlight.js';
import marked from 'marked';
import existsThumbnail from './existsThumbnail';

const IMAGE_PREFIX = 'images/';
const IMAGES_BASE_URL = 'https://storage.googleapis.com/images.subroh0508.net';
const THUMBS_BASE_URL = 'https://storage.googleapis.com/thumbs.subroh0508.net';

export default class MarkdownParser {
  constructor(articleTitle) {
    this.articleTitle = articleTitle;
    this.langPrefix = 'hljs ';
  }

  exec(markdown) {
    const renderer = new marked.Renderer();

    renderer.heading = this._heading.bind(this);
    renderer.link = this._link.bind(this);
    renderer.image = this._image.bind(this);
    renderer.code = this._code.bind(this);

    const options = {
      gfm: true,
      breaks: true,
      langPrefix: this.langPrefix,
      highlight: this._codeHighlight.bind(this),
      renderer: renderer,
    };
    return marked(markdown, options);
  }

  _heading(text, level, _, slugger) {
    const id = slugger.slug(text);
    const lv = level + 1;
  
    return (
      `<h${lv} id=${id}>` +
      `<a href='#${id}' data-hash-link>#</a>` +
      `<span>${text}</span>` +
      `</h${lv}>`
    );
  }

  _link(href, title, text) {
    if (href.match(/^(https?:\/\/|\/\/)/)) {
      return `<a href="${href}" title="${title || ''}" target="_blank" rel="noopener">${text}</a>`;
    }

    return `<a href="${href}" title="${title || ''}" data-vue-router-link>${text}</a>`;
  }

  _image(href, title, text) {
    if (!href.startsWith(IMAGE_PREFIX)) {
      return `<img src="${href}" alt="${text || ''}">${title || ''}</img>`;
    }
  
    const filename = href.replace(IMAGE_PREFIX, '');
  
    console.log(filename, existsThumbnail(filename));
    if (existsThumbnail(filename)) {
      return `<img class="image-preview" data-filename="${filename}" src="${THUMBS_BASE_URL}/${filename}" alt="${text || ''}">${title || ''}</img>`;
    }
  
    return `<img src="${IMAGES_BASE_URL}/${filename}" alt="${text || ''}">${title || ''}</img>`;
  };

  _code(code, infostring, escaped) {
    const lang = infostring.split(':')[0];
    const fileName = infostring.split(':')[1];
    const fileTag = fileName ? `<div class=filename>${fileName}</div>` : '';
  
    let codeContent = code;
    let isEscaped = escaped;
    
    const out = this._codeHighlight(code, lang);
    if (out !== null && out !== code) {
      isEscaped = true;
      codeContent = out;
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
      `<code class='${this.langPrefix + escape(lang, true)}'>` +
      (isEscaped ? codeContent : escape(codeContent, true)) +
      `</code>` +
      `</pre>`
    );
  }

  _codeHighlight(code, lang) {
    return lang ? highlight(lang, code).value : highlightAuto(code).value
  }
}
