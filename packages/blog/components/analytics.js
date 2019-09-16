const GA_MEASUREMENT_ID = 'UA-140254668-2';

export const updateConfig = (to) => {
  gtag('config', GA_MEASUREMENT_ID, {
    'page_title': to.name,
    'page_path': to.fullPath,
  });
};

const trackShare = (service, title) => {
  gtag('event', 'share', {
    'event_category': 'engagement',
    'event_label': service,
    'title': title,
  });
};

export const trackTwitterShare = trackShare.bind(null, 'twitter');
export const trackFacebookShare = trackShare.bind(null, 'facebook');
export const trackHatenaShare = trackShare.bind(null, 'hatena');
export const trackPocketShare = trackShare.bind(null, 'pocket');

const trackRedirect = (link) => {
  gtag('event', 'redirect', {
    'event_category': 'engagement',
    'event_label': link,
  });
};

export const trackRedirectToTwitter = trackRedirect.bind(null, 'twitter');
export const trackRedirectToMastodon = trackRedirect.bind(null, 'imastodon');
export const trackRedirectToGithub = trackRedirect.bind(null, 'github');

export default {
  updateConfig,
  trackTwitterShare,
  trackFacebookShare,
  trackHatenaShare,
  trackPocketShare,
  trackRedirectToTwitter,
  trackRedirectToMastodon,
  trackRedirectToGithub,
};
