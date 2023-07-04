const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      { name: "Redux", exercises: 11, id: 4 },
    ],
  };

  const arr = course.parts.map((n) => {
    return n.exercises;
  });

  const total = arr.reduce((arr, n) => {
    return arr + n;
  }, 0);

  const totall = console.log(total);

  return (
    <>
      <Course course={course} />
      <p>
        <strong> Total of {total} exersices </strong>
      </p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

const Header = ({ course }) => {
  return (
    <>
      <div>
        <h1> {course.name} </h1>
      </div>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

export default App;
