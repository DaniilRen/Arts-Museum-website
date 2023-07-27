const contacts = document.querySelector('.contacts')
const contacts_modal = document.querySelector('.contacts-modal')
const modal_close = document.querySelector('.modal-close')

contacts.addEventListener('click', () => {
	contacts_modal.classList.add('visible')
})

modal_close.addEventListener('click', () => {
	contacts_modal.classList.remove('visible')
})


document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px`
})	