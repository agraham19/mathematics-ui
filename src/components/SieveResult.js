const SieveResult = ({upperLimit, values}) => {
    console.log(typeof upperLimit);

    const range = new Array(upperLimit).fill(null);

    return <div class="sieveResult">
        <div>The numbers left over are all the primes up to and including {upperLimit}</div>
        {range.map((cur, index) => {
            const candidate = index + 1; // add 1 to start at 1 and include the limit
            return (values.remainingCandidates.includes(candidate)) &&
                <span key={candidate}
                      className='primeCandidate'>{candidate}</span>;
        })
        }
    </div>
}

export default SieveResult;