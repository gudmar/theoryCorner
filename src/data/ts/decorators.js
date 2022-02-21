
let data =     {
    summary: 'ts decorators',
    title: 'Ts decorators',
    searchKeywords:`

    `,
    cathegory: 'ts',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Decorators in ts'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A decorator is a wrapping function, that is capable of adding an additional functionality to 
                    a class, method, property or accessor without its internal modifications. Such a function would be 
                    possible in js, but in ts thers is an experimental syntsx for supporting this feature. 
                    The syntax is said to be experimental by the ts documentation, but it is sait to be experimental for 
                    years, and is used by Angular framework, so it is safe to be used.
                    `
                },
                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'enabling', title: 'Enabling decorators'},
                        {id: 'multiple', title: 'Multiple decorators'},
                        {id: 'class', title: 'Class decorators'},
                        {id: 'method', title: 'Method decorators'},
                        {id: 'property', title: 'Property decorators'},
                        {id: 'parameter', title: 'Parameter decorators'},
                        {id: 'accessor', title: 'Accessor decorators'},
                    ]
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="enabling">Enabling decorators</span>'
                },

                {
                    elementType: 'Code',
                    content: `
<pre>
{
    "compilerOptions": {
      "target": "ES5",
      "experimentalDecorators": true
    }
  }
</pre>
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="multiple">Multiple decorators</span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    There may be multiple decorators added to an element:
                    `
                },
                {
                    elementType: 'Code',
                    content: `
                    <pre>
function first(constructor){...}
function secont(constructor){...}

@first
@second
SomeClass{
    constructor(){}
}
                    </pre>
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Above example equals to:
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
first(){
    second(){
        SomeClass..
    }
}
</pre>                    
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Call and evaluation order:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `first decorator evaluated,`,
                        `second decorator evaluated,`,
                        `second decorator called,`,
                        `first decorator called`
                    ]
                },







                {
                    elementType:'Headline-3',
                    content:'<span id="class">Class decorators</span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A class decorator is a function taking a class <code>constructor</code> and doing something with it.
                    It may modify, or even replace a class (replacing in for example class extention case)
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    <code>function classDecorator(constructor: Function)</code>
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
function classDecorator(constructor: Function){
    return class extends constructor {
        console.log(constructor was called)
    }
}

function parametrizedDecorator(message:string = 'default){
    return function(constructor: Function){
        console.log(message);
    }
}

@classDecorator
SomeClass(){
    constructor(){}
}

<div class="note">There may be multiple decorators applied to the single class</div>

@parametrizedDecorator('my message')
@classDecorator
SomeClass(){
    construcotr(){}
}

<div class="note">In above example decorators will be applied in the following oreder</div>
parametrizedDecorator {
    classDecorator{
        SomeClass..
    }
}


</pre>                    
                    `
                },



                {
                    elementType:'Headline-3',
                    content:'<span id="method">Method decorator</span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    <code>function someDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor)</code>
                    <br>
                    where <code>target</code> is a target method
                    `
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `If decorator should take parametrization arguments, it needs to be wrapped in a function,`,
                        `The method decorator should return the descriptor,`,
                        `The method modification should be the descriptor value property modification, as this 
                        value holds the method body,`,
                        `The actual original method call is done with the <code>apply</code> function,`,
                        `The new value function should return the original functions result,`
                    ]
                },

                {
                    elementType: 'Code',
                    content: `
<pre>
function someDecorator(target: any, propertyKey:string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = (...args:any[]){
        let startTime = performance.now();
        const result = originalMethod.apply(this, args);
        let endTime = performance.now();
        console.log('Performance is ' + endTime - startTime)
        return result
    }
    return descriptor
}

function parametrizedDescriptor(message:string){
    return function(target: any, propertyKey:string, descriptro: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descirptor.value = (...args:any[]){
            console.log(message);
            return originalMethod.apply(this, args)
        }
        return descriptor
    }
}

class Dummy{
    constructor(){}

    @someDecorator
    @parametrizedDecorator('example executed')
    doNothing(){
        console.log('Example method')
    }

}


</pre>
                    `
                },


                {
                    elementType:'Headline-3',
                    content:'<span id="property">Property decorator</span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                        <code>function propertyDecorator(target:Object, propertyKey: string|symbol){}</code>
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>target</code> is an object, thats property will be decorated,`,
                        `<code>propertyKey</code> is the actual property 'name'.
                        Not exectly name, but more <i>key</i>, as a symbol cannot be referred as a name.`,
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        May be used to:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        'Property sealing,', 
                    ]
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
</pre>                        
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="parameter">Parameter decorator</span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                        <code>function paramDecorator(target:Object, propertyKey: string | symbol, parameterIndex: number){}</code>
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
function paramDecorator(target:Object, propertyKey: string | symbol, parameterIndex: number){
    console.log('parameter ' + parameterIndex + 'of property ' + propertyKey + 'of object ' + target.constructor.name)
}

class Dummy{
    constructor(){}

    doNothing(@paramDecorator times: number){
        for(let i = 0; i < times; i++){
            console.log('did nothing ');
        }
    }
}
</pre>                        
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="accessor">Accessor decorator (applied to setter and getter)</span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                        <code>function accessorDecorator<T>(target:Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>){}</code>
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
function accessorDecorator<T>(target:Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>){
    console.log(\`Accessing value of \$\{target.constructro.name} of property: \$\{propertyKey})
}

class Dummy{
    private _x: number = 5;
    constructor(){};

    @accessorDecorator<any>
    get () {return _x;}
    // No need to decorater both: a setter and a getter

    @accessorDecorator<any>
    set (val:any) {this._x = val}


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
                    content:'blog.jannikwemple.com',
                    href: 'https://blog.jannikwempe.com/typescript-decorators-basics',
                    description:'Typyscript decorators'
                },
                {
                    elementType:'Link',
                    content:'stackoverflow',
                    href: 'https://stackoverflow.com/questions/56189503/how-to-use-a-typescript-method-decorator-and-retain-normal-this-scope',
                    description:'Method decorators,'
                },
                {
                    elementType:'Link',
                    content:'levelup.gitconnected.com',
                    href: 'https://levelup.gitconnected.com/start-writing-your-own-typescript-method-decorators-c921cdc3d1c1',
                    description:'Mathod decorators'
                },
                {
                    elementType:'Link',
                    content:'typescriptlang.org',
                    href: 'https://www.typescriptlang.org/docs/handbook/decorators.html',
                    description:'Typyscript tutorial'
                },
            ]
        }
    ]
};

export default function getTsDecoratorData(){
    return data;
}