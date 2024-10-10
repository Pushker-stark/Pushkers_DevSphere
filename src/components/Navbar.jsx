// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
    const [sliderStyle, setSliderStyle] = useState({}); // Store dynamic style for the slider
    const navRef = useRef(null); // Ref to the nav container
    const location = useLocation(); // Get the current location for active route

    useEffect(() => {
        // Find the active NavLink and update slider position
        const activeLink = document.querySelector('.nav-item.active-link');
        if (activeLink && navRef.current) {
            const navRect = navRef.current.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();

            setSliderStyle({
                left: `${linkRect.left - navRect.left}px`,
                width: `${linkRect.width}px`,
            });
        }
    }, [location]); // Update slider when location changes

    return (
        <nav className="relative w-full bg-white flex justify-center py-3" ref={navRef}>
            <ul className="flex space-x-8 relative">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `nav-item text-lg transition-colors ${isActive ? 'active-link text-blue-500 font-semibold' : 'text-black hover:text-blue-500'}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/Projects"
                        className={({ isActive }) =>
                            `nav-item text-lg transition-colors ${isActive ? 'active-link text-blue-500 font-semibold' : 'text-black hover:text-blue-500'}`
                        }
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/experience"
                        className={({ isActive }) =>
                            `nav-item text-lg transition-colors ${isActive ? 'active-link text-blue-500 font-semibold' : 'text-black hover:text-blue-500'}`
                        }
                    >
                        Work Experience
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/extra-curricular"
                        className={({ isActive }) =>
                            `nav-item text-lg transition-colors ${isActive ? 'active-link text-blue-500 font-semibold' : 'text-black hover:text-blue-500'}`
                        }
                    >
                        Extra-Curricular
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `nav-item text-lg transition-colors ${isActive ? 'active-link text-blue-500 font-semibold' : 'text-black hover:text-blue-500'}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
            {/* Sliding element */}
            <div
                className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300"
                style={sliderStyle}>
            </div>
        </nav>
    );
}

export default Navbar;
