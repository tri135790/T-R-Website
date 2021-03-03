import React, { Component } from 'react';
import Link from 'next/link';

class PageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-title-area item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>Team</h2>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>Team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PageHeader;