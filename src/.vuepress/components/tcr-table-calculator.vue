<template>
  <div>
    <div>
      <div v-for="(value, i) in input" :key="i" class="num-inputs">
        <div class="input-box-div">
          <label>m{{ i + 1 }}</label>
          <input v-model="input[i][0]" type="number" class="input-box" />
        </div>
        <div class="input-box-div">
          <label>a{{ i + 1 }}</label>
          <input v-model="input[i][1]" type="number" class="input-box" />
        </div>
      </div>
    </div>
    <button @click="calculate" class="calculate-btn">Calculate</button>
    <button @click="incInput" class="calculate-btn">+ eq</button>
    <button @click="decInput" class="calculate-btn">- eq</button>
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
      input: [
        [0, 0],
        [0, 0],
      ],
    };
  },

  components: { KatexElement },

  methods: {
    calculateC(mi) {
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
              console.log(k, c2, lcmFactors[k]);
              if (lcmFactors[k] && lcmFactors[k] == c2) {
                lcmFactors[k] = 0;
                return true;
              }
              return false;
            })
          )
        )
        .map((c) => Object.entries(c).reduce((acc, [k, v]) => acc + k ** v, 0));

      return ci;
    },

    getNTilde(n, c) {
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
    },

    incInput() {
      this.input.push([0, 0]);
    },

    decInput() {
      this.input.pop();
    },

    calculate() {
      this.expressions = [];

      const a = this.input.map(([_, v]) => parseInt(v, 10));
      const m = this.input.map(([v]) => parseInt(v, 10));
      const c = this.calculateC([...m]);
      const n = c.map((v, i, array) => {
        const arrayWithoutC = [...array];
        arrayWithoutC.splice(i, 1);
        return arrayWithoutC.reduce((acc, v) => acc * v); // multiply elements
      });
      const nTilde = c.map((v, i) => this.getNTilde(n[i], v));
      const mult = a.map((v, i) => v * n[i] * nTilde[i]);
      const x0 = mult.reduce((acc, v) => acc + v); // sum all
      const M = c.reduce((acc, v) => acc * v); // multiply all

      this.expressions.push(`\\begin{cases}
        ${a.map((ai, i) => `x \\equiv_{${m[i]}} ${ai}`).join('\\\\')}
        \\end{cases}
      `);

      this.expressions.push(`\\begin{array}{l|l|l|l|l|l}
        a_i & m_i & c_i & n_i & \\tilde{n}_i & a_i n_i \\tilde{n}_i \\\\
        \\hline
        ${a
          .map((ai, i) => `${ai} & ${m[i]} & ${c[i]} & ${n[i]} & ${nTilde[i]} & ${mult[i]}`)
          .join('\\\\')}
        \\end{array}
      `);

      this.expressions.push(`x_0 = ${mult.join(`+`).replace(/\+-/g, '-')} = ${x0}`);
      this.expressions.push(`M = ${c.join(`\\times`)} = ${M}`);

      this.expressions.push(`x = ${x0 % M} + ${M}t \\quad, \\quad t \\in \\Z`);
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
