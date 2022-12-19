import { 
    Button, 
    Dropdown, 
    Navbar, 
} from "react-daisyui"
import { useGetWindowSize } from '../hooks/useGetWindowSize';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const { isMobile } = useGetWindowSize();
    return (
        <Navbar className={`bg-base-100 w-screen py-5 ${isMobile ? 'px-6' : 'px-10'}`}>
            <div className="flex-1">
                <span className="font-black text-4xl textPrimary">H</span>
                <img className="text-icon self-center" src="/favicon.ico" alt="Italian Trulli"/>
                <span className="font-black text-4xl textPrimary">PE</span>
            </div>
            <div className="flex-none gap-2">
                {isMobile ? (
                <Dropdown vertical="end">
                    <Button tabIndex={0} shape="circle">
                        MENU
                    </Button>
                    <Dropdown.Menu
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <Dropdown.Item>
                            <NavLink to="/">Home</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavLink to="/resume">Resume</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavLink to="/projects">Projects</NavLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                 </Dropdown>
                ) : (
                    <Navbar.End>
                        <Button href="/" className="mr-5 text-sm font-semibold btn btn-outline btn-primary">
                            Home
                        </Button>
                        <Button href="/resume" className="mr-5 text-sm font-semibold btn btn-outline btn-primary">
                            Resume
                        </Button>
                        <Button href="/projects" className="mr-5 text-sm font-semibold btn btn-outline btn-primary">
                            Projects
                        </Button>
                    </Navbar.End>
                )}

            </div>
        </Navbar>
    )
}
