import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(this.props, 'section.section_id')} className="hero">
                {(_.get(section, 'image') || _.get(this.props, 'pageContext.site.data.author.avatar')) && <img src={(_.get(section, 'image') ? safePrefix(_.get(section, 'image')) : safePrefix(_.get(this.props, 'pageContext.site.data.author.avatar')))}/>}
                {(_.get(section, 'title') || _.get(section, 'subtitle')) && 
                <div className="copy">
                    {_.get(section, 'title') && 
                    <h1>{_.get(section, 'title')}</h1>
                    }
                    {_.get(section, 'subtitle') && 
                    markdownify(_.get(section, 'subtitle'))
                    }
                </div>
                }
            </section>
        );
    }
}
