import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <section className="page">
                <header className="hero">
                    <div className="copy">
                        <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                        {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                        <h3>{htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}</h3>
                        }
                    </div>
                </header>
                <div className="content">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
            </section>
            </Layout>
        );
    }
}
