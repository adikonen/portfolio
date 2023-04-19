// better to use fetch api
function getAbout() {
    return [
        {
            title: 'Who Am i?',
            image: {
                src: 'https://lh3.googleusercontent.com/a/AGNmyxa9hzZJhpjwqYfUoSU3P-nZOQtQU5Lrw2eGQWOL=s432',
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
            Ngantre Indonesia Persada (22 Februari 2022 - 23 April 2022) then intership at PT Hooki Global Kreasi
            (05 September 2022 - 12 November 2022).`,
        },
        {
            title: 'Programming Experience',
            image: {
                src: 'img/about/experience.webp',
                alt: 'The Laptop Running Code Editor App'
            },
            text: `I\'m Web Developer. I Usually use PHP with MVC pattern and Laravel to build a 
            website. When first time internsip. Build employee report 
            management is my first project. My coding style was diffrent from my senior. I\'m not 
            following standard code, also my blade view file sturcture is not consistent. My other 
            mistake was not using admin template like Admin LTE or sb-admin. From that i learn, i 
            must follow standard code of the team, clean file structure is important for 
            maintainable code. On The Second Intership at PT Hooki Global Kreasi, We Work Together to Build 
            Learning Management System. From that i learned, using external library make work me
            faster and easier.`,
        },
        // {
        //     title: 'Need teamwork',
        //     image: {
        //         src: 'img/about/work-together.webp',
        //         alt: 'hands'
        //     },
        //     text: `I am convinced that the success of a project depends on the ability of each team member to complement each other. I always try to understand each person's roles and responsibilities and contribute according to my expertise.`
        // }
    ];
}

function getProjects() {
    const projects = [
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
        {
            image: {
                src: 'img/projects/spp.png',
                alt: 'Invoice School',
            },
            title: 'Invoice School (SPP)',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/sppku',
            webLink: 'https://sppkonen.000webhostapp.com'
        },
        {
            image: {
                src: 'img/projects/e-campuz-admin.png',
                alt: 'universitas tabanan web app',
            },
            title: 'LMS Universitas Tabanan',
            isOpenSource:false,
            webLink: 'https://portal.universitastabanan.ac.id/'
        },
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
            title: 'Quizcuy',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/quizcuy',
        },
        {
            image: {
                src: 'img/projects/rent-futsal.png',
                alt: 'rent futsal field web app',
            },
            title: 'Futsalcuy',
            isOpenSource: true,
            githubLink: 'https://github.com/adikonen/sewalapanganfutsal',
        },
        
    ];

    // adding detail link
    return projects.map((item) => {
        const slug = item.title.toLowerCase().split(' ').join('-');
        const detailLink = `detail.html?slug=${slug}`;

        return {...item, detailLink};
    })
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
            link: 'https://wa.me/62895342572499'
        },
        {
            icon: '<email-icon />',
            text: 'Email',
            link: 'mailto:addykonen80@gmail.com',
        }
    ];
}

function getCertificates() {
    const certificates = [
        {
            image : {
                src: 'img/certificates/aws-dicoding.jpg',
                alt: 'aws certificate dicoding',
            },
            isPdf: true,
        },
        {
            image : {
                src: 'img/certificates/basic-javascript-dicoding.jpg',
                alt: 'basic javascript dicoding',
            },
            isPdf: true,
        },
        {
            image : {
                src: 'img/certificates/nodejs-backend-dicoding.jpg',
                alt: 'nodejs backend dicoding',
            },
            isPdf: true,
        },
        {
            image : {
                src: 'img/certificates/basic-laravel-magangpedia.jpg',
                alt: 'basic laravel magangpedia',
            },
            isPdf: true,
        },
        {
            image : {
                src: 'img/certificates/ngantre-internship.jpeg',
                alt: 'ngantre internship',
            },
            isPdf: false,
        },
        {
            image : {
                src: 'img/certificates/hooki-global-kreasi-internship.jpeg',
                alt: 'hooki global kreasi internship',
            },
            isPdf: false
        }

    ];

    return certificates.map((item) => {

        if (! item.isPdf) {
            return {...item, link: item.image.src}
        }

        const arr = item.image.src.split('/');
        const lastIndex = arr.length - 1;
        
        // change img/ to pdf/
        arr.shift();
        arr.unshift('pdf');

        // change .jpg to .pdf
        arr[lastIndex] = arr[lastIndex].split('.').shift();
        arr[lastIndex] = `${arr[lastIndex]}.pdf`;
        
        const link = arr.join('/');
        return {...item, link}
    })
}