<template>
  <div>
    <div class="num-inputs">
      <div class="input-box-div">
        <label>N</label>
        <input v-model="input[0]" type="number" class="input-box" />
      </div>
      <div class="input-box-div">
        <label>e/d</label>
        <input v-model="input[1]" type="number" class="input-box" />
      </div>
      <div class="input-box-div">
        <label>M (mensagem)</label>
        <input v-model="input[2]" type="number" class="input-box" />
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
      input: [0, 0, 0],
    };
  },

  components: { KatexElement },

  methods: {
    factorizePowersTwo(n) {
      const factors = [];
      while (n > 0) {
        let i;
        for (i = 0; 2 ** i <= n; ++i);
        factors.push(i - 1);
        n -= 2 ** (i - 1);
      }
      return factors;
    },

    calculate() {
      this.expressions = [];

      const [N, e, M] = this.input.map((v) => parseInt(v, 10));

      this.expressions.push(`R \\equiv_{${N}} ${M}^{${e}}`);

      const factors = this.factorizePowersTwo(e);

      this.expressions.push(`${e} = ${factors.map((v) => 2 ** v).join(`+`)}`);

      const results = [M % N];

      this.expressions.push(`
        \\begin{aligned}
          M &\\equiv_{${N}} ${M}\\\\
          &\\equiv_{${N}} ${results[0]}
        \\end{aligned}
      `);

      for (let i = 1; i <= factors[0]; ++i) {
        results[i] = results[i - 1] ** 2 % N;
        this.expressions.push(`
        \\begin{aligned}
          M^{${2 ** i}} &\\equiv_{${N}} ${results[i - 1]}^2\\\\
          &\\equiv_{${N}} ${results[i - 1] ** 2}\\\\
          &\\equiv_{${N}} ${results[i]}
        \\end{aligned}
        `);
      }

      const result = factors.map((v) => results[v]).reduce((acc, v) => acc * BigInt(v), BigInt(1));
      const resultMod = result % BigInt(N);

      this.expressions.push(`
        \\begin{aligned}
          R &\\equiv_{${N}} ${factors.map((v) => `${M}^{${2 ** v}}`).join(`\\times`)}\\\\
          & \\equiv_{${N}} ${factors.map((v) => results[v]).join(`\\times`)}\\\\
          & \\equiv_{${N}} ${result}\\\\
          & \\equiv_{${N}} ${resultMod}
        \\end{aligned}
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
