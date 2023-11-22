/* eslint-disable */
const NextButton = ({ dispatch, numQuestions, index, answer }) => {
	if (answer === null) return null;

	if (index < numQuestions - 1)
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "nextQuestion" })}
			>
				Next
			</button>
		);
	return (
		<button
			className="btn btn-ui"
			onClick={() => dispatch({ type: "finish" })}
		>
			Finish
		</button>
	);
};

export default NextButton;
