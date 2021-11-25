import  ContentRenderer  from './contentRenderer/contentRenderer'
import  Spacing  from './spacing.js'

function ContentSection(props){
    return (
        <>
            <ContentRenderer content={props} />
            <Spacing />
        </>
    )
}

export default ContentSection;