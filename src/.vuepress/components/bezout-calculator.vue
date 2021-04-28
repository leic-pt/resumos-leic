<template>
  <div>
    <div class="num-inputs">
      <div v-for="(value, i) in input" :key="i" class="input-box-div">
        <label>{{ i + 1 }}º número</label>
        <input v-model="input[i]" type="number" class="input-box" />
      </div>
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
      input: [0, 0],
    };
  },

  components: { KatexElement },

  methods: {
    calculate() {
      this.expressions = [];

      const remainder = [Math.abs(Math.max(...this.input)), Math.abs(Math.min(...this.input))];
      const quotients = [null];

      while (remainder[remainder.length - 1] != 0) {
        const [a, b] = remainder.slice(-2);
        remainder.push(a % b);
        quotients.push(Math.floor(a / b));
      }

      const coefX = [1, 0];
      const coefY = [0, 1];

      for (let i = 2; i < quotients.length; ++i) {
        coefX[i] = coefX[i - 2] - quotients[i - 1] * coefX[i - 1];
        coefY[i] = coefY[i - 2] - quotients[i - 1] * coefY[i - 1];
      }

      this.expressions.push(`\\begin{array}{l | l | l | l}
      n & q_i & x_i & y_i\\\\
      \\hline
      ${remainder
        .map((v, i) => `${v} & ${quotients[i] ?? '-'} & ${coefX[i] ?? '-'} & ${coefY[i] ?? '-'}`)
        .join(`\\\\`)}
      \\end{array}
      `);
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
