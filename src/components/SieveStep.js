function getStepInstruction(current) {
    if (current.filteredMultiplier === undefined) {
        return <div></div>
    } else if (current.filteredMultiplier === 1) {
        return <div>First write out the numbers up to your limit and cross out number 1</div>
    } else if (current.filteredMultiplier === 2 && current.filteredCandidates.length > 1) {
        return <div>{current.filteredMultiplier} is the first prime number, so cross out of all of it's multiples
            (excluding
            itself)</div>
    } else if (current.filteredMultiplier && current.filteredCandidates.length > 1) {
        return <div>{current.filteredMultiplier} is the next prime number, so cross out of all of it's multiples
            (excluding
            itself)</div>
    } else {
        return <div>{current.filteredMultiplier} is the next prime number, but it has no remaining multiples</div>
    }
}

const shouldListNumbers = (values) => {
    return values.filteredCandidates.length > 1 || values.filteredMultiplier < 2;
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
        {   shouldListNumbers(values) &&
            range.map((cur, index) => {
            const candidate = index + 1; // add 1 to start at 1 and include the limit
            return (values.remainingCandidates.includes(candidate) || values.filteredCandidates.includes(candidate)) &&
            <span key={candidate}
            className={getCandidateClass(values, candidate)}>{candidate}</span>;
        })
        }
    </div>
}

export default SieveStep;