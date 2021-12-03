let data =     {
    summary: 'specifity',
    title: 'specifity',
    cathegory: 'css',
    searchKeywords: ``,
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Specifity'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        If there is only one css selector matching an each element things are simple. But when multiple 
                        different selectors want to influence a single element, what rule should be chosen? The last one
                        or the first one, or all of them? What should happen if rules deny each other?
                    `
                },
                {
                    elementType: 'Image',
                    name: 'specifity.png',
                    alt: 'specifity'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    There are groups of css selectors, and each group is multiplied by a different factor.
                    After multiplication points from different groups are added, and result is specifity value.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>inline styling</code>: multiplied by 1000`,
                        `<code>id attribute</code>: multiplied by 100`,
                        `<code>class, pseudo-class, attribute selector</code>: multiplied by 10`,
                        `<code>HTML tags</code>: multiplied by 1`,
                        `<code>* + > ~ , :not()</code>: multiplied by 0`,
                        `<code>!important</code> multiplied by 10 000. <strong>Beware</strong> this keyword should be used 
                        very reasonably. In 99.9% cases it can be avoided, and if used may cause serious probles with 
                        maintainability`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:'Lets look at some examples:'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>div</code>: 0, 0, 0, 1 => as there are no class selectors, no ids, no iniline styling, just a
                        tag selector. Specifity is 1`,
                        `<code>body>footer.col_3>div>ul>li</code> 0, 0, 1, 5 => no inline styling, no id attributes, 
                        one class selector, and five tag selectors: body, footer, div, ul, li. 
                        Specifity is 15.`,
                        `<code>&lt;div style="background-color:green"></code>: 1, 0, 0, 0 => as there is one inline styling,
                        so specifity equals 1000`,
                        `<code>#someId#someOtherId.col_8.card.content>p>b</code>: 0, 2, 3, 2 => there are two id selectors 
                        (someId and someOtherId) three class selectors (col_9, card, content), and two tag selectors 
                        (b, p), so specifity is 232`
                    ]
                },
                {
                    elementType:'Headline-2',
                    content:'!important'
                },

                {
                    elementType:'Paragraph',
                    content:`
                    As this keyword overrides all specifity, even inline styling, it should be used very reasonably. 
                    In most cases this keyword should be avoided, as it leads to ignoring the real issues in the HTML 
                    structure and the corresponding CSS. This is especially important when working on a bigger project 
                    in which more people are involved. In some cases <i>important<i> make code impossible to debug, 
                    as removing the it keyword from already existing CSS rule may cause other issues to appear. 
                    Important rules make it difficult to apply <i>user stylesheets</i>. So to summarize:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>!important</code> hides problems existing within the HTML structure and corresponding CSS,`,
                        `<code>!important</code> makes maintainability difficult or even impossible,`,
                        `<strong>user stylesheets</code> will be hard or impossible to apply,`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Why <code>!important</code> keyword exists at all if it is that <i>evil</i>?</code> 
                    It is not completely the <i>dark side of the force</i>. There are a few situations it comes handy. 
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Testing and debugging,`,
                        `User stylesheets (browser extentions allowing a user to apply custom stylesheets to each site)`,
                        `<strong>user stylesheets</strong> will be hard or impossible to apply,`,
                        `Similar to user stylesheets is working with a third party code, when some CSS rules needs to be 
                        overwritten to suite your needs,`,
                        `Even Bootstrap uses the important keyword. Considering a <code>hidden-sm</code> class, that 
                        hides elements on smaller devices. It must work in all circumstances. Even when other classes are
                        applied `,
                        `There is an already finished and encapsulated element, lets call it <code>custom-input</code>,
                        without shadow DOM applied to is. If <code>custom-input</code> is nested, and other elements
                        start interfering with <code>custom-input</coed> css, then using <code>!important</code> may
                        be considerated inside the <code>custom-input</code>. However it would be better to use 
                        a custom web element with shadow root instead.`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>!important</code> cannot be applied as a selector. It is applied to each css property individually.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
.some-class{
    display: inline-block;
    position: relative;
    widht: 100px;
    height: 100px;
    background-color: blue !important;
}
</pre>                    
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Now every element having the <q>some-class</q> applied will be forced to have a blue background. 
                    Can it be changed? Yes, only by another <code>!important</code> keyword somewhere beneath previous 
                    usage.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Inline styling'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    This is considered an another bad practice, however in some cases may be useful.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Inline stylings are difficult to alter when applied to a great number of elements,`,
                        `Inline stylings are not reusable,`,
                        `When applied to <i>content security policy</i> pages they will not work,`,
                        `They are not applied to media queries,`,
                        `They might be useful when applied with JS to style some elements. Suppose there is an
                        element that needs to be moved by a mouse on a page. Inline styling this element with JS seems
                        a good idea.`
                    ]
                },
                {
                    elementType:'Headline-2',
                    content:'Conclusion'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <strong>Fighting with specifity is a bad idea</strong>. Selectors needed to be applied to style some 
                    element might be quite complex, and in bigger applications they might get out of hand. 
                    So the best solution is to understand specifity, know the rules, but avoid it in the code. 
                    It is mutch better to use more classes and keep less selectors than use specifity based ones. 
                    It is a very interesting experience to build something with a css framework to see how it works. 
                    Css frameworks are reusable and generic, so classes are named in a proper way, and whey do not use 
                    specifity based selectors much.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'More than one selectors have the same specifity'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    In this case the one that has lower position in our css file will be applied.
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
                    content:'css-tircks',
                    href: 'https://css-tricks.com/specifics-on-css-specificity/',
                    description:'Nice visual explanation of specifity calculation'
                },
                {
                    elementType:'Link',
                    content:'developintelligence',
                    href: 'https://www.developintelligence.com/blog/2018/02/css-important-rule-use-correctly/',
                    description:'Important good usecases'
                },
                {
                    elementType:'Link',
                    content:'Stackoverflow',
                    href: 'https://stackoverflow.com/questions/35709447/why-does-bootstrap-use-important-for-responsive-classes',
                    description:'Important in bootstrap'
                },
                {
                    elementType:'Link',
                    content:'Content security policy - CSP',
                    href: 'https://infosec.mozilla.org/guidelines/web_security#content-security-policy',
                    description:''
                },
            ]
        }
    ]
};

export default function getSpecifityData(){
    return data;
}