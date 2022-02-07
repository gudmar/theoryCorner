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
                    elementType: 'Paragraph',
                    content: `
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
                                                Not an angular creation. This is run by the typeScript
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
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            }
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
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            }
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
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            }
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
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            }
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
                                                elementType:'SmallHeadline',
                                                content:`Purpose`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            }
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
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            }
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
                                                elementType:'SmallHeadline',
                                                content:`When triggered`
                                            },
                                            {
                                                elementType:'SmallHeadline',
                                                content:`What to put here`
                                            }
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
                                                content:`Event handler remove, unsubscribe`
                                            }
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