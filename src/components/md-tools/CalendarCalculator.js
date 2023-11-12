import katex from 'katex';
import React, { useState } from 'react';
import '../../styles/md-tools.css';

const CalendarCalculator = () => {
  const [day, setDay] = useState('0');
  const [month, setMonth] = useState('0');
  const [year, setYear] = useState('0');
  const [calendarType, setCalendarType] = useState('g'); // 'g' or 'j'
  const [resultType, setResultType] = useState('weekday'); // 'weekday' or 'easter'
  const [expressions, setExpressions] = useState([]);

  const onChangeNumbers = (setFn) => (event) => setFn(event.target.value);

  const katexStrings = expressions.map((expression) =>
    katex.renderToString(expression, { displayMode: true })
  );

  const isLeapYear = (year, calendar) => {
    if (calendar === 'g') return (0 === year % 4 && 0 !== year % 100) || 0 === year % 400;
    return 0 === year % 4;
  };

  const zeroPad = (n) => {
    return n < 10 ? `0${n}` : `${n}`;
  };

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  const getN = (y, { expressions, calendar }) => {
    const [divY4, divY100, divY400] = [4, 100, 400].map((v) => Math.floor(y / v));
    expressions.push(`
        \\begin{array}{l${calendar === 'g' ? 'll' : ''}}
          \\mathcal{Y} \\div 4 = ${divY4} ${
            calendar === 'g'
              ? `&
          \\mathcal{Y} \\div 100 = ${divY100} &
          \\mathcal{Y} \\div 400 = ${divY400}`
              : ''
          }
        \\end{array}
      `);
    let n;
    if (calendar === 'g') {
      n = 7 - mod(y - 1 + divY4 - divY100 + divY400, 7);
      expressions.push(`
        \\begin{aligned}
          \\text{Número Dominical: } \\mathcal{N} & = 7 - (\\mathcal{Y} - 1 + \\mathcal{Y} \\div 4 - \\mathcal{Y} \\div 100 + \\mathcal{Y} \\div 400) \\% 7\\\\
          &= 7 - (${y} - 1 + ${divY4} - ${divY100} + ${divY400}) \\% 7\\\\
          &= 7 - (${y - 1 + divY4 - divY100 + divY400}) \\% 7\\\\
          &= 7 - ${mod(y - 1 + divY4 - divY100 + divY400, 7)}\\\\
          &= ${n}
        \\end{aligned}
      `);
    } else {
      n = 7 - mod(y + 4 + divY4, 7);
      expressions.push(`
        \\begin{aligned}
          \\text{Número Dominical: } \\mathcal{N} & = 7 - (\\mathcal{Y} + 4 + \\mathcal{Y} \\div 4) \\% 7\\\\
          &= 7 - (${y} + 4 + ${divY4}) \\% 7\\\\
          &= 7 - (${y + 4 + divY4}) \\% 7\\\\
          &= 7 - ${mod(y + 4 + divY4, 7)}\\\\
          &= ${n}
        \\end{aligned}
      `);
    }
    return n;
  };

  const calculate = () => {
    setExpressions([]);

    const katexExpressions = [];

    const [d, m, y] = [day, month, year].map((v) => parseInt(v, 10));
    // A D D G B E G C F A D F
    const monthNumber = [1, 4, 4, 7, 2, 5, 7, 3, 6, 1, 4, 6];
    const weekDays = [
      'domingo',
      'segunda-feira',
      'terça-feira',
      'quarta-feira',
      'quinta-feira',
      'sexta-feira',
      'sábado',
    ];
    if (resultType === 'weekday') {
      katexExpressions.push(
        `\\text{Dia da Semana de } ${[d, m, y].map((v) => zeroPad(v)).join(`/`)}`
      );
      katexExpressions.push(`
          \\begin{array}{ll}
            \\mathcal{D} = ${d} &
            \\mathcal{Y} = ${y}
          \\end{array}
        `);
      const f = monthNumber[m - 1];
      katexExpressions.push(
        `\\text{A letra do primeiro dia do mês é } ${String.fromCharCode(
          64 + f
        )} \\text{, logo } \\mathcal{F}=${f}`
      );
      const c = 1 + mod(d + f - 2, 7);
      katexExpressions.push(`
          \\begin{aligned}
            \\text{Número Calêndrico: } \\mathcal{C} & = 1 + (\\mathcal{D} + \\mathcal{F} - 2) \\% 7\\\\
            &= 1 + (${d} + ${f} - 2) \\% 7\\\\
            &= 1 + (${d + f - 2}) \\% 7\\\\
            &= 1 + ${mod(d + f - 2, 7)}\\\\
            &= ${c}
          \\end{aligned}
        `);
      const n = getN(y, { expressions: katexExpressions, calendar: calendarType });
      let w;
      const calcW = (v) => {
        const result = 1 + mod(c - n + v, 7);
        katexExpressions.push(`
            \\begin{aligned}
              \\text{Dia da Semana: } \\mathcal{W} & = 1 + (\\mathcal{C} - \\mathcal{N} + ${v}) \\% 7\\\\
              &= 1 + (${c} - ${n} + ${v}) \\% 7\\\\
              &= 1 + (${c - n + v}) \\% 7\\\\
              &= 1 + ${mod(c - n + v, 7)}\\\\
              &= ${result}
            \\end{aligned}
          `);
        return result;
      };
      if (m <= 2 && isLeapYear(y, calendarType)) {
        katexExpressions.push(`\\text{É janeiro ou fevereiro e é ano bissexto}`);
        w = calcW(6);
      } else {
        katexExpressions.push(`\\text{Não é janeiro ou fevereiro ou não é ano bissexto}`);
        w = calcW(7);
      }
      katexExpressions.push(`\\text{O dia da semana é ${weekDays[w - 1]}}`);
    } else {
      const s = Math.floor(y / 100);
      katexExpressions.push(`
          \\begin{aligned}
            \\text{"Século": } \\mathcal{S} &= \\mathcal{Y} \\div 100\\\\
            &= ${y} \\div 100\\\\
            &= ${s}
          \\end{aligned}
        `);
      const g = 1 + mod(y, 19);
      katexExpressions.push(`
          \\begin{aligned}
            \\text{Número de ouro: } \\mathcal{G} &= 1 + \\mathcal{Y} \\% 19\\\\
            &= 1 + ${y} \\% 19\\\\
            &= 1 + ${mod(y, 19)}\\\\
            &= ${g}
          \\end{aligned}
        `);
      let r;
      if (calendarType === 'g') {
        const sDiv25 = Math.floor((s - 17) / 25);
        const sDiv3 = Math.floor((s - sDiv25) / 3);
        const sDiv4 = Math.floor(s / 4);
        katexExpressions.push(`
            \\begin{array}{lll}
              \\mathcal{S} \\div 4 = ${sDiv4} &
              (\\mathcal{S} - 17) \\div 25 = ${sDiv25} &
              (\\mathcal{S} - ((\\mathcal{S} - 17) \\div 25)) \\div 3 = ${sDiv3}
            \\end{array}
          `);
        const e = mod(11 * g + 57 - s + sDiv4 + sDiv3, 30);
        katexExpressions.push(`
            \\begin{aligned}
              \\text{Epacta: } \\mathcal{E} &= (11\\mathcal{G} + 57 - \\mathcal{S} + \\mathcal{S} \\div 4 + (\\mathcal{S} - ((\\mathcal{S} - 17) \\div 25)) \\div 3) \\% 30\\\\
              &= (11\\times ${g} + 57 - ${s} + ${sDiv4} + ${sDiv3}) \\% 30\\\\
              &= ${11 * g + 57 - s + sDiv4 + sDiv3} \\% 30\\\\
              &= ${e}
            \\end{aligned}
          `);
        const eDiv24 = Math.floor(e / 24);
        const eDiv25 = Math.floor(e / 25);
        const eDiv26 = Math.floor(e / 26);
        const gDiv12 = Math.floor(g / 12);
        katexExpressions.push(`
            \\begin{array}{llll}
              \\mathcal{E} \\div 24 = ${eDiv24} &
              \\mathcal{E} \\div 25 = ${eDiv25} &
              \\mathcal{E} \\div 26 = ${eDiv26} &
              \\mathcal{G} \\div 12 = ${gDiv12}
            \\end{array}
          `);
        const v = eDiv24 - eDiv25 + gDiv12 * (eDiv25 - eDiv26);
        katexExpressions.push(`
            \\begin{aligned}
              \\text{Correção de Clavius: } \\mathcal{V} &= (\\mathcal{E} \\div 24 - \\mathcal{E} \\div 25) + (\\mathcal{G} \\div 12) \\times (\\mathcal{E} \\div 25 - \\mathcal{E} \\div 26)\\\\
              &= (${eDiv24} - ${eDiv25}) + ${gDiv12} \\times (${eDiv25} - ${eDiv26})\\\\
              &= ${v}
            \\end{aligned}
          `);
        r = 20 + mod(54 - (e + v), 30);
        katexExpressions.push(`
            \\begin{aligned}
              \\text{Dia da Lua Cheia Pascal: } \\mathcal{R} &= 20 + (54 - (\\mathcal{E} + \\mathcal{V})) \\% 30\\\\
              &= 20 + (54 - (${e} + ${v})) \\% 30\\\\
              &= 20 + ${54 - (e + v)} \\% 30\\\\
              &= 20 + ${mod(54 - (e + v), 30)}\\\\
              &= ${r}
            \\end{aligned}
          `);
      } else {
        const e = mod(11 * g - 3, 30);
        katexExpressions.push(`
            \\begin{aligned}
              \\text{Epacta: } \\mathcal{E} &= (11\\mathcal{G} - 3) \\% 30\\\\
              &= (11\\times ${g} - 3) \\% 30\\\\
              &= (${11 * g - 3}) \\% 30\\\\
              &= ${e}
            \\end{aligned}
          `);
        r = 20 + mod(54 - e, 30);
        katexExpressions.push(`
            \\begin{aligned}
              \\text{Dia da Lua Cheia Pascal: } \\mathcal{R} &= 20 + (54 - \\mathcal{E}) \\% 30\\\\
              &= 20 + (54 - ${e}) \\% 30\\\\
              &= 20 + ${54 - e} \\% 30\\\\
              &= 20 + ${mod(54 - e, 30)}\\\\
              &= ${r}
            \\end{aligned}
          `);
      }
      katexExpressions.push(
        `\\text{(Dia da Lua Cheia Pascal}= 1\\text{ de março} + ${r} \\text{ dias} = ${
          ((r - 1) % 31) + 1
        }\\text{ de ${r > 31 ? 'abril' : 'março'})}`
      );
      const c = 1 + mod(r + 2, 7);
      katexExpressions.push(`
          \\begin{aligned}
            \\text{Dia Calêndrico da Lua Cheia Pascal: } \\mathcal{C} &= 1 + (\\mathcal{R} + 2) \\% 7\\\\
            &= 1 + (${r} + 2) \\% 7\\\\
            &= 1 + (${r + 2}) \\% 7\\\\
            &= 1 + ${mod(r + 2, 7)}\\\\
            &= ${c}
          \\end{aligned}
        `);
      const n = getN(y, { expressions: katexExpressions, calendar: calendarType });
      let p;
      if (c < n) {
        katexExpressions.push(`\\text{Como } \\mathcal{C} < \\mathcal{N} \\text{, então:}`);
        p = r + n - c;
        katexExpressions.push(`
            \\begin{aligned}
              \\mathcal{P} &= \\mathcal{R} + \\mathcal{N} -\\mathcal{C}\\\\
              &= ${r} + ${n} - ${c}\\\\
              &= ${p}
            \\end{aligned}
          `);
      } else {
        katexExpressions.push(`\\text{Como } \\mathcal{C} \\geq \\mathcal{N} \\text{, então:}`);
        p = r + 7 - mod(c - n, 7);
        katexExpressions.push(`
            \\begin{aligned}
              \\mathcal{P} &= \\mathcal{R} + 7 -(\\mathcal{C} -\\mathcal{N}) \\% 7\\\\
              &= ${r} + 7 -(${c} - ${n}) \\% 7\\\\
              &= ${r + 7} -(${c - n}) \\% 7\\\\
              &= ${r + 7} -${mod(c - n, 7)}\\\\
              &= ${p}
            \\end{aligned}
          `);
      }
      katexExpressions.push(
        `\\text{Dia da Páscoa}= 1\\text{ de março} + ${p} \\text{ dias} = ${
          ((p - 1) % 31) + 1
        }\\text{ de ${p > 31 ? 'abril' : 'março'}}`
      );
    }

    setExpressions(katexExpressions);
  };

  return (
    <div className='md-tools'>
      <div className='num-inputs'>
        {[
          ['Dia (1 a 31)', day, setDay],
          ['Mês (1 a 12)', month, setMonth],
          ['Ano', year, setYear],
        ].map(([label, value, setValue]) => (
          <div className='input-box-div' key={label}>
            <label>
              {label}
              <input
                value={value}
                type='number'
                className='input-box'
                onChange={onChangeNumbers(setValue)}
              />
            </label>
          </div>
        ))}
      </div>
      <div onChange={onChangeNumbers(setCalendarType)}>
        <label>
          <input name='calendar' type='radio' value='g' defaultChecked />
          Gregoriano
        </label>
        <label>
          <input name='calendar' type='radio' value='j' />
          Juliano
        </label>
      </div>
      <div onChange={onChangeNumbers(setResultType)}>
        <label>
          <input name='type' type='radio' value='weekday' defaultChecked />
          Dia da Semana
        </label>
        <label>
          <input name='type' type='radio' value='easter' />
          Páscoa
        </label>
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

export default CalendarCalculator;
