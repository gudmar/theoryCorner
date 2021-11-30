import getBoxModelData from "./css/boxModel";
import getSpecifityData from "./css/specifity";

let theoryDataCss = [
    {
        summary: 'selectors',
        title: 'selectors',
        cathegory: 'CSS',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'About css selectors'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum et lacinia arcu, ut tempor lacus. Integer euismod, est et pharetra eleifend, 
                            magna nibh congue nulla, eu ornare lacus sem eu leo. Sed aliquet tincidunt neque non tempor. 
                            Sed feugiat, massa at tempus tincidunt, tortor turpis rhoncus orci, nec cursus purus dui vel ipsum. 
                            Sed pellentesque sem nec dictum auctor. Morbi tempus lectus vitae ultrices volutpat. 
                            Vivamus convallis mauris urna. Phasellus rhoncus felis eget mi tincidunt malesuada. 
                            Pellentesque in velit viverra nunc ultrices maximus. Duis in leo dolor.             
                        `
                    }
                ]
            },
        ]
    },
    getSpecifityData(),
    getBoxModelData(),
    {
        summary: 'position',
        title: 'position',
        searchKeywords: 'absolute relative static sticky fixed z-index css',
        cathegory: 'css',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'About position'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum et lacinia arcu, ut tempor lacus. Integer euismod, est et pharetra eleifend, 
                            magna nibh congue nulla, eu ornare lacus sem eu leo. Sed aliquet tincidunt neque non tempor. 
                            Sed feugiat, massa at tempus tincidunt, tortor turpis rhoncus orci, nec cursus purus dui vel ipsum. 
                            Sed pellentesque sem nec dictum auctor. Morbi tempus lectus vitae ultrices volutpat. 
                            Vivamus convallis mauris urna. Phasellus rhoncus felis eget mi tincidunt malesuada. 
                            Pellentesque in velit viverra nunc ultrices maximus. Duis in leo dolor.             
                        `
                    }
                ]
            },
        ]
    },
    {
        summary: 'pseudo elements',
        title: 'Pseudo elements',
        searchKeywords: 'before after css',
        cathegory: 'js',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Pseudo elements'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum et lacinia arcu, ut tempor lacus. Integer euismod, est et pharetra eleifend, 
                            magna nibh congue nulla, eu ornare lacus sem eu leo. Sed aliquet tincidunt neque non tempor. 
                            Sed feugiat, massa at tempus tincidunt, tortor turpis rhoncus orci, nec cursus purus dui vel ipsum. 
                            Sed pellentesque sem nec dictum auctor. Morbi tempus lectus vitae ultrices volutpat. 
                            Vivamus convallis mauris urna. Phasellus rhoncus felis eget mi tincidunt malesuada. 
                            Pellentesque in velit viverra nunc ultrices maximus. Duis in leo dolor.             
                        `
                    }
                ]
            },
        ]
    },
    {
        summary: 'pseudo classes',
        title: 'pseudo classes',
        searchKeywords: `:dir :lang :any-link :link :visited :local-link :target :target-within :scope :hover :active
            :focus :focus-visible :focus-within :current :past :future :playing :paused :autofill :enabled :disabled 
            :read-only :read-write :placeholder-shown :dafault :checked :indeterminate :blank :valid :invalid :in-range
            :out-of-range :reequired :optional :user-invalid :root :empty :nth-child :nth-last-child :firslt-child :only-child
            :nth-of-type :nth-last-of-type :first-of-type :last-of-type :only-of-type`,
        searchKeywords: ' css',
        cathegory: 'js',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Pseudo classes'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Pseudo classes</b> allow to select an element based on its current or history state.
                            They are not real classes added to HTML. For example <code>:hover</code> pseudo class
                            allows to select an element that has mouse over it, <code>div:nth-child(3)</code> pseudo class
                            allows to select an element that is a third in row child of each div. There is a great 
                            number of pseudo selectors in css, and there is no point in rewriting sources like 
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank">
                            developer.mozilla</a> webside, so lets focus only on some of them here.
                        `
                    },
                    {
                        elementType: 'ExplanationList',
                        content: [
                            {
                                headline:':hover',
                                content: 'Matches an element if mouse is placed over it'
                            },
                            {
                                headline:':nth-child(x)',
                                content: `Matches an x child of element placed on left of this plesudo selector. If there is nothing
                                on the left of nth-child pseudo selector, then rule will be applied as if it was <code>*:nth-child</code>
                                For example:
                                    <ul>
                                    <li key='1'>
                                        <code>div:nth-child(2)</code> will select all second child elements of each div,
                                    </li>
                                    <li key='2'>
                                        <code>div:nth-child(2)</code> will select all second child elements of each div,
                                    </li>
                                    <li key='3'>
                                        <code>:nth-child(odd)</code> represents each odd element being a child of something, 
                                    </li>
                                    <li key='4'>
                                        <code>:nth-child(even)</code> each even element being a child of something
                                    </li>
                                    <li key='5'>
                                        <code>:nth-child(5n)</code> each element that is (indexOfElement modulo 5), so each
                                        5, 10, 15, 20, 25... 50 ... element being a child of any element
                                    </li>
                                `
                            },
                            {
                                headline:':first-child',
                                content: `Each element that is a first child of element on the left of pseudo selector.
                                If no element given, each element will be matched`
                            },
                            {
                                headline:':last-child',
                                content: `Each element that is a last child of element on the left of pseudo selector.
                                If no element given, each element will be matched`
                            },
                            {
                                headline:':nth-first-child()',
                                content: `Combines first child with nth child, this would select first of all elements 
                                selected by pattern in brackets notation. Example:
                                <ul>
                                    <li><code>:nth-first-child(5n)</code> - each 5-th child element</li>
                                    <li><code>:nth-first-child(even)</code> - each second child, as
                                        even matches each 2n element and <q>first</q> select first of them
                                    </li>
                                </ul>
                                `
                            },
                            {
                                headline:':nth-last-child',
                                content: `Combines last child with nth child, this would select last of all elements 
                                selected by pattern in brackets notation. Example:
                                <ul>
                                    <li><code>.target:nth-last-child(5n)</code> - in case there are 34 elements that are a child
                                    of <code>.target</code> then 30-th element would be selected</li>
                                    <li><code>target:nth-last-child(even)</code> - In case of 41 elements being a child of 
                                    <code>.target</code> then 40-th element will be selected
                                    </li>
                                </ul>`
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
                                content:'Developer mozilla',
                                href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes'
                            },
                            {
                                elementType:'Link',
                                content:'W3schools tutorial',
                                href: 'https://www.w3schools.com/css/css_pseudo_classes.asp'
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        summary: 'tables',
        title: 'tables',
        cathegory: 'js',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Tables'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum et lacinia arcu, ut tempor lacus. Integer euismod, est et pharetra eleifend, 
                            magna nibh congue nulla, eu ornare lacus sem eu leo. Sed aliquet tincidunt neque non tempor. 
                            Sed feugiat, massa at tempus tincidunt, tortor turpis rhoncus orci, nec cursus purus dui vel ipsum. 
                            Sed pellentesque sem nec dictum auctor. Morbi tempus lectus vitae ultrices volutpat. 
                            Vivamus convallis mauris urna. Phasellus rhoncus felis eget mi tincidunt malesuada. 
                            Pellentesque in velit viverra nunc ultrices maximus. Duis in leo dolor.             
                        `
                    }
                ]
            },
        ]
    },
]

export function getTheoryDataCss(){
    return theoryDataCss;
}