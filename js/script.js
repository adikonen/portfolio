const links = getNavLinks();
const abouts = getAbout();
const projects = getProjects();
const contact = getContact();

document.addEventListener('alpine:init', () => {
    Alpine.data('navbar', () => {
        return {
            links,
            navOpen: false,
            toggle() {
                this.navOpen = !this.navOpen;
            }
        };
    });

    Alpine.data('about', () => {
        return {
            abouts
        };
    });

    Alpine.data('projects', () => {
        return {
            projects
        };
    });

    Alpine.data('contact', () => {
        return {
            contact,
        }
    });
});