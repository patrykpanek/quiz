import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of question</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          <div className="form-control">
            {/* category */}
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              value={quiz.category}
              className="form-input"
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            {/* difficulty */}
            <label htmlFor="difficulty">select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              className="form-input"
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate questions, please try diffrent options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
