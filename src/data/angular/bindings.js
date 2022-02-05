
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
                    <code>[targetProperty]="expression"></code> binds the expression to the property of the element.
                    Expression may use variables defined in the component. Each time the value to which the expression
                    evaluates changes, the targetProperty will also be modified and send to the child component. In this case 
                    the view will be aligned with the state chenge.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>&lt;span contenteditable [innerHTML]="variable">&lt;/span>: if the <code>innerHTML</code>
                    value changes, the <code>variable</code> will not be changed, as this is the one way binding.
                    `
                },

                {
                    elementType:'Code',
                    content:`
<pre>
&lt;img [src] = "imageUrl" [alt] = "imageAlternativeText">
</pre>
<pre>
&lt;game-board-field [displayedFigure]="currentFigure"></game-board-field>
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
&lt;div [style.color]="divColor"></div>
</pre>
<pre>
&lt;button [attr.aria-label] = "some label">some button&lt;/button>
</pre>
<pre>
&lt;span [class.some-class] = "isSomeClass">&lt;/span>
</pre>

                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:`
                    Text binding
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    This will not work with properties, only a text one way binding:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
&lt;div [innerHTML]="divContent">&lt;/div>
</pre>
<pre>
&lt;div>{{divContent}}</div>
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
                    event that will be passed as an argument to this event handler. This is an one way biniding, infroming
                    a parent that something happend in the child component. 
                    `
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note"><b>A child component</b>: HTML</div>
                    <pre>
&lt;div class="button">{{name}}&lt;/div>
                    </pre>
                    <div class="note"><b>A child component</b>: .ts</div>
                    <pre>
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'some-button',
    templateUrl: './some-button.component.html',
    styleUrls: ['./some-button.component.scss']
})
export class SomeButtonComponent {
    @Input() name: string = '';
    constructor() { }
}
                           
</pre>

                    <div class="note"><b>A parent component</b>: HTML</div>
<pre>
&lt;div class="button-wrapper">
    &lt;some-button *ngFor="let buttonName of buttons
        [name] = "buttonName"
        (click) = "handleButtonClicked($event, buttonName)"
    >
    &lt;/some-button>
&lt;/div>
</pre>
                    <div class="note"><b>A parent component</b>: .ts</div>
<pre>
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'some-button-menu',
  templateUrl: './some-button-menu.component.html',
  styleUrls: ['./some-button-menu.component.scss']
})
export class SomeButtonMenuComponent {
  @Input() buttons: string[] = [''];
  @Output() buttonClicked = new EventEmitter();
  constructor() { }

  handleButtonClicked(data:any, buttonN:string){
      console.log(\`Button \${buttonN} was clicked\`)
      this.buttonClicked.emit(buttonN);
  }
}      
</pre>


            <div class = "note"><b>some-button-menu host</b> HTML</div>
<pre>
&lt;div>
    &lt;some-button-menu 
        [buttons]="myButtonList" 
        (buttonClicked)="handleButtonWasClicked($event)"
    >
    &lt;/some-button-menu>
    &lt;p>Last clicked button is {{lastButton}}&lt;/p>
&lt;/div>
</pre>


            <div class = "note"><b>some-button-menu host</b> .ts</div>
<pre>
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-parent',
  templateUrl: './menu-parent.component.html',
  styleUrls: ['./menu-parent.component.scss']
})
export class MenuParentComponent {
  @Output() buttonClicked = new EventEmitter();
  lastButton: string = ''; // initial value
  myButtonList = ['b 1', 'b 2', 'b 3'];
  constructor() { }

  handleButtonWasClicked(data:any){
      console.log(\`Button \${data} was clicked\`)
      this.lastButton = data;
      this.buttonClicked.emit(data); // inform parent
  } 
}     
</pre>            
                    `
                },




                {
                    elementType:'SmallHeadline',
                    content:`
                    Two way binding
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Two way binidng may be achieved in 2 ways: with property and event binding 
                    used on the same element at the same time (good for binding a value in HTMLElement with the 
                    state), and with the two way binding syntax <code>[(someProp)]="variable"</code>.
                    The second method may be used only with components, as there must be an event emiter defined.
                    The first method may be used with the non component HTML elements.
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:`
                    Example 1: binding in 2 steps: HTMLElements
                    `
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">HTML template</div>
<pre>
&lt;span contenteditable="true" class="editable" (blur)="changeValue1($event)" [innerText]="value1">&lt;/span>
</pre> 
<div class="note">.ts file</div>
<pre>
export class SomeComponent implements ... {
    value1: string = '';

    changeValue1(e:any){
        this.value1 = e.target.innerText;
      }
}
</pre>                     
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:`
                    Example 2: binding in 2 steps: components
                    `
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">HTML template Child component</div>
<pre>
&lt;div class = "wrapper">
    &lt;div>
        &lt;span contenteditable="true" class="editable" 
            (blur)="changeValue1($event)" 
            [innerText]="value1"
        >
        &lt;/span>
    &lt;/div>
&lt;/div>
<pre>
<div class="note">.ts file for Child component</div>
export class ChildComponentComponent implements OnInit {
    private _value1:any = '';
    get value1(){return this._value1}

    constructor() { }
  
    @Input() set value1(val:any){
      this._value1 = val;
      this.value1Change.emit(val)
    }
    @Output() value1Change = new EventEmitter<any>();
  
    changeValue1(e:any){
      console.dir(e)
      this.value1 = e.target.innerText;
      this.value1Change.emit(this.value1)
    } 
  }
</pre>
        <div class="note">HTML template Parent component. The value1 is not only bound with the 
        text box, but also with a child element.</div>
<pre>
&lt;span contenteditable="true" class="editable" (blur)="changeBox1Value($event)" [innerText]="value1">&lt;/span>
&lt;binding-child-component [value1]="value1" (value1Change)="changeValue1($event)">&lt;/binding-child-component>
</pre>      
        <div class="note">.ts file for Parent component</div>
<pre>
export class ParentComponentComponent implements OnInit {
    value1:any = '';
  
    changeValue1(e:any){
      if (e !== undefined) this.value1 = e;
    }
    changeBox1Value(e:any){
      if (e.target !== undefined) this.value1 = e.target.innerText;    
    }
    constructor() { }
  }
</pre>        

                    `

                },


                {
                    elementType:'SmallHeadline',
                    content:`
                    Example 3: Biniding component with the 2 way binding syntax
                    `
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">A HTML for child component</div>
<pre>
&lt;div>
    &lt;span class="label">Changing the value will cause parent to update:&lt;/span>
    &lt;span contenteditable="true" class="editable" (blur)="changeValue1($event)" [innerText]="value1">&lt;/span>
&lt;/div>

</pre>
                    <div class="note">A .ts file for child component</div>
<pre>
export class ChildComponentComponent {
    private _value1:any = '';
    get value1(){return this._value1}
  
    constructor() { }
  
    @Input() set value1(val:any){
      this._value1 = val;
      this.value1Change.emit(val)
    }
    @Output() value1Change = new EventEmitter<any>();
<div class="note note-danger">
NOTE: If the @Input variable name is <b>value1</b>, then
the @Output variable name should be <b>value1Change</b>
for this binding to work.
</div>
    changeValue1(e:any){
      console.dir(e)
      this.value1 = e.target.innerText;
      this.value1Change.emit(this.value1)
    }
  }
</pre>
                    <div class="note">A HTML for parent component</div>
<pre>
&lt;div>
    &lt;span contenteditable="true" class="editable" (blur) = "changeBox2Value($event)">{{value2}}&lt;/span>
    &lt;binding-child-component [(value1)]="value2">&lt;/binding-child-component>
&lt;/div>
</pre>
                    <div class="note">A .ts file for parent component</div>
<pre>
export class ParentComponentComponent implements OnInit {

    value2:any = '';

    changeBox2Value(e:any){
      console.dir(e)
      if (e.target !== undefined) this.value2 = e.target.innerText;    
    }
  
    changeValue2(e:any){
      this.value2 = e.data;
      console.log(e)
    }

    constructor() { }
  }
</pre>
                                        
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