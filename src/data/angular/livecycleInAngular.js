import { directive } from "@babel/types";
import { Component } from "react";

// constructor, not a part of Angular

// export class DoCheckComponent implements DoCheck, OnChanges, OnInit
// a way to use a lot implementations,
// OnChenge shuld not be used with the DoCheck



let data =     {
    summary: 'angular livecycle',
    title: 'Angular livecycle',
    searchKeywords:`

    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Livecycle in angular'
                },
                {
                    elementType:'Paragraph',
                    content:`Lifecycle hooks are launched both: during the directive lifecycle, and during the 
                    component lifecycle.`
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Every component/directive has its lifecycle. It starts when the component/directive is created
                    with the <code>new</code> operator, and ends when the component/directive is removed. 
                    Meanwhile, the component/directive internal state may change. Inputs may change. 
                    When changes occur, the view may need to be updated by Angular. When component or directive 
                    initializes, changes or before it is destroyed it may be needed to run some specific operations.
                    To hook into a components or directives lifecycle, there are some methods introduced. 
                    Developer may implement some of those methods, all of them or none of them.
                    `
                },

                {
                    elementType:'Headline-3',
                    content:`Lifecycle methods division`
                },
                {
                    elementType:'Paragraph',
                    content:`As mentioned in one of the references to this article, lifecycle methods may be divided
                    to:`
                },

                {
                    elementType:'SmallHeadline',
                    content:`Host component/directive hooks:`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `constructor`,'OnChanges','OnInit', 'DoCheck', 'OnDestroy'
                    ]
                },
                
                {
                    elementType:'SmallHeadline',
                    content:`Child component/directive hooks:`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `AfterContentInit`, 'AfterContentChecked', 'AfterViewInit','AfterViewChecked'
                    ]
                },

                {
                    elementType:'NoteWarning',
                    content:`
                    Note, that some lifecycle methods may be called a great number of times. The most 
                    called methods are: <code>ngDoCheck</code>, <code>ngAfterContentChecked</code>,
                    <code>ngAfterViewChecked</code>. Even a little touch of the button, checking a 
                    checkbox or hovering over something may cause a chain reaction. Methods 
                    given as an example are called on every possible occasion, even when an element not 
                    related to the components they are called on is touched. This will cause a great performance 
                    issues when used not wisely.
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`
                    Lets considere creation of a parent and a single child. Then let's change this childs <code>@Input()</code>
                    property 10 times. This is the result:
                    `
                },
                {
                    elementType: 'Image',
                    name: 'lifecycle_angular_1added_10modified_chart.png',
                    alt: '1 child added 10 times modified'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Now let's create 10 child elements, clear the logging pane, and cause 10 changes of only one 
                    of the children. The problem is, that clearing the logging pane already causes a lot of 
                    lifecycle methods to be called:
                    `
                },
            
                {
                    elementType: 'Image',
                    name: 'lifecycle_angular_10added_cleared_all.png',
                    alt: '10 child added cleared'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Now let's change a single input of a single child 10 times (with a parent element and 
                10 children; other components on the page are not logging lifecycle methods here.)
                    `
                },
                {
                    elementType: 'Image',
                    name: 'lifecycle_angular_10added_cleared_1inputChanged10times_small.png',
                    alt: '10 child added cleared, and a single elements single input changed 10 times.'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    10 elements and 10 input modifications are 10 x 10 = 100 changes. A button was clicked 10 times,
                    causing 10 <code>ngOnCheck</code> runs and clearing content gave 10 <code>ngOnCheck</code> runs.
                    This meens, that no matter that the input of a single element was changed only 10 times.
                    This caused <code>ngOnCheck</code> run 10 times on each sibling, so 100 runs. There are other 
                    methods that are equaly willingly called: <code>ngAfterContentChecked</code> and 
                    <code>ngAfterViewChecked</code>. So this single change to one input in a very small example 
                    caused already 300 function calls. And what if those children had grand-children and so on...
                    `
                },


                {
                    elementType: 'HiddenDescription',
                    content: {
                        legend: [
                            {
                                type: 'One Time',
                                styleClasses: 'btn btn-danger text-white m-4 mb-1 mt-1',
                                description: 'Called only once, on the component initialization'
                            },
                            {
                                type: 'Repeating',
                                styleClasses:'btn btn-success mb-1',
                                description: 'Called each time change detection runs'
                            }
                        ],
                        items:[
                            {
                                type: 'One Time',
                                title: 'constructor',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Not an angular creation. This is the 
                                                Java Script class constructor, that is run when angular 
                                                creates a component/directive instance with the <code>new</code>
                                                operator.
                                                `
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Constructor is only for setting some properties with a simple values.
                                                In most circumsantces can be kept empty. In some occasions can be even
                                                omitted. Then a default one will be provided.
                                                `
                                            },  
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                A constructor is good for injecting services.
                                                `
                                            }
                                        ]
                                    }
                            },
                            {
                                type: 'Repeating',
                                title: 'ngOnChanges',
                                description: {
                                        elementType:'Section',
                                        content:[
                                            {
                                                elementType:'NoteWarning',
                                                content:`This launches quite often and 
                                                may have significant impact of performance`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`React on the <code>@Input()</code> decorated properties
                                                change.`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`When called`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`Only when <strong>input properties</code> of the component
                                                change. If there are no input properties this hook <strong>
                                                may never be called</strong>. This method is not called on the 
                                                components that will for sure not be impacted with the change.`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            },
                                            {
                                                elementType:'UnsignedList',
                                                content:[
                                                    `Web worker requests,`,
                                                    `Server requests,`,
                                                    `Changing elements bound to the view, as they still will rerender,`,
                                                    `Should be lean, not to spoil performance,`
                                                ]
                                            },

                                        ]
                                    }
                            },
                            {
                                type: 'One Time',
                                title: 'ngOnInit',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`Initialize the component. Inputs are already created, 
                                                constructor and <code>ngOnCheck</code> is already run. View is still 
                                                not available. <b>Note</b> this method is called only once, so 
                                                no great impact on performance.`
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When called`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                <strong>Only once</strong> when component is initialized, 
                                                after inputs were set, after first call of the <code>ngOnChanges</code>
                                                `
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            },
                                            {
                                                elementType:'UnsignedList',
                                                content:[
                                                    `This is run only once,`,
                                                    `Server requests,`,
                                                    `Web workers requests,`,
                                                    `Set up the component, after Angular sets the input properties`
                                                ]
                                            },
                                        ]
                                    }     
                            },
                            {
                                type: 'Repeating',
                                title: 'ngDoCheck',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'NoteWarning',
                                                content:`This method is called every time something changes.
                                                Even if there are sibling elements, this is called on every single
                                                sibling element change.`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Custom change detection, code to be executed in situations 
                                                when Angular may miss some change. This is executed on every 
                                                possible component on every small change in the application, so 
                                                no possible change is missed. Sometimes even a mouse over a
                                                component may launch this methods.
                                                `
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When called`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`On every change detection cycle after <code>ngOnInit</code>
                                                if it was executed, or after <code>ngOnChanges</code>`
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                May be used for manual change detections with for example an 
                                                <code>onPush</code> change detection strategy. 
                                                View will not be updated if a nested value of the object
                                                set as the <code>Input</code> changes. In this cases 
                                                changes should be detected manualy. A component should be referenced
                                                with a <code>ChangeDetecterRef</code> and <code>markForCheck</code>
                                                or <code>detectChanges</code> should be called.
                                                `
                                            },

                                        ]
                                    }
                            },

                            // SPELL CHECKING HERE
                            {
                                type: 'One Time',
                                title: 'ngAfterContentInit',
                                description: {
                                    elementType:'Section',
                                    content:[
                                        {
                                            elementType:'Paragraph',
                                            content:`This method may be compared to the <code>ngOnInit</code>
                                            but not for the component, but for its projected content. It will
                                            be called after components content is initiated. `
                                        },

                                        {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`A content is the component, that is projected into the host
                                                component. This is not the direct usage of a child component in the 
                                                html template of the parent, but rather nesting external component with a 
                                                <code>ng-content</code>`
                                            },
                                            {
                                                elementType:'Code',
                                                content:`
                                                <pre>
&lt;parent>
    &lt;child>&lt;child>
&lt;/parent>                                                
                                                </pre>
                                                <div class="note">And the parent component</div>
                                                <pre>
&lt;div>
...
&lt;ng-content>&lt;ngcontent>
&lt;/div>
                                                </pre>
                                                `
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`So <code>ngAfterViewInit</code> is launched, when only
                                                all content is projected to the host component, and all 
                                                <code>ContentChild</code> decorated properties are updated.
                                                `
                                            },
                                            
                                            

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When called`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`When components content: <strong> projected
                                                component</strong> is injected, and <code>ContentChild</code>
                                                decorated properties are updated.
                                                Just after <code>ngDoCheck</code> of the component. 
                                                <strong>Only once</code>, when
                                                the content is initialized for the first time.
                                                Interesting thing is, that this method is called even if 
                                                a component has no extenal content that needs to be projected.`
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Code that needs to run after content that will be projected to 
                                                descendants is initilaized. Still good place to make 
                                                changes that will update projected component.
                                                `
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Run only once.
                                                `
                                            },
                                            

                                        ]
                                    }
                            },
                            {
                                type: 'Repeating',
                                title: 'ngAfterContentChecked',
                                description: {
                                    elementType:'Section',
                                    content:[
                                        {
                                            elementType:'NoteWarning',
                                            content:`
                                            No code affecting view of the projected external content should be 
                                            added here, as content component is already checked. If
                                            there is an attempt to modify projected contents view, it may result 
                                            in <code>ExpressionChangedAfterItHasBeenCheckedError</code>.
                                            A way around this error is running change in an async function 
                                            like a <code>setTimeout</code>. However, triggerning a change to a 
                                            projected component with an async function here will result in 
                                            an infninte loop, that will not be detected by Angular or browser.
                                            `
                                        },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`Run code that needs to be executed after external projected
                                                components changes are checked`
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`After
                                                <code>afterContentInit</code> or 
                                                <code>ngDoCheck</code>, depending if <code>afterContentInit</code>
                                                is executed.`
                                            },
                                            {
                                                elementType:'NoteWarning',
                                                content:`This will be called even if a component has no content to be
                                                projected. Moreover this method is called very freequently. Same 
                                                often as <code>ngDoChange</code>, so will cause performance issues
                                                if is not lean enough.`
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:``
                                            },
                                            

                                        ]
                                    }
                            },
                            {
                                type: 'One Time',
                                title: 'ngAfterViewInit',
                                description: {
                                    elementType:'Section',
                                    content:[
                                        {
                                            elementType:'Paragraph',
                                            content:`View are child components and elements that are referenced
                                            directly in the components template:`
                                        },
                                        {
                                            elementType:'Code',
                                            content:`
<pre>
&lt;div>
    &lt;some-child-component>&lt;/some-child-component> 
    //this is the view, not the content.
&lt;div>
</pre>                                            
                                            `
                                        },
                                        {
                                            elementType:'Paragraph',
                                            content:`No <code>ng-content</code>. This elements are accessed from the 
                                            ts code with <code>ChildView</code> decorators.`
                                        },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Run code just after all descendant components and elements of the 
                                                host component are initialized.
                                                `
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`<strong>Only once</code> after component view descendants 
                                                are initialized, and porperties marked with <code>ViewChild</code>
                                                are updated.`
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`Good place to put code that would affect the view of the 
                                                descendats. Some content from the server may be fetched and injected
                                                to the descendants for example.`
                                            },

                                        ]
                                    }
                            },
                            {
                                type: 'Repeating',
                                title: 'ngAfterViewChecked',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`Run code that needs to be executed after the 
                                                view descendants are checked for differences with the content displayed
                                                on the sreen.
                                            `
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`After all view descendants are checked.`
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                No code updating the displayed view, as it may cause an 
                                                <code>ExpressionChangedAfterItHasBeenCheckedError</code>.
                                                If such code would be run in an async manner here, it would 
                                                cause infinite loop that would not be detected by the Angular
                                                or browser. 
                                                `
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                This method is run quiet freequently. The same paste as the <code>ngDoCheck</code>
                                                so with each buttin click, each checkbox checked. 
                                                `
                                            },

                                        ]
                                    }
                            },
                            {
                                type: 'One Time',
                                title: 'ngDestroy',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },


                                            {
                                                elementType:'Paragraph',
                                                content:`Clean before element is removed`
                                            },

                                            

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`Just before the component is removed from the view`
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`Event handler removals, unsubscriptions`
                                            },
                                           
                                        ]
                                    }
                            }
                            




                        ]

                        
                    }
                    
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    Lifecycle methods should be kept lean
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>ngOnChange</code> should not be used with <code>ngDoCheck</code>, as they are
                    redundant.
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
                    content:'blog.logrocket.com',
                    href: 'https://blog.logrocket.com/angular-lifecycle-hooks/',
                    description:'Very good explanation'
                },
                {
                    elementType:'Link',
                    content:'Example angular.io',
                    href: 'https://stackblitz.com/run?file=src/app/app.component.html',
                    description:'A life example how often and when lifecycle methods are fired. Description in the next link'
                },
                {
                    elementType:'Link',
                    content:'angular.io',
                    href: 'https://angular.io/guide/lifecycle-hooks',
                    description:'Description'
                },
                {
                    elementType:'Link',
                    content:'angular.io',
                    href: 'https://angular.io/guide/lifecycle-hooks',
                    description:'Description'
                },
            ]
        }
    ]
};

export default function getLivecycleAngularData(){
    return data;
}