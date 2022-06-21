export default {
  data() {
    return {
      isDesktop: document.documentElement.clientWidth > 768,
      isMobile: document.documentElement.clientWidth < 768
    }
  }
}
