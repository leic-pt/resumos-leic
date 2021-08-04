import katex from 'katex';
import React, { useState } from 'react';
import '../../styles/md-tools.css';

const RSACalculator = () => {
  const [input, setInput] = useState(['0', '0', '0']);
  const [expressions, setExpressions] = useState([]);

  const onChangeNumbers = (i) => (event) =>
    setInput((array) => {
      const copy = [...array];
      copy[i] = event.target.value;
      return copy;
    });

  const katexStrings = expressions.map((expression) =>
    katex.renderToString(expression, { displayMode: true })
  );

  const factorizePowersTwo = (n) => {
    const factors = [];
    while (n > 0) {
      let i;
      for (i = 0; 2 ** i <= n; ++i);
      factors.push(i - 1);
      n -= 2 ** (i - 1);
    }
    return factors;
  };

  const calculate = () => {
    setExpressions([]);
    const katexExpressions = [];

    const [N, e, M] = input.map((v) => parseInt(v, 10));
    katexExpressions.push(`R \\equiv_{${N}} ${M}^{${e}}`);
    const factors = factorizePowersTwo(e);
    katexExpressions.push(`${e} = ${factors.map((v) => 2 ** v).join(`+`)}`);
    const results = [M % N];
    katexExpressions.push(`
      \\begin{aligned}
        M &\\equiv_{${N}} ${M}\\\\
        &\\equiv_{${N}} ${results[0]}
      \\end{aligned}
    `);
    for (let i = 1; i <= factors[0]; ++i) {
      results[i] = results[i - 1] ** 2 % N;
      katexExpressions.push(`
      \\begin{aligned}
        M^{${2 ** i}} &\\equiv_{${N}} ${results[i - 1]}^2\\\\
        &\\equiv_{${N}} ${results[i - 1] ** 2}\\\\
        &\\equiv_{${N}} ${results[i]}
      \\end{aligned}
      `);
    }
    const result = factors
      .map((v) => results[v])
      .reduce((acc, v) => acc * window.BigInt(v), window.BigInt(1));
    const resultMod = result % window.BigInt(N);
    katexExpressions.push(`
      \\begin{aligned}
        R &\\equiv_{${N}} ${factors.map((v) => `${M}^{${2 ** v}}`).join(`\\times`)}\\\\
        & \\equiv_{${N}} ${factors.map((v) => results[v]).join(`\\times`)}\\\\
        & \\equiv_{${N}} ${result}\\\\
        & \\equiv_{${N}} ${resultMod}
      \\end{aligned}
    `);

    setExpressions(katexExpressions);
  };

  return (
    <div className='md-tools'>
      <div className='num-inputs'>
        {['N', 'e/d', 'M (mensagem)'].map((label, i) => (
          <div className='input-box-div' key={i}>
            <label>
              {label}
              <input
                value={input[i]}
                type='number'
                className='input-box'
                onChange={onChangeNumbers(i)}
              />
            </label>
          </div>
        ))}
      </div>
      <button className='calculate-btn' onClick={calculate}>
        CALCULATE
      </button>
      {katexStrings.map((katexHtml, i) => (
        <div
          key={i}
          className='math math-display'
          dangerouslySetInnerHTML={{ __html: katexHtml }}
        />
      ))}
    </div>
  );
};

export default RSACalculator;
