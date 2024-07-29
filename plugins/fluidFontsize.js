export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('fluid-typography', {
    mounted(el, binding) {
      const minFontSize = binding.value?.min || 16
      const maxFontSize = binding.value?.max || 64
      const compress = binding.value?.compress || 5

      function setFontSize() {
        const width = el.clientWidth
        let fontSize = width / compress

        if (fontSize > maxFontSize) fontSize = maxFontSize
        if (fontSize < minFontSize) fontSize = minFontSize

        el.style.fontSize = fontSize + 'px'
      }

      setFontSize()
      window.addEventListener('resize', setFontSize)
    },
    unmounted(el) {
      window.removeEventListener('resize', el.__resizeListener__)
    },
  })
})
