import { format } from "url";
import { directive } from "@babel/types";

// NgForm directive is automaticly created and attached to the &lt;form> tag in the template with the import of 
// <code>FormsModule</code> to the component

// ngModel is a directive that is declared in the <code>FormsModule</code>. It allows to bind controls in the
// template driven form to the properties of the data model (the properties in the component)

// Without the ngModel it would be unpossible to make a 2 way data binding with the 2 way binding syntsx 
// to the HTML element, as simple HTML elements (non components) cannot have event handlers defined the other way
// than using the event binding syntax. So of the event is binded with the (click)="effect" already, 
// there is not point in adding a [(prop)]="componentProperty".

// When [(ngModel)] is defined on an element, that element must have a unique name within a format. This name 
// will be used to register the element withing the <code>NgForm</code> directive

let data =     {
    summary: 'angular forms',
    title: 'Angular froms',
    searchKeywords:`
    ngModel NgForm input from angular binding two direction way binding
    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'A from witn angular. More about binding.'
                },

                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'ng-forms-about', title: 'Forms module'},
                        {id: 'ng-forms-usage', title: 'NgForms NgModel usage'},
                        {id: 'ng-forms-example', title: 'Example: overview'},
                        {id: 'ng-forms-example-service', title: 'Example: service with data'},
                        {id: 'ng-forms-example-ts', title: 'Example: file with logic'},
                        {id: 'ng-forms-example-HTML', title: 'Example: HTML file'},
                        {id: 'ng-forms-important', title: 'Binding: important'},
                    ]
                },
                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-about'>Forms module</span>`
                },

                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-usage'>NgForms NgModel usage</span>`
                },

                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-example'>Example: overview</span>`
                },

                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-example-service'>Example: service with data</span>`
                },
                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-example-ts'>Example: file with logic</span>`
                },
                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-example-HTML'>Example: HTML file</span>`
                },
                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-important'>Binding: important</span>`
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
                    content:'angular.io',
                    href: 'https://angular.io/guide/forms',
                    description:'Tutorial on creating a form'
                },

            ]
        }
    ]
};

export default function getFormsData(){
    return data;
}
