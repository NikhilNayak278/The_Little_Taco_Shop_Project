const year = document.getElementById('year')
const thisyear = new Date().getFullYear()
year.setAttribute('datetime', thisyear)
year.textContent = thisyear

// Theme toggle logic
const THEME_KEY = 'site-theme'
const themeToggleBtn = document.getElementById('theme-toggle')

function applyTheme(theme){
	if(theme === 'dark'){
		document.documentElement.setAttribute('data-theme','dark')
		themeToggleBtn.textContent = '☀️'
		themeToggleBtn.setAttribute('aria-pressed','true')
		themeToggleBtn.setAttribute('aria-label','Activate light mode')
	} else if(theme === 'light'){
		document.documentElement.setAttribute('data-theme','light')
		themeToggleBtn.textContent = '🌙'
		themeToggleBtn.setAttribute('aria-pressed','false')
		themeToggleBtn.setAttribute('aria-label','Activate dark mode')
	} else {
		// remove explicit attribute to follow system preference
		document.documentElement.removeAttribute('data-theme')
		// set button to reflect the resolved preference
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		themeToggleBtn.textContent = prefersDark ? '☀️' : '🌙'
		themeToggleBtn.setAttribute('aria-pressed', prefersDark ? 'true' : 'false')
		themeToggleBtn.setAttribute('aria-label', prefersDark ? 'Activate light mode' : 'Activate dark mode')
	}
}

// read stored preference
function getStoredTheme(){
	try{
		return localStorage.getItem(THEME_KEY)
	}catch(e){
		return null
	}
}

function storeTheme(theme){
	try{
		if(theme === null) localStorage.removeItem(THEME_KEY)
		else localStorage.setItem(THEME_KEY, theme)
	}catch(e){
		// ignore
	}
}

// Initialize theme on load
;(function initTheme(){
	const stored = getStoredTheme()
	if(stored === 'dark' || stored === 'light'){
		applyTheme(stored)
	} else {
		// follow system preference
		applyTheme(null)
	}
})();

// toggle on button click
if(themeToggleBtn){
	themeToggleBtn.addEventListener('click', ()=>{
		const current = document.documentElement.getAttribute('data-theme')
		if(current === 'dark'){
			applyTheme('light')
			storeTheme('light')
		} else if(current === 'light'){
			applyTheme(null)
			storeTheme(null)
		} else {
			// if following system, switch to dark explicitly if system is light, otherwise to light
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			if(prefersDark){
				applyTheme('light')
				storeTheme('light')
			} else {
				applyTheme('dark')
				storeTheme('dark')
			}
		}
	})
}

// respond to changes in system preference when user hasn't explicitly chosen
const mq = window.matchMedia('(prefers-color-scheme: dark)')
function _systemPrefChange(e){
	const stored = getStoredTheme()
	if(stored === 'dark' || stored === 'light') return
	applyTheme(null)
}
if (typeof mq.addEventListener === 'function') {
	mq.addEventListener('change', _systemPrefChange)
} else if (typeof mq.addListener === 'function') {
	mq.addListener(_systemPrefChange)
}
