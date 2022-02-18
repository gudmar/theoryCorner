
let data =     {
    summary: 'scss overview',
    title: 'Scss overview',
    searchKeywords:`
    scss sass syntax variables functions mixins operators modules
    `,
    cathegory: 'scss',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Components in angular'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Scss, sass or less are the preprocessors. This is a style sheet written in a different way.
                    It allows functions, mixins, variables (now css also allows variables, but this is a shorter syntax),
                    calculations, loops, if statements, imports (now css also allows imports), processing of strints, 
                    operations on colors, some math operations and many more. This syntax is not recognized by the 
                    browser, so it needs to be compiled in advance.
                    `
                },

                {
                    elementType:'Headli-3',
                    content:'Sass bs scss'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>sass</code> does need the <code>{}</code> brackets, or the semicolns 
                        at the end.`,
                        1

                    ]
                },
                {
                    elementType:'Headline-3',
                    content:'Other properties'
                },
                {
                    elementType:'SmallHeadline',
                    content:'Variables,'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    There is a possiblity to declare a variable in the preprocessors. There is a similar 
                    functionality in pure css, but a bit longer:
                    `
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">css</div>
                    <pre>
*{--some-color: red;}
// later

.div {color: var(--some-color;)}
                    </pre>

                    <div class="note">A variable in a preprocessor:</div>
<pre>
$variable:  red;
.div{
    color:  $variable;
}
</pre>

                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    <code>$my-some-variable</code> === <code>$my_some_variable</code>, as hyphends 
                    <code>-</code> and underscores <code>_</code> are for historical reasons the same in sass.
                    `
                },






            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:''
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
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
                    content:'http://saas-lang',
                    href: 'https://sass-lang.com/documentation/operators/string',
                    description:'Tutorial'
                },
                {
                    elementType:'Link',
                    content:'lesscss.org',
                    href: 'https://lesscss.org/functions/',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getScssOverviewData(){
    return data;
}