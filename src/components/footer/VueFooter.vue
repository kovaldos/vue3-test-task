<template>
  <footer class="footer">
    <footer-top />
    <footer-middle />
    <footer-bottom />
  </footer>
</template>

<script>
import FooterMiddle from "./FooterMiddle.vue";
import FooterTop from "./FooterTop.vue";
import FooterBottom from "./FooterBottom.vue";
export default {
  data() {
    return {};
  },
  components: { FooterTop, FooterMiddle, FooterBottom },
};
</script>

<style></style>
