
function Label(props){
    const helpContent = props.helpContent;
    const label = props.label;
    const labelFor = props.labelFor;
    const displayHelp = props.displayHelpHandler;
    const isActive = (props.isActive===undefined||props.isActive===true)?true:false;
    console.log(label);
    console.log(isActive)
    console.log(props.isActive)
    return (
        <div>{helpContent!=undefined
            ? <span className="help-icon"
                onMouseEnter = {displayHelp(true, label, helpContent)}
                onMouseLeave = {displayHelp(false)}
              >?</span>
            :<></>
        }
        <label className={isActive?'':'disabled'} htmlFor = {labelFor}><b>{label}</b></label>
        </div>
    )
}

export default Label;