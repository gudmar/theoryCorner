// category: 'js'|'css'|'html'|'ts'|'angular'|'react'|'npm'
// subcategory: 'variables','this','strict mode','DOM',
// level:'hard'|'medium'|'easy'
// question: string
// answers: [{id:'a, b,...', content:string},...],
// type: 'radio' | 'checkbox',
// correctAnswers: ['a','b',....],
// explanation:string
// links:[string]
function getUl(itemArray){
    return <ul>{itemArray.map((element)=>{return <li key="element">element</li>}) }</ul>
}

let questions = [
    // {
    //     category: 'html',
    //     level: 'easy',
    //     subcategory:'',
    //     question: '',
    //     answers: [
    //         '',
    //     ],
    //     correctAnswers: [0],
    //     type: 'checkbox',
    //     explanation:`
    //         ${getUl([
    //             '',''
    //         ]
    //         )}
    //     `,
    //     links: [
    //         '',''
    //     ]
    // },
    {
        category: 'html',
        level: 'easy',
        subcategory:'form-validation',
        question: 'Please complete below statements',
        answers: [
            '<b>This input is mandatory:</b> <br><code>&lt;input type="number" </code>{{{}}}<code>="</code>{{{}}}<code>" </code>' ,
            `<b>This input should have value greater or equal to 6, but not greater then 10:</b> <br>
            <code>&lt;input type="number" </code>{{{}}}<code>="6" </code>{{{}}}<code>="10"</code>`
        ],
        correctAnswers: [['required', 'required'], ['min','max']],
        type: 'fill-in',
        explanation:`
            ${getUl([
                '<code>min</code>, <code>max</code> are properties for minimal and maximum value',
                '<code>required</code> is a property for a mandatory field',
                '<code>min-length</code>, <code>max-length</code> is a property for minimal and maximum length in characters',
                '<code>pattern</code> is for validation against regular expression',
                '<code>type</code> is for checking if data is of specified type, like email, address or telephone.'
            ]
            )}
        `,
        links: [
            '',''
        ]
    },

]

export function getHtmlQuestions(){
    return questions
}
