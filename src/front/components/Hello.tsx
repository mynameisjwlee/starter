import * as React from 'react';

export interface HelloProps {
  compiler : string;
  framework : string;
}

// props의 type을 helloProps 인터페이스와 연결
const Hello = (props:HelloProps) => (
  <h1>
    {props.compiler} and {props.framework}!
  </h1>
);

export default Hello;
