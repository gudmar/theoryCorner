
function Label(props){
    const helpContent = props.helpContent;
    const label = props.label;
    const labelFor = props.labelFor;
    const displayHelp = props.displayHelpHandler;
    const isActive = (props.isActive===undefined||props.isActive===true)?true:false;
    return (
        <span>{helpContent!=undefined
            ? <><span className="help-icon"
                onMouseEnter = {displayHelp(true, label, helpContent)}
                onMouseLeave = {displayHelp(false)}
              >?</span>&nbsp;&nbsp;</>
            :<></>
        }
        <label className={isActive?'':'disabled'} htmlFor = {labelFor}><b>{label}</b></label>
        </span>
    )
}

export default Label;