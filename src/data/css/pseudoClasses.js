const data =         {
    summary: 'pseudo classes',
    title: 'pseudo classes',
    searchKeywords: `:dir :lang :any-link :link :visited :local-link :target :target-within :scope :hover :active
        :focus :focus-visible :focus-within :current :past :future :playing :paused :autofill :enabled :disabled 
        :read-only :read-write :placeholder-shown :dafault :checked :indeterminate :blank :valid :invalid :in-range
        :out-of-range :reequired :optional :user-invalid :root :empty :nth-child :nth-last-child :firslt-child :only-child
        :nth-of-type :nth-last-of-type :first-of-type :last-of-type :only-of-type`,
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
                        <b>Pseudo classes</b> allow to select an element based on its current or history state or position
                        in DOM tree.
                        They are not real classes added to HTML, but can be used as <a href="./selectors">css selectors</a>. 
                        For example a <code>:hover</code> pseudo class
                        allows to select an element that has mouse over it, a <code>div:nth-child(3)</code> pseudo class
                        allows to select an element that is a third in row child of each div. There is a great 
                        number of pseudo selectors in css, and there is no point in rewriting sources like 
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank">
                        developer.mozilla</a> webside, so lets focus only on some of them here.
                    `
                },
                {
                    elementType:'Headline-3',
                    content:'Structural pseudo-classes'
                },
                {
                    elementType:'Paraghraph',
                    content:'Matches elements based on their position in DOM.'
                },
                {
                    elementType: 'ExplanationList',
                    content: [
                        {
                            headline:':empty',
                            content:`Matches all elements having no children other than white spaces. <b>Beware!</b>
                            as this matches also elements not capable of having children, like an <code>input</code>.`
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
                            headline:':nth-first-child(An+B)',
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
                            headline:':nth-last-child(An+B)',
                            content: `Combines last child with nth child, this would select last of all elements 
                            selected by pattern in brackets notation. Example:
                            <ul>
                                <li><code>.target:nth-last-child(5n)</code> - in case there are 34 elements that are a child
                                of <code>.target</code> then 30-th element would be selected</li>
                                <li><code>target:nth-last-child(even)</code> - In case of 41 elements being a child of 
                                <code>.target</code> then 40-th element will be selected
                                </li>
                            </ul>`
                        },
                        {
                            headline: ':only-child',
                            content: 'matches elements having only one child,'
                        },
                        {
                            headline:':nth-of-type(An+B)',
                            content: `Matches nth child element of type of element on the left. Example:
                            <ul>
                                <li><code>:nth-of-type(n)</code> will match each element in DOM</li>,
                                <li><code>p:nth-of-type(2n)</code> will match each second 'p' child element in DOM</li>,
                                <li><code>div:nth-of-type(3n-1)</code> every third -1 element, so 3, 5, 8 ...</li>
                            </ul>`
                        },
                        {
                            headline:':nth-last-of-type(An+B)',
                            content: `Similar to <code>nth-of-type</code>, however matches element counting from the end:
                            <ul>
                                <li><code>#outlet div:nth-last-of-type(7n)</code>In case of 23 div child elements of 
                                element with id 'outlet', items 17, 10 and 3 would be chosen (indexing from 1) </li> 
                                <li><code>p:nth-last-of-type(2n-1)</code> in case of 6 child p elements, items 6, 4, 2 would be
                                chosen (indexing from 1) </li>,
                            </ul>`
                        },
                        {
                            headline:':first-of-type, :last-of-type, :only-of-type',
                            content: `As in example:
                            <ul>
                                <li><code>#outlet p:first-of-type</code> in case element has
<pre class="alert alert-dark">
    &lt;div id="outlet">
        &lt;span></span>
        &lt;input/>
        &lt;p>
    &lt;/div>
</pre>    
                                this p element will be matched, because it is the first of type,</li>      
                                <li><code>#outlet input:only-type-of</code> in case element has
<pre class="alert alert-dark">
    &lt;div id="outlet">
        &lt;span></span>
        &lt;input/>
        &lt;input/>
        &lt;p>
    &lt;/div>
</pre>    
                                Nothing will be selected, as input is not the only one of its type.</li>                       
                            </ul>`
                        }

                    ]
                },
                {
                    elementType:'Headline-3',
                    content:'input pseudo-classes'
                },
                {
                    elementType:'Paraghraph',
                    content:''
                },
                {
                    elementType: 'ExplanationList',
                    content: [
                        {
                            headline:':autofill',
                            content: `Input attribute <code>autocomplete</code> is for displaying a browser added 
                            menu with last used values of certain data type. For example last added e-mail addresses.
                            This matches an input that was filled by chosing element from this list,`
                        },
                        {
                            headline:':enabled',
                            content: `If input is enabled, can be interacted with,`
                        },
                        {
                            headline:':disabled',
                            content: `If an input is disabled and cannot be inteacted with,`
                        },
                        {
                            headline:':read-only',
                            content: `If element cannot be filled by a user, for example contenteditable is set to false,`
                        },
                        {
                            headline:':read-write',
                            content: `If element can be edited by a user. Also contenteditable set to true,`
                        },
                        {
                            headline:':placeholder-shown',
                            content: `If element displayes a placeholder (a html attribute available only on some inputs, not
                                on contenteditable),`
                        },
                        {
                            headline:':default',
                            content: `If element is checked by default. Element stayes default even after checking another one,`
                        },
                        {
                            headline:':checked',
                            content: `Checkbox or radio-button if it is currentl checked. This changes when other element is 
                            chosen and becomes checked, unlike in a <code>default</code> pseudo-class, as default element will
                            not change when interacted,`
                        }, 
                        {
                            headline:':indeterminate',
                            content: `A checkbox may be in indeterminate state, meatning it is neither true nor false. This is 
                            like a third boolean value, and comes handy when multiple checkboxes are set by a complicated algorithm,`
                        },   
                        {
                            headline:':valid',
                            content: `Matches an input with valid value,`
                        },       
                        {
                            headline:':invalid',
                            content: `Matches an input that has invalid value,`
                        },
                        {
                            headline:':in-range',
                            content: `Applies to an input with range limitations, thats value is in allowed range,`
                        },
                        {
                            headline:':out-of-range',
                            content: `Applies to an input with range limitations, thats value is out of allowed range,`
                        },
                        {
                            headline:':required',
                            content: `If input, textarea, select has a required attribute,`
                        },
                        {
                            headline:':optional',
                            content: `When input, textarea, select that does not have a required attribute,`
                        },
                        {
                            headline:':user-invalid',
                            content: `An input, textarea, select with invalid input, but only if user interacted wiht it.`
                        },
                    ]
                },
                {
                    elementType:'Headline-3',
                    content:'User action pseudo-classes'
                },
                {
                    elementType: 'ExplanationList',
                    content: [
                        {
                            headline:':hover',
                            content: 'Matches an element if mouse is placed over it'
                        },
                        {
                            headline:':active',
                            content: `Element that is being activated. On button example, active state starts when
                            mouse button is being pressed, and finishes with mouse button up. May be used to 
                            indicate element is being pressed. Significant with mobile devices, where user does not 
                            hover over an element very often`
                        },
                        {
                            headline:':focus',
                            content: 'When element was chosen with a mouse or a tab key'
                        },
                        {
                            headline:':focus-visible',
                            content: `
                            User agent dependent. Different behaviour when an element is selected with mouse click, and
                            different when tab key used. Visible on for example a button element.`
                        },
                        {
                            headline:':focus-within',
                            content: `Should be used on parent element. If descendant gains focus, this selector matches.
                            Can be used for example on a <code>form</code> element. When descendants gain focus, form will
                            change styling.`
                        },
                        {
                            headline:':selection',
                            content: `Matches a portion of a document selected by user, for example with press left mouse button and 
                            drag it over selected element.`
                        },
                    ]
                },
                {
                    elementType:'Headline-3',
                    content:'Location pseudo-classes'
                },
                {
                    elementType: 'ExplanationList',
                    content: [
                        {
                            headline:':link',
                            content: 'A not visited link,'
                        },
                        {
                            headline:':any-link',
                            content: 'Both: visited and not visited links,'
                        },
                        {
                            headline:':target',
                            content: `
                            Element that is the target of the link. Useful, when link is on the same page:
                            <span id="targetControl">
                            <a href="#targetExample">Try it out</a>
                            <a href="#" class="clear">Clear</a>
                            </span>
                            <style>
                                #targetParent li:target{background-color: yellow;}
                                #targetControl a{
                                    padding:2px;border-radius: 3px;
                                    display: inline-block;
                                    background-color: green;
                                    color: white;
                                    text-decoration: none;
                                }
                                #targetControl a:hover{
                                    background-color: rgb(155,220,150);
                                }
                                #targetControl .clear:hover{background-color:rgb(255,150,150);}
                                #targetControl a.clear{background-color:red;}
                            </style>
                            <ul id="targetParent">
                                <li>This is not the element</li>
                                <li id ="targetExample">This is the element</li>
                                <li>This is not the element</li>
                            </ul>
                            `
                        },
                    ]
                },
                {
                    elementType:'Headline-3',
                    content:'Other'
                },
                {
                    elementType: 'ExplanationList',
                    content: [      
                        {
                            headline:':not(selector)',
                            content: `Selects all elements that do <strong>not</strong> match the given selector.
                            `
                        },                  
                        {
                            headline:':host',
                            content: `
                            In shadow DOM matches the host of a <code>shadow-root</code>. Usable also in Angular for 
                            targeting a component from inner css file.
                            `
                        },
                        {
                            headline:':host-context(selector)',
                            content: `
                            In shadow DOM matches the host of a <code>shadow-root</code> only if any ancessor of the host
                            matches the given selector. May be used to implement a dark theme,
                            `
                        },
                        {
                            headline:':is(selector, selector)',
                            content: `Takes a selector list, and matches each element in this list. This element counts to
                            <a href="./specifity">specifity</a> as a class, so multiplication 10:
                            <ul>
                                <li><code>:is(.danger, .warning, .info) p</code> will match all of <code>.danger p</code>,
                                <code>.warning p</code>, <code>.info p</code>.</li>
                            </ul>
                            `
                        },
                        {
                            headline:':where(selector, selector)',
                            content: `Exectly the same as an <code>is</code> pseudo-class, except for the fact, that
                            it <strong>counts to specifity as 0</strong>:
                            <ul>
                                <li><code>:is(.danger, .warning, .info) p</code> will match all of <code>.danger p</code>,
                                <code>.warning p</code>, <code>.info p</code>,</li>
                            </ul>
                            `
                        },
                        {
                            headline:':first-letter',
                            content: `Selects the first letter of each element,
                            `
                        },
                        {
                            headline:':first-line',
                            content: `Selects the first line.
                            `
                        },
                        {
                            headline:':defined',
                            content: `For the CWC: custom web components. If the component is defined with the 
                            <code>window.customElements.define()</code>, this will be selected. In case of 
                            <code>:not(:defined)</code> all not registered elements may be made to be transparent,
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
};

export default function getPseudoClassesData(){
    return data;
}