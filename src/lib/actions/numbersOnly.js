export default function numbersOnly(node) {
  function handleInput(e){
    const cleanedVal = e.target.value.replace(/\D+/g, '')
    if(cleanedVal !== e.target.value){
      e.target.value = ''
      e.target.value = cleanedVal
      node.dispatchEvent(new CustomEvent('cleanVal', { detail: cleanedVal }));
    }
  }

  function handleKeydown(e){
    if (e.which === 32){
      e.preventDefault()
    }
  }

  node.addEventListener('input', handleInput);
	node.addEventListener('keydown', handleKeydown);

	return {
		destroy() {
			node.removeEventListener('input', handleInput);
			node.removeEventListener('keydown', handleKeydown);
		}
	};
}