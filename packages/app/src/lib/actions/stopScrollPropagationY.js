export default function stopScrollPropagationY(node) {
  
  const handleWheel = (e) => {
    let dy;
    if(e.deltaY){
      dy = e.deltaY;
    } else if(e.wheelDelta){
      dy = e.wheelDelta;
    }
    checkToPrevent(e,dy)
  }

  let prevTouchY;
  const handleTouchstart = (e) => {
    prevTouchY = e.changedTouches[0].clientY;
  }
  const handleTouchmove = (e) => {
    let dy = prevTouchY - e.changedTouches[0].clientY
    checkToPrevent(e,dy)
    prevTouchY = e.changedTouches[0].clientY
  }

  function checkToPrevent(e,dy){
    if(node.scrollTop === 0 && dy < 0){
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
    }
    else if(node.scrollTop === (node.scrollHeight - node.clientHeight) && dy > 0){
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
    }
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