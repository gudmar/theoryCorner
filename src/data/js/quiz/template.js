import {getUl} from '../../../services/toolbox'

const data = [
    {
        category: 'js',
        level: 'easy',
        subcategory:'data types',
        question: `
            
        `,
        answers: [
            '',
            ''
        ],
        points: 1,
        correctAnswers: [0, 3, 4],
        type: 'checkbox',
        explanation:`
            ${getUl([
                ``,
                ``
            ])}`,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'data types',
        question: `
            
        `,
        answers: [
            '',
            ''
        ],
        points: 1,
        correctAnswers: [0, 3, 4],
        type: 'radio',
        explanation:`
            ${getUl([
                ``,
                ``
            ])}`,
        links: [
            '',''
        ]
    },
 
    {
        category: 'js',
        level: 'easy',
        subcategory:'server communication',
        question: `Fill event handlers for web socket:`,
        answers: [
            `<code>ws.</code>{{{}}}<code>('data to send')</code> send data to a server,`,
        ],
        correctAnswers: [['send']],
        type: 'fill-in',
        points: 4,
        explanation:`
            ${getUl([
                ``,
                ``
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
]

export default function getDataTypeQuestions(){
    return data;
}