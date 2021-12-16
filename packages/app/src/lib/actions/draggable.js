export default function draggable(node) {

  let isDragging = false
  let left;
	let top;


  function handlePointerdown(e){
    isDragging = true
    top = JSON.parse(node.style.top.replace(/[^\d.-]/g, ''))
    left = JSON.parse(node.style.left.replace(/[^\d.-]/g, ''))
  }

  function handlePointerup(e){
    isDragging = false
  }

  function handlePointermove(e){
    if (isDragging) {
      left += e.movementX;
      top += e.movementY;
      node.style.top = `${top}px`;
      node.style.left = `${left}px`;
      node.dispatchEvent(new CustomEvent('drag', { detail: { top: top, left: left }}));
   }
  }

  node.style.position = 'absolute';
  node.style.cursor = 'move';
  node.style.userSelect = 'none';
  node.style['touch-action'] = 'none';
  node.style['-webkit-touch-callout'] ='none';
  node.style['-ms-touch-action'] = 'none';
  node.style['-moz-user-select'] = 'none';
  node.style['-webkit-user-select'] = 'none';
  node.style['-ms-user-select'] = 'none';

  node.addEventListener('pointerdown', handlePointerdown);
	window.addEventListener('pointerup', handlePointerup);
	window.addEventListener('pointermove', handlePointermove);

	return {
		destroy() {
			node.removeEventListener('pointerdown', handlePointerdown);
			window.removeEventListener('pointerup', handlePointerup);
			window.removeEventListener('pointermove', handlePointermove);
		}
	};
}