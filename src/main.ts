import './styles/global.scss'
import './styles/main.scss'

const sidebar = document.querySelector('aside')
const logo = document.querySelector('[data-element="logo"]')
const toggleButton = document.querySelector<HTMLButtonElement>('[data-element="toggle-button"]')

toggleButton?.addEventListener('click', () => {
    sidebar?.classList.toggle('closed')

    if (sidebar?.classList.contains('closed')) {
        logo?.setAttribute('src', 'small-logo.svg')
        logo?.setAttribute('class', 'small')
        toggleButton.querySelector('i')
            ?.setAttribute('class', 'ph-caret-right')
    } else {
        logo?.setAttribute('src', 'Logo.svg')
        logo?.removeAttribute('class')
        toggleButton.querySelector('i')
            ?.setAttribute('class', 'ph-caret-left')
    }
})

const servicesContainer = document.querySelector<HTMLDivElement>('[data-element="services-container"]')
const servicesButton = document.querySelector<HTMLButtonElement>('[data-element="services-button"]')
const servicesButtonIcon = document.querySelector('[data-element="services-button-icon"]')

servicesButton?.addEventListener('click', () => {
    if (sidebar?.classList.contains('closed')) {
        sidebar?.classList.remove('closed')
        logo?.setAttribute('src', 'Logo.svg')
        logo?.removeAttribute('class')
        toggleButton!.querySelector('i')?.setAttribute('class', 'ph-caret-left')
    }

    servicesContainer?.classList.toggle('open')

    if (servicesContainer?.classList.contains('open')) {
        servicesButtonIcon?.setAttribute('class', 'ph-caret-down')
    } else {
        servicesButtonIcon?.setAttribute('class', 'ph-caret-up')
    }
})