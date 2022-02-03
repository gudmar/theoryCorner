
let data =     {
    summary: 'angular components',
    title: 'Angular components',
    searchKeywords:`

    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Components in angular'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A component is an encapsulated web page element that has its view and logic. Component may be a button,
                    or a bigger creation consisting of more components. Example components are:
                    a menu, a button, a form, a header, a card, a paragraph...
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The important part about the component is that is should be encapsulated away from other components. 
                    The component may have its own state. If it does, it should control it. Components parent should communicate
                    with the component with a usage of properties, and the component should communicate with the parent with 
                    events. It is not allowed for the component to change its own properties.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The component should control its internal state, but if it shares some state with other components, it may be 
                    wise to pull this part of the state up, so the state is controlled by the first parent of the components the 
                    state is common for.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    It may be chosen to introduce a mediator pattern for the communication between components, or a common state 
                    for (also a mediator pattern) for the whole application. This may be a good approach if the application is 
                    larger and pulling the states up is too much work.
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `
                    In angular
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                            `A component consists of 4 files:
                            <ul>
                            <li><code>some.component.html</code>: A content of the component in the html, this file 
                            is not understandable by the browser, as it may contain bindings, directives and pipes,</li>
                            <li><code>some.component.ts</code>: a typeScript file for controlling the component state.
                            No logic should be placed here. Services, directives and pipes are for that.</li>
                            <li><code>some.component.spec.ts</code>: this is a file with component tests. Only 
                            bindings should be tested here. Logic should be tested in services and directives files. All 
                            logic should be mocked,</li>
                            <li><code>some.component.scss</code>: a style file. May be css. This style is encapsulated, 
                            will be available only in this component,</li>
                            </ul>
                            `
                    ]
                    
                },


                {
                    elementType: 'SmallHeadline',
                    content: `
                    An example
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        A real life example from my tic-tac-toe game. A navigation menu.
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>contentDict</code> is an input passed to the component as a prop,`,
                        `<code>contentShouldBeSwitched</code> is an output, an event informing the parent that 
                        a button within this component was clicked,`,
                        `<code>[name]="title"</code>: is a one side binding passing the title to the 
                        <code>navi-button</code> component as prop,`,
                        `<code>[isActive]:shouldThisButtonBeActive(title)</code>: passes the result of the 
                        <code>shouldButtonTeActive</code> function to the <code>isActive</code> property of the 
                        <code>navi-button</code> component,`,
                        `<code>(activeStateSet) = "handleButtonWantsToBeActive($event)"</code> is a one way event
                        binding. If <code>activeStateSet</code>, an event defined in the <code>navi-button</code> 
                        component, is triggered, the <code>handleButtonWantsToBeActive</code> will be called with the 
                        <code>title</code> as the parameter. The <code>handleButtonWantsToBeActive</code> function
                        emits the <code>contentShouldBeSwitched</code> event, informing the navigation-menu parent that
                        a button inside the navigation menu was clicked,`,
                        `<code>&lt;navi-button *ngFor="let title of getKeysFromDict()" [uniqueId] = "title">&lt;navi-button></code>:
                        runs a build-in <code>ngFor</code> directive. This <code>navi-button</code> element will be 
                        repeated for each element returned by the <code>getKeysFromDict()</code> function call,`,
                        `<code>selector: 'navigation-menu'</code> is the tag of the component definition, this component 
                        will be referred in the html as the <code>&lt;navigation-menu</code>`,
                        `<code>templateUrl<code>: is the path to the html template for this component,`,
                        `<code>styleUrls</code> is an array of files describing the style of the component. This styles will
                        be applied <b>only</b> to this component, and will be transparent in the rest of the application,`
                    ]
                },
                {
                    elementType: 'Code',
                    content: `
                    <div class="note">
                    <b>HTML</b>
                    </div>
<pre>
&lt;div class="navigation-menu">
    &lt;navi-button *ngFor="let title of getKeysFromDict()" [uniqueId] = "title"
            [name] = "title" 
            [isActive] = "shouldThisButtonBeActive(title)"
            (activeStateSet) = "handleButtonWantsToBeActive($event)">
    &lt;/navi-button>
&lt;/div>
</pre>          

                    <div class="note">
                    <b>component.ts</b> file
                    </div>
<pre>
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  @Input() contentDict: {[title: string]: string} = {};
  @Output() contentShouldBeSwitched = new EventEmitter<string>();
  Input() currentActiveButton: string = this.getKeysFromDict()[0];
  constructor() { }

  handleButtonWantsToBeActive(data: any){
    this.contentShouldBeSwitched.emit(data)
    this.currentActiveButton = data
  }

  getKeysFromDict(){
    return Object.keys(this.contentDict)
  }

  shouldThisButtonBeActive(id: string){
    return id == this.currentActiveButton;
  }

}
</pre>               
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content: '@Component decorator'
                },
                {
                    elementType:'Paragraph',
                    content: `
                    A decorator is a design pattern, where an additional functionality is added to the 
                    function, parameter, class by wrappling the target in an additional function. So the 
                    <code>@Component</code> is a function, taking some parameters. It adds functionalities 
                    to the class, and makes an angular component form that class. It accepts below properties, and 
                    even more (refer to the documentation in the reference section)
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>changeDetection?</code> the change-detection strategy for the component,`,
                        `<code>templateUrl?</code> or <code>template</code>: the first parameter is for the 
                        url to the html template that will be used to build the component. If it is not present, then
                        the <code>template</code>, the inline html template for the component should be provided,`,
                        `<code>styles</code> or/and <code>styleUrsl</code>: urls or inline style arrays to be applied
                        only to this component,`,
                        `<code>animations?</code>: animation triggers,`,
                        `<code>encapsulation?</code>: encapsulation policy:
                        <ul>
                        <li><code>ViewEncaplusation.Emulated</code>: default, emulate shadowDOM for styling,</li>
                        <li><code>ViewEncapsulation.None</code>: the component styles will be applied globally, without
                        any encapsulation</li>
                        <li><code>ViewEncapsulatoin.ShadowDom</code>: encapsulation for the styling will be applied 
                        in the shadow DOM</li>
                        </ul>
                        `
                    ]
                }




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
                    href: 'https://angular.io/guide/component-overview',
                    description:'component overview'
                },
                {
                    elementType:'Link',
                    content:'angular.io',
                    href: 'https://angular.io/api/core/Component',
                    description:'@Component decorator'
                },
                {
                    elementType:'Link',
                    content:'angular.io',
                    href: 'https://angular.io/guide/animations',
                    description:'Animations guide'
                },
            ]
        }
    ]
};

export default function getComponentData(){
    return data;
}
