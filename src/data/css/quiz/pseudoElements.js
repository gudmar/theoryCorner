import {getUl} from '../../../services/toolbox'

const data = [
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-elements',
        question: `
        What will show up?
<pre class="alert alert-dark">
    &lt;style>
        div{
            position:relative;
            width:0;
            height:0;
        }
        div:before,div:after{
            position:absolute;
            width: 50px;
            height: 50px;
            background-color:black;
            border-radius:50%;
        }
        div:before{
            left: 100px;
            top: 100px;
        }
        div:after{
            left:250px;
            top:100px;
        }
    &lt;/style>
    &lt;div>
    &lt;/div>
</pre>`
        ,
        answers: [
            'Nothing',
            `Onle black circle`,
            `Two black circles`,
            `Circles and a dot div element`,
        ],
        points: 1,
        correctAnswers: [0],
        type: 'radio',
        explanation:`
        Nothing will show up, as pseudo elements need any content property.
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-elements',
        question: `
        Mark true statements
        `
        ,
        answers: [
            'Pseudo elements are good for aligning elements,',
            'Pseudo elements are good for creation of different shapes,',
            'Pseudo elements are good for adding some content to web page,',
            `Pseudo elements are good for creation of tool tips,`,
            `Pseudo elements are for example:nth-child, :active, :invalid`,
            `Pseudo element is for example a div element that has a <code>display:none</code> property, 
            it is pseudo, because it is in DOM but is not displayed`,
        ],
        points: 4,
        correctAnswers: [0, 1,2,3,],
        type: 'checkbox',
        explanation:`
        Pseudo elements are <code>:before</code>, <code>:after</code>, and they are created only with css,
        it is not possible to access them with js, except for checking their size, they are good for:
        aligning elements, creation of shapes, adding content to page, creating tool-tips, and mutch more...
        `,
        links: [
            '',''
        ]
    },

]

export default function pseudoElementsQuestions(){
    return data;
}