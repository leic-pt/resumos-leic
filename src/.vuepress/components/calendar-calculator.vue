<template>
  <div>
    <div class="num-inputs">
      <div class="input-box-div">
        <label>Dia (1 a 31)</label>
        <input v-model="input[0]" type="number" class="input-box" />
      </div>
      <div class="input-box-div">
        <label>Mês (1 a 12)</label>
        <input v-model="input[1]" type="number" class="input-box" />
      </div>
      <div class="input-box-div">
        <label>Ano</label>
        <input v-model="input[2]" type="number" class="input-box" />
      </div>
    </div>
    <div>
      <input v-model="calendar" type="radio" value="g" />
      <label>Gregoriano</label>
      <input v-model="calendar" type="radio" value="j" />
      <label>Juliano</label>
    </div>
    <div>
      <input v-model="type" type="radio" value="weekday" />
      <label>Dia da Semana</label>
      <input v-model="type" type="radio" value="easter" />
      <label>Páscoa</label>
    </div>
    <button @click="calculate" class="calculate-btn">Calculate</button>
    <katex-element
      v-for="(expression, i) in expressions"
      :key="i"
      :expression="expression"
      displayMode
    />
  </div>
</template>

<script>
import KatexElement from './KatexElement.vue';

export default {
  data() {
    return {
      expressions: [],
      input: [0, 0, 0],
      calendar: 'g',
      type: 'weekday',
    };
  },

  components: { KatexElement },

  methods: {
    isLeapYear(year, calendar) {
      if (calendar === 'g') return (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
      return 0 == year % 4;
    },

    zeroPad(n) {
      return n < 10 ? `0${n}` : `${n}`;
    },

    mod(n, m) {
      return ((n % m) + m) % m;
    },

    getN(y) {
      const [divY4, divY100, divY400] = [4, 100, 400].map((v) => Math.floor(y / v));

      this.expressions.push(`
          \\begin{array}{l${this.calendar === 'g' ? 'll' : ''}}
            \\mathcal{Y} \\div 4 = ${divY4} ${
        this.calendar === 'g'
          ? `&
            \\mathcal{Y} \\div 100 = ${divY100} &
            \\mathcal{Y} \\div 400 = ${divY400}`
          : ''
      }
          \\end{array}
        `);

      let n;

      if (this.calendar === 'g') {
        n = 7 - this.mod(y - 1 + divY4 - divY100 + divY400, 7);

        this.expressions.push(`
          \\begin{aligned}
            \\text{Número Dominical: } \\mathcal{N} & = 7 - (\\mathcal{Y} - 1 + \\mathcal{Y} \\div 4 - \\mathcal{Y} \\div 100 + \\mathcal{Y} \\div 400) \\% 7\\\\
            &= 7 - (${y} - 1 + ${divY4} - ${divY100} + ${divY400}) \\% 7\\\\
            &= 7 - (${y - 1 + divY4 - divY100 + divY400}) \\% 7\\\\
            &= 7 - ${this.mod(y - 1 + divY4 - divY100 + divY400, 7)}\\\\
            &= ${n}
          \\end{aligned}
        `);
      } else {
        n = 7 - this.mod(y + 4 + divY4, 7);

        this.expressions.push(`
          \\begin{aligned}
            \\text{Número Dominical: } \\mathcal{N} & = 7 - (\\mathcal{Y} + 4 + \\mathcal{Y} \\div 4) \\% 7\\\\
            &= 7 - (${y} + 4 + ${divY4}) \\% 7\\\\
            &= 7 - (${y + 4 + divY4}) \\% 7\\\\
            &= 7 - ${this.mod(y + 4 + divY4, 7)}\\\\
            &= ${n}
          \\end{aligned}
        `);
      }
      return n;
    },

    calculate() {
      this.expressions = [];

      const [d, m, y] = this.input.map((v) => parseInt(v, 10));

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

      if (this.type == 'weekday') {
        this.expressions.push(
          `\\text{Dia da Semana de } ${[d, m, y].map((v) => this.zeroPad(v)).join(`/`)}`
        );

        this.expressions.push(`
          \\begin{array}{ll}
            \\mathcal{D} = ${d} &
            \\mathcal{Y} = ${y}
          \\end{array}
        `);

        const f = monthNumber[m - 1];

        this.expressions.push(
          `\\text{A letra do primeiro dia do mês é } ${String.fromCharCode(
            64 + f
          )} \\text{, logo } \\mathcal{F}=${f}`
        );

        const c = 1 + this.mod(d + f - 2, 7);

        this.expressions.push(`
          \\begin{aligned}
            \\text{Número Calêndrico: } \\mathcal{C} & = 1 + (\\mathcal{D} + \\mathcal{F} - 2) \\% 7\\\\
            &= 1 + (${d} + ${f} - 2) \\% 7\\\\
            &= 1 + (${d + f - 2}) \\% 7\\\\
            &= 1 + ${this.mod(d + f - 2, 7)}\\\\
            &= ${c}
          \\end{aligned}
        `);

        const n = this.getN(y);

        let w;

        const calcW = (v) => {
          const result = 1 + this.mod(c - n + v, 7);

          this.expressions.push(`
            \\begin{aligned}
              \\text{Dia da Semana: } \\mathcal{W} & = 1 + (\\mathcal{C} - \\mathcal{N} + ${v}) \\% 7\\\\
              &= 1 + (${c} - ${n} + ${v}) \\% 7\\\\
              &= 1 + (${c - n + v}) \\% 7\\\\
              &= 1 + ${this.mod(c - n + v, 7)}\\\\
              &= ${result}
            \\end{aligned}
          `);

          return result;
        };

        if (m <= 2 && this.isLeapYear(y, this.calendar)) {
          this.expressions.push(`\\text{É janeiro ou fevereiro e é ano bissexto}`);
          w = calcW(6);
        } else {
          this.expressions.push(`\\text{Não é janeiro ou fevereiro ou não é ano bissexto}`);
          w = calcW(7);
        }

        this.expressions.push(`\\text{O dia da semana é ${weekDays[w - 1]}}`);
      } else {
        const s = Math.floor(y / 100);

        this.expressions.push(`
          \\begin{aligned}
            \\text{"Século": } \\mathcal{S} &= \\mathcal{Y} \\div 100\\\\
            &= ${y} \\div 100\\\\
            &= ${s}
          \\end{aligned}
        `);

        const g = 1 + this.mod(y, 19);

        this.expressions.push(`
          \\begin{aligned}
            \\text{Número de ouro: } \\mathcal{G} &= 1 + \\mathcal{Y} \\% 19\\\\
            &= 1 + ${y} \\% 19\\\\
            &= 1 + ${this.mod(y, 19)}\\\\
            &= ${g}
          \\end{aligned}
        `);

        let r;

        if (this.calendar === 'g') {
          const sDiv25 = Math.floor((s - 17) / 25);
          const sDiv3 = Math.floor((s - sDiv25) / 3);
          const sDiv4 = Math.floor(s / 4);

          this.expressions.push(`
            \\begin{array}{lll}
              \\mathcal{S} \\div 4 = ${sDiv4} &
              (\\mathcal{S} - 17) \\div 25 = ${sDiv25} &
              (\\mathcal{S} - ((\\mathcal{S} - 17) \\div 25)) \\div 3 = ${sDiv3}
            \\end{array}
          `);

          const e = this.mod(11 * g + 57 - s + sDiv4 + sDiv3, 30);

          this.expressions.push(`
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

          this.expressions.push(`
            \\begin{array}{llll}
              \\mathcal{E} \\div 24 = ${eDiv24} &
              \\mathcal{E} \\div 25 = ${eDiv25} &
              \\mathcal{E} \\div 26 = ${eDiv26} &
              \\mathcal{G} \\div 12 = ${gDiv12}
            \\end{array}
          `);

          const v = eDiv24 - eDiv25 + gDiv12 * (eDiv25 - eDiv26);

          this.expressions.push(`
            \\begin{aligned}
              \\text{Correção de Clavius: } \\mathcal{V} &= (\\mathcal{E} \\div 24 - \\mathcal{E} \\div 25) + (\\mathcal{G} \\div 12) \\times (\\mathcal{E} \\div 25 - \\mathcal{E} \\div 26)\\\\
              &= (${eDiv24} - ${eDiv25}) + ${gDiv12} \\times (${eDiv25} - ${eDiv26})\\\\
              &= ${v}
            \\end{aligned}
          `);

          r = 20 + this.mod(54 - (e + v), 30);

          this.expressions.push(`
            \\begin{aligned}
              \\text{Dia da Lua Cheia Pascal: } \\mathcal{R} &= 20 + (54 - (\\mathcal{E} + \\mathcal{V})) \\% 30\\\\
              &= 20 + (54 - (${e} + ${v})) \\% 30\\\\
              &= 20 + ${54 - (e + v)} \\% 30\\\\
              &= 20 + ${this.mod(54 - (e + v), 30)}\\\\
              &= ${r}
            \\end{aligned}
          `);
        } else {
          const e = this.mod(11 * g - 3, 30);

          this.expressions.push(`
            \\begin{aligned}
              \\text{Epacta: } \\mathcal{E} &= (11\\mathcal{G} - 3) \\% 30\\\\
              &= (11\\times ${g} - 3) \\% 30\\\\
              &= (${11 * g - 3}) \\% 30\\\\
              &= ${e}
            \\end{aligned}
          `);

          r = 20 + this.mod(54 - e, 30);

          this.expressions.push(`
            \\begin{aligned}
              \\text{Dia da Lua Cheia Pascal: } \\mathcal{R} &= 20 + (54 - \\mathcal{E}) \\% 30\\\\
              &= 20 + (54 - ${e}) \\% 30\\\\
              &= 20 + ${54 - e} \\% 30\\\\
              &= 20 + ${this.mod(54 - e, 30)}\\\\
              &= ${r}
            \\end{aligned}
          `);
        }

        const c = 1 + this.mod(r + 2, 7);

        this.expressions.push(`
          \\begin{aligned}
            \\text{Dia Calêndrico da Lua Cheia Pascal: } \\mathcal{C} &= 1 + (\\mathcal{R} + 2) \\% 7\\\\
            &= 1 + (${r} + 2) \\% 7\\\\
            &= 1 + (${r + 2}) \\% 7\\\\
            &= 1 + ${this.mod(r + 2, 7)}\\\\
            &= ${c}
          \\end{aligned}
        `);

        const n = this.getN(y);

        let p;

        if (c < n) {
          this.expressions.push(`\\text{Como } \\mathcal{C} < \\mathcal{N} \\text{, então:}`);

          p = r + n - c;

          this.expressions.push(`
            \\begin{aligned}
              \\mathcal{P} &= \\mathcal{R} + \\mathcal{N} -\\mathcal{C}\\\\
              &= ${r} + ${n} - ${c}\\\\
              &= ${p}
            \\end{aligned}
          `);
        } else {
          this.expressions.push(`\\text{Como } \\mathcal{C} \\gte \\mathcal{N} \\text{, então:}`);

          p = r + 7 - this.mod(c - n, 7);

          this.expressions.push(`
            \\begin{aligned}
              \\mathcal{P} &= \\mathcal{R} + 7 -(\\mathcal{C} -\\mathcal{N}) \\% 7\\\\
              &= ${r} + 7 -(${c} - ${n}) \\% 7\\\\
              &= ${r + 7} -(${c - n}) \\% 7\\\\
              &= ${r + 7} -${this.mod(c - n, 7)}\\\\
              &= ${p}
            \\end{aligned}
          `);
        }

        this.expressions.push(
          `\\text{Dia da Páscoa}= 1\\text{ de março} + ${p} \\text{ dias} = ${
            ((p - 1) % 31) + 1
          }\\text{ de ${p > 31 ? 'abril' : 'março'}}`
        );
      }
    },
  },
};
</script>

<style scoped>
.input-box {
  background: var(--bgColor);
  border: 1px solid var(--darken10BorderColor);
  color: var(--textColor);
}
.input-box-div {
  display: flex;
  flex-direction: column;
  margin-right: 5px;
}
.num-inputs {
  display: flex;
  margin-bottom: 8px;
}
.calculate-btn {
  background-color: #00aef8;
  color: rgba(0, 0, 0, 0.87);
  border: none;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 6px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  margin: 16px 8px;
}
</style>
