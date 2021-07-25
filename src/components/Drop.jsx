import { React } from 'react';

function getDistanceFromGround(dropHeightInMeters,
  gravitationalInConstantInMetersPerSecond,
  timeInSeconds) {
  return dropHeightInMeters
    - (0.5 * gravitationalInConstantInMetersPerSecond * (timeInSeconds ** 2));
}

function getTimeToLand(dropHeightInMeters, gravitationalInConstantInMetersPerSecond) {
  return Math.sqrt(dropHeightInMeters
    / (gravitationalInConstantInMetersPerSecond / 2));
}

function getDistanceFallenAtIntervals(
  intervalInSeconds,
  dropHeightInMeters,
  gravitationalInConstantInMetersPerSecond,
) {
  const intervals = [];
  const timeToLand = getTimeToLand(dropHeightInMeters,
    gravitationalInConstantInMetersPerSecond);

  let t;
  for (t = 0; t < timeToLand; t += intervalInSeconds) {
    const distanceFromGround = getDistanceFromGround(dropHeightInMeters,
      gravitationalInConstantInMetersPerSecond, t);
    intervals.push({
      t,
      distanceFromGround,
    });
  }

  intervals.push({ t: t + 1, distanceFromGround: 0 });

  return intervals;
}

const Drop = () => {
  const intervalInSeconds = 0.1;
  const dropHeightInMeters = 26;
  const gravitationalInConstantInMetersPerSecond = 9.8;

  const timeToLand = getTimeToLand(dropHeightInMeters, gravitationalInConstantInMetersPerSecond);

  return (
    <>
      <div>
        TEST
        <br />
        {`intervalInMilliseconds: ${intervalInSeconds}`}
        <br />
        {`heightInMeters: ${dropHeightInMeters}`}
        <br />
        {`gravitationalInConstantInMetersPerSecond: ${gravitationalInConstantInMetersPerSecond}`}
        <br />
        {`timeToLand: ${timeToLand}`}
        <br />
        {JSON.stringify(getDistanceFallenAtIntervals(
          intervalInSeconds,
          dropHeightInMeters,
          gravitationalInConstantInMetersPerSecond,
        ))}
        <br />
      </div>
    </>
  );
};

export default Drop;
