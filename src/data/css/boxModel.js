let data =     {
    summary: 'box model',
    title: 'box model',
    cathegory: 'css',
    searchKeywords: `margin padding collapsed margin top-margin bottom-margin left-margin right-margin padding
        padding-top padding-bottom padding-left padding-right border outline border-top border-right border-bottom
        border-left box-sizing border-box content-box padding-box`,
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Box model'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        Each web page element is placed in rectangular boxes. This boxes describe elements 
                    `
                },
                {
                    elementType: 'Image',
                    name: 'boxModel_browser.png',
                    alt: 'Box model'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<b>margin:</b> This is a rectangular box describing elements outer distance from other elements 
                        on page`,
                        `<b>border:</b> This is a frame surrounding element, it has its size that may be calculated into
                        elements size, or not, depending on chosen <code>box-sizing</code>`,
                        `<b>padding:</b> This is inner element spacing. Distance between border and elements content`,
                        '<b>content:</b> This is space elements content takes'
                    ]
                },

                {
                    elementType: 'Paragraph',
                    content: `
                        There is also an <b>outline</b>, an element surrounding border of element. Outline overlaps margin,
                        as it is never taken into account when calculating elements size. Moreover outline cannot have
                        its top, left, right, bottom or radius set. It may however be for example solid or dashed, and have its 
                        color set.
                    `
                },   
                {
                    elementType: 'NoteWarning',
                    content: `
                        If element is taken out of layout with <code>position</code> equal to <code>absolute</code>,
                        <code>fixed</code> or <code>sticky</code> margin, padding, border will exist, but 
                        will not determine elements distances to other elements on page.
                    `
                },   
                {
                    elementType: 'Image',
                    name: 'boxModel_example_1.png',
                    alt: 'Box model'
                }   
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'box-sizing'
                },
                {
                    elementType:'Paragraph',
                    content:`How size determined by style height and width is calculated depends on 
                    <code>box-sizing</code> property:`,
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<b>content-box: </b>width and height properties set only inner elements content, where 
                        margin, border and padding are not taken into account when setting height and width. So
                        element as a whole is larger.`,
                        `<b>border-box: </b>width and height properties contain padding and border of element. Margin 
                        is not taken into account.`,
                        `<b>padding-box: </b>width and height properties contain padding. However border and margin
                        are left outside.`
                    ]
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                    This is theory. In practice <code>padding-box</code> is not supported in all browsers I have. In
                    <a href="https://css-tricks.com/almanac/properties/b/box-sizing/">one source</a> I found that 
                    this value is supported only in firefox, however in my case even this browser, with -moz and -webkit
                    prefixes failed. Observed default behaviour (content-box) was in all cases the same as 
                    described padding-box
                    `
                },   
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'top, left, right, bottom, radius, style'
                },
                {
                    elementType:'Paragraph',
                    content:`Padding, margin and border may have different size in their top, left, bottom or right part
                    Outline has always constant size on each edge. Border may have different radiuses set to each edge 
                    corner, and there is a possiblity to create interesting effects with this. Outline does not have its 
                    radius property. However border and outline may have different style property. It may be: none, hidden,
                    dotted, dashed, solid, double, groove, ridge, inset, outset, initial oir inherit. Outline will have 
                    the same styling in each edge, however border style may be different for each edge`,
                },
                {
                    elementType: 'Image',
                    name: 'fancy_border.png',
                    alt: 'Box model'
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Collapsing margins'
                },
                {
                    elementType:'Paragraph',
                    content:`Lets concidere this piece of code`,
                },
                {
                    elementType:'Code',
                    content:`
<pre>
&lt;style>
    p{margin:25px;}
&lt;/style>
&lt;p>Paragraph 1&lt;/p>
&lt;p>Paragraph 2&lt;/p>
</pre>                        
                    `,
                },
                {
                    elementType:'Paragraph',
                    content:`Margin is set to 25px, so one could expect that as <code>p</code> are block elements 
                    distance between them in vertical cordinance would be 50px. And there is a surprice. Margins will
                    collapse, and space will be reduced to 25px. There is a link to a marvelous article about this in
                    a reference section of this article. But in short words:`,
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Only vertical margins collapse. Exception is when <code>writing-mode</code> is chenged to 
                        <code>vertical-lr</code>. In this case only horizontal margin collapses. So only <b>block direction</b>
                        margins collapse`,
                        `Only <b>adjacend</b> margins collapse. If there is a <code><br></code> between, they are no longer 
                        adjacend and they do not collapse`,
                        `If margins of adjacent elements are unequal, bigger wins`,
                        `If one of adjacent elements is nested, this doest not prevent collapsing. Exception is when 
                        parent of nested element has some padding.`,
                        `Negative margins also collapse. Larger one wins`
                    ]
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Negative margins'
                },
                {
                    elementType:'Paragraph',
                    content:`There is a possiblity to set a negative margin value to decrease element spacing. In case
                    a negative margin collapse with positive one, they values are added (margin 150px with -50px gives
                        spacing equal to 100px)`
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Inline elements'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        How about inline elements? Yes, they also are in box model. There is a possibility, that 
                        an element will be divided. Some part of it will be in line <i>n</i>, and other part of
                        it will be moved to line <i>n + 1</i>. In this situation this box model will be broken in 
                        place line ends and moved to next line. To learn more please refer to reference section.
                    `
                },
                {
                    elementType: 'Image',
                    name: 'boxModel_inline.png',
                    alt: 'Box model inline element'
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
                    content:'w3 org',
                    href: 'https://www.w3.org/TR/CSS2/box.html',
                    description: 'Word wide web article about box model'
                },
                {
                    elementType:'Link',
                    content:'Josh Comeau',
                    href: 'https://www.joshwcomeau.com/css/rules-of-margin-collapse/',
                    description: 'Great visualisation of margin collapse'
                },
                {
                    elementType:'Link',
                    content:'Hack mozilla',
                    href: 'https://hacks.mozilla.org/2015/03/understanding-inline-box-model/',
                    description: 'Inline elements and box model'
                },
                {
                    elementType:'Link',
                    content:'Fancy border generator',
                    href:'https://9elements.github.io/fancy-border-radius/',
                    description:'Online generator making it easy to convert plane div to fancy shapes'
                },
                {
                    elementType:'Link',
                    content:'Examples at gitHub',
                    href:'https://github.com/gudmar/theoryCornerExamples',
                    description:'Examples used on this page'
                }

            ]
        }
    ]
};
 
export default function getBoxModelData(){
    return data;
}