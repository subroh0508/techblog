<script>
export default {
  data: () => ({
    year: new Date().getFullYear(),
  }),
}
</script>
<template>
  <section class='footer'>
    <small>©{{ year }} subroh_0508</small>
  </section>
</template>
<style scoped lang='scss'>
.footer {
  display: flex;
  justify-content: center;
}
</style>
