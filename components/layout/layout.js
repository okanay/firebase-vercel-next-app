import Navigation from "./navigation";

const Layout = ({children}) => {

    return (
        <div className={'mx-auto max-w-screen-desktop py-2'}>
            <Navigation/>
            {children}
        </div>

    )
}

export default Layout