type ContainerProps={
    title:string;
    children:React.ReactNode;
}


const TitleContext=React.createContext("");

const Title=()=>{
    return(
        <TitleContext.Consumer>
           {(title)=>{
            return <h1>{title}</h1>
           }}
        </TitleContext.Consumer>
    )
}

const Container=(props:ContainerProps):JSX.Element=>{
    const {children,title}=props;

    return(
        <div style={{ background:"red" }}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent=():JSX.Element=>{
    return(
        <Container title="parent">
           <p>赤くなるよ</p>
        </Container>
    )
}

export default Parent;
