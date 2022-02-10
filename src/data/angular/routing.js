// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'angular routing',
    title: 'Angular routing',
    searchKeywords:`

    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Angular routing'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A single page application. One HTML file loaded and its content modified with JS. But what, if anyone 
                    would like to send a link directing to the certain path in the site?<br>
                    This is possible with the routing module in Angular. The user will never tell, that this is only the 
                    SPA managing those roots.                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    A good example might be this page. It is written with React, and there is a <i>#</i> in the URL, but
                    this is only due to the problems with deploying the <code>BrowserRouter</code> pages on gitHub.
                    A similar mechanism is available with Angular.
                    `
                },
                {
                    elementType: 'Headline-3',
                    content: `
                    Simplest implementation
                    `
                },
                {
                    elementType:'HiddenCode',
                    content:[
                        {
                            info:`
                            Go to the <code>app.module</code> (the root module). Make it import <code>AppRoutingModule</code>
                            Place it in the <code>imports</code> section.
                            `,
                            code:`
<pre>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SomeComponent1 } from ' ...';
import { SomeComponent2 } from ' ...';

@NgModule({
  declarations: [
    AppComponent, SomeComponent1, SomeComponent2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
</pre>                            
                            `
                        },

                        {
                            info:`
                            Create an <code>app-routing.module.ts</code>. <code>const routes:..</code>
                            is an array for defining routes. The <code>path</code> property is for 
                            defining the internal path, <code>component</code> path is for defining the 
                            component that will be loaded. If the component has some inputs that need to be set, 
                            this may be done in a <code>data</code> optional attribute. The <code>'**'</code>
                            path is a wildcard. The router searches the first match and does not look at the rest
                            routes if finds any. So the <code>**</code> matches everything and must be placed at the 
                            end, or will make any paths after it inaccessible.
                            `,
                            code:`
<pre>
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomeComponent1 } from ' ...';
import { SomeComponent2 } from ' ...';


const routes: Routes = [
  {path: 'some-1', component: SomeComponent1, data:{myCustom:'some inputs'}},
  {path: 'some-2', component: SomeComponent2, },
  {path: '**', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
</pre>
                            `
                        },



                        {
                            info:`
                            The last step is the <code>app.component.ts</code>, so the root component that will be 
                            bootstrapped, or any other component holding a navbar or the <code>router-outlet</code>.
                            Note, that instead of <code>href</code> attribute, a <code>routerLink</code> has to be 
                            used for this to work. Moreover, there is a <code>router-outlet</code> 
                            tag that is a placeholder for the components placed by the router.
                            `,
                            code:`
<pre>
&lt;div name="navigation">
    &lt;a [routerLink]="'some-1'">Some 1&lt;/a>
    &lt;a [routerLink]="'some-2'">Some 2&lt;/a>
&lt;>

&lt;router-outlet>&lt;/router-outlet>
</pre>
                            `
                        },
                    ]
                },


                    {
                        elementType: 'Headline-3',
                        content: `
                        Nested routes
                        `
                    },

                    {
                        elementType:'HiddenCode',
                        content:[
                            {
                                info:`
                                Router module has to be imported to the main root module, like in the previous example,
                                there needs to be a <code>app-routing.module.ts</code> created, with the 
                                only difference, that a nested path must have <code>path</code>, <code>component</code>,
                                <code>chidren</code> properties:
                                `,
                                code:`
                                <pre>
const routes: Routes = [
    {path: '', redirectTo:'aboutMe', pathMatch:'full'},
    {path:'some-1', component: SomeComponent1, data: {startPage:'some data'}},
    {path:'some-2', component: SomeComponent2},
    {path:'nested-path', 
    component: RouterOutputComponent,
    data: {somePropertyName:'some optional input data'},
    children: [
        {path: '', component: ComponentHandlingNoNestedPath, data: {someData: 'if needed'}},
        {path: 'nested-1',component: NestedComponent1, data:{optionalData: ''}},
        {path: 'nested-2',component: NestedComponent2},
    ]
    },
    {path:'some-3', component: SomeComponent3},
    {path:'**', component: Handle404Component},
];                                   
                            </pre>
                                `
                            },
                            {
                                info:`
                                And the routes in the navigation section would be:
                            `,
                                code: `
                                <pre>
&lt;div name="navigation">
    &lt;a [routerLink]="'nested-path/nested-1'">Some 1&lt;/a>
    &lt;a [routerLink]="'nested-path/nested-2'">Some 2&lt;/a>
&lt;>                                    
                                </pre>
                            
                            `
                        }
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
                    href: 'https://angular.io/guide/router',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getAngularRoutingData(){
    return data;
}