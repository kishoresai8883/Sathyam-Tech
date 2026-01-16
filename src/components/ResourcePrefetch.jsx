import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ResourcePrefetch Component
 * Prefetches critical resources for better navigation performance
 * This component should be placed in App.jsx
 */
const ResourcePrefetch = () => {
    const location = useLocation();

    useEffect(() => {
        // Prefetch resources based on current page
        const prefetchResources = () => {
            // Only prefetch on homepage to prepare for likely next navigation
            if (location.pathname === '/') {
                // Prefetch About page image
                const aboutImg = new Image();
                aboutImg.src = '/assets/about_hero.webp';

                // Prefetch Services page image
                const servicesImg = new Image();
                servicesImg.src = '/assets/service_hero.webp';

                // Prefetch Contact page image
                const contactImg = new Image();
                contactImg.src = '/assets/contact_hero.webp';
            }
        };

        // Use requestIdleCallback for non-critical prefetching
        if ('requestIdleCallback' in window) {
            requestIdleCallback(prefetchResources);
        } else {
            // Fallback for browsers that don't support requestIdleCallback
            setTimeout(prefetchResources, 2000);
        }
    }, [location.pathname]);

    return null; // This component doesn't render anything
};

export default ResourcePrefetch;
