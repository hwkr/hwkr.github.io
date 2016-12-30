import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

export default class Project extends Component {
  static propTypes = {
    route: PropTypes.shape({
      project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        hero: PropTypes.element.isRequired,
        sections: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          content: PropTypes.element,
          subsections: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            content: PropTypes.element.isRequired,
          })),
        })).isRequired,
      }).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderToc = (sections) => {
    if (!sections) return null;
    return (
      <ol className="toc">
        {sections.map((section) =>
          <li key={section.id}>
            <span>{section.title}</span>
            {this.renderToc(section.subsections)}
          </li>
        )}
      </ol>
    );
  }

  renderSections = (sections) => {
    if (!sections) return null;
    return (
      <div>
        {sections.map((section) =>
          <section key={section.id} id={section.id}>
            <div>
              {section.title}
            </div>
            {this.renderSections(section.subsections)}
          </section>
        )}
      </div>
    );
  }

  render() {
    const { project } = this.props.route;
    return (
      <main className={classNames('project', project.id)}>
        <Helmet title={project.title} />
        <section className="contents container " style={{ minHeight: '80vh' }}>
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Contents</h2>
            </div>
          </div>
          <div className="columns cols-md">
            <div className="column col-6">
              {this.renderToc(project.sections)}
            </div>
          </div>
        </section>
        {this.renderSections(project.sections)}
      </main>
    );
  }
}
