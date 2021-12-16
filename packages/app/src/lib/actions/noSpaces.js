export default function noSpaces(node, isNoSpaces) {

  function handleInput(e){
    if(isNoSpaces){
      const cleanedVal = e.target.value.replace(/\s+/g, '')
      if(cleanedVal !== e.target.value){
        e.target.value = ''
        e.target.value = cleanedVal
        node.dispatchEvent(new CustomEvent('cleanVal', { detail: cleanedVal }));
      }
    }
  }

  function handleKeydown(e){
    if (isNoSpaces && e.which === 32){
      e.preventDefault()
    }
  }

  node.addEventListener('input', handleInput);
	node.addEventListener('keydown', handleKeydown);

	return {
    update(newIsNoSpaces) {
			isNoSpaces = newIsNoSpaces;
		},
		destroy() {
			node.removeEventListener('input', handleInput);
			node.removeEventListener('keydown', handleKeydown);
		}
	};
}