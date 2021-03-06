import React, { useState } from "react";

const Button = ({ text, handler }) => <button onClick={handler}>{text}</button>;

const Anecdote = ({ anecdote, votes }) => {
	return (
		<div>
			<p>{anecdote}</p>
			<p>has {votes} votes</p>
		</div>
	);
};

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
	];

	const [selected, setSelected] = useState(0);
	const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

	const randInt = (n) => Math.floor(Math.random() * (n + 1));

	const getNewAnecdote = () => {
		setSelected(randInt(anecdotes.length - 1));
	};

	const voteAnecdote = (index) => {
		const copy = [...points];
		copy[index]++;
		setPoints(copy);
	};

	const mostVoted = points.indexOf(Math.max(...points));

	return (
		<div>
			<h1>Anecdote of the day</h1>
      <Anecdote
				anecdote={anecdotes[selected]}
				votes={points[selected]}
			/>
			<Button text="vote" handler={() => voteAnecdote(selected)} />
			<Button text="next anecdote" handler={getNewAnecdote} />
			<h1>Anecdote with the most votes</h1>
			<Anecdote
				anecdote={anecdotes[mostVoted]}
				votes={points[mostVoted]}
			/>
		</div>
	);
};

export default App;
