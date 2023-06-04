import React, { useState } from 'react';
import './ComponentCSS.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [SideBar, setIsSidebarOpen] = useState(true);
    const [isSubMenu1Open, setIsSubMenu1Open] = useState(false);
    const [isSubMenu2Open, setIsSubMenu2Open] = useState(false);
    const [isSubMenu3Open, setIsSubMenu3Open] = useState(false);
    const [isSubMenu4Open, setIsSubMenu4Open] = useState(false);
    const [isSubMenu5Open, setIsSubMenu5Open] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!SideBar);
    };

    const handleSubMenu1Toggle = () => {
        setIsSubMenu1Open(!isSubMenu1Open);
    };

    const handleSubMenu2Toggle = () => {
        setIsSubMenu2Open(!isSubMenu2Open);
    };

    const handleSubMenu3Toggle = () => {
        setIsSubMenu3Open(!isSubMenu3Open);
    };

    const handleSubMenu4Toggle = () => {
        setIsSubMenu4Open(!isSubMenu4Open);
    };

    const handleSubMenu5Toggle = () => {
        setIsSubMenu5Open(!isSubMenu5Open);
    };

    return (
        <div className={`sidebar ${SideBar ? 'open' : ''}`}>
            <div className="sidebar-header" >
                <h3><Link to='csgo'>CS GO!</Link></h3>
                <button className="toggle-button" onClick={handleSidebarToggle}>
                    ☰
                </button>
            </div>
            {SideBar && (
                <div className="sidebar-content" style={{ width: '200px' }}>
                    <ul>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu1Toggle}>
                                Linked List
                            </button>
                            <ul className={`sub-menu ${isSubMenu1Open ? 'open' : ''}`}>
                                <li><Link to="/StackedList">Stack</Link></li>
                                <li><Link to="/QueueList">Queue</Link></li>
                            </ul>
                        </li>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu2Toggle}>
                                Indexing
                            </button>
                            <ul className={`sub-menu ${isSubMenu2Open ? 'open' : ''}`}>
                                <li><Link to="/BinarySearch">Binary Search</Link></li>
                                <li><Link to="/LinearSearch">Linear Search</Link></li>
                            </ul>
                        </li>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu3Toggle}>
                                <Link to="/Sorting">Sorting</Link>
                            </button>

                        </li>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu4Toggle}>
                                Tree Traversal
                            </button>
                            <ul className={`sub-menu ${isSubMenu4Open ? 'open' : ''}`}>
                                <li><Link to="/BST">BST</Link></li>
                                <li><Link to="/AVLTree">AVL Tree</Link></li>
                            </ul>
                        </li>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu5Toggle}>
                                Search
                            </button>
                            <ul className={`sub-menu ${isSubMenu5Open ? 'open' : ''}`}>
                                <li><Link to="/BinarySearch">Binary Search</Link></li>
                                <li><Link to="/LinearSearch">Linear Search</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )}
            {!SideBar && (
                <div className="sidebar-content-hidden" style={{ width: '0px' }}>
                    <ul>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu1Toggle}>
                                Linked List
                            </button>
                            <ul className={`sub-menu ${isSubMenu1Open ? 'open' : ''}`}>
                                <li>Stack</li>
                                <li>Queue</li>
                            </ul>
                        </li>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu2Toggle}>
                                Indexing
                            </button>
                            <ul className={`sub-menu ${isSubMenu2Open ? 'open' : ''}`}>
                                <li>Sub Menu Item 2.1</li>
                                <li>Sub Menu Item 2.2</li>
                                <li>Sub Menu Item 2.3</li>
                            </ul>
                        </li>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu3Toggle}>
                                Sorting
                            </button>
                            <ul className={`sub-menu ${isSubMenu3Open ? 'open' : ''}`}>
                                <li>Bubble Sort</li>
                                <li>Selection Sort</li>
                                <li>Insertion Sort</li>
                                <li>Merge Sort</li>
                            </ul>
                        </li>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu4Toggle}>
                                Tree Traversal
                            </button>
                            <ul className={`sub-menu ${isSubMenu4Open ? 'open' : ''}`}>
                                <li>BST</li>
                                <li>AVL Tree</li>
                            </ul>
                        </li>
                        <li>
                            <button className="sub-menu-button" onClick={handleSubMenu5Toggle}>
                                Graph
                            </button>
                            <ul className={`sub-menu ${isSubMenu5Open ? 'open' : ''}`}>
                                <li>BFS</li>
                                <li>DFS</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SideBar;
