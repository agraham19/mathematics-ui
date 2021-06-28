import PropTypes from 'prop-types';
import React from 'react';

import SieveStep from './SieveStep';
import SieveResult from './SieveResult';

const SieveSteps = ({ steps, upperLimit }) => (
  <div className="sieveSteps">
    {steps.slice(1).map((values, index) => (
      <>
        <SieveStep values={values} upperLimit={upperLimit} key={index} />
      </>
    ))}
    {steps.length > 0 && <SieveResult values={steps[steps.length - 1]} upperLimit={upperLimit} />}

  </div>
);

SieveSteps.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  steps: PropTypes.object.isRequired,
  upperLimit: PropTypes.number.isRequired,
};

export default SieveSteps;
