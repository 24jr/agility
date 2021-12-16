export default function intersectionnObserver(node) {
  let observer = null;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.dispatchEvent(new CustomEvent('loaded', { detail: true }));
          // observer.disconnect();
        } else {
          node.dispatchEvent(new CustomEvent('loaded', { detail: false }));
        }
      });
    // });
    }, { threshold: 1 });
    observer.observe(node);

	return {
		destroy() {
			if (observer) {
        observer.disconnect();
      }
		}
	};
}