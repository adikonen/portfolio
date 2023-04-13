// better to use fetch api

function getNavLinks() {
    return [
        {
            to: '#home',
            text: 'Home'
        },
        {
            to: '#about',
            text: 'About'
        },
        {
            to: '#projects',
            text: 'Projects'
        },
        {
            to: '#contact',
            text: 'Contact'
        }
    ];
}


function getAbout() {
    return [
        {
            title: 'Who Am i?',
            image: {
                src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                alt: 'konen photo'
            },
            text: `My name is I Made Addy Konen Adjana. My friends usually call me Konen or Adi. I 
            Live in Denpasar, Bali. Now I am 17 years old and a student majoring computer sciene 
            in SMK Negeri 1 Denpasar. I interested to software development when corona pandemic 
            outbreak. I am start programing when i was 15 years old. Java and Pascal is my first 
            programming language. I Learn basic programming  like conditional if-else, for-loops, 
            solve search element problem using that language. When I was in 2nd grade high school 
            (2021). My teacher teach me a web development using HTML/CSS/JS and PHP. My Web 
            Development journey was begin from here. I Had two times intership, First at PT 
            Ngantre Indonesia Persada then at PT HookiGroup.`,
        },
        {
            title: 'Programming Experience',
            image: {
                src: 'img/about/experience.webp',
                alt: 'hmmm'
            },
            text: `I\'m Web Developer. I Usually use PHP with MVC pattern and Laravel to build a 
            website. When first time internsip. Build employee report 
            management is my first project. My coding style was diffrent from my senior. I\'m not 
            following standard code, also my blade view file sturcture is not consistent. My other 
            mistake was not using admin template like Admin LTE or sb-admin. From that i learn, i 
            must follow standard code of the team, clean file structure is important for 
            maintainable code. On The Second Intership at PT HookiGroup, I Help My Senior to Build 
            Learning Management System. From that i learned, using external library make work me
            faster and easier.`,
        },
    ];
}

function getProjects() {
    return [
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
}

function getContact() {
    return [
        {
            icon: '<github-icon />',
            text: 'Github',
            link: 'https://github.com/adikonen',
        },
        {
            icon: '<instagram-icon />',
            text: 'Instagram',
            link: 'https://instagram.com/addykonen',
        },
        {
            icon: '<telephone-icon />',
            text: 'Whatsapp',
            link: '#'
        },
        {
            icon: '<email-icon />',
            text: 'Email',
            link: '',
        }
    ];
}