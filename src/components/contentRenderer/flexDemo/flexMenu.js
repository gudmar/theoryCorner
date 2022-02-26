import { useEffect, useState } from 'react';
import  GeneralMenu  from './generalMenu'


// function FlexMenu(props){
//     const descriptor = props.descriptor;
//     const currentValues = props.currentValues;
//     const handleSingleItemChange = props.singleItemChangeHandler
//     const handleChangeNrOfItems = props.changeNrOfItemsHandler;
//     const handleContainerStyleChange = props.containerStyleChange;

//     function changeHandlerGeneric(e){
//         let newVal = e.nativeEvent.target.value;
//         console.log(e.target.type)
//         if (e.target.type === 'number'){
//             itemToShowIndex>=0
//                 ? handleSingleItemChange(newVal)
//                 : handleChangeNrOfItems(newVal) 
//         } else if(e.target.type ==='number-null'){
//                 console.log('%cNumber null',"background-color:black; color:white")
//         } else {
//             const key = e.nativeEvent.target.name;
//             const containerStyleClone = {...containerStyle};
//             containerStyleClone[key] = newVal==='undefined'?'':newVal;
//             console.log(e)
//             if(itemToShowIndex>=0){
//                 handleSingleItemChange(newVal)
//             } else {
//                 handleContainerStyleChange(containerStyleClone)
//             }
//         }
//     }


//     return 
//    ( <GeneralMenu
//         descriptor = {descriptor}
//         currentValues = {currentValues}
//         changeHandler = {changeHandlerGeneric}
//     />
//     )
// }

// function getWrapperDefaultContent(){
//     return {
//         // display: flex,
//         nrOfItems: 'number',
//         flexDirection: ['undefined', 'row','column'],
//         flexWrap: ['undefined','wrap','no-wrap'],
//         justifyContent: ['undefined','flex-start','flex-end','center','space-between','space-around','space-evenly'], 
//         alignItems: ['undefined','flex-start','flex-end','center','stretch','baseline'],
//         alignContent: ['undefined','flex-start','flex-end','center','stretch','space-between','space-around'],
//     }
// }
// function getSingleDefaultStyle(index){
//     return {
//         indexOfItem: 'number',
//         order: 'number-null',
//         flexGrowth: 'number-null',
//         flexShrink: 'number-null',
//         flexBasis: 'number-null',
//         alignSelf: ['undefined','auto','flex-start','flex-end','center','baseline','stretch'],
//     }
// }




// function ItemMenu(props){
//     const itemToShowIndex = props.itemToShowIndex;
//     const itemStyle = props.itemStyle[itemToShowIndex].styles;
//     const changeHandler = props.changeHandler;
//     const  currentValues = props.itemStyle;
//     // useEffect(()=>{
        
//     //     itemStyle = {...props.itemStyle[itemToShowIndex].styles};
//     //     itemStyle.indexOfItem = itemToShowIndex
//     //     console.log(itemStyle)
//     //     }, 
//     //     [itemToShowIndex]
//     // )
    

//     console.dir(props)
//     console.log(itemToShowIndex)
//     console.log(itemStyle)
//     console.log(getSingleDefaultStyle(itemToShowIndex))
//     console.log(currentValues[itemToShowIndex])
//     return (
//         <form>
//             <GeneralMenu 
//                 changeHandler={props.changeHandler} 
//                 descriptor={getSingleDefaultStyle(itemToShowIndex)} 
//                 // currentValues={currentValues}
//                 currentValues={itemStyle}
//             >
//             </GeneralMenu>
//         </form>
//     )
// }

// function ContainerMenu(props){
//     const containerStyle = props.containerStyle;
//     const currentValues = props.containerStyle;
//     const changeHandler = props.changeHandler;
//     console.log(props)
//     return (
//         <form>
//             <GeneralMenu 
//                 changeHandler={changeHandler} 
//                 descriptor={getWrapperDefaultContent()} 
//                 currentValues={currentValues}
//             ></GeneralMenu>
//         </form>
//     )
// }


// function FlexMenu(props){
//     const containerStyle = props.containerStyle;
//     const itemStyle = props.itemStyle;
//     const itemToShowIndex = props.itemToShowIndex;
//     const containerStyleChangeHandler = props.containerStyleChangeHandle;
//     const itemStyleChangeHandler = props.itemStyleChangeHandle;
//     const nrOfItemsChangeHandler = props.nrItemsStyleChangeHandle;

//     function changeHandlerGeneric(e){
//         let newVal = e.nativeEvent.target.value;
//         console.log(e.target.type)
//         if (e.target.type === 'number'){
//             itemToShowIndex>=0
//                 ? itemStyleChangeHandler(newVal)
//                 : nrOfItemsChangeHandler(newVal) 
//         } else if(e.target.type ==='number-null'){
//                 console.log('%cNumber null',"background-color:black; color:white")
//         } else {
//             const key = e.nativeEvent.target.name;
//             const containerStyleClone = {...containerStyle};
//             containerStyleClone[key] = newVal==='undefined'?'':newVal;
//             console.log(e)
//             if(itemToShowIndex>=0){
//                 itemStyleChangeHandler(newVal)
//             } else {
//                 containerStyleChangeHandler(containerStyleClone)
//             }
//         }
//     }
//     console.log(itemToShowIndex)
    

//     return (
//         itemToShowIndex>=0
//             ? <ItemMenu 
//                 changeHandler={changeHandlerGeneric} 
//                 itemToShowIndex = {itemToShowIndex} 
//                 itemStyle = {itemStyle}
//             >
//             </ItemMenu>
//             : <ContainerMenu 
//                 changeHandler={containerStyleChangeHandler} 
//                 changeHandler={changeHandlerGeneric} 
//                 containerStyle = {containerStyle}
//             >
//             </ContainerMenu>
//     )    
// }

function FlexMenu(){
    return <></>
}

export default FlexMenu;