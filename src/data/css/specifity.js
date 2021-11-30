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
                        If there is only one css selector matching each element fings are simple. But when multiple 
                        different selectors want to influence a single element, what rule should be chosen? The last one
                        or the first one, or all of them? But what if they deny each other?
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
                    After multiplication points from different groups are added, and there is a specifity value as a 
                    result.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>inline styling</code>: multiplied by 1000`,
                        `<code>id attribute</code>: multiplied by 100`,
                        `<code>class, pseudo-class, attribute selector</code>: multiplied by 10`,
                        `<code>tags</code>: multiplied by 1`,
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
                        `<code>div</code>: 0, 0, 0, 1 => as there are no class selectors, no ids, no iniline styling, just an
                        tag, element selector. Specifity is 1`,
                        `<code>body>footer.col_3>h3>li</code> 0, 0, 1, 4 => no inline styling, no id attributes, one class 
                        selector, and body, footer, h3, li are four element (tag) selectors. Specifity is 14.`,
                        `<code>&lt;div style="background-color:green"></code>: 1, 0, 0, 0 => as there is one inline styling,
                        so specifity equals 1000`,
                        `<code>#someId#someOtherId.col_8.card.content>p>b</code>: 0, 2, 3, 2 => there are two id selectors (someId and someOtherId)
                        three class selectors (col_9, card, content), and two tag (element) selectors (b, p), so specifity is 232`
                    ]
                },
                {
                    elementType:'Headline-2',
                    content:'!important'
                },

                {
                    elementType:'Paragraph',
                    content:`
                    This is a special selector, that 
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
                    content:'',
                    href: '#',
                    description:''
                },
            ]
        }
    ]
};

export default function getSpecifityData(){
    return data;
}