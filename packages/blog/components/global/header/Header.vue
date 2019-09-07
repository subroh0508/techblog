<script>
import router from '../../../router';

export default {
  methods: {
    redirectTo: (name) => {
      router.push({ name });
    },
  },
}
</script>
<template src='./header.html'/>
<style src='./header.scss'/>
