<template>
  <div>
    <div>
      Polinómio 1
      <span v-for="(value, i) in pol1" :key="i">
        <label>Grau {{ i }}</label>
        <input v-model="pol1[i]" type="number" class="input-box" />
      </span>
    </div>
    <div>
      Polinómio 2
      <span v-for="(value, i) in pol2" :key="i">
        <label>Grau {{ i }}</label>
        <input v-model="pol2[i]" type="number" class="input-box" />
      </span>
    </div>
    <button @click="calculate">Calculate</button>
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
      expressions: ['test', 'test2'],
      pol1: [0, 0, 0, 0],
      pol2: [0, 0, 0, 0],
    };
  },

  components: { KatexElement },

  methods: {
    rev2(array) {
      return [array[0], array[2], array[1], array[3]];
    },

    complexToStr({ real = 0, imag = 0 }) {
      if (!real && !imag) return '0';
      if (!real) return `${imag}i`;
      if (!imag) return `${real}`;
      return `${real} ${imag > 0 ? '+' : ''}${imag}i`;
    },

    calculate() {
      this.expressions = [];

      let pol1 = this.pol1.map((v) => ({ real: parseInt(v, 10), imag: 0 }));
      let pol2 = this.pol2.map((v) => ({ real: parseInt(v, 10), imag: 0 }));
      let pol1Rev = this.rev2(pol1);
      let pol2Rev = this.rev2(pol2);

      const rev2 = `
        \\begin{array}{r l l}
        & \\text{Primeiro Vetor} & \\text{Segundo Vetor} \\\\
        \\text{Original:} & [${pol1
          .map((v) => this.complexToStr(v))
          .join(', ')}] & [${pol2.map((v) => this.complexToStr(v)).join(', ')}]\\\\
        \\text{Invertido:} & [${pol1Rev
          .map((v) => this.complexToStr(v))
          .join(', ')}] & [${pol2Rev.map((v) => this.complexToStr(v)).join(', ')}]
        \\end{array}
      `;
      this.expressions.push(rev2);

      const genF = (pol) => `
        \\begin{aligned}
        \\mathcal{F}_2(i) \\begin{pmatrix}${pol
          .map((v) => this.complexToStr(v))
          .join('\\\\')}\\end{pmatrix}
          &= \\begin{pmatrix}
          \\mathcal{F}_1(-1) & \\mathcal{D}_1\\mathcal{F}_1(-1)\\\\
          \\mathcal{F}_1(-1) & -\\mathcal{D}_1\\mathcal{F}_1(-1)
          \\end{pmatrix}
          \\begin{pmatrix}${pol.map((v) => this.complexToStr(v)).join('\\\\')}\\end{pmatrix}\\\\
          &= \\begin{pmatrix}
            \\begin{pmatrix}
              1 & 1 \\\\1 & -1
            \\end{pmatrix}
            \\begin{pmatrix}
            ${pol
              .slice(0, 2)
              .map((v) => this.complexToStr(v))
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
              .map((v) => this.complexToStr(v))
              .join('\\\\')}
            \\end{pmatrix}
            \\\\
            \\begin{pmatrix}
              1 & 1 \\\\1 & -1
            \\end{pmatrix}
            \\begin{pmatrix}
            ${pol
              .slice(0, 2)
              .map((v) => this.complexToStr(v))
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
              .map((v) => this.complexToStr(v))
              .join('\\\\')}
            \\end{pmatrix}
          \\end{pmatrix}
        \\end{aligned}
      `;
      this.expressions.push(genF(pol1Rev));
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
</style>
