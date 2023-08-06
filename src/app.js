const contacts = document.querySelector('.contacts')
const contacts_modal = document.querySelector('.contacts-modal')
const modal_close = document.querySelector('.modal-close')
const modal_overlay = document.querySelector('.modal-overlay')
let html = document.documentElement;


document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px`
})


contacts.addEventListener('click', () => {
	contacts_modal.classList.add('visible');
	modal_overlay.classList.add('overlay-visible');
})

modal_close.addEventListener('click', () => {
	contacts_modal.classList.remove('visible');
	modal_overlay.classList.remove('overlay-visible');
})

modal_overlay.addEventListener('click', () => {
	contacts_modal.classList.remove('visible');
	modal_overlay.classList.remove('overlay-visible');
})