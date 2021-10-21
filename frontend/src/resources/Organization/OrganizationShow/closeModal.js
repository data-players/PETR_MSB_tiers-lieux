const closeModal = ( (event) => {
  const closeButton = event.currentTarget.closest('.MuiTableBody-root').querySelector('.MuiButtonBase-root[aria-expanded="true"]');
  closeButton.click();
})

export default closeModal;