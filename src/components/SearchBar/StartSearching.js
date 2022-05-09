import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

const StartSearching = () => {
  const { markdownRemark: homepage } = useStaticQuery(graphql`
    query SearchStartQuery {
      markdownRemark(frontmatter: { path: { eq: "/" } }) {
        frontmatter {
          years {
            name
            semesters {
              name
              courses {
                name
                link
              }
            }
          }
        }
      }
    }
  `);

  const { years } = homepage.frontmatter;

  return (
    <div className='search-start'>
      {years.map((year) => (
        <div key={year.name} className='search-start-group'>
          <p className='search-start-group--name'>{year.name}</p>
          <div className='search-start-group-columns'>
            {year.semesters.map((semester) => (
              <div key={semester.name} className='search-start-group-column'>
                {semester.courses.map((course) => (
                  <Link
                    to={course.link}
                    key={course.link}
                    className='search-start-group-column--item'
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StartSearching;
