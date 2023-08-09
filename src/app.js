document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px`
})



const contacts = document.querySelector('.contacts')
contacts.addEventListener('click', add_modal_to_DOM)


function add_modal_to_DOM() {
	document.body.insertAdjacentHTML('beforeEnd', modal.html)
	const close_timeout_ms = 300
	const open_timeout_ms = 0.00000000001

	const contacts_modal = document.querySelector('.contacts-modal')

	const modal_close = document.querySelector('.modal-close')
	modal_close.addEventListener('click', () => {
		contacts_modal.classList.remove('visible');
		modal_overlay.classList.remove('overlay-visible');
		setTimeout(() => {
			contacts_modal.remove()
			modal_overlay.remove()
		}, close_timeout_ms);
	})

	const modal_overlay = document.querySelector('.modal-overlay')
	modal_overlay.addEventListener('click', () => {
		contacts_modal.classList.remove('visible');
		modal_overlay.classList.remove('overlay-visible');
		setTimeout(() => {
			contacts_modal.remove()
			modal_overlay.remove()
		}, close_timeout_ms);
	})

	setTimeout(() => {
		contacts_modal.classList.add('visible');
		modal_overlay.classList.add('overlay-visible');
	}, open_timeout_ms);
	
}

