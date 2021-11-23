// category: 'js'|'css'|'html'|'ts'|'angular'|'react'|'npm'
// subcategory: 'variables','this','strict mode','DOM',
// level:'hard'|'medium'|'easy'
// question: string
// answers: [{id:'a, b,...', content:string},...],
// type: 'radio' | 'checkbox',
// correctAnswersIds: ['a','b',....],
// explanation:string
// links:[string]
function getUl(itemArray){
    return <ul>{itemArray.map((element)=>{return <li key="element">element</li>}) }</ul>
}

let questions = [
    {
        category: 'js',
        level: 'easy',
        subcategory:'variables',
        question: 'Select all <b>correct</b> variable names for JS',
        answers: [
            '$someVariable, _someOtherVariable',
            '$32someVariable, _someOtherVariable',
            '3circleInARow, some_variable',
            'circle#, some_variable',
            'some-variable, _someOtherVariable',
            'some_variable, _some_Other_Variable',
        ],
        correctAnswersIds: [0,1,5],
        type: 'checkbox',
        explanation:`
            Correct means in this question that there will be no error if a certain name is used, it does not mean that
            this name should be used. Some variable names make code dirty.
            Variables in JS must follow rules:<br>
            ${getUl([
                'names contain of letters, digits, underscores and dolar signs',
                'names cannot start with a letter, must start with a letter, $ or _',
                'names are case sensitive (x != X)',
                'names cannot be JS reserved keywords',
                `names should be written in camel case (
                    thisIsACamelCase, ThisIsPascalCase, this-is-kebab-case this_is_snake_case). This is not a must and 
                    there will be no error if not followed, however this is a good practice.`,
                `names should be meaningfull, so <q>asdf</q> is correct name, but means nothing and should not be used,
                 where <q>isQuizModeActive</q> seems a better name, as it indicates what variable does, moreover it indicates
                 that variable is a boolean.`
            ])}
        `,
        links: [
            'https://www.w3schools.com/js/js_variables.asp',
            'https://en.wikipedia.org/wiki/Naming_convention_(programming)'
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'variables',
        question: `
            What will below code produce?
            <pre>
                console.log(a)
                for(let i = 0; i < 10; i++){
                    if (a = 0) var a = 0;
                    a = i;
                }
                console.log(a)
            </pre>
        `,
        answers: [
            '9',
            '10',
            'undefined',
            'null',
            'Uncaught ReferenceError: a is not defined',
            
        ],
        correctAnswersIds: [2], //starting from 0
        type: 'radio',
        explanation:`
            As <q>a</q> is declaired with a <q>var</q> keyword, its definition will be hoisted: brought to the top of 
            this code. Definition means <code>var a;</code>, so it will automaticly be undefined from the begining of code.
            If a <q>let</q> keyword would be used, then code would produce an error, as <q>a</q> variable definition
            would not be konwn
            ${getUl([
                `<code>var</code>, a keyword for defining variables, if used anywhere in a function makes this variable 
                known in whole function scope, as variable is hoisted.`,
                `<code>let</code>, a keyword for defining variables, but this variable would be known only in local block
                scope, so inside {} where this variable was defined. Its scope is visible in child blocks, but not visible in parent scope`,
                `<code>const</code>, a keyword similar to <code>let</code>, with the difference that once asigned, cannot
                be changed. Its scope is visible in child blocks, but not visible in parent scope`
            ])}
        `,
        links: [
        ]
    }
    ,
    {
        category: 'js',
        level: 'easy',
        subcategory:'variables',
        question: `
            What will below code produce?
            <pre>
            console.log(b)
            {
                let b = 2;
                {
                    console.log(b)
                }
            }
            </pre>
        `,
        answers: [
            '2',
            'undefined',
            'null',
            'Uncaught ReferenceError: b is not defined',
            
        ],
        correctAnswersIds: ['3'], // indexing form 0
        type: 'radio',
        explanation:`
            Let creates only a local, block scope. It is invisible in parent scope, will be visible in child, but 
            declaration is only for current block.
            ${getUl([
                `<code>var</code>, a keyword for defining variables, if used anywhere in a function makes this variable 
                known in whole function scope, as variable is hoisted.`,
                `<code>let</code>, a keyword for defining variables, but this variable would be known only in local block
                scope, so inside {} where this variable was defined. Its scope is visible in child blocks, but not visible in parent scope`,
                `<code>const</code>, a keyword similar to <code>let</code>, with the difference that once asigned, cannot
                be changed. Its scope is visible in child blocks, but not visible in parent scope`
            ])}
        `,
        links: [
        ]
    }    ,
    {
        category: 'js',
        level: 'easy',
        subcategory:'variables',
        question: `
            What will below code produce?
            <pre>
            console.log(b)
            {
                const b = 2;
                {
                    console.log(b)
                }
            }
            </pre>
        `,
        answers: [
            '2',
            'undefined',
            'null',
            'Uncaught ReferenceError: b is not defined',
            
        ],
        correctAnswersIds: ['3'], // indexing from 0
        type: 'radio',
        explanation:`
            Const creates only a local, block scope. It is invisible in parent scope, will be visible in child, but 
            declaration is only for current block.
            ${getUl([
                `<code>var</code>, a keyword for defining variables, if used anywhere in a function makes this variable 
                known in whole function scope, as variable is hoisted.`,
                `<code>let</code>, a keyword for defining variables, but this variable would be known only in local block
                scope, so inside {} where this variable was defined. Its scope is visible in child blocks, but not visible in parent scope`,
                `<code>const</code>, a keyword similar to <code>let</code>, with the difference that once asigned, cannot
                be changed. Its scope is visible in child blocks, but not visible in parent scope`
            ])}
        `,
        links: [
        ]
    }
]

export function getJsQuestions(){
    return questions
}
