import {getUl} from '../../../services/toolbox'

const data = [
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-classes',
        question: `Fill in pseudoclasses matching below definitions. Please use the 
            double quote if a quotation mark is needed.`,
        answers: [
            `<code>:</code>{{{}}} - select every single element on the page`,
            `<code>:</code>{{{}}} - select every descendant with attribute <code>data-attr</code> having value 
            'someValue' of any div in document`,
            `<code>[attribute</code>{{{}}}<code>"value"]</code> select any element having the 'attribute' containing 
            a "value" substring,`,
            `<code>[src</code>{{{}}}<code>".jpg"]</code> select any element having the 'src' attribute ending with
            ".jpg",`,
            
        ],
        correctAnswers: [['*'], ['div [data-attr="someValue"]'], ['*='], ['$=']],
        type: 'fill-in',
        points: 4,
        explanation:`
            ${getUl([
                `<code>*</code>: selects each element,`,
                `<code>div [data-attr="someValue"</code> a space selects all descendant elements, where the rest of 
                construction is porper attribute selection,`,
                `<code>*=</code> will match substrings in the attribute value,`,
                `<code>$=</code> will match each element having attribute ending with specified value.`,
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-classes',
        question: `Fill in pseudoclasses matching below definitions. Please use the 
            double quote if a quotation mark is needed.`,
        answers: [
            `<code>[data-content</code>{{{}}}<code>"telephone"]</code> select each element having the 'data-content'
            attribute value containing word "telephone" `,
            `<code>[data-content</code>{{{}}}<code>"Time"]</code> select each element having the 'data-content'
            attribute value starting with the word "Time" `,
            `<code>[data-lang</code>{{{}}}<code>"en"]</code> select each element having the 'data-lang'
            attribute value starting with the word "en" or "en-" `,
        ],
        correctAnswers: [['~='], ['^='], ['|=']],
        type: 'fill-in',
        points: 3,
        explanation:`
            ${getUl([
                `<code>~=</code>: is for selecting an attribute containing some specified word. Word has to be 
                separated with spaces,`,
                `<code>^=</code>: is for selecting an attirbute starting with a string`,
                `<code>|=</code> is for language specific matches, like 'pl' or 'en-br',`,
            ]
            )}
        `,
        links: [
            '',''
        ]
    },

]

export default function selectorsQuestions(){
    return data;
}