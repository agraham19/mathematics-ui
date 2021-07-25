import React from 'react';
import PropTypes from 'prop-types';

function getStepInstruction(current) {
  if (current.filteredMultiplier === undefined) {
    return <div />;
  } if (current.filteredMultiplier === 1) {
    return <div>First write out the numbers up to your limit and cross out number 1</div>;
  } if (current.filteredMultiplier === 2 && current.filteredCandidates.length > 1) {
    return (
      <div>
        {current.filteredMultiplier}
        {' '}
        is the first prime number, so cross out of all of it&apos;s multiples
        (excluding
        itself)
      </div>
    );
  } if (current.filteredMultiplier && current.filteredCandidates.length > 1) {
    return (
      <div>
        {current.filteredMultiplier}
        {' '}
        is the next prime number, so cross out of all of it&apos;s multiples
        (excluding
        itself)
      </div>
    );
  }
  return (
    <div>
      {current.filteredMultiplier}
      {' '}
      is the next prime number, but it has no remaining multiples
    </div>
  );
}

const shouldListNumbers = (values) => values.filteredCandidates.length > 1
  || values.filteredMultiplier < 2;

const SieveStep = ({ upperLimit, values }) => {
  console.log(typeof upperLimit);

  const range = new Array(upperLimit).fill(null);

  // eslint-disable-next-line consistent-return
  function getCandidateClass(values2, candidate) { // fix thi
    if (values2.remainingCandidates.includes(candidate)) {
      return 'primeCandidate';
    } if (values2.filteredCandidates.includes(candidate)) {
      return 'primeCandidate primeCandidateFiltered';
    }
  }

  return (
    <div className="sieveStep">
      {getStepInstruction(values)}
      { shouldListNumbers(values)
            && range.map((cur, index) => {
              const candidate = index + 1; // add 1 to start at 1 and include the limit
              return (values.remainingCandidates.includes(candidate)
                || values.filteredCandidates.includes(candidate))
            && (
            <span
              key={candidate}
              className={getCandidateClass(values, candidate)}
            >
              {candidate}
            </span>
            );
            })}
    </div>
  );
};

SieveStep.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  values: PropTypes.array.isRequired,
  upperLimit: PropTypes.number.isRequired,
};

export default SieveStep;
