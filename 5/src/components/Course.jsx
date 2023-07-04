const Course = ({ course, total1, total2 }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} total1={total1} total2={total2} />
    </>
  );
};

const Header = ({ course }) => {
  return (
    <>
      <div>
        <h1> Web development Curricullum</h1>
      </div>
    </>
  );
};

const Content = ({ course, total1, total2 }) => {
  return (
    <>
      <h3> {course[0].name} </h3>
      {course[0].parts.map((part) => (
        <Part key={part.id} part={part} course={course} />
      ))}
      <p>
        <strong> Total of {total1} exercises </strong>
      </p>
      <h3> {course[1].name} </h3>
      {course[1].parts.map((part) => (
        <Part key={part.id} part={part} course={course} />
      ))}
      <p>
        <strong> Total of {total2} exersices </strong>
      </p>
    </>
  );
};

const Part = ({ part, course }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

export default Course;
