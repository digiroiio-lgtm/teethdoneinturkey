import { useEffect, type RefObject } from 'react';
import { usePathname } from 'next/navigation';
import { pageTypeOf, trackEvent, type EventParams } from '@/lib/analytics';

// Fires a GA4 event once per page view when the element is at least `threshold`
// visible. Re-arms on client-side navigation, so elements that live in the layout
// (such as the mobile bar) are counted once per page. Pair a `*_view` event with
// its click event to get a click-through rate per placement.
const seen = new Set<string>();

export function useViewEvent(
  ref: RefObject<Element | null>,
  name: string,
  params: EventParams,
  threshold = 0.5,
) {
  const pathname = usePathname();
  const paramsKey = JSON.stringify(params);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;
    const key = `${pathname}|${name}|${paramsKey}`;
    if (seen.has(key)) return;
    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        seen.add(key);
        trackEvent(name, { ...(JSON.parse(paramsKey) as EventParams), page_type: pageTypeOf(pathname) });
        observer.disconnect();
      },
      { threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, name, paramsKey, pathname, threshold]);
}
