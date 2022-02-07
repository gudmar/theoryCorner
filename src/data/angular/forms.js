// SPELL CHECKED, CORRECT!
// import { format } from "url";
// import { directive } from "@babel/types";

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
                        {id: 'ng-forms-css', title: 'Styling angular froms'},
                        {id: 'ng-forms-summary', title: 'Summary'},
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
                    elementType:'Paragraph',
                    content:`When programming a GUI, there is a view: the object displayed on the screen, and the 
                    application state: the object representing the application in the application itself. The program
                    works with the state object, and it has to update the view accordingly.`
                },
                {
                    elementType:'Paragraph',
                    content:`The one way binding is when update of the state, changes the view, or when the 
                    change in the view changes the application state without the need to worry about detecting 
                    the change and updating this manually. The two-way binding is the situation, when 
                    update of the application state brings the update to the view, and the update to the view 
                    updates the state automatically.`
                },
                {
                    elementType:'Paragraph',
                    content:`Two way binding is the most comfortable state, especially, when dealing with 
                    complicated creations like forms. The logic behind the forms may cause some changes to the 
                    form itself, when some fields are updated.`
                },
                {
                    elementType:'Paragraph',
                    content:`Two way binding may be achieved by applying a parameter binding in the direction 
                    to the view, and applying an event handler to the view element to trigger the state change.
                    This is the way it should be done when updating for example a common div element with 
                    <code>contenteditable</code> set to true. When communication between two angular components is 
                    considered, the two-way binding may be achieved by the two-way binding syntax. However, when 
                    dealing with common HTML elements the 2 one way bindings combined seem the only possible 
                    solution. There is no way to emit an event inside a common div element to apply the 2 way 
                    binding syntax.`
                },

                {
                    elementType:'SmallHeadline',
                    content:`NgModel`
                },
                {
                    elementType:'Paragraph',
                    content:`It is however possible to apply the two-way binding to a build in HTML element 
                    with the help of an angular directive. This directive is <code>NgModel</code>. <code>NgModel</code>
                    is declared in the <code>NgForm</code> directive. <code>NgForm</code> directive is applied to every
                    <code>form</code> element, when only <code>FormsModule</code> is imported to the main application
                    module:`
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="node">app.module.ts</code>
                    <pre>
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [
        ...
    ],
    imports: [
      BrowserModule,
      FormsModule,
      })
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
                    </pre>
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`Now <code>NgModel</code> may be used on all form elements in the application.`
                },

                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-usage'>NgForms NgModel usage</span>`
                },

                {
                    elementType:'Paragraph',
                    content:`Below example shows a proper way to bind an input element with the 
                    <code>ordererName</code> property.`
                },
                {
                    elementType:'Code',
                    content:`
<pre>
&lt;form>
    &lt;input type = "text" class = "form-control" id="name"
        required
        [(ngModel)] = "ordererName" name="name"
    >
&lt;/form>
</pre>                    
                    `
                },




                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-example'>Example: overview</span>`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The example is a simple from element with 2 select fields, and 2 input fields.
                    This is a form, where user may order a guitar. User selects the guitar brand, and the model, 
                    enters ordering person name and address. When guitar brand is selected, the list of 
                    available models must adjust to match guitars produced by selected company. It would be 
                    good if the last selected model from the brand was remembered, even if used selects another 
                    brand later. The name is a required box, and email is not only required, but should be 
                    validated.
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:`Guitar brand selection`
                },
                {
                    elementType:'HiddenCode',
                    content:[
                        {
                            info:`
                            Let's start with the service providing data to the component. Later, the 
                            service would communicate with the server to get real data, but for now in may be just 
                            a mock
                            `,
                            code:`
<pre>
export class GuitarDataService {

    constructor() { }
    data: any = [
      {
        make: 'Gibson',
        models: ['Les Paul', 'SG', 'Explorer', 'Flying'],
      },
      {
        make: 'Fender',
        models: ['Stratocaster', 'Telecaster', 'Jaguar', 'Mustang']
      },
      {
        make: 'Defil',
        models: ['Aster', 'Kosmos', 'Jola', 'Jazz'],
        selected: true
      },
    ]
    getData(){return this.data} 
  }  
</pre>                            
                            `
                        },
                        {
                            info:`
                            The service should be launched in the <code>ngOnInit</code> lifecycle method.
                            `,
                            code:`
<pre>                            
ngOnInit(): void { 
    this.products = this.dataProvider.getData();
}
</pre>`       
                            
                        },
                        {
                            info: `
                            The form element in HTML template should have the <code>(ngSubmit)</code> 
                            event handler, for binding with the function that will be triggered when
                            submit button is pressed, and the <code>#ordererForm="ngForm"</code> 
                            reference, for getting into the form object when handling the subscription.
                            The <code>select</code> element has to have a <code>name</code> attribute, 
                            this name is obligatory for the <code>ngModel</code> directive to work. 
                            The name should be unique in the whole form. 
                            `,
                            code: `
<pre>
&lt;form (ngSubmit)="submitFrom()" #orderForm="ngForm">
    &lt;div class="form-group">
        &lt;label for="select-make">Select guitar brand</label>
    &lt;!-- select is the right place to bind currently selected option. Should not 
    be done in the option tag! -->
    &lt;select class="form-control" 
            id = "select-make"
            [(ngModel)]="selectedMake" name="make"
            required
            
            
     >
        &lt;option *ngFor = "let product of products; let i = index" 
                [ngValue]="product['make']" 
                [innerHTML]="product.make"
        >
        &lt;/option>
    &lt;/select>
    &lt;/div>
&lt;</form>
</pre>                            
                            `,
                        },

                        {
                            info:`
                            Now the .ts file. Code uses setters and getters, as proxies. It is quite comfortable 
                            to do some side effects when setting the products property. This property is 
                            for holding the data from the GuitarDataService. When setting its value, the 
                            selectedMake (so the property that is 2-way bound with the select element in the form)
                            should be given some default value. When setting the <code>selectMake</code> property,
                            it is needed to update the possible guitar models list to match the chosen producers 
                            portfolio, and when the list of guitar models is updated it is needed to put a new 
                            value to the <code>selectedModel</code> property, so that the proper value is displayed 
                            in the next selection box.<br>
                            But for now, lets keep the minimum code that is needed for the brand selection to work:
                            `,
                            code:`
<pre>
export class GuitarOrderFormComponent implements OnInit {
    private _products: any[] = [];
    get products(){return this._products}
    set products(val:any) {
        let isSelectedMakeEmpty = ()=>{
          if(this.selectedMake === undefined || this.selectedMake === null) return true
          return false;
        }
        <div class="note">
This is needed for edge cases. When component is started and the products 
property is assigned for the first time, the selectedMake is undefined, and 
should be initialized.
When the form is restarted, the selectedMake becomes null, and should be reinitialized.
        </div>
        this._products = val;
        if (isSelectedMakeEmpty()) this.selectedMake = this.getDefaultMake();
      }

      getDefaultMake(){
        let def = this.products.findIndex((item:any, index:number)=>{
          return item.selected === true;
<div class="note">One of items in the data object should be set as default</div>          
        })
        if (def > -1) return(this.products[def].make)
        return ''
      }

}                      
</pre>                            
                            `
                        },
                        {
                            info:`
                            Now lets implement the guitar model changing when the guitar producer is selected.
                            It would be good to start with the HTML template part. The new <code>select</code
                            element should be added as a child of the form element. 
                            There is a 2-way binding to the <code>selectedModel</code> property. The
                            <code>option</code> list is taken from the <code>availableModels</code> property, 
                            which is a getter that takes new set of data from the <code>products</code>
                            object, when the <code>selectedMake</code> property is changed.

                            `,
                            code:`
<pre>
    &lt;div class="form-group">
    <div class="note">This wrapping div is only for the styling purposes</div>
        &lt;label for="select-model">Select model</label>
        &lt;select class="form-control" 
                id = "select-model"
                [(ngModel)]="selectedModel" name="model"
<div class="note">The name property is mandatory for the ngModel to work, and 
should be kept long</div>
                required
        >
        &lt;option *ngFor = "let model of availableModels" [value]="model">{{model}}&lt;/option>
        &lt;/select>
    &lt;/div>
</pre>                            
                            `
                        },
                        {
                            info:`
                            Below methods should be added to the <code>GuitarOrderFormComponent</code>.
                            <ul>
                            <li><code>get selectedModel()</code>: a selectedModel getter. If there 
                            is a property <code>lastSelection</code> in the object describing current 
                            producer in the <code>products</code> list, returns an element matching the 
                            <code>lastSelection</code> index. If this property does not exist, returns 
                            the model matching index 0.</li>
                            <li><code>set selectedModel()</code>: creates a property <code>lastSelection</code>
                            under current producer description object, and sets the index of the selected model to it.
                            This will be the memory ensuring the user gets the model of the guitar he selected
                            last time he selected current brand.</li>
                            <li><code>get availableModels()</code> is the getter providing the list of guitar models
                            for the current producer</li>
                            </ul>
                            `,
                            code:`
<pre>
get selectedModel() { 
    function isIndexValid(id:number){
      if (id === undefined) return false;
      if (id < 0) return false;
      return true;
    }
    let currentProductIndex = this.getCurrnetProductIndex();
    if (currentProductIndex < 0) return '';
    let modelsArray = this.products[currentProductIndex].models;
    let indexFromMemory = this.products[currentProductIndex].lastSelection;
    let index = isIndexValid(indexFromMemory) ? indexFromMemory : 0;
    return modelsArray[index];
  }

  set selectedModel( val:string)  {
    let currentProductIndex = this.getCurrnetProductIndex();
    if (currentProductIndex >= 0){
      let modelsArray = this.products[currentProductIndex].models;
      function findModelIndex(){
        return modelsArray.findIndex((item: any)=>{
          return item === val;
        })
      }
      this.products[currentProductIndex].lastSelection = findModelIndex();
    }
  }

  get availableModels() {
    let currentProductIndex = this.getCurrnetProductIndex();
    if (currentProductIndex === -1 ) return []
    return this.products[currentProductIndex].models;
  }

</pre>                            
                            `
                        },
                        {
                            info:`
                            Now email and orderer name will be added to the form. Thanks to the angular 
                            2 way binding syntax, there is nearly no type script code for these inputs. Only
                            properties declarations.
                            `,
                            code:`
<pre>
    &lt;div class="form-group">
        &lt;label for="select-model">Select model</label>
        &lt;input type = "text" class = "form-control" id="name"
            required
            [(ngModel)] = "ordererName" name="name"
            #ordName="ngModel"
            <div class="note">This #orderName reference is only for the hidden
            message, that will be shown when input is invalid</div>
        >
        &lt;div [hidden]="ordName.valid || ordName.pristine" class="alert alert-danger">
            Please provide your name.
        &lt;/div>
    &lt;/div>
    &lt;div class="form-group">
        &lt;label for="select-model">Select model</label>
        &lt;input type = "email" class = "form-control" id="mail"
            required
            [(ngModel)] = "ordererMail" name="mail"
            ngModel email
            #mail = "ngModel"
        >
        &lt;div [hidden]="mail.valid || mail.pristine" class="alert alert-danger">
            Please provide valid email.
        &lt;/div>
    &lt;/div>
</pre>                            
                            <div class="note">Type script is only declarations:</div>
<pre>
ordererName: any;
ordererMail: string = '';
</pre>                            
                            `
                        },
                        {
                            info:`
                            Submitting the form is done with when <code>ngSubmit</code> event handler, that is 
                            bound to the whole <code>form</code> element. Because properties <code>selectedMake</code>,
                            <code>selectedModel</code>, <code>ordererName</code> and <code>ordererMail</code>
                            are bound directly to the view, it is certain, that those properties hold the 
                            exect values, that were selected by the user. There is a possibility to refer directly to the 
                            form directive, and get all form fields names and values from there. This approach will be 
                            demonstrated here:
                            `,
                            code:`
                            <div class="note">There was a #orderForm reference created on the form object. Let's 
                            get to this reference in .ts file with the help of a ViewChild decorator</div>
                            <pre>
@ViewChild('orderForm') form:any;
formContent: any;

  submitFrom(){
    this.formContent = this.getFromContent();
  }

  getFromContent(){
    let formContent = this.form.form.value;
    <div class="note">formReference.form.value is where object storing names and form data is kept</div>
    let keys = Object.getOwnPropertyNames(formContent);
    let output = [];
    for (let field of keys){
      output.push({name: field, content: formContent[field]})
    }
    return output;
  }
                            </pre>
                            `
                        },
                        {
                            info:`Now let's create form submit, form clear buttons, and the place to put 
                            the submitted form data:`,
                            code: `
<pre>
    &lt;button type="submit" 
        class="btn btn-success"
        [disabled] = "!orderForm.form.valid"
    >Submit the form&lt;/button>
    &lt;div class="btn btn-danger ml-4" (click)="clearForm()">Clear form&lt;/div>
    <div class="note">And the form output holder</div>

    &lt;div class="form-info">
        &lt;div class="form-info-content">
            &lt;b>Form submitted with data:</b>
            &lt;ul>
                &lt;li *ngFor="let field of formContent">
                    &lt;i>
                        {{field.name}}
                    &lt;/i>: 
                    {{field4content}}
                &lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>
</pre>                            
                            `
                        },{
                            info:`
                            Restarting (clearing) the form in angular is not just 
                            putting null values in all form fields. If it is done that way, the form 
                            state will not return to the initial one, as angular adds css classes to the 
                            form input elements. Please see next section to learn more. However, <code>ngForm</code>
                            states related to these classes will not be cleared this way. That is why there is a
                            <code>reset</code> method available under the <code>ngForm</code> directive.
                            It puts <code>null</code> values to all form fields, and restarts internal <code>ngForm</code>
                            directive states. Developer has to take care of all fixes to the component. In our case
                            because <code>selectedMake</code> and <code>selectedModel</code> are bound with the 
                            form inputs, they will be assigned <code>null</code> values, and our component has to be 
                            ready to handle this. The important trick in below code is the usage of the <code>setTimeout</code>
                            method without any delay, to set the products property. Without this solution angular would not 
                            detect any changes, angular would not rerender the form component. Because <code>setTimeout</code>
                            is an async function, it will force form inputs rendering.
                            `,
                            code:`
<pre>
clearForm(){
    this.form.reset();
    this.formContent = []
    setTimeout(()=>{this.products = this.dataProvider.getData();});
    // async usage to force view update
  }
</pre>                            
                            `
                        }

                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`Whole component HTML and .ts files content is at the bottom of this article.
                    To check in on the github please go to the reference section. `
                },

                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-css'>Styling angular forms</span>`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    When user interacts with an angular form, the <code>ngFrom</code> directive changes its 
                    internal state. With this state change some classes are added to the <code>form</code>
                    element, and to the input elements:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `<code>ng-valid</code> is applied to the <code>form</code> or input element that is valid,`,
                    `<code>ng-invalid</code> is applied to the <code>form<code> or input element that is not valid,`,
                    `<code>ng-touched</code> is applied to the element that was blurred (lost focus),`,
                    `<code>ng-untouched</code> is applied to the element that did not have a blur event yet,`,
                    `<code>ng-dirty</code> is applied to any element, that was edited by the user,`,
                    `<code>ng-pristine</code> is applied to any element, that was not edited by the user yet,`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Properties keeping information about above states are available under the reference to the 
                    <code>ngForm</code> directive. They are <code>dirty</code>, <code>pristine</code>, 
                    <code>touched</code>, <code>untouched</code>, <code>invalid</code>, <code>valid</code>,
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    There is a <code>reset</code> method on the <code>ngForm</code> directive. It sets <code>null</code>
                    to all form inputs, and restarts the <code>ngForm</code> internal state.
                    `
                },
                {
                    elementType:'Headline-3',
                    content:`<span id='ng-forms-summary'>Summary</span>`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>ngForm</code> is applied automatically after adding a <code>FormsModule</code> to the 
                        main app module</code>`,
                        `<code>ngModel</code> declaration is inside the <code>ngForm</code> directive, and is available 
                        after just importing the <code>ngForm</code> to the main app module,`,
                        `<code>ngModel</code> should not be applied to elements that are not:
                        <code>input</code>, <code>select</code> <code>textarea</code>, <code>button</code>,
                        <code>legent</code>, <code>datalist</code>, <code>option</code>`,
                        `There is a set of css classes for styling form items. These classes are applied to the 
                        input elements and the form element when form state changes due to user interaction with the form. 
                        Classes are: <code>ng-dirty</code>, <code>ng-pristigne</code> ,<code>ng-touched</code>, <code>ng-untauched</code>, <code>ng-invalid</code>, 
                        <code>ng-valid</code>, <code>ng-invalid</code>`,
                        `<code>ngFromReference.reset()</code> method may be used to clear the internal <code>
                        ngForm</code> state, and all form fields,`,
                        `<code>ngSubmit</code> is an event handler for submitting the form,`,
                        `<code>name</code> property is mandatory for all fields managed by the <code>ngModel</code>.
                        Each name should be unique within the form,`,
                        `The default option of the select element should be set with the ngModel on the select element.
                        This should not be set on the <code>option</code> element with the <code>[selected]</code>
                        attribute`,
                        `<code>#someName="ngModel"`,
                        `<code>required</code> property may be set to the element that is mandatory.`
                    ]
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
                {
                    elementType:'Link',
                    content:'github.com',
                    href: 'https://github.com/gudmar/angularExamplesForTheoryCorner',
                    description:'Example on github'
                },

            ]
        }
    ]
};

export default function getFormsData(){
    return data;
}
