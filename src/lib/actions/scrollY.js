export default function scrollY(node) {
  
  const handleWheel = (e) => {
    node.scrollTop = node.scrollTop + e.deltaY;
  }

  let touchStartY;
  let nodeElScrollTopStartY
  const handleTouchstart = (e) => {
    touchStartY = Math.round(e.targetTouches[0].clientY);
    nodeElScrollTopStartY = node.scrollTop;
  }

  const handleTouchmove = (e) => {
    node.scrollTop =  nodeElScrollTopStartY + touchStartY - Math.round(e.targetTouches[0].clientY);
  }

  node.addEventListener('wheel', handleWheel);
	node.addEventListener('touchmove', handleTouchmove);
	node.addEventListener('touchstart', handleTouchstart);

	return {
		destroy() {
			node.removeEventListener('wheel', handleWheel);
			node.removeEventListener('touchmove', handleTouchmove);
      node.removeEventListener('touchstart', handleTouchstart);
		}
	};
}