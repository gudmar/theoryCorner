import {getUl} from '../../../services/toolbox'

const data = [
    {
        category: 'js',
        level: 'easy',
        subcategory:'data types',
        question: `
            Which are primitive data types in JS?
        `,
        answers: [
            'null', 'undefined', 'number', 'BigInt', 'string', 'boolean', 'symbol', 'object', 'Array', 'Date', 'Set', 'Map'
        ],
        points: 2,
        correctAnswers: [0, 1, 2, 3, 4, 5, 6],
        type: 'checkbox',
        explanation:`
            ${getUl([
                `<code>null</code>, <code>undefined</code>, <code>number</code>, <code>BigInt</code>, <code>string</code>,
                <code>boolean</code>, <code>symbol</code> are primitives`,
                `Object is not a primitive data type`,
                `<code>Date</code>, <code>Function</code>, <code>Array</code>, <code>Set</code>, <code>Map</code> are 
                not primitive data types.`
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
            Which statements are correct?
        `,
        answers: [
            `<code>typeof null == 'object'</code>`,
            `<code>typeof undefined == 'undefined'</code>`,
            `<code>typeof null == undefined</code>`,
            `<code>typeof null === 'false'</code>`,
            `<code>isNaN(1 + null) == false</code>`,
            `<code>isNaN(1 + undefined) == false</code>`,
            `<code>let b = new Boolean(false)</code> and now <code>b === flase</code>`
        ],
        points: 1,
        correctAnswers: [0, 1, 2, 4],
        type: 'checkbox',
        explanation:`
            ${getUl([
                `<code>typeof null == 'object'</code> as every object derives from null,`,
                `<code>typeof undefined == 'undefined'</code>`,
                `<code>typeof null == undefined</code>`,
                `<code>typeof null == 'false'</code>, but <code>typeof null === 'false'</code> has a strict comparation 
                operator, and types do not match`,
                `<code>isNaN(1 + undefined) == true</code>, not false`,
                `<code>let b = new Boolean(false)</code> creates a new object with false value, so it is not empty.
                This is different than <code>let b = Boolean(false)</code>, where b would equal to false.`
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
            Which statements are correct?
        `,
        answers: [
            `<code>Number.isSafeInteger()</code> will indicate if a number will be precise or approximated`,
            `<code>-0</code> is the same as <code>0</code> and the same as <code>+0</code>,`,
            `<code>5n / 2n</code> will give <code>2.5n</code>,`,
            `<code>5n + 3</code> will give <code>8n</code>,`,
            `Any number bigger than <code>Number.MAX_SAFE_INTEGER</code> is <code>Infinity</code>,`,
            `Any number smaller than <code>Number.MIN_VALUE</code> is a <code>Number.NEGATIVE_INFINITY</code>,`,
        ],
        points: 1,
        correctAnswers: [0, 1, 2, 4],
        type: 'checkbox',
        explanation:`
            ${getUl([
                `<code>Number.isSafeInteger()</code> indicates if a integer will be only an approximation or not. It 
                checks if it is in range <code>Number.MIN_SAFE_INTEGER</code> to <code>Number.MAX_SAFE_INTEGER</code>`,
                `-0 and +0 are not exactly the same, as <code>Infinity / +0 !== Infinity / -0</code>`,
                `In BigIng division fractional part is cut off,`,
                `BigInt and numbers cannot be added, substracted, divided, multiplied and so on. They may be only compared,`,
                `The number bigger than <code>Number.MAX_VALUE</code> is <code>Infinity</code>,`,
                `<code>Number.MIN_VALUE</code> is a closest to 0 number, not the smallest possible. Any number smaller than 
                <code>-Number.MAX_VALUE</code> would be <code>-Infinity</code>.`
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
            Which statements are correct?
        `,
        answers: [
            `Symbol is globaly unique`,
            `<code>let a=Symbol('a');let b=Symbol('a')</code> in this case <code>a == b</code>`,
            `<code>for(let item in someObject)</code> will iterate through all object properties,`,
            `<code>Object.getOwnPropertySymbols(someObj)</code> will return only properties with symbol keys,`,
            `<code>let a = Symbol(); console.log(a.toString());</code> will print exact symbol content to the screen,`
        ],
        points: 1,
        correctAnswers: [0, 3],
        type: 'checkbox',
        explanation:`
            ${getUl([
                `Symbols are globaly unique,`,
                `<code>let a=Symbol('a');let b=Symbol('a')</code> produces two different symbols, as symbols are
                unique,`,
                `<code>for(let item in someObject)</code> or <code>Object.getOwnPropertyKeys</code>, or 
                <code>Object.keys()</code> will not give an access to symbol key properties,`,
                `<code>Object.getOwnPropertySymbols(someObj)</code> lists only properties having symbols as keys`,
                `There is no possiblity to peep into a symbol internals. <code>a.toString()</code> will produce
                'Symbol('a')' it this case.`
            ])}`,
        links: [
            '',''
        ]
    },
 
    {
        category: 'js',
        level: 'medium',
        subcategory:'server communication',
        question: `Fill in well-known symbols`,
        answers: [
            `@@{{{}}} is for setting a function returning a <code>next</code> function and making an object iterable,`,
            `@@{{{}}} is for enabling an object to be selected with  <code>instanceof</code>,`,
            `@@{{{}}} is for enabling an object to be an operand of +, -, / operations,`,
        ],
        correctAnswers: [['iterator'], ['hasInstance'], [`toPrimitive`]],
        type: 'fill-in',
        points: 3,
        explanation:`
            ${getUl([
                `<code>iterator</code>, or Symbol.iterator property is for making an object iterable,`,
                `hasInstance is for redefining an <code>instanceof</code>,`,
                `toPrimitive well-known symbol makes a primitive out of an object, and allows +, -, / operations`,
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