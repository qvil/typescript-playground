import * as React from "react";

interface PersonProps {
  name: string;
  age: number;
}

const Person: React.SFC<PersonProps> = props => {
  const { name, age } = props;

  return <div>{`Name: ${name}, Age: ${age}`}</div>;
};

export default Person;
