function App() {
	return (
		<>
			<section class="container">
				<div className="quiz-container">
					<h1 className="box-title">Javascript Question</h1>
					<div className="progress">
						<div className="bar"></div>
					</div>
					<h1 className="question">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis asperiores.
					</h1>
					<div className="answers-container">
						<label className="answer">
							<input type="radio" name="question" />
							<span>Question 1</span>
						</label>
						<label className="answer">
							<input type="radio" name="question" />
							<span>Question 2</span>
						</label>
						<label className="answer">
							<input type="radio" name="question" />
							<span>Question 3</span>
						</label>
						<label className="answer">
							<input type="radio" name="question" />
							<span>Question 4</span>
						</label>
					</div>
					<button className="prev">Prev</button>
					<button className="next">Next</button>
				</div>
			</section>
		</>
	);
}

export default App;
