// SPELL CHECKED, CORRECT!
import getPrototypeData from "./designPatterns/prototypeData";
import getFactoryData from "./designPatterns/factoryData";
import getBridgeData from "./designPatterns/bridgeData";
import getAbstractFactoryData from "./designPatterns/abstractFactoryData";
import getBuilderData from "./designPatterns/builderData"



let theoryDataDesignPatterns = [

    getPrototypeData(),
    getFactoryData(),
    getAbstractFactoryData(),
    getBridgeData(),
    getBuilderData(),
    
    // {
    //     summary: 'Design Patterns',
    //     title: 'design patterns',
    //     searchKeywords: 'prototype abstract factory singleton builder bridge adapter flyweight iterator composite',
    //     cathegory: 'DesignPatterns',
    //     content: [
    //         {
    //             elementType:'Article',
    //             content:[
    //                 {
    //                     elementType:'Headline',
    //                     content:'Design patterns'
    //                 },
    //                 {
    //                     elementType: 'Paragraph',
    //                     content: `
    //                         Design patterns are some typical solutions for problems met while inventing, designing 
    //                         something. Design patterns may not be only programming oriented, as the same term 
    //                         may be used when designing for example  traffic.
    //                     `
    //                 },
    //                 {
    //                     elementType: 'Paragraph',
    //                     content: `
    //                     In programming they are architectural, language agnostic solutions to common met problems. 
    //                     It is good to know and use them, as more application is thought of in the early stage, 
    //                     before implementation starts, the better for future maintainability. 
    //                     `
    //                 }

    //             ]
    //         },
    //     ]
    // },

]

export function getTheoryDataDesignPatterns(){
    return theoryDataDesignPatterns;
}