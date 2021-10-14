import React, { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<RateButton text="good" handler={() => setGood(good + 1)} />
			<RateButton
				text="neutral"
				handler={() => setNeutral(neutral + 1)}
			/>
			<RateButton text="bad" handler={() => setBad(bad + 1)} />
			<h1>statistics</h1>
			<Statistics nums={{ good: good, neutral: neutral, bad: bad }} />
		</div>
	);
};

const Statistics = ({ nums }) => {
	const { good, neutral, bad } = nums;

  if (good === 0 && neutral === 0 && bad === 0) return <p>No feedback given</p>;

	const getAvgRating = () => {
		return (good - bad) / (good + bad + neutral);
	};

	const getPositiveRating = () => {
		return good / (good + bad + neutral) * 100;
	};

	return (
		<div>
			<RateResult text="good" num={good} />
			<RateResult text="neutral" num={neutral} />
			<RateResult text="bad" num={bad} />
			<RateResult text="average" num={getAvgRating()} />
			<RateResult
				text="positive"
				num={getPositiveRating()}
				afterText="%"
			/>
		</div>
	);
};

const RateButton = ({ text, handler }) => (
	<button onClick={handler}>{text}</button>
);

const RateResult = ({ text, num, afterText }) => (
	<p>
		{text} {num} {afterText}
	</p>
);

export default App;
