function getURLParams() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    return params;
}

// better to use fetch api
function getProjectBySlug(value = null) {
    if (value == null) {
        return null;
    }
    const rawprojects =  [
        {
            image: {
                src: 'img/projects/ngantre-report-employee.png',
                alt: 'management report web app',
            },
            title: 'Employee Report Management',
            isOpenSource: false,
            description: `Employee Report Management is My First Project using PHP and Laravel. Purpose of this project 
            is help employee to reporting their daily report and their tasks.`,
            technologies: [
                'Laravel 8',
                'PHP',
                'Bootstrap',
                'Laravel Excel',
                'MySQL',
                'Sweet Alert'
            ],
        },
        {
            image: {
                src: 'img/projects/quizcuy.png',
                alt: 'quiz web app',
            },
            title: 'Quizcuy',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/quizcuy',
            description: `Quizcuy is quiz game web app. Admin able to create question and the user can answer the question, if the answer is false then user health will decrease. When user health below from one, system will force redirect user to shop page to refil his health.`,
            technologies: [
                'PHP',
                'Bootstrap',
                'MySQL',
                'JQuery',
            ],
        },
        {
            image: {
                src: 'img/projects/learn-read.png',
                alt: 'learn read web app',
            },
            title: 'Learn Read',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/learn-read',
            webLink: 'https://learn-read.netlify.app',
            description: `Purpose of this project is help my little sister to read objects in english or indonesian.`,
            technologies: [
                'Vue',
                'Typescript',
                'Supabase',
                'TailwindCSS',
            ],
        },
        {
            image: {
                src: 'img/projects/e-campuz-admin.png',
                alt: 'universitas tabanan web app',
            },
            title: 'SIAK Universitas Tabanan',
            isOpenSource:false,
            description: `This is biggest project i've ever made. My Contribute on this project is building CRUD, Making Custom Class Helper for PHP GD Image Library, Help my senior build PMB Feature and more.`,
            technologies: [
                'Laravel',
                'PHP',
                'JQuery',
                'Bootstrap',
                'Rest API',
                'Laravel Excel',
                'PHP GDImage',
                'Laravel DomPDF',
                'Pest'
            ],
            webLink: 'https://portal.universitastabanan.ac.id/'

        },
        {
            image: {
                src: 'img/projects/spp.png',
                alt: 'Invoice School',
            },
            title: 'Invoice School (SPP)',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/sppkul',
            webLink: 'https://sppkonen.000webhostapp.com/',
            description: `This project is my competency exam project (UKK). The transaction is 
            made for face to face not online transaction. While student pay his SPP, then staff 
            simply search the student in system then set new transaction by clicking button 
            lunaskan.`,
            technologies: [
                'PHP',
                'MySQL',
                'Bootstrap',
                'JQuery'
            ],
        },
        {
            image: {
                src: 'img/projects/landing-page.png',
                alt: 'landing page web design',
            },
            title: 'Landing Page Web Design',
            isOpenSource: true,
            description: 'Purpose of this project is learning vue and tailwindcss. Toggle dark mode with tailwind, learn using vue composition api and typescript.',
            technologies: [
                'Vue',
                'Tailwind',
                'Pinia',
                'Typescript'
            ],
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