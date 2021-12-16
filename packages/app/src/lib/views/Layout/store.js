import { writable,get, derived } from 'svelte/store';

export const links = [
  { name: 'Home', path: '/' },
  { name: 'Admin', path: '/admin' },
  { name: 'Settings', path: '/settings' }
]

export const isDarkTheme = writable(false)

export function setIsDarkTheme(isDark){
  if(isDark){
    isDarkTheme.set(true)
    window.document.body.classList.add("dark");
  } else {
    isDarkTheme.set(false)
    window.document.body.classList.remove("dark");
  }
}

export const screenWidth = writable(null)
export const screenHeight = writable(0)

const screenWitdthThreshold = 550
export const isSmallScreen = derived( screenWidth, $screenWidth => { return $screenWidth && (screenWitdthThreshold > $screenWidth) }, false);
export const isAppScreen = writable(false)
export const isApp = derived( [isAppScreen, isSmallScreen], ([$isAppScreen, $isSmallScreen]) => { return $isSmallScreen || $isAppScreen }, false);

export const isAllNavBarHidden = writable(false)
export const isNavBarHidableFromScroll = writable(true)
export const hideNavBarFromScroll = writable(false)
export const isNavBarShown = derived( [isAllNavBarHidden, hideNavBarFromScroll, isNavBarHidableFromScroll], ([$isAllNavBarHidden, $hideNavBarFromScroll,$isNavBarHidableFromScroll]) => { return !($isAllNavBarHidden || ($hideNavBarFromScroll && $isNavBarHidableFromScroll))}, false);

export const isFullNavPrevented = writable(false)
export const isFullNavToggledOn = writable(false)
export const isFullNavShown = derived( [isFullNavPrevented, isFullNavToggledOn, isNavBarShown], ([$isFullNavPrevented, $isFullNavToggledOn, $isNavBarShown ]) => { 
  return ($isFullNavPrevented || !$isFullNavToggledOn) ? false : $isNavBarShown
}, false);

export const linkClicks = writable(0)
export const hoveredRouteName = writable(null)

export const navBarHeight = writable(0)
export const shownNavBarHeight = derived(
  [ isNavBarShown,navBarHeight ], 
  ([ $isNavBarShown,$navBarHeight ]) => $isNavBarShown && $navBarHeight ? $navBarHeight : null);

export const availableContentHeight = derived( [screenHeight, shownNavBarHeight], ([$screenHeight, $shownNavBarHeight ]) => { return $screenHeight - $shownNavBarHeight }, false);

