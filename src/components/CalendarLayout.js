import { graphql } from 'gatsby';
import React, { useState } from 'react';
import '../styles/calendar.css';
import '../styles/main.css';
import '../styles/markdown.css';
import Navbar from './Navbar';
import PageMetadata from './PageMetadata';

// TODO change this to icons or something

const TYPES = {
  test: 'Teste',
  exam: 'Exame',
  lab: 'Lab',
  project_start: 'Início Projeto',
  project_end: 'Entrega Projeto',
};

const HomePageLayout = ({ data }) => {
  const { markdownRemark: page } = data;
  const [activeCourses, setActiveCourses] = useState(() =>
    page.frontmatter.calendar.years.map((year) => year.courses.map((course) => course.name)).flat()
  );

  const evaluations = [];

  page.frontmatter.calendar.years.forEach((year) => {
    year.courses.forEach((course) => {
      evaluations.push(
        ...course.evaluations
          .map((evaluation) =>
            evaluation.dates.map((evaluationDate) => ({
              ...evaluation,
              course: course.name,
              date: new Date(evaluationDate),
            }))
          )
          .flat()
      );
    });
  });

  evaluations.sort((a, b) => a.date - b.date);

  const toggleActiveCourse = (evt) => {
    const { value } = evt.target;
    const i = activeCourses.indexOf(value);
    if (i < 0) setActiveCourses([...activeCourses, value]);
    else setActiveCourses(activeCourses.filter((_, j) => j !== i));
  };

  return (
    <div className='home-page-container'>
      <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />
      <Navbar />
      <div className='content' dangerouslySetInnerHTML={{ __html: page.html }} />
      <div class='calendar-filter'>
        {page.frontmatter.calendar.years.map((year) => (
          <div key={year.name}>
            <p>
              <strong>{year.name}</strong>
            </p>
            {year.courses.map((course) => (
              <p>
                <label>
                  <input
                    type='checkbox'
                    value={course.name}
                    checked={activeCourses.indexOf(course.name) >= 0}
                    onClick={toggleActiveCourse}
                  />
                  {course.name}
                </label>
              </p>
            ))}
          </div>
        ))}
      </div>
      <table className='calendar-table'>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Disciplina</th>
            <th>Turnos</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {evaluations
            .filter(
              (evaluation) =>
                activeCourses.indexOf(evaluation.course) >= 0 && evaluation.date > new Date()
            )
            .map((evaluation) => (
              <>
                <tr>
                  <td>{TYPES[evaluation.type]}</td>
                  <td>{evaluation.course}</td>
                  <td>{evaluation.shifts.join(', ')}</td>
                  <td>
                    {evaluation.date.toLocaleString('pt-PT', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </td>
                </tr>
                <tr className='calendar-event--description'>
                  <td colSpan={4}>{evaluation.description}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePageLayout;

export const pageQuery = graphql`
  query CalendarPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        calendar {
          years {
            name
            courses {
              name
              shifts {
                name
                description
              }
              evaluations {
                shifts
                dates
                type
                description
              }
            }
          }
        }
      }
    }
  }
`;
