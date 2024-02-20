export const showModal = (modal) => {
  if (!modal.current) {
    return;
  }
  modal.current.showModal();
};
