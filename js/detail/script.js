const params = getURLParams();
const project = getProjectBySlug(params.slug);
const links = getNavLinks();

document.addEventListener('alpine:init', () => {
    Alpine.data('detail', () => {
        return {
            project,
        }
    });

    Alpine.data('navbar', () => {
        return {
            links,
            navOpen: false,
            toggle() {
                this.navOpen = !this.navOpen;
            }
        };
    });
});