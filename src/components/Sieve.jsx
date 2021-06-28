import { useState } from 'react';
import axios from 'axios';
import SieveSteps from './SieveSteps';

const Sieve = () => {
    const [steps, setSteps] = useState([]);
    const [upperLimit, setValue] = useState(20);

    const handleSubmit = (upperLimit) => (e) => {
        e.preventDefault();
        setValue(upperLimit);

        console.log(`Submitting sieve request for: ${upperLimit}`);

        axios.get(`http://localhost:8082/find_primes_up_to/${upperLimit}`).then((response) => {
            setSteps(response.data.steps);
        });
    };

    return (
        <>
            <div>
            Input value:{upperLimit}
          </div>
            <SieveInput handleSubmit={handleSubmit} />
            <SieveSteps steps={steps} upperLimit={upperLimit} />
      </>
    );
};

const SieveInput = ({ handleSubmit }) => {
    const [upperLimit, setValue] = useState(20);
    const onChange = (event) => {
        setValue(parseInt(event.target.value));
    };

    return (
      <>
          <input value={upperLimit} onChange={onChange} />
          <button onClick={handleSubmit(upperLimit)}>Sieve!</button>
        </>
    );
};

export default Sieve;
