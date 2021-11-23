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
    {
        category: 'css',
        level: 'easy',
        subcategory:'',
        question: '',
        answers: [
            '',
        ],
        correctAnswers: [0],
        type: 'checkbox',
        explanation:`
            ${getUl([
                '',''
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
