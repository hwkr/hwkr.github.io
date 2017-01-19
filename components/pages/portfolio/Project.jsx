import React, { Component, PropTypes } from 'react';
import { Link } from 'react-scroll';

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
          <section key={section.id} id={section.id} className="fill-full-page">
            <div className="container">
              <h2>{section.title}</h2>
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
        <div className="sidenav">
          {this.renderSidenavToc(project.sections)}
        </div>
        <section className="hero">{project.hero}</section>
        <section className="contents container fill-full-page">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Contents</h2>
            </div>
          </div>
          <div className="columns cols-md">
            <div className="column col-4">
              {this.renderToc(project.sections)}
            </div>
            <div className="column col-8">
              Lorem ipsum
            </div>
          </div>
        </section>
        {this.renderSections(project.sections)}
      </main>
    );
  }
}
