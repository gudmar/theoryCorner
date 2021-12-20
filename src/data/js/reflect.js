// SPELL CHECKED, CORRECT!

let data =     {
    summary: 'reflect',
    title: 'Reflect',
    searchKeywords:`apply construct, defineProperty deleteProperty get getOwnProperyDescriptor getPrototypeOfHas isExtensible 
    ownKeys preventExtensions set setPrototypeOf
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Reflect'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    <code>Reflect</code> is a non function build in object providing a set of useful, but duplicated with
                    the <code>Object</code> and <code>Proxy</code> ones. They are even named the same way. The instance of
                    <code>Reflect</code> cannot be created. This object provides static methods
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.apply(target, thisArg, argList)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`like the 
                    <code>Function.prototype.apply()</code>, where <code>target</code> is a function that will be
                    called with the apply call.`
                },



                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.construct(target, argList, newTarget)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`like the 
                    Like a cunstructor, but this is a function. Gives an opportunity to set a new constructor, that's
                    prototype should be used:`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>target</code>: object, that will be created`,
                        `<code>argList</code>: an array like object`,
                        `<code>newTarget</code>: optional, a constructor name, that will be set as an prototype for newly created
                        object`
                    ]
                },                
                {
                    elementType:'Paragraph',
                    content:`returns an instance of the newly created object`
                },




                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.defineProperty(target, propKey, descriptor)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Please read about the <code>Object.defineProperty()</code> for more. The difference is, that
                        this property returns <code>true</code> if succeeded, and <code>false</code if failed. In case of the Object 
                        property this method returned the object, or throwed an error.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>target</code>: target object, that property will be set on`,
                        `<code>propKey</code>: The property name`,
                        `<code>descriptor</code>: Similar to the Object descriptor, 
                        having: value, writable, enumerable, configurable, set and get
                        properties describing the behaviour of the property`
                    ]
                },      
                
                


                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.deleteProperty(target, propKey)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Similar to the non-strict <code>delete</code> operator
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>target</code>: target object, that property will be deleted from`,
                        `<code>propKey</code>: The property name`,                
                    ]
                },   



                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.get(target, propKey[, thisArg])</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Similar to <code>target[propKey]</code> with the difference, that this allows 
                        to set this keyword to some other value. Useful when working with a Proxy
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.set(target, propKey[, thisArg])</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Similar to <code>target[propKey]</code> with the difference, that this allows 
                        to set this keyword to some other value. Useful when working with a Proxy
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.getOwnPropertyDescriptor(target, propKey[, thisArg])</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Similar to the Object.getPropertyOf, with the difference non object arguments are 
                        handled. This will throw an error, where Object method will return an object
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.getPrototypeOf(target)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The same as <code>Object.getPrototypeOf(target)</code>
                    `
                },



                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.getPrototypeOf(target)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Similar to <code>Object.setPrototypeOf(target)</code> with the difference, that this 
                    returns true if the operation was successful, and false if not, where the object method returns 
                    the object.
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.<b>has</b>(target, propKey)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns <code>true</code> if there is a property <code>propKey</code> in the object
                    given as the <code>target</code>
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.isExtinsable(target)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The same as the <code>Object.isExtinsible()</code>, true if object can have properties added to it,
                    and <code>false</code> if not,
                    `
                },



                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.preventExtensions(target)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Makes it impossible to add any properties to the <code>target</code> object.
                    This operation cannot be reverted.
                    `
                },



                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.ownKeys(target)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns an array of the <code>target</code> objects keys. 
                    This returns <b>both: symbol and string keys</b>,
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
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect',
                    description:'Tutorial'
                },
                {
                    elementType:'Link',
                    content:'on github',
                    href: 'https://github.com/tvcutsem/harmony-reflect/wiki',
                    description:'Use cases'
                },
            ]
        }
    ]
};

export default function getReflectData(){
    return data;
}