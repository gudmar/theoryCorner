import { directive } from "@babel/types";
import { Component } from "react";

// constructor, not a part of Angular

//ngOnChanges(): VERY FREQUENTLY, impacts performance, fired when angular sets of resets data-bound input properties.
                // A SimpleChange object of current and previous property values is send
                // IF a component has no inputs, this method WILL NEVER be triggered   
                // 
                // When data bound property changes (for example in input box)             

//ngOnInit(): called shortly after the first ngOnChanges. If ngOnChanges is not called due to lack of 
            // inputs, this is called anyway. Is called ONLY ONCE. This is for initializing the directive or the component 
            // after Angular first displays the data-bound properties and sets input properties
            //
            // input property is set

//ngDoCheck(): Detecting and acting upon the changes that angular will not detect on its own.
        // When angular change detection mechanism runs. When angular 'feels' like something changed

// ngAfterContentInit(): Called ONLY ONCE after the first ngDoCheck. Respond after Anglar projects external content into 
            // the components view

// ngAfterContentChecked(): After the ngAfterContentInit, and then after each ngDoCheck. Respond after Angular 
        // checks the content projected into the directive or the component          
        //
        // When change is detected in the project  

// ngAfterViewInit() Respond after Angular initializes the components view AND child views, or after Angular 
        // initializes view of the component that directive is applied to        

// ngAfterViewCHecked(): respond after Angular checks the components view and child views,

// ngOnDestroy(): Called immediately before the angular destroys the Component or directive
      // Celaunup, unsubscribe, detach event handlers


//       First one is kick start event ngOnchanges(), ngOnit(), ngDoCheck()
// Second one is events for projected contents ngAfterContentInit(), ngAfterContentChecked()
// Finally third one is View component events ngAfterViewInit(). ngAfterViewChecked()

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
                    Meanwhile the component/directive internal state may change. Inputs may change. 
                    When changes occure, the view may be updated by Angular. When component or directive 
                    initializes, changes or before it is destroyed it may be needed to run some specific operations.
                    To hook into a components or directives lifecycle, there are some methods intorduced. 
                    Developer may implement some of those methods, all of them or none of them.
                    `
                },

                {
                    elementType:'Headline-3',
                    content:`Lifecycle methods division`
                },
                {
                    elementType:'Paragraph',
                    content:`As mentioned in one of the references to this artice, lifecycle methods may be divided
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
                    Lets concidere creation of a parent and a single child. Then lets change this chids <code>@Input()</code>
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
                    Now lets create 10 child elements, clear the logging pane, and cause 10 changes of only one 
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
                    Now let's change an single input of a single child 10 times (with a parent element and 
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
                                styleClasses: 'btn btn-danger text-white m-2',
                                description: 'Called only once, on the component initialization'
                            },
                            {
                                type: 'Repeating',
                                styleClasses:'btn btn-success m-2',
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
                                                content:`This lauches quite often and 
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
                                                    `Changing elements binded to the view, as they still will rerender,`
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
                                                    `Web workers requests,`
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
                                                no possible change is missed.
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
                                                content:``
                                            },

                                        ]
                                    }
                            },
                            {
                                type: 'One Time',
                                title: 'ngAfterContentInit',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:``
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When called`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`When components content (<strong>children</code>) 
                                                was initialized.
                                                Just after <code>ngDoCheck</code>. <strong>Only once</code>, when
                                                the content is initialized for the first time.`
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
                                type: 'Repeating',
                                title: 'ngAfterContentChecked',
                                description: {
                                    elementType:'Section',
                                    content:[
                                        {
                                            elementType:'NoteWarning',
                                            content:`
                                            The last opportunity to make some state changes, that would impact the 
                                            view. If done later, the <code>ExpressionChangedAfterItHasBeenCheckedError</code>
                                            will appear, meaning that contant was changed after the last content check was perforemed.
                                            It should be avioded to make changes after this method was called. If it happens and 
                                            cannot be avoided there is a work-around: calling the change in an async function (like 
                                            a <code>setTimeout</code> without any second argument). 
                                            <br>
                                            <b>NOTE</b> this work-around approach may cause an infinite loop, if the <code>ngAfterViewChecked</code>
                                            causes the view to rerender.
                                            `
                                        },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:``
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`The call is repeated after the <code>afterViewInit</code> and <code>ngAfterContentChecked</code>`
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
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:``
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:``
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
                                                content:``
                                            },

                                            {
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:``
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
                                                elementType:'Paragraph',
                                                content:``
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
                                                content:`Event handler remove, unsubscribe`
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:``
                                            },

                                        ]
                                    }
                            }
                            




                        ]

                        
                    }
                    
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
            ]
        }
    ]
};

export default function getLivecycleAngularData(){
    return data;
}