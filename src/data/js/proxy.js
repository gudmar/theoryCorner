let data =     {
    summary: 'proxy',
    title: 'Proxy',
    searchKeywords:`getPrototypeOf setPrototypeOf isExtensible preventExtensions getOwnPropertyDescriptor 
    defineProperty has get set deleteProperty ownKeys apply constructor
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Proxy'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    The <code>Proxy</code> is an API allowing user to wrap an existing object to make some additional 
                    operations when Object methods are being called on this object. There is a banch of methods that 
                    the proxy allows to use. Proxy takes 2 
                    arguments: a <code>target</code> object, and a <code>handler</code> - an object having 
                    traps. Traps are functions that will allow to implement a specific behaviour on object operations.
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'Proxy creation'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>let p = new Proxy(target, handler)</code>, where the <code>target</code> is an object, 
                        that will be handled 
                        by the proxy, and <code>handler</code> is a set of methods, 
                        that will be called when proxy is used,`,
                        `<code>let pr = new Proxy.revocable(target, handler)</code>, where the <code>target</code>
                        is an object, that will be handled by the proxy, <code>handler</code> is an object with 
                        traps, and <code>revocable</code> means, that the proxy may be turned off (revoked) with a
                        call of <code>pr.revoke()</code>. Once revoked proxy is useless, and can be garbage collected, as
                        there is no possibility to turn proxy again.`
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'Traps'
                },

                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>handler.getPrototypeOf(target)</code>, a trap for the <code>Object.getPrototypeOf()</code> method`,
                        `<code>handler.setPrototypeOf(target, newPrototype)</code>, a trap for the 
                        <code>Object.setPrototypeOf()</code> method`,
                        `<code>handler.isExtensible(target)</code>, a trap for the <code>Object.isExtensible()</code> method`,
                        `<code>handler.preventExtensions(target)</code>, a trap for the <code>Object.preventExtensions</code> 
                        method`,
                        `<code>handler.getOwnPropertyDescriptor</code> is a trap for the <code>Object.getOwnPropertyDescriptor()
                        </code> method`,
                        `<code>handler.defineProperty(target, property, descriptor)</code> 
                        is a trap for the <code>Object.defineProperty()</code> method`,
                        `<code>handler.has(target, property)</code> is the trap for the <code>in</code> operator,`,
                        `<code>handler.get(target, property, thisArg)</code> is a trap for getting a property with lets say an <code>=</code>
                        operator`,
                        `<code>handler.set(target, property, thisArg)</code> is a trap for setting a property,`,
                        `<code>handler.deleteProperty(target, property)</code>: a trap for the delete operator,`,
                        `<code>handler.ownKeys(target)</code>, a trap for the <code>Reflect.ownKeys()</code>,
                        or <code>Object.getOwnKeyNames</code>, <code>Object.getOwnSymbols()</code> method,`,
                        `<code>handler.apply(target, thisArg, argumentsList)</code> a trap for the function call,`,
                        `<code>handler.construct()</code>, a trap for the <code>new</code> operator. This tarp has to
                        return an object (not a primitive), and needs the target of this proxy to be a constructor`
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'Example'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Defining a new property on the proxy will cause a corresponding element in DOM to appear, or
                        update if property was already defined,`,
                        `Getting a property from the proxy will cause an alert message to appear,`,
                        `Deleting an existing property from the proxy will cause a corresponding element from the DOM to disappear,`,
                        `Note, that properties are defined under <code>proxy[someProperty]</code>, and in reality they exist under
                        a nested object: <code>targetObject.contentStorage</code>`
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>
function Binder(outletId){
    let form = document.forms[0];
    form.onsubmit = submit;
    this.outletId = outletId;
    this.getIdFromKey = function(key){
        return 'id'+key
    };
    this.contentStorage = {};
};
let handler = {
    set: function(target, key, value){
        if (key !== 'storage'){
            let isAlreadyAdded = Reflect.has(target.contentStorage, key);
            let newValue = 'prop: '+key+ ' ' + 'val: '+ value;
            if (isAlreadyAdded){
                let elementInDom = document.getElementById(target.getIdFromKey(key));
                elementInDom.innerText = newValue;
            } else {
                let newElement = document.createElement('div');
                let outlet = document.getElementById(target.outletId);
                newElement.setAttribute('id', target.getIdFromKey(key))
                newElement.innerText = newValue;       
                outlet.appendChild(newElement)
            }
            target.contentStorage[key] = value;
        }
    },
    get: function(target, key){
        if (key == 'storage') return target.contentStorage;
        let elementExists = Reflect.has(target.contentStorage, key);
        let value = null;
        if (elementExists) value = target.contentStorage[key];
        window.alert(
            elementExists?'Item value is: '+ value:'Item does not exist'
        )
        return value;
    },
    deleteProperty: function(target, key){
        console.log(target);
        console.log(key)
        let elementExists = Reflect.has(target.contentStorage, key);
        if (elementExists){
            let domElement = document.getElementById(target.getIdFromKey(key));
            let infoText = 'Element '+domElement.innerText+' will was removed';
            domElement.remove();
            Reflect.deleteProperty(target.contentStorage, key);
            console.log(target.contentStorage)
            window.alert(infoText);
        } else {
            window.alert('Element '+key+' not found')
        }
    },
}

let targetObject = new Binder('someId');
let proxy = new Proxy(targetObject, handler)

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
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Proxy',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getProxyData(){
    return data;
}