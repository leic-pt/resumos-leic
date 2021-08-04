import katex from 'katex';
import React, { useState } from 'react';

const TCRTableCalculator = () => {
  const [input, setInput] = useState([
    ['0', '0'],
    ['0', '0'],
  ]);
  const [expressions, setExpressions] = useState([]);

  const incInput = () => setInput((array) => [...array, ['0', '0']]);
  const decInput = () => setInput((array) => array.filter((_, i) => i !== array.length - 1));

  const onChangeNumbers = (i, j) => (event) =>
    setInput((array) =>
      // Change nested array element without mutating
      array.map((v1, i1) =>
        i1 === i ? v1.map((v2, i2) => (i2 === j ? event.target.value : v2)) : v1
      )
    );

  const katexStrings = expressions.map((expression) =>
    katex.renderToString(expression, { displayMode: true })
  );

  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
      let temp = a;
      a = b;
      b = temp;
    }
    while (true) {
      if (b == 0) return a;
      a %= b;
      if (a == 0) return b;
      b %= a;
    }
  };

  const hasSolution = (m, a) => {
    for (let i = 0; i < m.length; ++i)
      for (let j = i + 1; j < a.length; ++j)
        if ((a[i] - a[j]) % gcd(m[i], m[j]) !== 0) return false;
    return true;
  };

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  const calculateC = (mi) => {
    // factorize all numbers
    mi = mi
      .map((m) => {
        let factors = [];
        while (m != 1) {
          let i;
          for (i = 2; i < m; ++i) {
            if (m % i == 0) break;
          }
          m /= i;
          factors.push(i);
        }
        return factors;
      })
      .map((m) =>
        m.reduce((acc, v) => {
          if (!acc[v]) acc[v] = 0;
          acc[v]++;
          return acc;
        }, {})
      );
    const lcmFactors = mi.reduce((acc, factors) => {
      Object.entries(factors).forEach(([k, v]) => {
        if (!acc[k]) acc[k] = 0;
        if (acc[k] < v) acc[k] = v;
      });
      return acc;
    }, {});
    const ci = [...mi]
      .map((c) =>
        Object.fromEntries(
          Object.entries(c).filter(([k, c2]) => {
            if (lcmFactors[k] && lcmFactors[k] == c2) {
              lcmFactors[k] = 0;
              return true;
            }
            return false;
          })
        )
      )
      .map((c) => Object.entries(c).reduce((acc, [k, v]) => acc * k ** v, 1));
    return ci;
  };

  const getNTilde = (n, c) => {
    // n =_c 1
    // nx - cy = 1
    const remainder = [n, c];
    const quotients = [null];
    while (remainder[remainder.length - 1] != 0) {
      const [a, b] = remainder.slice(-2);
      remainder.push(a % b);
      quotients.push(Math.floor(a / b));
    }
    const coefX = [1, 0];
    for (let i = 2; i < quotients.length; ++i) {
      coefX[i] = coefX[i - 2] - quotients[i - 1] * coefX[i - 1];
    }
    if (remainder.slice(-2)[0] != 1) return NaN; // probably won't happen
    // x = coefX[-1] + ct
    return coefX[coefX.length - 1] % c;
  };

  const calculate = () => {
    setExpressions([]);
    const katexExpressions = [];

    const a = input.map(([_, v]) => parseInt(v, 10));
    const m = input.map(([v]) => parseInt(v, 10));
    katexExpressions.push(`\\begin{cases}
        ${a.map((ai, i) => `x \\equiv_{${m[i]}} ${ai}`).join('\\\\')}
        \\end{cases}
      `);
    if (!hasSolution(m, a)) {
      katexExpressions.push(`\\text{Não há solução}`);
      return;
    }
    const c = calculateC([...m]);
    const n = c.map((v, i, array) => {
      const arrayWithoutC = [...array];
      arrayWithoutC.splice(i, 1);
      return arrayWithoutC.reduce((acc, v) => acc * v); // multiply elements
    });
    const nTilde = c.map((v, i) => getNTilde(n[i], v));
    const mult = a.map((v, i) => v * n[i] * nTilde[i]);
    const x0 = mult.reduce((acc, v) => acc + v); // sum all
    const M = c.reduce((acc, v) => acc * v); // multiply all
    katexExpressions.push(`\\begin{array}{l|l|l|l|l|l}
        a_i & m_i & c_i & n_i & \\tilde{n}_i & a_i n_i \\tilde{n}_i \\\\
        \\hline
        ${a
          .map((ai, i) => `${ai} & ${m[i]} & ${c[i]} & ${n[i]} & ${nTilde[i]} & ${mult[i]}`)
          .join('\\\\')}
        \\end{array}
      `);
    katexExpressions.push(`x_0 = ${mult.join(`+`).replace(/\+-/g, '-')} = ${x0}`);
    katexExpressions.push(`M = ${c.join(`\\times`)} = ${M}`);
    katexExpressions.push(`x = ${mod(x0, M)} + ${M}t \\quad, \\quad t \\in \\Z`);

    setExpressions(katexExpressions);
  };

  return (
    <div className='md-tools'>
      {input.map((row, i) => (
        <div className='num-inputs' key={i}>
          <div className='input-box-div'>
            <label>
              <span>m{i + 1}</span>
              <input
                value={row[0]}
                type='number'
                className='input-box'
                onChange={onChangeNumbers(i, 0)}
              />
            </label>
          </div>
          <div className='input-box-div'>
            <label>
              <span>a{i + 1}</span>
              <input
                value={row[1]}
                type='number'
                className='input-box'
                onChange={onChangeNumbers(i, 1)}
              />
            </label>
          </div>
        </div>
      ))}
      <button className='calculate-btn' onClick={calculate}>
        CALCULATE
      </button>

      <button className='calculate-btn' onClick={incInput}>
        + eq
      </button>
      <button className='calculate-btn' onClick={decInput}>
        - eq
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

export default TCRTableCalculator;
