const certsObjArr = [
    {
      certName: 'Arthur Modyman IV-JustJavaScript.com-certificate.pdf',
      time: 10
    },
    {
      certName: 'Capstonr retrieving, processing and visualizing data w python Cert 5.pdf',
      time: 4
    },
    {
      certName: 'CertificateOfCompletion_Advanced Express.pdf',
      time: 2.5
    },
    {
      certName: 'CertificateOfCompletion_Advanced Node.js.pdf',
      time: 2
    },
    {
      certName: 'CertificateOfCompletion_Advanced npm.pdf',
      time: .75
    },
    {
      certName: 'CertificateOfCompletion_Become a BackEnd Web Developer.pdf',
      time: ' hrs'
    },
    {
      certName: 'CertificateOfCompletion_Become a FullStack Web Developer.pdf',
      time: ' hrs'
    },
    {
      certName: 'CertificateOfCompletion_Become a JavaScript Developer.pdf',
      time: ' hrs'
    },
    {
      certName: 'CertificateOfCompletion_Become a React Developer.pdf',
      time: ' hrs'
    },
    {
      certName: 'CertificateOfCompletion_Building RESTful APIs with Node.js and Express.pdf',
      time: 1.5
    },
    {
      certName: 'CertificateOfCompletion_Building a Website with Node.js and Express.js.pdf',
      time: 3.16
    },
    {
      certName: 'CertificateOfCompletion_CSS Essential Training.pdf',
      time: 4.5
    },
    {
      certName: 'CertificateOfCompletion_Creating a Serverless Application Using React in AWS.pdf',
      time: 2.75
    },
    {
      certName: 'CertificateOfCompletion_Databases for Node.js Developers.pdf',
      time: 3.5
    },
    {
      certName: 'CertificateOfCompletion_DevOps Foundations.pdf',
      time: 2.75
    },
    {
      certName: 'CertificateOfCompletion_Developing for Web Performance.pdf',
      time: 2.5
    },
    {
      certName: 'CertificateOfCompletion_Explore Web Development with Node.js.pdf',
      time: ' hrs'
    },
    {
      certName: 'CertificateOfCompletion_Express Essential Training.pdf',
      time: 2
    },
    {
      certName: 'CertificateOfCompletion_HTML Essential Training.pdf',
      time: 2.75
    },
    {
      certName: 'CertificateOfCompletion_HTTP Essential Training.pdf',
      time: 1
    },
    {
      certName: 'CertificateOfCompletion_JSON Essential Training.pdf',
      time: 2
    },
    {
      certName: 'CertificateOfCompletion_JavaScript Async.pdf',
      time: 1.5
    },
    {
      certName: 'CertificateOfCompletion_JavaScript Best Practices for Data.pdf',
      time: 1.5
    },
    {
      certName: 'CertificateOfCompletion_JavaScript Classes.pdf',
      time: .4
    },
    {
      certName: 'CertificateOfCompletion_JavaScript Code Challenges.pdf',
      time: .8
    },
    {
      certName: 'CertificateOfCompletion_JavaScript Essential Training.pdf',
      time: 5.5
    },
    {
      certName: 'CertificateOfCompletion_JavaScript Functions.pdf',
      time: 1.5
    },
    {
      certName: 'CertificateOfCompletion_JavaScript Modern Browser APIs.pdf',
      time: 1.8
    },
    {
      certName: 'CertificateOfCompletion_JavaScript Patterns.pdf',
      time: 1.25
    },
    {
      certName: 'CertificateOfCompletion_Learning ECMAScript 6 ES6.pdf',
      time: 1.25
    },
    {
      certName: 'CertificateOfCompletion_Learning FullStack JavaScript Development MongoDB Node and React.pdf',
      time: 3.3
    },
    {
      certName: 'CertificateOfCompletion_Learning Functional Programming with JavaScript ES5.pdf',
      time: 1
    },
    {
      certName: 'CertificateOfCompletion_Learning Functional Programming with JavaScript ES6.pdf',
      time: 2.75
    },
    {
      certName: 'CertificateOfCompletion_Learning MongoDB.pdf',
      time: 2.3
    },
    {
      certName: 'CertificateOfCompletion_Learning Node.js.pdf',
      time: 2
    },
    {
      certName: 'CertificateOfCompletion_Learning REST APIs.pdf',
      time: 1.16
    },
    {
      certName: 'CertificateOfCompletion_Learning React.js.pdf',
      time: 1
    },
    {
      certName: 'CertificateOfCompletion_Learning npm the Node Package Manager.pdf',
      time: .75
    },
    {
      certName: 'CertificateOfCompletion_MERN Essential Training.pdf',
      time: 2
    },
    {
      certName: 'CertificateOfCompletion_NoSQL Essential Training.pdf',
      time: .75
    },
    {
      certName: 'CertificateOfCompletion_Node.js Essential Training.pdf',
      time: 2
    },
    {
      certName: 'CertificateOfCompletion_Node.js Microservices.pdf',
      time: 2.25
    },
    {
      certName: 'CertificateOfCompletion_Node.js RealTime Web with Socket.IO.pdf',
      time: 1.4
    },
    {
      certName: 'CertificateOfCompletion_Node.js Securing RESTful APIs.pdf',
      time: 1
    },
    {
      certName: 'CertificateOfCompletion_Node.js Security.pdf',
      time: .8
    },
    {
      certName: 'CertificateOfCompletion_Node.js Testing and Code Quality.pdf',
      time: 4.33
    },
    {
      certName: 'CertificateOfCompletion_Programming Foundations Web Security.pdf',
      time: 2.3
    },
    {
      certName: 'CertificateOfCompletion_React Context API Development.pdf',
      time: .7
    },
    {
      certName: 'CertificateOfCompletion_React Creating and Hosting a FullStack Site.pdf',
      time: 2.7
    },
    {
      certName: 'CertificateOfCompletion_React Ecosystems.pdf',
      time: .16
    },
    { certName: 'CertificateOfCompletion_React Hooks.pdf', time: 1.25 },
    { certName: 'CertificateOfCompletion_React SPAs.pdf', time: 3.75 },
    {
      certName: 'CertificateOfCompletion_React Working with APIs.pdf',
      time: 1.33
    },
    {
      certName: 'CertificateOfCompletion_React.js Essential Training.pdf',
      time: 2
    },
    {
      certName: 'CertificateOfCompletion_SQL Essential Training.pdf',
      time: 3
    },
    {
      certName: 'CertificateOfCompletion_Search Techniques for Web Developers.pdf',
      time: .92
    },
    {
      certName: 'CertificateOfCompletion_TypeScript ObjectOriented Programming.pdf',
      time: 1
    },
    { certName: 'Coursera Certificate 1.pdf', time: 10 },
    { certName: 'FE web UI frameworks and tools BS4.pdf', time: 10 },
    {
      certName: 'Python Data Structures Coursera Cert 2 .pdf',
      time: 4
    },
    { certName: 'Python to access web data Cert 3.pdf', time: 4 },
    { certName: 'React js Building an Interface.pdf', time: 1.66 },
    { certName: 'Udemy 11 js features.pdf', time: 2.5 },
    { certName: 'Using Databases w Python Cert 4.pdf', time: 4 },
    { certName: '(4 courses) - Devops scripting w python spec cert.pdf', time: 12 },
    { certName: 'js masterclass cert.pdf', time: ' hrs' },
    { certName: 'mongodb for js developers m220JS.pdf', time: 4 },
    {
      certName: 'mongodb m320 data modeling certification.pdf',
      time: 4
    },
    { certName: '(5 courses) - Python specialization cert.pdf', time: ' hrs' }

]

export { certsObjArr };

