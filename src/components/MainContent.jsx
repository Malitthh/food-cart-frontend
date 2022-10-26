// const { Children } = require("react")

const MainContent = ({children}) => {
    return (
        <div id="main-content" className="main-content">
            {children}
        </div>
    ) 
}

export default MainContent;