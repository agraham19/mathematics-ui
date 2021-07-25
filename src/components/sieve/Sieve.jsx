import { React, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SieveSteps from './SieveSteps';

const Sieve = () => {
  const [steps, setSteps] = useState([]);
  const [upperLimit, setValue] = useState(20);

  const handleSubmit = (newUpperLimit) => (e) => { // fix
    e.preventDefault();
    setValue(newUpperLimit);

    console.log(`Submitting sieve request for: ${newUpperLimit}`);

    axios.get(`http://localhost:8082/find_primes_up_to/${newUpperLimit}`).then((response) => {
      setSteps(response.data.steps);
    });
  };

  return (
    <>
      <div>
        Input value:
        {upperLimit}
      </div>
      <SieveInput handleSubmit={handleSubmit} />
      <SieveSteps steps={steps} upperLimit={upperLimit} />
    </>
  );
};

const SieveInput = ({ handleSubmit }) => {
  const [upperLimit, setValue] = useState(20);
  const onChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <>
      <input value={upperLimit} onChange={onChange} />
      <button onClick={handleSubmit(upperLimit)} type="button">Sieve!</button>
    </>
  );
};

SieveInput.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  handleSubmit: PropTypes.func,
};

export default Sieve;
