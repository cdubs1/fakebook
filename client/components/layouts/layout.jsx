import React from 'react';

const Layout = React.createClass({
    render(){
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="srow row-offcanvas row-offcanvas-left push-down-50">
                        Navbar
                        {this.props.sidebar}
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
});

export default Layout;