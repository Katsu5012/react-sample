import React from "react";

const TitleContext = React.createContext("");

const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            <Title />
        </div>
    )
}

const Page = () => {
    const title = 'context使えてる？'

    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page