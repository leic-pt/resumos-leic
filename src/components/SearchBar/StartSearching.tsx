import type { HomepageYear } from './autocomplete';

const StartSearching = ({ years = [] }: { years?: HomepageYear[] }) => {
  return (
    <div className='search-start'>
      {years.map((year) => (
        <div key={year.name} className='search-start-group'>
          <p className='search-start-group--name'>{year.name}</p>
          <div className='search-start-group-columns'>
            {year.semesters.map((semester) => (
              <div key={semester.name} className='search-start-group-column'>
                {semester.courses.map((course) => (
                  <a
                    href={course.link}
                    key={course.link}
                    className='search-start-group-column--item'
                  >
                    {course.name}
                  </a>
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
