<script>
import GithubIcon from '@components/atoms/icons/Github';
import MastodonIcon from '@components/atoms/icons/Mastodon';
import TwitterIcon from '@components/atoms/icons/Twitter';
import {
  trackRedirectToTwitter,
  trackRedirectToMastodon,
  trackRedirectToGithub,
} from '@components/analytics';

export default {
  components: {
    GithubIcon,
    MastodonIcon,
    TwitterIcon,
  },
  methods: {
    handleOnClick(to) {
      switch (to) {
        case 'twitter':
          trackRedirectToTwitter();
          window.open('https://twitter.com/subroh_0508', '_blank');
          break;
        case 'imastodon':
          trackRedirectToMastodon();
          window.open('https://imastodon.net/@subroh_0508', '_blank'); 
          break;
        case 'github':
          trackRedirectToGithub();
          window.open('https://github.com/subroh0508', '_blank');
          break; 
      }
    }
  },
}
</script>
<template src='./links.html'/>
<style src='./links.scss'/>
