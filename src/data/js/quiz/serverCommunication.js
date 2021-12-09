import {getUl} from '../../../services/toolbox'

const data = [
    {
        category: 'js',
        level: 'easy',
        subcategory:'server communication',
        question: `
            What statements about static server and a dynamic one are true:
        `,
        answers: [
            'In communication with a static server only the GET method should be used,',
            `A static server is able to parse queries in routes,`,
            `A static server is able to authenticate user,`,
            `A dynamic server can reply with data that is not a file,`,
            `Both static and dynamic server are capable of responding to routes in URL`,
        ],
        points: 1,
        correctAnswers: [0, 3, 4],
        type: 'checkbox',
        explanation:`
            ${getUl([
                `A static server is not capable to process other responces that GET,`,
                `A static server is not cabaple of processing routes, however an application that is
                served by it can be capable of responding to queries in routes,`,
                `A static server is not able to identify an user, as it can only provide files,`,
                `A dynamic server is designed to serve data other than files, so the answer is <i>Yes</i>`,
                `Both servers will respond to routes, but a static server only to find files that needed to be served,
                and a dynamic one will resolve routes to know what resource needs to be send`
            ])}`,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'server communication',
        question: `
        What communication technology is described in below statements?</br>
        ${getUl([
            `Provides a bi-directional client server communication,`,
            `Low latancy,`,
            `Event based communication,`,
            `Same origin policy enforcement,`
        ])}`,
        answers: [
            'WebSocket','SSE','XMLHttpRequest','JSONQuery'
        ],
        points: 1,
        correctAnswers: [0],
        type: 'radio',
        explanation:`
        WebSocket
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'server communication',
        question: `
        What communication technology is described in below statements?</br>
        ${getUl([
            `After an initial hand-shake communication in only one direction - from a server to client,`,
            `Event based communication,`,
            `Low latancy,`,
            `Automatic reconnection,`,
            `Used to constatnt update some data,`,
            `Easy to use in browser side, as only one event handler has to be used and work will be done,`
        ])}`,
        answers: [
            'WebSocket','SSE','XMLHttpRequest','JSONQuery'
        ],
        points: 1,
        correctAnswers: [1],
        type: 'radio',
        explanation:`
        SSE: Server Send Events
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'server communication',
        question: `
        What communication technology is described in below statements?</br>
        ${getUl([
            `Bi-directional communication,`,
            `Calls methods like GET, PUT, POST`,
            `Should be handled with an async function`
            
        ])}`,
        answers: [
            'WebSocket','SSE','XMLHttpRequest','JSONQuery'
        ],
        points: 1,
        correctAnswers: [2],
        type: 'radio',
        explanation:`
        XMLHttpRequest
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'server communication',
        question: `
        Check correct meaning of event handlers of XMLHttpRequest`,
        answers: [
            '<code>onload</code>: when request is successfully completed,',
            '<code>onreadystatechange</code>: when readyState property changes,',
            '<code>onprogress</code> can use event.position and event.totalSize,',
            '<code>onupload</code>: when upload request ends,',
            '<code>onheadersreceived</code>: when headers are ready.'
        ],
        points: 3,
        correctAnswers: [0,1,2],
        type: 'checkbox',
        explanation:`
        There is no such event handlers as onupload or noheadersreceived. This may be handled with 
        the <code>onreadystatechange</code> by checking <code>readyState</code> property. <code>readyState == 2</code>
        is for checking if headers are already received, and <code>readyState == 4</code> is for request finished, so 
        upload end would be handled here. There is also an <code>upload</code> property in XMLHttpRequest, and it returns a 
        <code>XMLHttpRequestUpload</code> object that is only for tracking upload operation progress.
        `,
        links: [
            '',''
        ]
    },
]

export default function getServerCommunicationQuestions(){
    return data;
}