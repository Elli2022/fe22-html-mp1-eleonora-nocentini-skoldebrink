const navLinks = document.querySelectorAll('[data-nav]')

const currentPage = window.location.pathname.split('/').pop() || 'index.html'

navLinks.forEach((link) => {
  const target = link.getAttribute('data-nav')
  if (target === currentPage || (currentPage === '' && target === 'index.html')) {
    link.classList.add('nav-link-active')
  }
})

const form = document.querySelector('#contact-form')
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const status = form.querySelector('[data-form-status]')
    if (status) {
      status.textContent = 'Tack! Detta är en demowebbplats — meddelandet skickades inte.'
      status.classList.remove('hidden')
    }
    form.reset()
  })
}
