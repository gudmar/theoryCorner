// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'angular modules',
    title: 'Angular modules',
    searchKeywords:`

    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Modules in angular'
                },

                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'about', title: 'About'},
                        {id: 'featureModule', title: 'Feature module'},
                        {id: 'services', title: 'Services'},
                        {id: 'references', title: 'References'},
                    ]
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    <span id="about">A module is something, that might be compared to a library. It consists of classes, services, 
                    pipes, components and directives, that are bound together to form some kind of a logical 
                    entity. </span>
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    A module should import all modules and components it uses. Module is made from a class with a 
                    <code>@NgModule</code> decorator. Such a module takes an object as an attribute. This object has, 
                    among the others, below properties:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>declarations</code>: a set of pipes, components and directives belonging to this module,`,
                        `<code>providers</code>: a set of injectable objects, that are available in the injector of the module.
                        This are services. A service imported and listed in this field in the root module becomes <code>a
                        singleton</code> by default, and can be injected to a component by giving it as an argument for the
                        component constructor.`,
                        `<code>imports</code>: the set of NgModules whose exported declarables will be available to the 
                        module,
                        `,
                        `<code>exports</code>: the set of components, directives and pipes that the module wants to be public,
                        available in other modules using the module,`,
                        `<code>entryComponents</code>: the set of components that will be dynamically loaded to the view, when 
                        the module compiles.`,
                        `<code>bootstrap</code>: the set of comonents that are bootstrapped when this module is bootstrapped.
                        These components are automatically added to the <code>entryComponents</code>`
                    ]
                },
                {
                    elementType: 'SmallHeadline',
                    content: `
                    <span id="services">Services</span>
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Services provided in the root module, are by default singletons. There is a way not to create a 
                    singleton, but this requires lazy-loading the module. Lazy loaded services are scoped to the lazy-loaded
                    module injected.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Services provided in the other than root modules are by default provided not only in the other 
                    modules, but they are delivered to the root module context, and will become the application
                    wide <strong>singleton</strong>: 
                    <a href = "https://blog.angular-university.io/angular2-ngmodule/#angularmodulesanddependencyinjection" target="_blank">Link</a>
                    `
                },
                {
                    elementType: 'Code',
                    content: `
                    <div class="note">Lets create a simple Menu module. It provides a menu component, with 
                    a class that sends commands to subscribed components. For example a <i>Load</i> button
                    should open a dialog box enabling a user to select a file, and this action should inform 
                    all interested components that there is a file to be opened, and send the file as a blob.</div>
<pre>
import {CommonModule} from "@angular/common";
    @NgModule({
        declarations: [Menu],
        exports: [Menu],
        providers: [CommanderService]
    })
    export class MenuModule{

    }
</pre>
                <div class="note">And now a service that sends commands.</div>
<pre>
@Injectable()
export class CommandersService {
    private listOfSubscribers: {id:string, callback:function}[] = [];
    supportedCommands = ['load', 'save', 'options', 'edit', 'change skin'];
    private findSubscribersId(id){
        return this.listOfSubscribers.findIndex((item)=>{
            return item.id === id;
        })
    }
    subscribe(subscribersId, subscribersCb){
        let subscribersId = this.findSubscribersId(subscribersId);
        if (subscribersId > -1){
            let newSubscriber = {
                id: subscribersId, 
                callback: subscribersCb
            }
            this.listOfSubscribers.push(newSubscriber);
        }
    }
    private isCommandSupported(command:string){
        return this.supportedCommands.includes(command);
    }
    command(message:string, data:any){
        if (this.isCommandSupported(message)){
            this.listOfSubscribers.forEach((item)=>{
                item.callback(message, data);
            })
        } else {
            throw new Error('This command is not supported')
        }
    }
    unsubscribe(subscribersId:string){
        let foundId = this.findSubscribersId(subscribersId);
        this.listOfSubscribers.splice(founeId, 1);
    }
}
</pre>               
                    <div class="note">The full Menu component will not be shown, as this example is already too long.</div>
<pre>
@Component({
    selector: 'menu',
    template: '...',
})
exportClass MenuComponent{
    constructor(private commander: CommanderService){}
    ...
}
</pre>                    
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    In above example we created a separate module with its own service. The service will become 
                    available everywhere after importing this custom module to the root module.
                    No matter that it was mentioned only in the custom module. Moreover, there will be a singleton
                    created, and this service will be made available everywhere.
                    `
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                    <span id="featureModule">Above Menu module is called a <i>feature module</i></span>
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `
                    <span id="rootModule">Root module vs feature modules</span>
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The root module should import a <code>BrowserModule</code>, where a feature module should 
                    import a <code>CommonModule</code>. Thanks to this module there is access to the <code>ngIf</code>
                    or <code>ngFor</code> directives. In the root module there should be a <code>bootstrap</code>
                    property in the decorator, for defining what components should be bootstrapped during the application 
                    start.
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
                    content:'<span id="references">References</span>'
                },
                {
                    elementType:'Link',
                    content:'angular.io',
                    href: 'https://angular.io/api/core/NgModule',
                    description:'Tutorial'
                },
                {
                    elementType:'Link',
                    content:'blog.angular-university.io',
                    href: 'https://blog.angular-university.io/angular2-ngmodule/',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getTemplateData(){
    return data;
}