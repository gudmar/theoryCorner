
let data =     {
    summary: 'singleton',
    title: 'singleton',
    searchKeywords:`
    `,
    cathegory: 'DesignPatterns',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Singleton'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A singleton is a creational design pattern, where the singleton object is an object that may have 
                    globaly only one instance. It may be useful in:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `An object returning a globaly unique id,`,
                        `In a mediator pattern, where a mediator is an object passing information between application objects.
                        An object may subscribe to the mediator to receive messages it is interested in,`,
                        `Creating a global application state, like in Redux library,`,
                        `Controling access to a shared resource,`,
                        `Creating a proxy for communication with a DB,`
                    ]
                },


                {
                    elementType:'Headline-2',
                    content:'Understanding'
                },
                {
                    elementType:'Headline-3',
                    content:'Example: id getter'
                },
                {
                    elementType:'Code',
                    content:`
                    <pre>
function IdGetter(){
    if (IdGetter.instance === undefined){
        IdGetter.instance = this;
        this.lastId = 0;
        this.getLastId = function(){
            return this.lastId
        }
        this.getNextId = function(){
            return this.lastId += 1;
        }
    } else {
        return IdGetter.instance
    }
}    


let get1 = new IdGetter();
console.log('get1: ' + get1.getNextId()); // get1: 1
console.log('get1: ' + get1.getLastId()); // get1: 1
console.log('get1: ' + get1.getNextId()); // get1: 2
let get2 = new IdGetter();
console.log('get2: ' + get2.getNextId()); // get2: 3
                    </pre>

        <div class="note">And with prototype instead of a staic prop:</div>
<pre>
function IdGetter(){
    let proto = Object.getPrototypeOf(IdGetter);
    console.log(proto)
    if (proto.instance === undefined){
        proto.instance = this;
        Object.setPrototypeOf(IdGetter, proto);
        this.lastId = 0;
        this.getLastId = function(){
            return this.lastId
        }
        this.getNextId = function(){
            return this.lastId += 1;
        }
    } else {
        return proto.instance
    }
}

let get1 = new IdGetter();
console.log('get1: ' + get1.getNextId()); // get1: 1
console.log('get1: ' + get1.getLastId()); // get1: 1
console.log('get1: ' + get1.getNextId()); // get1: 2
let get2 = new IdGetter();
console.log('get2: ' + get2.getNextId()); // get2: 3
                    </pre>
        <div class="note">
        Works fine, but is a bit more complex
        </div>

        <div class="note">And with classes:</div>
<pre>
class IdGetter{
    constructor(){
        if (IdGetter.instance === undefined){
            this.lastId = 0;
            IdGetter.instance = this;
        } else {
            return IdGetter.instance
        }
    }
    getLastId(){return this.lastId;}
    getNextId(){return this.lastId += 1;}
}
let get1 = new IdGetter();
console.log('get1: ' + get1.getNextId()); // get1: 1
console.log('get1: ' + get1.getLastId()); // get1: 1
console.log('get1: ' + get1.getNextId()); // get1: 2
let get2 = new IdGetter();
console.log('get2: ' + get2.getNextId()); // get2: 3

</pre>

                    `

                

                },

                {
                    elementType:'Headline-3',
                    content:'Example: mediator'
                },
                {
                    elementType:'Code',
                    content:`
<pre>
class Mediator{
    constructor(){
        if (Mediator.instance === undefined){
            Mediator.instance = this;
            this.subscribers = []
        } else {
            return Mediator.instance;
        }
    }
    subscribe(informationType, subscriberUniquId, subscribersCb){
        let entry = {
            subscriberId: subscriberUniqueId,
            subscripiton:{
                informationType: informationType,
                cb: subscribersCb
            } 
        }
        let subscriber = this.getExistingOrNewSubscriber(subscriberUniqueId);
        subscriber.subscriptions.push(entry.subscription)
    }

    unsubscribe(informationType, subscriberUniqueId){
        let subscriber = _getSubscribersIndex(subscriberUniqueId);
        if (subscriber !=== -1){
            this.subscribers.splice(subscriber, 1);
        }
    }

    inform(infoType, data){
        for (let subscriptions of this.subscriber){
            this._informSingleSubscriberIfInterested(subscriptions, infoType, data)
        }
    }

    _informSingleSubscriberIfInterested(subscriptions, infoType, data){
        for (let sub of subscriptions){
            if (sub.informationType === infoType){sub.cb(data)}
        }
    }

    getExistingOrNewSubscriber(subscriberUniqueId){
        let sub = getSubscriber(subscriberUniqueId);
        if (sub === null){
            let newSub = {
                id: subscriberUniqueId,
                subscriptions: []
            }
            this.subscribers.push(newSub)
            sub = newSub;
        }
        return sub;
    }

    _getSubscribersIndex(subscriberUniqueId){
        let id = this.subscribers.findIndex((item, index)=>{
            if(item.subscriberId === subscribersUniqueId) return true;
            return false
        })
        return id;
    }

    getSubscriber(subscriberUniqueId){
        let id = this._getSubscribersIndex(subscriberUniqueId);
        return id === -1 ? null : this.subscribers[id]
    }
}
</pre>                    
<div class="note">
    Above class is a mediator class, allowing to subscribe to certain type of messages, and infor all 
    subscribers that are subscribed to the certain type of messages. There is a possiblity to subscribe to the 
    same type of messages with the same callback multiple times, but a subscription may be done with different 
    function contexts... Need to be careful or modify this class. Example usage case:
</div>
<pre>
class Subscriber{
    constructor(){
        this.uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
        // To guarantee this is unique, a singleton pattern should be used
        this.mediator = new Mediator();
        this.mediator.subscribe('informMeAbout..', this.uniqueId, doSomething.bind(this))
    }
    doSomething(data){
        this.data = data;
    }
}

class DataProvider(){
    constructor(){
        this.uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
        // To guarantee this is unique, a singleton pattern should be used
        this.mediator = newMediator(); 
        this.mediator.infor('informMeAbout..', 'I am created')
    }
    unsubscribe(){
        this.mediator.unsubscribe('informMeAbout..', this.uniqueId)
    }
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
                    content:'refactoring guru',
                    href: 'https://refactoring.guru/pl',
                    description:'Tutorial'
                },
                {
                    elementType:'Paragraph',
                    content:'<i>Design patterns</i> by Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides'
                },
                
            ]
        }
    ]
};

export default function getSingletonData(){
    return data;
}