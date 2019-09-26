const PRERENDER_ELEMENT_ID = "prerendering";

export const removeLinkTag = () => {
  const linkElement = document.getElementById(PRERENDER_ELEMENT_ID)

  if (linkElement) document.head.removeChild(linkElement);
}

export const appendLinkTag = href => {
  const linkElement = document.createElement('link');

  linkElement.setAttribute('id', PRERENDER_ELEMENT_ID);
  linkElement.setAttribute('rel', 'prerender');
  linkElement.setAttribute('href', href);

  document.head.appendChild(linkElement);
};

export default { removeLinkTag, appendLinkTag };
