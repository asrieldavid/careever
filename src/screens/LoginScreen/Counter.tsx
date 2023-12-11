import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const Counter = ({onTimeout}: any) => {
  const [counter, setCounter] = useState(25);

  useEffect(() => {
    let timerId: any;
    if (counter > 0) {
      timerId = setInterval(() => setCounter(counter - 1), 1000);
    } else {
      clearInterval(timerId);
      onTimeout();
    }
    return () => clearInterval(timerId);
  }, [counter, onTimeout]);

  return <Text>00:{counter >= 10 ? counter : 0 + counter.toString()}</Text>;
};
export default Counter;
