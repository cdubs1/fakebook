// home.jsx
// Home layout component

import React from 'react';
class HomeLayout extends React.Component{
    render(){
        return (
            <div>
                Header
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            Features
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeLayout;