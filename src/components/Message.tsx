const Text=(props:{content: string  })=>{
    const {content}=props;

    return <p className="text">{content}</p>
}

const Message=(props:{})=>{
    const parentContext="parent";
    const childContext="child";

    return(
        <div>
            <Text content={parentContext}/>

            <Text content={childContext}/>
        </div>
    )
}

export default Message;
