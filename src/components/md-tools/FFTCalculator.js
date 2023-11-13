import katex from 'katex';
import React, { useState } from 'react';

const FFTCalculator = () => {
  const [pol1Input, setPol1Input] = useState(['0', '0', '0', '0']);
  const [pol2Input, setPol2Input] = useState(['0', '0', '0', '0']);
  const [expressions, setExpressions] = useState([]);

  const onChangeNumbers = (i, setFn) => (event) =>
    setFn((array) => {
      const copy = [...array];
      copy[i] = event.target.value;
      return copy;
    });

  const katexStrings = expressions.map((expression) =>
    katex.renderToString(expression, { displayMode: true })
  );

  const rev2Fn = (array) => {
    return [array[0], array[2], array[1], array[3]];
  };
  const complexToStr = ({ real = 0, imag = 0 }) => {
    if (!real && !imag) return '0';
    if (!real) return `${imag}i`;
    if (!imag) return `${real}`;
    return `${real} ${imag > 0 ? '+' : ''}${imag}i`;
  };
  const mulComplex = (c1, c2) => {
    // (a + bi) * (c + di)
    // ac + adi + bci - bd
    return {
      real: c1.real * c2.real - c1.imag * c2.imag,
      imag: c1.real * c2.imag + c1.imag * c2.real,
    };
  };
  const sumComplex = (c1, c2) => {
    return { real: c1.real + c2.real, imag: c1.imag + c2.imag };
  };
  const complementComplex = (c) => {
    return { real: c.real, imag: -c.imag };
  };
  const multiplyStep1 = ([v1, v2]) => {
    const minusOne = { real: -1, imag: 0 };
    return [sumComplex(v1, v2), sumComplex(v1, mulComplex(minusOne, v2))];
  };
  const multiplyStep2 = ([v1, v2]) => {
    const imagOne = { real: 0, imag: 1 };
    return [v1, mulComplex(imagOne, v2)];
  };
  const sumStep3 = ([v1, v2], [v3, v4]) => {
    const minusOne = { real: -1, imag: 0 };
    return [
      sumComplex(v1, v3),
      sumComplex(v2, v4),
      sumComplex(v1, mulComplex(minusOne, v3)),
      sumComplex(v2, mulComplex(minusOne, v4)),
    ];
  };
  const grauPol = (p) => {
    return p.reduce((acc, v, i) => (parseInt(v, 10) === 0 ? acc : i), 0);
  };

  const calculate = () => {
    if (grauPol(pol1Input) + grauPol(pol1Input) > 3) {
      setExpressions([`\\text{Esta calculadora só suporta polinómios resultantes até grau 3}`]);
      return;
    }

    setExpressions([]);
    const katexExpressions = [];

    let pol1 = pol1Input.map((v) => ({ real: parseInt(v, 10), imag: 0 }));
    let pol2 = pol2Input.map((v) => ({ real: parseInt(v, 10), imag: 0 }));
    let pol1Rev = rev2Fn(pol1);
    let pol2Rev = rev2Fn(pol2);
    const rev2 = `
      \\begin{array}{r l l}
      & \\text{Primeiro Vetor} & \\text{Segundo Vetor} \\\\
      \\text{Original:} & [${pol1.map((v) => complexToStr(v)).join(', ')}] & [${pol2
        .map((v) => complexToStr(v))
        .join(', ')}]\\\\
      \\text{Invertido } Rev_2: & [${pol1Rev.map((v) => complexToStr(v)).join(', ')}] & [${pol2Rev
        .map((v) => complexToStr(v))
        .join(', ')}]
      \\end{array}
    `;
    katexExpressions.push(rev2);
    const genF = (pol) => {
      const a1 = multiplyStep1(pol.slice(0, 2));
      const a2 = multiplyStep1(pol.slice(2));
      const a3 = multiplyStep2(a2);
      const a4 = sumStep3(a1, a3);
      return {
        result: a4,
        text: `
      \\begin{aligned}
      \\mathcal{F}_2(i) \\begin{pmatrix}${pol
        .map((v) => complexToStr(v))
        .join('\\\\')}\\end{pmatrix}
        &= \\begin{pmatrix}
        \\mathcal{F}_1(-1) & \\mathcal{D}_1\\mathcal{F}_1(-1)\\\\
        \\mathcal{F}_1(-1) & -\\mathcal{D}_1\\mathcal{F}_1(-1)
        \\end{pmatrix}
        \\begin{pmatrix}${pol.map((v) => complexToStr(v)).join('\\\\')}\\end{pmatrix}\\\\
        &= \\begin{pmatrix}
          \\begin{pmatrix}
            1 & 1 \\\\1 & -1
          \\end{pmatrix}
          \\begin{pmatrix}
          ${pol
            .slice(0, 2)
            .map((v) => complexToStr(v))
            .join('\\\\')}
          \\end{pmatrix}
          + \\begin{pmatrix}
            1 & 0 \\\\ 0 & i
          \\end{pmatrix}
          \\begin{pmatrix}
            1 & 1 \\\\ 1 & -1
          \\end{pmatrix}
          \\begin{pmatrix}
          ${pol
            .slice(2)
            .map((v) => complexToStr(v))
            .join('\\\\')}
          \\end{pmatrix}
          \\\\
          \\begin{pmatrix}
            1 & 1 \\\\1 & -1
          \\end{pmatrix}
          \\begin{pmatrix}
          ${pol
            .slice(0, 2)
            .map((v) => complexToStr(v))
            .join('\\\\')}
          \\end{pmatrix}
          - \\begin{pmatrix}
            1 & 0 \\\\ 0 & i
          \\end{pmatrix}
          \\begin{pmatrix}
            1 & 1 \\\\ 1 & -1
          \\end{pmatrix}
          \\begin{pmatrix}
          ${pol
            .slice(2)
            .map((v) => complexToStr(v))
            .join('\\\\')}
          \\end{pmatrix}
        \\end{pmatrix}\\\\
        &=\\begin{pmatrix}
          \\begin{pmatrix}
            ${a1.map((v) => complexToStr(v)).join('\\\\')}
          \\end{pmatrix}
          +
          \\begin{pmatrix}
            1 & 0 \\\\ 0 & i
          \\end{pmatrix}
          \\begin{pmatrix}
            ${a2.map((v) => complexToStr(v)).join('\\\\')}
          \\end{pmatrix}
          \\\\
          \\begin{pmatrix}
            ${a1.map((v) => complexToStr(v)).join('\\\\')}
          \\end{pmatrix}
          -
          \\begin{pmatrix}
            1 & 0 \\\\ 0 & i
          \\end{pmatrix}
          \\begin{pmatrix}
            ${a2.map((v) => complexToStr(v)).join('\\\\')}
          \\end{pmatrix}
        \\end{pmatrix}\\\\
        &=\\begin{pmatrix}
          \\begin{pmatrix}
            ${a1.map((v) => complexToStr(v)).join('\\\\')}
          \\end{pmatrix}
          +
          \\begin{pmatrix}
            ${a3.map((v) => complexToStr(v)).join('\\\\')}
          \\end{pmatrix}
          \\\\
          \\begin{pmatrix}
            ${a1.map((v) => complexToStr(v)).join('\\\\')}
          \\end{pmatrix}
          -
          \\begin{pmatrix}
            ${a3.map((v) => complexToStr(v)).join('\\\\')}
          \\end{pmatrix}
        \\end{pmatrix}
        =\\begin{pmatrix}
          ${a4.map((v) => complexToStr(v)).join('\\\\')}
        \\end{pmatrix}
      \\end{aligned}
    `,
      };
    };
    const { result: resPol1, text: textPol1 } = genF(pol1Rev);
    const { result: resPol2, text: textPol2 } = genF(pol2Rev);
    katexExpressions.push(textPol1);
    katexExpressions.push(textPol2);
    katexExpressions.push(
      `(${resPol1.map((v) => complexToStr(v)).join(',')}) \\otimes (${resPol2
        .map((v) => complexToStr(v))
        .join(',')})`
    );
    const polMul = resPol1.map((v, i) => mulComplex(v, resPol2[i]));
    katexExpressions.push(
      `\\text{Multiplicar Vetores: }= (${polMul.map((v) => complexToStr(v)).join(',')})`
    );
    const polCompl = polMul.map((v) => complementComplex(v));
    katexExpressions.push(
      `\\text{Conjugar} \\rightarrow (${polCompl.map((v) => complexToStr(v)).join(',')})`
    );
    const polComplRev2 = rev2Fn(polCompl);
    katexExpressions.push(
      `\\text{Rev}_2\\rightarrow (${polComplRev2.map((v) => complexToStr(v)).join(',')})`
    );
    const { result: resPol3, text: textPol3 } = genF(polComplRev2);
    katexExpressions.push(textPol3);
    const resDivided = resPol3.map((v) =>
      mulComplex(complementComplex(v), { real: 0.25, imag: 0 })
    );
    katexExpressions.push(
      `\\text{Conjungar e dividir por }2^2: (${resPol3
        .map((v) => complexToStr(v))
        .join(',')}) / 4 = (${resDivided.map((v) => complexToStr(v)).join(',')})`
    );
    katexExpressions.push(`\\text{Resposta: }\\begin{array}{llll}
      ${resDivided.map((v, i) => `${complexToStr(v)}n^${i}`).join('&')}
    \\end{array}`);

    setExpressions(katexExpressions);
  };

  return (
    <div className='md-tools'>
      <strong>Polinómio 1</strong>
      <div className='num-inputs'>
        {pol1Input.map((n, i) => (
          <div className='input-box-div' key={i}>
            <label>
              Grau {i}
              <input
                value={n}
                type='number'
                className='input-box'
                onChange={onChangeNumbers(i, setPol1Input)}
              />
            </label>
          </div>
        ))}
      </div>
      <strong>Polinómio 2</strong>
      <div className='num-inputs'>
        {pol2Input.map((n, i) => (
          <div className='input-box-div' key={i}>
            <label>
              Grau {i}
              <input
                value={n}
                type='number'
                className='input-box'
                onChange={onChangeNumbers(i, setPol2Input)}
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

export default FFTCalculator;
