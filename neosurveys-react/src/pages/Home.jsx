import React from 'react';
import {Link} from 'react-router-dom';
import AppLogo from '../assets/icons/main_logo.png';

const Home = ()=>{
    return (
        <div className="w-full h-screen bg-slate-100 grid 
            content-center justify-items-center">

            <img className="w-1/6 m-5" src={AppLogo} alt="main_logo" />

            <p className="w-4/5 m-2 font-bold text-2xl text-center">
                Neo Survey is a simple app that let's you freely create a survey 
                or take one of the many surveys that we have.
            </p>

            <p className="w-4/5 m-2 font-medium text-lg text-center">
                Start enjoying your time with this app now
            </p>

            <div className='inline-flex flex-row items-center'>
                <Link 
                    className="bg-baby-blue px-10 py-4 rounded-2xl m-5
                        hover:bg-azure transition-all font-bold text-xl text-white 
                        shadow-lg shadow-baby-blue/50 hover:shadow-azure/40" 
                    to="/surveys">
                    Browse surveys
                </Link>
                <Link 
                    className="bg-baby-blue px-10 py-4 rounded-2xl m-5
                        hover:bg-azure transition-all font-bold text-xl text-white 
                        shadow-lg shadow-baby-blue/50 hover:shadow-azure/40"
                    to="/newsurvey">
                    Create a survey
                </Link>
            </div>
        </div>
    );
}

export default Home;