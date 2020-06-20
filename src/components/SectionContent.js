import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';

export default class SectionContent extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="content">
                {_.get(section, 'image') && <img className="inline-image" src={safePrefix(_.get(section, 'image'))}/>}
                {_.get(section, 'content') && 
                <div className="copy">
                    {markdownify(_.get(section, 'content'))}
                </div>
                }
            </section>
        );
    }
}
