import katex from 'katex';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import '../../styles/md-tools.css';

const BezoutCalculator = () => {
  const [input, setInput] = useState(['0', '0']);
  const [n3, setN3] = useState('0');
  const [expressions, setExpressions] = useState<string[]>([]);

  const onChangeNumbers = (i: number) => (event: ChangeEvent<HTMLInputElement>) =>
    setInput((array) => {
      const copy = [...array];
      copy[i] = event.target.value;
      return copy;
    });

  const onChangeN3 = (event: ChangeEvent<HTMLInputElement>) => setN3(event.target.value);

  const katexStrings = expressions.map((expression) =>
    katex.renderToString(expression, { displayMode: true })
  );

  const numberSignal = (n: number) => (n < 0 ? '' : '+');

  const calculate = () => {
    setExpressions([]);

    const katexExpressions: string[] = [];

    const parsedInput = input.map((n) => parseInt(n, 10));

    const inputAbs = parsedInput.map(Math.abs);
    let swapped = false;
    if (inputAbs[0] < inputAbs[1]) swapped = true;
    const remainder = [Math.max(...inputAbs), Math.min(...inputAbs)];
    const quotients: (number | null)[] = [null];
    while (remainder[remainder.length - 1] !== 0) {
      const [a, b] = remainder.slice(-2);
      remainder.push(a % b);
      quotients.push(Math.floor(a / b));
    }
    const coefX = [1, 0];
    const coefY = [1, 0];
    for (let i = 2; i < quotients.length; ++i) {
      const q = quotients[i - 1] ?? 0;
      coefX[i] = coefX[i - 2] - q * coefX[i - 1];
      coefY[i] = coefY[i - 2] - q * coefY[i - 1];
    }
    const [n1, n2] = swapped ? [...parsedInput].reverse() : parsedInput;

    const n3Int = parseInt(n3, 10);
    if (!isNaN(n3Int)) katexExpressions.push(`${n1}x ${numberSignal(n2)} ${n2}y = ${n3Int}`);

    katexExpressions.push(`\\begin{array}{l | l | l | l}
    n & q_i & x_i & y_i\\\\
    \\hline
    ${remainder
      .map((v, i) => `${v} & ${quotients[i] ?? '-'} & ${coefX[i] ?? '-'} & ${coefY[i] ?? '-'}`)
      .join(`\\\\`)}
    \\end{array}
    `);

    if (!isNaN(n3Int)) {
      const gcd = remainder.slice(-2)[0];
      let c = gcd;
      let xi = coefX.slice(-1)[0];
      let yi = coefY.slice(-1)[0];
      let a = remainder[0];
      let b = remainder[1];
      const getEq = (gcd: number, n1: number, x: number, n2: number, y: number) =>
        `${gcd} = ${n1} \\times (${x}) ${numberSignal(n2)} ${n2} \\times (${y})`;
      if (n3Int % gcd !== 0) {
        katexExpressions.push(
          `${gcd} \\text{ não divide } ${n3Int}\\text{, logo não dá para resolver eq. diofantina}`
        );
        setExpressions(katexExpressions);
        return;
      }
      katexExpressions.push(getEq(gcd, a, xi, b, yi));
      let multiplier = n3Int / gcd;
      c *= multiplier;
      xi *= multiplier;
      yi *= multiplier;
      if (multiplier !== 1) katexExpressions.push(getEq(c, a, xi, b, yi));
      if (n1 !== a) {
        a *= -1;
        xi *= -1;
      }
      if (n2 !== b) {
        b *= -1;
        yi *= -1;
      }
      if (a < 0 || b < 0) katexExpressions.push(getEq(c, a, xi, b, yi));
      katexExpressions.push(`\\begin{cases}
        x = ${xi} ${numberSignal(b)} ${b / gcd}t\\\\
        y = ${yi} ${numberSignal(-a)} ${-a / gcd}t
      \\end{cases}
      \\quad, \\quad t\\in \\Z
      `);
    }

    setExpressions(katexExpressions);
  };

  return (
    <div className='md-tools'>
      <div className='num-inputs'>
        {input.map((n, i) => (
          <div className='input-box-div' key={i}>
            <label>
              {i + 1}º número
              <input value={n} type='number' className='input-box' onChange={onChangeNumbers(i)} />
            </label>
          </div>
        ))}
        <div className='input-box-div'>
          <label>
            Constante (opcional)
            <input value={n3} type='number' className='input-box' onChange={onChangeN3} />
          </label>
        </div>
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

export default BezoutCalculator;
