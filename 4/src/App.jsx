const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const arr = courses[0].parts.map((n) => {
    return n.exercises;
  });

  const arr2 = courses[1].parts.map((n) => {
    return n.exercises;
  });

  const total1 = arr.reduce((arr, n) => {
    return arr + n;
  }, 0);

  const total2 = arr2.reduce((arr2, n) => {
    return arr2 + n;
  });

  console.log(arr2);

  console.log(arr);

  console.log("Total1 : ", total1);

  return (
    <>
      <Course course={courses} total1={total1} total2={total2} />
    </>
  );
};

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

export default App;
