
let data =     {
    summary: 'angular bindings',
    title: 'Angular bindings',
    searchKeywords:`

    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Bindings in angular'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Binding is for keeping the view of the component aligned with the component state. Works with
                    properties of DOM elements, components and directives. Not with HTML attributes.
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>id</code> is an example of the DOM property having 1:1 mapping with the html attribute,`,
                        `<code>aria-</code> have no corresponding DOM property,`,
                        `<code>textContent</code> or <code>innerHTML</code> are DOM properties havind no corresponding 
                        attributes,`
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    There is the <code>attributes</code> parameter in DOM elements, so the attributes in angular may be 
                    bidned with the <code>[attr.disabled] = "condition" ? 'disabled' :null</code>
                    `
                },

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Types of bindings'
                },
                {
                    elementType:'SmallHeadline',
                    content:`
                    Property bindings
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>[targetProperty]="expression"</code> binds the expression to the property of the element.
                    Expression may use variables defined in the component. Each time the value to which the expression
                    evaluates changes, the targetProperty will also be modified and send to the child component. In this case 
                    the view will be aligned with the state chenge.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    In this example the child component should not change the <code>targetProperty</code>
                    as it is the property of this component, and components should not change own properties. However
                    even if the child component would change its own <code>targetProperty</code>, the parnt component
                    would not know about this, as this is the one way binding only.
                    `
                },

                {
                    elementType:'Code',
                    content:`
<pre>
<img [src] = "imageUrl" [alt] = "imageAlternativeText">
</pre>
<pre>
<game-board-field [displayedFigure]="currentFigure"></game-board-field>
</pre>                    
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Binding style, class or attribute is similar to the property binding.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
<div [style.color]="divColor"></div>
</pre>
<pre>
<button [attr.aria-label] = "some label">some button</button>
</pre>
<pre>
<span [class.some-class = "isSomeClass"]></span>
</pre>

                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:`
                    innerHTML binding
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Can be done in two ways:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
<div [innerHTML]="divContent"></div>
</pre>
<pre>
<div>{{divContent}}</code>
</pre>

                    `
                },



                {
                    elementType:'SmallHeadline',
                    content:`
                    Event bindings
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>[eventOnChild]="onEventHandler($event)"</code> binds the eventOnChild event known to the 
                    child component, with the <code>onEventHandler</code> function call. The <code>$event</code> is the 
                    event that will be passed as an argument to this event handler.
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
                    content:'angular.io',
                    href: 'https://angular.io/guide/binding-syntax',
                    description:'Overview of angular bindings,'
                },
            ]
        }
    ]
};

export default function getBindingsData(){
    return data;
}