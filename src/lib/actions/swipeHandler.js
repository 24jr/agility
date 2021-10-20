export default function swipeHandler(node) {
  let dyInner = 0
  let dyOuter = 0
  let leftSwipe = false
  let rightSwipe = false
  let upSwipe = false
  let downSwipe = false
  let leftOverflowSwipe = false
  let rightOverflowSwipe = false
  let upOverflowSwipe = false
  let downOverflowSwipe = false
  const threshhold = 120
  function setDY(innerVal, outerVal){
    if(typeof innerVal === 'number'){ dyInner = innerVal }
    if(typeof outerVal === 'number'){ dyOuter = outerVal }
    node.dispatchEvent(
      new CustomEvent('dyChange', { detail: { 
        dyInner: dyInner,
        dyOuter: dyOuter,
        dy: dyInner + dyOuter,
        isAtTop: isAtTop,
        isAtBottom: isAtBottom
      }})
    );
    if(!upSwipe && dyInner + dyOuter > threshhold){
      upSwipe = true
      node.dispatchEvent(new CustomEvent('upSwipe'));
    }
    if(!downSwipe && dyInner + dyOuter < -threshhold){
      downSwipe = true
      node.dispatchEvent(new CustomEvent('downSwipe'));
    }
    if(!upOverflowSwipe && dyOuter > threshhold){
      upOverflowSwipe = true
      node.dispatchEvent(new CustomEvent('upOverflowSwipe'));
    }
    if(!downOverflowSwipe && dyOuter < -threshhold){
      downOverflowSwipe = true
      node.dispatchEvent(new CustomEvent('downOverflowSwipe'));
    }
    if(dyOuter !== 0 || dyInner !== 0){ resetTimer() }
  }

  let dxInner = 0
  let dxOuter = 0
  function setDX(innerVal, outerVal){
    if(typeof innerVal === 'number'){ dxInner = innerVal }
    if(typeof outerVal === 'number'){ dxOuter = outerVal }
    node.dispatchEvent(
      new CustomEvent('dxChange', { detail: { 
        dxInner: dxInner,
        dxOuter: dxOuter,
        dx: dxInner + dxOuter,
        isAtLeft: isAtLeft,
        isAtRight: isAtRight
      }})
    );
    if(!leftSwipe && dxInner + dxOuter > threshhold){
      leftSwipe = true
      node.dispatchEvent(new CustomEvent('leftSwipe'));
    }
    if(!rightSwipe && dxInner + dxOuter < -threshhold){
      rightSwipe = true
      node.dispatchEvent(new CustomEvent('rightSwipe'));
    }
    if(!leftOverflowSwipe && dxOuter > threshhold){
      leftOverflowSwipe = true
      node.dispatchEvent(new CustomEvent('leftOverflowSwipe'));
    }
    if(!rightOverflowSwipe && dxOuter < -threshhold){
      rightOverflowSwipe = true
      node.dispatchEvent(new CustomEvent('rightOverflowSwipe'));
    }
    if(dxOuter !== 0 || dxInner !== 0){ resetTimer() }
  }

  let timerY;
  function resetTimer(){
    timerY && clearTimeout(timerY)
    timerY = setTimeout(() => {
      // setDY(0, 0)
      smoothDyToZero()
      smoothDxToZero()
      isReferenceScrollTopSet = false
      touchReferenceY = null
      isReferenceScrollLeftSet = false
      touchReferenceX = null
		}, 200);
  }

  function smoothDyToZero(){
    // setDY(0)
    // smoothDyOuterToZero()
    setDY(0,0)
    upSwipe = false
    downSwipe = false
    upOverflowSwipe = false
    downOverflowSwipe = false
  }

  function smoothDxToZero(){
    // setDX(0)
    // smoothDxOuterToZero()
    setDX(0,0)
    leftSwipe = false
    rightSwipe = false
    leftOverflowSwipe = false
    rightOverflowSwipe = false
  }
    
  // function smoothDyOuterToZero(){
  //   const dyOuterInc = Math.floor(Math.abs(dyOuter / 10)) + 1
  //   const newDyOuter = dyOuter < 0 ? dyOuter + dyOuterInc : dyOuter > 0 ? dyOuter - dyOuterInc : 0
  //   const dyOuterDur = Math.abs(newDyOuter) < 50 ? 50 - Math.abs(newDyOuter) : 1
  //   if(newDyOuter < threshhold && newDyOuter > -threshhold && (downSwipe || upSwipe)){
  //     downSwipe = false
  //     upSwipe = false
  //   }
  //   setTimeout(() => {
  //     setDY(null, newDyOuter)
  //     if(Math.abs(newDyOuter) !== 0){ smoothDyOuterToZero() }
  //   }, dyOuterDur)
  // }

  // function smoothDxOuterToZero(){
  //   const dxOuterInc = Math.floor(Math.abs(dxOuter / 10)) + 1
  //   const newDxOuter = dxOuter < 0 ? dxOuter + dxOuterInc : dxOuter > 0 ? dxOuter - dxOuterInc : 0
  //   const dxOuterDur = Math.abs(newDxOuter) < 50 ? 50 - Math.abs(newDxOuter) : 1
  //   if(newDxOuter < threshhold && newDxOuter > -threshhold && (rightSwipe || leftSwipe)){
  //     rightSwipe = false
  //     leftSwipe = false
  //   }
  //   setTimeout(() => {
  //     setDX(null, newDxOuter)
  //     if(Math.abs(newDxOuter) !== 0){ smoothDxOuterToZero() }
  //   }, dxOuterDur)
  // }


  let isAtTop = true
  let isAtBottom = true
  let referenceScrollTop = 0
  let isReferenceScrollTopSet = false

  let isAtLeft = true
  let isAtRight = true
  let referenceScrollLeft = 0
  let isReferenceScrollLeftSet = false
  const handleScroll = (e) => {
    const wasAtTop = isAtTop
    const wasAtBottom = isAtBottom
    isAtTop = e.target.scrollTop === 0
    isAtBottom = e.target.scrollHeight - e.target.offsetHeight - e.target.scrollTop === 0
    if(wasAtTop !== isAtTop){
      node.dispatchEvent(new CustomEvent('isAtTop', { detail: { isAtTop: isAtTop }}));
    }
    if(wasAtBottom !== isAtBottom){
      node.dispatchEvent(new CustomEvent('isAtBottom', { detail: { isAtBottom: isAtBottom }}));
    }
    if(!isAtBottom && !isAtTop){
      if(!isReferenceScrollTopSet){
        isReferenceScrollTopSet = true
        referenceScrollTop = e.target.scrollTop
      }
      setDY(e.target.scrollTop - referenceScrollTop)
      touchReferenceY = null
    }
    isAtLeft = e.target.scrollLeft === 0
    isAtRight = e.target.scrollWidth - e.target.offsetWidth - e.target.scrollLeft === 0
    if(!isAtLeft && !isAtRight){
      if(!isReferenceScrollLeftSet){
        isReferenceScrollLeftSet = true
        referenceScrollLeft = e.target.scrollLeft
      }
      setDX(e.target.scrollLeft - referenceScrollLeft)
      touchReferenceX = null
    }
	};

  const handleWheel = (e) => {
		if(isAtBottom || isAtTop){
      const stretchedDY = Math.round(e.deltaY / 2)
      const adjustedDY = stretchedDY > 14 ? 14 : stretchedDY < -14 ? -14 : stretchedDY
      setDY(null, dyOuter + adjustedDY)
    }
    if(isAtLeft || isAtRight){
      const stretchedDX = Math.round(e.deltaX / 2)
      const adjustedDX = stretchedDX > 14 ? 14 : stretchedDX < -14 ? -14 : stretchedDX
      setDX(null, dxOuter + adjustedDX)
    }
    const isMovingOuter = isAtLeft && dxOuter < -90 || isAtRight && dxOuter > 90 || isAtTop && dyOuter < -90 || isAtBottom && dyOuter > 90
    if(!isMovingOuter) {
      // e.stopPropagation()
    }
	};

  let touchReferenceY
  let touchReferenceX
  let dyOuterAtStart
  let dxOuterAtStart
  const handleTouchstart = (e) => {
		touchReferenceY = e.changedTouches[0].clientY
    dyOuterAtStart = dyOuter
		touchReferenceX = e.changedTouches[0].clientX
    dxOuterAtStart = dxOuter
    // e.stopPropagation()
	};

  const handleTouchmove = (e) => {
    if(isAtBottom || isAtTop){
      if(!touchReferenceY){
        touchReferenceY = e.changedTouches[0].clientY
        dyOuterAtStart = 0
      }
      setDY(null, Math.round(dyOuterAtStart + touchReferenceY - e.changedTouches[0].clientY))
    }
    if(isAtLeft || isAtRight ){
      if(!touchReferenceX){
        touchReferenceX = e.changedTouches[0].clientX
        dxOuterAtStart = 0
      }
      setDX(null, Math.round(dxOuterAtStart + touchReferenceX - e.changedTouches[0].clientX))
    }
    const isMovingOuter = isAtLeft && dxOuter < -90 || isAtRight && dxOuter > 90 || isAtTop && dyOuter < -90 || isAtBottom && dyOuter > 90
    if(!isMovingOuter) {
      // e.stopPropagation()
    }
	};

  const handleTouchend = () => {
		smoothDyToZero()
		smoothDxToZero()
	};

	node.addEventListener('scroll', handleScroll);
	node.addEventListener('wheel', handleWheel, { passive: true });
	node.addEventListener('touchstart', handleTouchstart, { passive: true });
	node.addEventListener('touchmove', handleTouchmove, { passive: true });
	node.addEventListener('touchend', handleTouchend, { passive: true });

	return {
		destroy() {
			node.removeEventListener('scroll', handleScroll);
			node.removeEventListener('wheel', handleWheel, { passive: true });
			node.removeEventListener('touchstart', handleTouchstart, { passive: true });
			node.removeEventListener('touchmove', handleTouchmove, { passive: true });
			node.removeEventListener('touchend', handleTouchend, { passive: true });
		}
	};
}