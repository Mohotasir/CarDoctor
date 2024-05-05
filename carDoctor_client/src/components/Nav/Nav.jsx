import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/assets/icons/logo.svg';

const Nav = () => {

    const navList = (
        <>
           <li ><NavLink to="/" style={({ isActive }) => {
                        return {
                            color: isActive &&  'orange',
                           
                        }}}>Home</NavLink></li>
           <li><NavLink to="/about" style={({ isActive }) => {
                        return {
                            color: isActive &&  'orange',
                           
                        }}}>About</NavLink></li>
           <li><NavLink to="/service" style={({ isActive }) => {
                        return {
                            color: isActive &&  'orange',
                           
                        }}}>Service</NavLink></li>
           <li><NavLink to="/blog" style={({ isActive }) => {
                        return {
                            color: isActive &&  'orange',
                           
                        }}}>Blog</NavLink></li>
           <li><NavLink to="/contact" style={({ isActive }) => {
                        return {
                            color: isActive &&  'orange',
                           
                        }}}>Contact</NavLink></li>
        </>
    )
    return (
        <div className="navbar py-6 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm flex flex-col gap-4 dropdown-content z-10 mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <img className='w-[80px]' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8 menu-horizontal px-1">
                   {navList}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-sm btn-warning">Appointment</a>
            </div>
        </div>
    );
};

export default Nav;