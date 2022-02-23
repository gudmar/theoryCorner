import FlexContainer from './flexContainer';
import FlexMenu from './flexMenu';

function styleContainer(settingObj){
    let outlet = {};
    if (settingObj.display !== undefined){outlet.display = settingObj.display};
    if (settingObj.direction !== undefined){outlet.direction = settingObj.direction};
    if (settingObj.wrap !== undefined){outlet.wrap = settingObj.wrap};
    if (settingObj.justifyContent !== undefined){outlet.justifyContent = settingObj.justifyContent};
    if (settingObj.alignItems !== undefined){outlet.alignItems = settingObj.alignItems};
    if (settingObj.content !== undefined){outlet.content = settingObj.content};
    return outlet;
}

function styleItem(settingObj){
    let outlet = {};
    if (settingObj.order !== undefined){outlet.order = settingObj.order}
    if (settingObj.grow !== undefined){outlet.grow = settingObj.grow}
    if (settingObj.shrink !== undefined){outlet.shrink = settingObj.shrink}
    if (settingObj.basis !== undefined){outlet.grow = settingObj.grow}
    if (settingObj.self !== undefined){outlet.order = settingObj.self}
    return outlet;
}

function FlexDemo(props){
    // props not needed
    const [nrOfElements, setNrOfElements] = useState(5);
    const [mutationTarget, setMutationTarget] = useState('flexContainer');





    return (
        <>
            <div className="felx-demo-wrapper">
                <FlexMenu></FlexMenu>
                <FlexContainer></FlexContainer>
            </div>
        </>
    )
}