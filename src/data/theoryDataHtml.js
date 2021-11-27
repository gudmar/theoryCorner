let theoryDataHtml = [
    {
        summary: 'validation',
        title: 'validation',
        cathegory: 'HTML',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType: 'NoteWarning',
                        content: `
                        Server side validations should not be ommited, due to front-end hacking possiblities.<br>
                        There is an <a href='./form%20validation%20api' target="_blank"><span> JS
                         api</span></a> that can be used for validation purposes.
                        `
                    },   
                    {
                        elementType:'Headline',
                        content:'Validating a form with HTML'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            Form fields mey need validation due to whole variety of reasons, from security to problems with 
                            precessing data. That is why web form due to <abbr title="Web Content Accessibility Guidelines">
                            WCAG</abbr> standarts should inform user what data format sould be used and why data is needed.
                            There is a possiblity to use HTML and CSS build in features to validate forms. There is an JS api
                            that can be used in case HTML and CSS does not satisfy our needs.
                        `
                    },
                ]
            },
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline-2',
                        content:'Input'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            A HTML <code>&lt;input&gt;</code> field is a build in borwser web element for inputting 
                            a whole sort of variety of data. This element will change its apperance and behaviour 
                            depending on its <strong>type</strong> property. These properties may be:
                        `
                    },
                    {
                        elementType: 'UnsignedList',
                        content: [
                            `<strong>button:</strong>  <input type="button" value="Button">`,
                            `<strong>checkbox:</strong>  <input type="checkbox">`,
                            `<strong>color:</strong>  <input type="color">`,
                            `<strong>date:</strong>  <input type="date">`,
                            `<strong>datetime-local:</strong>  <input type="datetime-local">`,
                            `<strong>email:</strong>  <input type="email">`,
                            `<strong>file:</strong>  <input type="file">`,
                            `<strong>month:</strong>  <input type="month">`,
                            `<strong>number:</strong>  <input type="number">`,
                            `<strong>password:</strong>  <input type="password">`,
                            `<strong>radio:</strong>  <input type="radio">`,
                            `<strong>range:</strong>  <input type="range">`,
                            `<strong>reset:</strong>  <input type="reset">`,
                            `<strong>search:</strong>  <input type="search">`,
                            `<strong>submit:</strong>  <input type="submit">`,
                            `<strong>tel:</strong>  <input type="tel">`,
                            `<strong>text:</strong>  <input type="text">`,
                            `<strong>url:</strong>  <input type="url">`,
                            `<strong>week:</strong>  <input type="week">`,
                        ]
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            There are some more input types not mentioned here. 
                            Please visit references section to learn more.
                        `
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            There is a set of input field vaildation methods available with only HTML or CSS.
                        `
                    },
                ]
            },
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline-2',
                        content:'HTML vaildation possibilities'
                    },
                    {
                        elementType: 'UnsignedList',
                        content: [
                            `<code>required='required'</code> can be applied to 
                            <code>text</code>,
                            <code>serach</code>,
                            <code>url</code>,
                            <code>tel</code>,
                            <code>email</code>,
                            <code>password</code>,
                            <code>date</code>,
                            <code>month</code>,
                            <code>week</code>,
                            <code>datetime-local</code>,
                            <code>number</code>,
                            <code>checkbox</code>,
                            <code>radio</code>,
                            <code>file</code> and <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>
                            In case this input is not filled, there will be a message displayed
                            `,
                            `
                            <code>min-length</code> and <code>max-length</code> may be applied to <code>&lt;input&gt;</code>
                            or <code>&lt;textarea&gt;</code>, and indicates minimal and maximum length in characters.
                            In case field is not valid there will be a message displayed and form will not be submited.
                            `,
                            `<code>min</code>, <code>max</code> may be applied to:
                            <code>date</code>,
                            <code>month</code>,
                            <code>week</code>,
                            <code>time</code>,
                            <code>datatime-local</code>,
                            <code>number</code>,
                            <code>range</code>. 
                            In case field is not valid there will be a message displayed and form will not be submited.
                            `,
                            `<code>type</code> indicates what sort of data certain input accepts,`,
                            `<code>pattern</code> uses a regular expression to specify data that are valid.`
                        ]
                    },
                ]
            },
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline-2',
                        content:'How to inform user that data is invalid'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            There is a set of CSS pseudoclasses that can be used to inform user about data invalid issue:
                        `
                    },
                    {
                        elementType: 'UnsignedList',
                        content: [
                            `<code>input:valid</code>`,
                            `<code>input:invalid</code>`,
                            `<code>input:required</code>`,
                            `<code>input:invalid:required</code>`,
                        ]
                    },
                ]
            },
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline-2',
                        content:'References'
                    },
                    {
                        elementType:'Link',
                        content:'Developer mozilla',
                        href: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation',
                        description:'Tutorial'
                    },
                    {
                        elementType:'Link',
                        content:'Developer mozilla',
                        href: 'http://localhost:3000/theory/validation',
                        description:'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input'
                    }
                ]
            }
        ]
    },
    {
        summary: 'semantic elements',
        title: 'semantic elements',
        cathegory: 'HTML',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Semantic elements'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
            
                        `
                    }
                ]
            },
        ]
    },
    {
        summary: 'inputs',
        title: 'inputs',
        cathegory: 'HTML',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Input elements'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
            
                        `
                    }
                ]
            },
        ]
    },
]

export function getTheoryDataHtml(){
    return theoryDataHtml;
}