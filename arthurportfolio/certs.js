// npx tailwindcss -i './input.css' -o './cssdist/output.css' --watch

const certz = [
    "Meta_front_end_developer.jpg",
    "Capstonr retrieving, processing and visualizing data w python Cert 5.pdf",
    "Arthur Modyman IV-JustJavaScript.com-certificate.pdf",
    "CertificateOfCompletion_Advanced Express.pdf",
    "CertificateOfCompletion_Advanced Node.js.pdf",
    "CertificateOfCompletion_Advanced npm.pdf",
    "CertificateOfCompletion_Become a BackEnd Web Developer.pdf",
    "CertificateOfCompletion_Become a FullStack Web Developer.pdf",
    "CertificateOfCompletion_Become a JavaScript Developer.pdf",
    "CertificateOfCompletion_Become a React Developer.pdf",
    "CertificateOfCompletion_Building RESTful APIs with Node.js and Express.pdf",
    "CertificateOfCompletion_Building a Website with Node.js and Express.js.pdf",
    "CertificateOfCompletion_CSS Essential Training.pdf",
    "CertificateOfCompletion_Creating a Serverless Application Using React in AWS.pdf",
    "CertificateOfCompletion_Databases for Node.js Developers.pdf",
    "CertificateOfCompletion_DevOps Foundations.pdf",
    "CertificateOfCompletion_Developing for Web Performance.pdf",
    "CertificateOfCompletion_Explore Web Development with Node.js.pdf",
    "CertificateOfCompletion_Express Essential Training.pdf",
    "CertificateOfCompletion_Express Essential Training2.pdf",
    "CertificateOfCompletion_HTML Essential Training.pdf",
    "CertificateOfCompletion_HTTP Essential Training.pdf",
    "CertificateOfCompletion_JSON Essential Training.pdf",
    "CertificateOfCompletion_JavaScript Async.pdf",
    "CertificateOfCompletion_JavaScript Best Practices for Data.pdf",
    "CertificateOfCompletion_JavaScript Classes.pdf",
    "CertificateOfCompletion_JavaScript Code Challenges.pdf",
    "CertificateOfCompletion_JavaScript Essential Training.pdf",
    "CertificateOfCompletion_JavaScript Functions.pdf",
    "CertificateOfCompletion_JavaScript Modern Browser APIs.pdf",
    "CertificateOfCompletion_JavaScript Patterns.pdf",
    "CertificateOfCompletion_Learning ECMAScript 6 ES6.pdf",
    "CertificateOfCompletion_Learning FullStack JavaScript Development MongoDB Node and React.pdf",
    "CertificateOfCompletion_Learning Functional Programming with JavaScript ES5.pdf",
    "CertificateOfCompletion_Learning Functional Programming with JavaScript ES6.pdf",
    "CertificateOfCompletion_Learning MongoDB.pdf",
    "CertificateOfCompletion_Learning Node.js.pdf",
    "CertificateOfCompletion_Learning REST APIs.pdf",
    "CertificateOfCompletion_Learning React.js.pdf",
    "CertificateOfCompletion_Learning npm the Node Package Manager.pdf",
    "CertificateOfCompletion_MERN Essential Training.pdf",
    "CertificateOfCompletion_NoSQL Essential Training.pdf",
    "CertificateOfCompletion_Node.js Essential Training.pdf",
    "CertificateOfCompletion_Node.js Microservices.pdf",
    "CertificateOfCompletion_Node.js RealTime Web with Socket.IO.pdf",
    "CertificateOfCompletion_Node.js Securing RESTful APIs.pdf",
    "CertificateOfCompletion_Node.js Security.pdf",
    "CertificateOfCompletion_Node.js Testing and Code Quality.pdf",
    "CertificateOfCompletion_Programming Foundations Web Security.pdf",
    "CertificateOfCompletion_React Context API Development.pdf",
    "CertificateOfCompletion_React Creating and Hosting a FullStack Site.pdf",
    "CertificateOfCompletion_React Ecosystems.pdf",
    "CertificateOfCompletion_React Hooks.pdf",
    "CertificateOfCompletion_React SPAs.pdf",
    "CertificateOfCompletion_React Working with APIs.pdf",
    "CertificateOfCompletion_React.js Essential Training.pdf",
    "CertificateOfCompletion_SQL Essential Training.pdf",
    "CertificateOfCompletion_Search Techniques for Web Developers.pdf",
    "CertificateOfCompletion_TypeScript ObjectOriented Programming.pdf",
    "Coursera Certificate 1.pdf",
    "FE web UI frameworks and tools BS4.pdf",
    "M220JS_proof_of_completion.jpg",
    "M320_proof_of_completion.jpg",
    "Python Data Structures Coursera Cert 2 .pdf",
    "Python to access web data Cert 3.pdf",
    "React js Building an Interface.pdf",
    "Udemy 11 js features.pdf",
    "Using Databases w Python Cert 4.pdf",
    "devops scripting w python spec cert.pdf",
    "js masterclass cert.pdf",
    "mongodb m220JS.pdf",
    "mongodb m320 data modeling certification.pdf",
    "python specialization cert.pdf",
    ];

const certz2 = [
    "Meta_front_end_developer.jpg",
    "Capstonr retrieving, processing and visualizing data w python Cert 5-1.jpg",
    "Arthur Modyman IV-JustJavaScript.com-certificate-1.jpg",
    "CertificateOfCompletion_Advanced Express-1.jpg",
    "CertificateOfCompletion_Advanced Node.js-1.jpg",
    "CertificateOfCompletion_Advanced npm-1.jpg",
    "CertificateOfCompletion_Become a BackEnd Web Developer-1.jpg",
    "CertificateOfCompletion_Become a FullStack Web Developer-1.jpg",
    "CertificateOfCompletion_Become a JavaScript Developer-1.jpg",
    "CertificateOfCompletion_Become a React Developer-1.jpg",
    "CertificateOfCompletion_Building RESTful APIs with Node.js and Express-1.jpg",
    "CertificateOfCompletion_Building a Website with Node.js and Express.js-1.jpg",
    "CertificateOfCompletion_CSS Essential Training-1.jpg",
    "CertificateOfCompletion_Creating a Serverless Application Using React in AWS-1.jpg",
    "CertificateOfCompletion_Databases for Node.js Developers-1.jpg",
    "CertificateOfCompletion_DevOps Foundations-1.jpg",
    "CertificateOfCompletion_Developing for Web Performance-1.jpg",
    "CertificateOfCompletion_Explore Web Development with Node.js-1.jpg",
    "CertificateOfCompletion_Express Essential Training-1.jpg",
    "CertificateOfCompletion_Express Essential Training2-1.jpg",
    "CertificateOfCompletion_HTML Essential Training-1.jpg",
    "CertificateOfCompletion_HTTP Essential Training-1.jpg",
    "CertificateOfCompletion_JSON Essential Training-1.jpg",
    "CertificateOfCompletion_JavaScript Async-1.jpg",
    "CertificateOfCompletion_JavaScript Best Practices for Data-1.jpg",
    "CertificateOfCompletion_JavaScript Classes-1.jpg",
    "CertificateOfCompletion_JavaScript Code Challenges-1.jpg",
    "CertificateOfCompletion_JavaScript Essential Training-1.jpg",
    "CertificateOfCompletion_JavaScript Functions-1.jpg",
    "CertificateOfCompletion_JavaScript Modern Browser APIs-1.jpg",
    "CertificateOfCompletion_JavaScript Patterns-1.jpg",
    "CertificateOfCompletion_Learning ECMAScript 6 ES6-1.jpg",
    "CertificateOfCompletion_Learning FullStack JavaScript Development MongoDB Node and React-1.jpg",
    "CertificateOfCompletion_Learning Functional Programming with JavaScript ES5-1.jpg",
    "CertificateOfCompletion_Learning Functional Programming with JavaScript ES6-1.jpg",
    "CertificateOfCompletion_Learning MongoDB-1.jpg",
    "CertificateOfCompletion_Learning Node.js-1.jpg",
    "CertificateOfCompletion_Learning REST APIs-1.jpg",
    "CertificateOfCompletion_Learning React.js-1.jpg",
    "CertificateOfCompletion_Learning npm the Node Package Manager-1.jpg",
    "CertificateOfCompletion_MERN Essential Training-1.jpg",
    "CertificateOfCompletion_NoSQL Essential Training-1.jpg",
    "CertificateOfCompletion_Node.js Essential Training-1.jpg",
    "CertificateOfCompletion_Node.js Microservices-1.jpg",
    "CertificateOfCompletion_Node.js RealTime Web with Socket.IO-1.jpg",
    "CertificateOfCompletion_Node.js Securing RESTful APIs-1.jpg",
    "CertificateOfCompletion_Node.js Security-1.jpg",
    "CertificateOfCompletion_Node.js Testing and Code Quality-1.jpg",
    "CertificateOfCompletion_Programming Foundations Web Security-1.jpg",
    "CertificateOfCompletion_React Context API Development-1.jpg",
    "CertificateOfCompletion_React Creating and Hosting a FullStack Site-1.jpg",
    "CertificateOfCompletion_React Ecosystems-1.jpg",
    "CertificateOfCompletion_React Hooks-1.jpg",
    "CertificateOfCompletion_React SPAs-1.jpg",
    "CertificateOfCompletion_React Working with APIs-1.jpg",
    "CertificateOfCompletion_React.js Essential Training-1.jpg",
    "CertificateOfCompletion_SQL Essential Training-1.jpg",
    "CertificateOfCompletion_Search Techniques for Web Developers-1.jpg",
    "CertificateOfCompletion_TypeScript ObjectOriented Programming-1.jpg",
    "Coursera Certificate 1-1.jpg",
    "FE web UI frameworks and tools BS4-1.jpg",
    "Python Data Structures Coursera Cert 2 -1.jpg",
    "Python to access web data Cert 3-1.jpg",
    "React js Building an Interface-1.jpg",
    "Udemy 11 js features-1.jpg",
    "Using Databases w Python Cert 4-1.jpg",
    "devops scripting w python spec cert-1.jpg",
    "js masterclass cert-1.jpg",
    "python specialization cert-1.jpg"
];

const certz3 = [
    "Meta_front_end_developer.avif",
    "Capstonr retrieving, processing and visualizing data w python Cert 5-1.avif",
    "Arthur Modyman IV-JustJavaScript.com-certificate-1.avif",
    "CertificateOfCompletion_Advanced Express-1.avif",
    "CertificateOfCompletion_Advanced Node.js-1.avif",
    "CertificateOfCompletion_Advanced npm-1.avif",
    "CertificateOfCompletion_Become a BackEnd Web Developer-1.avif",
    "CertificateOfCompletion_Become a FullStack Web Developer-1.avif",
    "CertificateOfCompletion_Become a JavaScript Developer-1.avif",
    "CertificateOfCompletion_Become a React Developer-1.avif",
    "CertificateOfCompletion_Building RESTful APIs with Node.js and Express-1.avif",
    "CertificateOfCompletion_Building a Website with Node.js and Express.js-1.avif",
    "CertificateOfCompletion_CSS Essential Training-1.avif",
    "CertificateOfCompletion_Creating a Serverless Application Using React in AWS-1.avif",
    "CertificateOfCompletion_Databases for Node.js Developers-1.avif",
    "CertificateOfCompletion_DevOps Foundations-1.avif",
    "CertificateOfCompletion_Developing for Web Performance-1.avif",
    "CertificateOfCompletion_Explore Web Development with Node.js-1.avif",
    "CertificateOfCompletion_Express Essential Training-1.avif",
    "CertificateOfCompletion_Express Essential Training2-1.avif",
    "CertificateOfCompletion_HTML Essential Training-1.avif",
    "CertificateOfCompletion_HTTP Essential Training-1.avif",
    "CertificateOfCompletion_JSON Essential Training-1.avif",
    "CertificateOfCompletion_JavaScript Async-1.avif",
    "CertificateOfCompletion_JavaScript Best Practices for Data-1.avif",
    "CertificateOfCompletion_JavaScript Classes-1.avif",
    "CertificateOfCompletion_JavaScript Code Challenges-1.avif",
    "CertificateOfCompletion_JavaScript Essential Training-1.avif",
    "CertificateOfCompletion_JavaScript Functions-1.avif",
    "CertificateOfCompletion_JavaScript Modern Browser APIs-1.avif",
    "CertificateOfCompletion_JavaScript Patterns-1.avif",
    "CertificateOfCompletion_Learning ECMAScript 6 ES6-1.avif",
    "CertificateOfCompletion_Learning FullStack JavaScript Development MongoDB Node and React-1.avif",
    "CertificateOfCompletion_Learning Functional Programming with JavaScript ES5-1.avif",
    "CertificateOfCompletion_Learning Functional Programming with JavaScript ES6-1.avif",
    "CertificateOfCompletion_Learning MongoDB-1.avif",
    "CertificateOfCompletion_Learning Node.js-1.avif",
    "CertificateOfCompletion_Learning REST APIs-1.avif",
    "CertificateOfCompletion_Learning React.js-1.avif",
    "CertificateOfCompletion_Learning npm the Node Package Manager-1.avif",
    "CertificateOfCompletion_MERN Essential Training-1.avif",
    "CertificateOfCompletion_NoSQL Essential Training-1.avif",
    "CertificateOfCompletion_Node.js Essential Training-1.avif",
    "CertificateOfCompletion_Node.js Microservices-1.avif",
    "CertificateOfCompletion_Node.js RealTime Web with Socket.IO-1.avif",
    "CertificateOfCompletion_Node.js Securing RESTful APIs-1.avif",
    "CertificateOfCompletion_Node.js Security-1.avif",
    "CertificateOfCompletion_Node.js Testing and Code Quality-1.avif",
    "CertificateOfCompletion_Programming Foundations Web Security-1.avif",
    "CertificateOfCompletion_React Context API Development-1.avif",
    "CertificateOfCompletion_React Creating and Hosting a FullStack Site-1.avif",
    "CertificateOfCompletion_React Ecosystems-1.avif",
    "CertificateOfCompletion_React Hooks-1.avif",
    "CertificateOfCompletion_React SPAs-1.avif",
    "CertificateOfCompletion_React Working with APIs-1.avif",
    "CertificateOfCompletion_React.js Essential Training-1.avif",
    "CertificateOfCompletion_SQL Essential Training-1.avif",
    "CertificateOfCompletion_Search Techniques for Web Developers-1.avif",
    "CertificateOfCompletion_TypeScript ObjectOriented Programming-1.avif",
    "Coursera Certificate 1-1.avif",
    "FE web UI frameworks and tools BS4-1.avif",
    "Python Data Structures Coursera Cert 2 -1.avif",
    "Python to access web data Cert 3-1.avif",
    "React js Building an Interface-1.avif",
    "Udemy 11 js features-1.avif",
    "Using Databases w Python Cert 4-1.avif",
    "devops scripting w python spec cert-1.avif",
    "js masterclass cert-1.avif",
    "python specialization cert-1.avif"
];

    // const imgUrl1 = new URL('./images/bfp_thumb.png', import.meta.url).href
    // const imgUrl2 = new URL('./images/cg_thumb.png', import.meta.url).href
    // const imgUrl3 = new URL('./images/art_thumb.png', import.meta.url).href
    // const imgUrl4 = new URL('./images/ec_thumb.png', import.meta.url).href
    // const imgUrl5 = new URL('./images/amd_thumb.jpg', import.meta.url).href
    // const imgUrl6 = new URL('./images/colordesignweb_thumb.png', import.meta.url).href
    // const imgUrl7 = new URL('./images/groceries_thumb.png', import.meta.url).href
    // const imgUrl8 = new URL('./images/ecmascript-app.png', import.meta.url).href
    // const imgUrl9 = new URL('./images/guitarist_page.jpg', import.meta.url).href

    const imgUrl1 = new URL('./images/portfolio_page_thumbs/beach_front_portfolio_3_screens.png', import.meta.url).href
    const imgUrl2 = new URL('./images/portfolio_page_thumbs/vegetarian_restaurant_portfolio_3_screens.png', import.meta.url).href
    const imgUrl3 = new URL('./images/portfolio_page_thumbs/rf3D_portfolio_3_screens.png', import.meta.url).href
    const imgUrl4 = new URL('./images/portfolio_page_thumbs/react_ai_shop_list_portfolio_3_screens.png', import.meta.url).href
    const imgUrl5 = new URL('./images/portfolio_page_thumbs/claims_gifts_portfolio_3_screens.png', import.meta.url).href
    const imgUrl6 = new URL('./images/portfolio_page_thumbs/nt_portfolio_3_screens.png', import.meta.url).href
    const imgUrl7 = new URL('./images/portfolio_page_thumbs/coffee_portfolio_3_screens.png', import.meta.url).href
    const imgUrl8 = new URL('./images/portfolio_page_thumbs/mobile_detail_portfolio_3_screens.png', import.meta.url).href
    const imgUrl9 = new URL('./images/portfolio_page_thumbs/jmarx_music_portfolio_3_screens.png', import.meta.url).href
    const imgUrl10 = new URL('./images/portfolio_page_thumbs/NUA_portfolio_3_screens.png', import.meta.url).href


    const jpgArr = [];

    // (function mapJpg() {
    //     let img;
    //     for (let i=0; i < certz2.length; i+=1) {
    //         let k = certz2[i]
    //         img = new URL(`./images/cert_pdf/${k}`, import.meta.url).href
    //         jpgArr.push({ pic: img, desc: k })
    //     }
    //     return jpgArr;
    // }())

    const avifArr = [];
    (function mapAvif() {
        let avifImg;
        for(let i=0; i<certz3.length; i+=1)
        {
            let k = certz3[i]
            avifImg = new URL(`./images/cert_pdf/avif/${k}`, import.meta.url).href;
            avifArr.push({ pic: avifImg, desc: k })
        }
    }())


const pathLinksArr = [
        {
            class: 'bfpThumb',
            path: imgUrl1,
            url: 'https://otwrentals-c3f25.web.app/',
            desc: 'SPA for Property Rental Co.'
        },
        {
            class: 'guitaristThumb',
            path: imgUrl9,
            url: 'https://jmarxmusic.web.app/',
            desc: 'Luxury & Wedding Guitarist page'
        },
        {
            class: 'nuaThumb',
            path: imgUrl10,
            url: '/',
            desc: 'Node Unifi App & Device Manager'
        },
        {
            class: 'artThumb',
            path: imgUrl6,
            url: '/',
            desc: 'Northtown Co. Company Website'
        },
        {
            class: 'cgThumb',
            path: imgUrl5,
            url: 'https://claims.gifts/',
            desc: 'Event Registry Real Time Full Stack SPA'
        },
        {
            class: 'openaigroceriesThumb',
            path: imgUrl4,
            url: 'https://ecmascript.app/',
            desc: 'OpenAi infused shopping list, with saveable lists'
        },
        {
            class: 'groceriesThumb',
            path: imgUrl3,
            url: 'https://react-tw-daisy-groceries.web.app/',
            desc: '3D Photography company website'
        },
        {
            class: 'ecThumb',
            path: imgUrl7,
            url: 'https://everettdining-7c7f6.web.app/',
            desc: "Privately owned LOCAL coffee shops API"
        },
        {
            class: 'amdThumb',
            path: imgUrl8,
            url: 'https://anthonymobiledetail04052022.web.app/',
            desc: 'Auto Mobile Detailing Small Business'
        },
        {
            class: 'colorThumb',
            path: imgUrl2,
            url: 'https://colordesign-31d23.web.app/Home',
            desc: 'Mock up of original restaurant'
        },

    ];

export { certz, certz2, certz3, jpgArr, avifArr, pathLinksArr };









