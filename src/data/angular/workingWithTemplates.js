
let data =     {
    summary: 'angular working with templates',
    title: 'Angular templates',
    searchKeywords:`

    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Angular: working with templates'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Placing external content into a component'
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">Normally below is not allowed.</div>
<pre>
&lt;parent-content>
  &lt;child-content></child-content>
&lt;/parent-content>
</pre>                    
                    <div class="note">However, there is a way to insert a child componen inside a parent:</div>
<pre>
&lt;div>projected content begins</div>
    &lt;ng-content></ng-content>
&lt;div>projected content ends</div>
</pre>                    
                    <div class="note">Now child will be placed istead of the <code>ng-content</code> tag</div>

                    `
                },

                {
                    elementType:'Paragraph',
                    content:`<code>ng-content</code> takes one attribute: <code>selector</code>, that is a 
                    css selector allowing to refer to the external content. There is a difference between 
                    <strong>projecting</code> a component with the <code>ng-content</code> tag, and
                    putting a child directly in the template like below:`
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">Normally below is not allowed.</div>
<pre>
&lt;parent-content>
&lt;/parent-content>
</pre>                    
                    <div class="note">And now inside this parent template:</div>
<pre>
&lt;div>view content</div>
    &lt;child-component></child-component>
&lt;div>Some content</div>
</pre>                    

                    `
                },

                {
                    elementType:'UnsignedList',
                    content:[
                        `When using <code>ng-content</code> tag and projecting a component, <code>@ContentChild</code>
                        should be used to refer to the child, and <code>ngAfterContentInit</code> and 
                        <code>ngAfterContentChecked</code> should be used. This technic is called a <strong>projection</code>,`,
                        `In case of the placing child directly into the parent component, there is a <code>@ChildView</code>
                        decorator for refering to the child content, and <code>ngAfterContentChecked</code> together with
                        <code>ngAfterContentInit</code> lifecycle methods should be used.`
                    ]
                },

                {
                    elementType:'NoteWarning',
                    content:`Can other attributes, specific to the placed component be used with the ng-content?`
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
                    href: ' ',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getWorkingWithTemplatesData(){
    return data;
}