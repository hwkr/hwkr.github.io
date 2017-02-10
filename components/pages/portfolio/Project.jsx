import React, { Component, PropTypes } from 'react';
import { Link } from 'react-scroll';

import Waypoint from 'react-waypoint';
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
      showSidenav: false,
    };
  }

  showSidenav = () => { this.setState({ showSidenav: true }); }
  hideSidenav = () => { this.setState({ showSidenav: false }); }

  renderSidenavToc = (sections) => {
    if (!sections) return null;
    return (
      <ol className="sidenav-list toc">
        {sections.map((section) =>
          <li key={section.id}>
            <Link className="btn btn-nav btn-sm" to={section.id} spy smooth>
              <span>{section.title}</span>
            </Link>
            {this.renderSidenavToc(section.subsections)}
          </li>
        )}
      </ol>
    );
  }

  renderToc = (sections) => {
    if (!sections) return null;
    return (
      <ol className="toc">
        {sections.map((section) =>
          <li key={section.id}>
            <Link className="btn btn-nav" to={section.id} smooth>
              <span>{section.title}</span>
            </Link>
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
          <section key={section.id} id={section.id} className={classNames('project-section', { 'project-tight': section.tight })}>
            {section.content}
            {this.renderSections(section.subsections)}
            <Waypoint scrollableAncestor={window} onEnter={this.showSidenav} />
          </section>
        )}
      </div>
    );
  }

  render() {
    const { project } = this.props.route;
    const { showSidenav } = this.state;
    return (
      <main className={classNames('project', project.id)}>
        <Helmet title={project.title} />
        <div className={classNames('sidenav', 'slide', { active: showSidenav })}>
          {this.renderSidenavToc(project.sections)}
        </div>
        <section className="hero">{project.hero}</section>
        <section id="front-matter" className="front-matter">
          <div className="container">
            <div className="columns cols-md">
              <div className="column col-12">
                <h2>Contents</h2>
              </div>
            </div>
            <div className="columns cols-md">
              <div className="column col-md-12 col-4 hide-md">
                {this.renderToc(project.sections)}
              </div>
              <div className="column col-md-12 col-8">
                {project.frontmatter}
                <Waypoint scrollableAncestor={window} onEnter={this.hideSidenav} />
              </div>
            </div>
          </div>
        </section>
        {this.renderSections(project.sections)}
      </main>
    );
  }
}
