const contacts = document.querySelector('.contacts')
const contacts_modal = document.querySelector('.contacts-modal')

contacts.addEventListener('click', () => {
	contacts_modal.classList.toggle('hidden')
})

document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px`
})