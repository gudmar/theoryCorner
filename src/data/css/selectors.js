const data =     {
    summary: 'selectors',
    title: 'selectors',
    cathegory: 'css',
    searchKeywords: `selector selectors combinator combinators class classes tag id pseudo-class`,
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Selectors and combinators'
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Paragraph',
                    content:`
                    Selector defines element or set of elements that a set of css rules should apply to. Selectors may
                    be joined with combinators. Which rule is chosen in case more selectors apply to some elements is 
                    determined by <a href="./specifity">specifity</a>.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Selectors'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>*</code>: this selects each single element on web page`,

                        `<code>article</code>, <code>section</code>, <code>div</code>, <code>span</code>, <code>a</code>, 
                        <code>i</code>, <code>strong</code> and all other html tags are tag selectors. They chose all
                        elements with this tag name,`,

                        `<code>.some-class-name</code>: a selector with a dot is a class selector. Choses each element with
                        containing this class in class list`,

                        `<code>[attribute]</code>, select all elements having an 'attribute' value,`,
                        `<code>[attribute="value"]</code>: selects all elements having the 'attribute' value equal to
                        'value'`,

                        `<code>[attribute~="value"]</code> selects all elements with an 'attribute' containing the word 'value'.
                        As word needs to be separated with pauses, then a substring <code>somevalue</code> will not be selected.
                        Only <code>some value</code> or <code>some value some</code> or <code>value some</code> will be selected.`,

                        `<code>[attribute*="value"]</code> selects all elements with an 'attribute' containing the <strong>
                        substring</strong> value. In this case all selections made by <code>[attribute]~="value"</code> are 
                        contained, and moreover <code>attribute="somevaluesome"</code> will be matched.`,

                        `<code>[attribute|="value"]</code> selects all elements having an attribute starting with word 'value' 
                        immediately followed by "-" (U+002D) or being equal to value - so for example 
                        <code>attr="my-attr"</code> or <code>attr="my"</code>, but not <code>myattr</code>. 
                        This selector was designed to match locale/language codes like , <i>pl</i> or <i>en-gb</i>`,

                        `<code>[attribute^="value"]</code> selects all elements having the "attribute" starting with "value", 
                        so both <i>my-attr</i> and <i>myattr</i> will match`,

                        `<code>[attribute&="value"]</code> selects all elements thats "attribute" value ends with a "value" 
                        word. For expample: <code>[attribute$=".pdf"]</code> is good for selecting all elements ending with a 
                        <q>.pdf</q>`,

                        `<code>:first-child</code>, <code>:not(p)</code>: pseudo class selectors. To learn more please refer to 
                        <a href="./pseudo%20classes>pseudo class</a> section,`,

                        `<code>:before</code>, <code>:end</code>: pseudo-element selectrs select pseudo-elements. Those
                        elements do not exist in HTML, however they are present in DOM and they are defined in CSS. To learn 
                        more read the <a href="./pseudo%20elements">pseudo elements</a> article.`,

                        `<code>#myId</code>: is an Id selector. Id should be an unique value in the whole, so this should 
                        select only one element if not combined with selectors comming after it`,
                    ]
                },
                {
                    elementType:'Headline-2',
                    content:'Combinators'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Combinators are used to join css selectors in a way, that descendant or more specific elemens are chosen.
                    <strong>There is currently (year 2021) no possibility to selec a parent element with css</strong>
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        '',
                    ]
                }
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
            ]
        }
    ]
};

export default function getSelectorsData(){
    return data;
}