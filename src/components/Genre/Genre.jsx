import "./Genre";

const Genre = ({id, name}) => {
    
    return(
        <article className="genre">{name}</article>
    )
}

export {Genre}