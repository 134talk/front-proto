function detectMobileDevice(agent: string) {
  const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  return mobileRegex.some(mobile => agent.match(mobile));
}

const isMobile = detectMobileDevice(window.navigator.userAgent);

export default isMobile;

export const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

export const isInstalled = (): boolean => {
  const navigatorAny = window.navigator as any;
  if (
    navigatorAny.standalone === true ||
    window.matchMedia('(display-mode: standalone)').matches
  ) {
    return true;
  }
  return false;
};
