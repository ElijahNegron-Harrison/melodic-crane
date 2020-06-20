import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer container">
                {_.get(this.props, 'pageContext.site.siteMetadata.footer.content') && 
                <div className="copyright">{markdownify(_.get(this.props, 'pageContext.site.siteMetadata.footer.content'))}</div>
                }
                {_.get(this.props, 'pageContext.site.siteMetadata.footer.links') && 
                <nav>
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links'), (link, link_idx) => (
                    <Link key={link_idx} className="subtle-link" to={safePrefix(_.get(link, 'url'))}{...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'label')}</Link>
                    ))}
                </nav>
                }
                {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social') && 
                <div className="social-links">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links'), (link, link_idx) => (
                    link && 
                    <Link key={link_idx} className="subtle-link" to={safePrefix(_.get(link, 'url'))}{...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'label')}</Link>
                    ))}
                </div>
                }
            </footer>
        );
    }
}
