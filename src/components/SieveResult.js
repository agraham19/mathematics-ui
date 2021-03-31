function getStepInstruction(current) {
    if (current.filteredMultiplier === undefined) {
        return <div>First write out the numbers up to your limit</div>
    } else if (current.filteredMultiplier === 1) {
        return <div>Cross out number 1</div>
    } else {
        return <div>{current.filteredMultiplier} is a prime number, so cross out of all of it's multiples (excluding
            itself)</div>
    }
}

const SieveStep = ({upperLimit, values}) => {
    console.log(typeof upperLimit);

    const range = new Array(upperLimit).fill(null);

    function getCandidateClass(values, candidate) {
        if (values.remainingCandidates.includes(candidate)) {
            return 'primeCandidate'
        } else if (values.filteredCandidates.includes(candidate)) {
            return "primeCandidate primeCandidateFiltered"
        }
    }

    return <div class="sieveStep">
        {getStepInstruction(values)}
        {range.map((cur, index) => {
            const candidate = index + 1; // add 1 to start at 1 and include the limit
            return (values.remainingCandidates.includes(candidate) || values.filteredCandidates.includes(candidate)) &&
                <span key={candidate}
                      className={getCandidateClass(values, candidate)}>{candidate}</span>;
        })
        }
    </div>
}

export default SieveStep;