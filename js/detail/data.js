function getURLParams() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return params;
}

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
                src: 'img/projects/rent-futsal.png',
                alt: 'rent futsal field web app',
            },
            title: 'Futsalcuy',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/sewalapanganfutsal',
            description: `Futsalcuy is rent management system. Admin able to set field is empty or full, set schedule futsal field. Verify book from user and doing some CRUD. The User able to see information about futsal fields and request booking to admin.`,
            technologies: [
                'Ruby On Rails',
                'Ruby',
                'Bootstrap',
                'MySQL'
            ],
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