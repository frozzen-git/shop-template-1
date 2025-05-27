(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme) => {
    const themeSwitcher = document.querySelector('#color-theme')

    if (!themeSwitcher) {
      return
    }

    const themeText = (theme == 'light' ? themeDarkText : themeLightText)
    const themeIcon = (theme == 'light' ? 'bi-moon-stars-fill' : 'bi-brightness-high-fill')

    themeSwitcher.setAttribute('data-bs-theme-value', (theme == 'light' ? 'dark' : 'light'))
    themeSwitcher.setAttribute('title', themeText)
    themeSwitcher.querySelector('i')
    // themeSwitcher.children[0]
    .classList.remove(themeSwitcher.children[0].classList[0])
    themeSwitcher.querySelector('i')
    // themeSwitcher.children[0]
    .classList.add(themeIcon)
    themeSwitcher.querySelector('span').textContent = themeText;

    // if (!themeSwitcher.classList.contains('is-active')) {
    //   themeSwitcher.classList.add('is-active')
    // }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      console.log('matchMedia', getPreferredTheme())
      const theme = getPreferredTheme()
      setTheme(theme)
      showActiveTheme(theme)
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    const toggle = document.querySelector('#color-theme')
    if (!toggle.classList.contains('is-active')) {
      toggle.classList.add('is-active')
    }
    toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme)
        })
  })
})()
