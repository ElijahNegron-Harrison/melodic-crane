import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, classNames} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header container">
                <Link to={safePrefix('/')} className="logo">{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link>
                {(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links') && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav')) && 
                <nav>
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links'), (item, item_idx) => (
                    <Link key={item_idx} className={classNames('nav-link', {'active': _.get(this.props, 'pageContext.url') === _.get(item, 'url')})} to={(_.get(item, 'url').startsWith('#') ? _.get(item, 'url') : safePrefix(_.get(item, 'url')))}{...(_.get(item, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(item, 'label')}</Link>
                    ))}
                </nav>
                }
            </header>
        );
    }
}
