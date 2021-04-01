import SieveStep from "./SieveStep";
import SieveResult from "./SieveResult";

const SieveSteps = ({steps, upperLimit}) => {
    return <div class="sieveSteps">
        {steps.slice(1).map((values, index) =>
            <>
                <SieveStep values={values} upperLimit={upperLimit} key={index}/>
            </>
        )}
        {steps.length > 0 && <SieveResult values={steps[steps.length-1]} upperLimit={upperLimit}></SieveResult>}

    </div>
}

export default SieveSteps;