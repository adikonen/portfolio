// beter use fetch api

function getURLParams() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return params;
}

function getProjectBySlug(value) {
    const rawprojects =  [
        {
            image: {
                src: 'img/projects/ngantre-report-employee.png',
                alt: 'management report web app',
            },
            title: 'Employee Report Management',
            isOpenSource: false,
        },
        {
            image: {
                src: 'img/projects/quizcuy.png',
                alt: 'quiz web app',
            },
            title: 'Quiz Game',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/quizcuy',
        },
        {
            image: {
                src: 'img/projects/rent-futsal.png',
                alt: 'rent futsal field web app',
            },
            title: 'Rent Futsal Field Web App',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/sewalapanganfutsal',
        },
        {
            image: {
                src: 'img/projects/e-campuz-admin.png',
                alt: 'universitas tabanan web app',
            },
            title: 'LMS Universitas Tabanan',
            isOpenSource:false,
        },
        {
            image: {
                src: 'img/projects/spp.png',
                alt: 'Invoice School',
            },
            title: 'Invoice School (SPP)',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/sppkul',
        },
        {
            image: {
                src: 'img/projects/landing-page.png',
                alt: 'landing page web design',
            },
            title: 'Landing Page Web Design',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/mancap-bang',
            webLink: 'https://mancap-bang.netlify.app'
        },
    ];

    // adding slug each project
    const projects = rawprojects.map((item) => {
        const slug = item.title.toLowerCase().split(' ').join('-');
        return {...item, slug}
    });

    const project = projects.find((item) => item.slug == value);

    console.log(project);
    return project;
}

