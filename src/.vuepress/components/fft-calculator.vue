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

    mulComplex(c1, c2) {
      // (a + bi) * (c + di)
      // ac + adi + bci - bd
      return {
        real: c1.real * c2.real - c1.imag * c2.imag,
        imag: c1.real * c2.imag + c1.imag * c2.real,
      };
    },

    sumComplex(c1, c2) {
      return { real: c1.real + c2.real, imag: c1.imag + c2.imag };
    },

    complementComplex(c) {
      return { real: c.real, imag: -c.imag };
    },

    multiplyStep1([v1, v2]) {
      const minusOne = { real: -1, imag: 0 };
      return [this.sumComplex(v1, v2), this.sumComplex(v1, this.mulComplex(minusOne, v2))];
    },

    multiplyStep2([v1, v2]) {
      const imagOne = { real: 0, imag: 1 };
      return [v1, this.mulComplex(imagOne, v2)];
    },

    sumStep3([v1, v2], [v3, v4]) {
      const minusOne = { real: -1, imag: 0 };
      return [
        this.sumComplex(v1, v3),
        this.sumComplex(v2, v4),
        this.sumComplex(v1, this.mulComplex(minusOne, v3)),
        this.sumComplex(v2, this.mulComplex(minusOne, v4)),
      ];
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
        \\text{Invertido } Rev_2: & [${pol1Rev
          .map((v) => this.complexToStr(v))
          .join(', ')}] & [${pol2Rev.map((v) => this.complexToStr(v)).join(', ')}]
        \\end{array}
      `;
      this.expressions.push(rev2);

      const genF = (pol) => {
        const a1 = this.multiplyStep1(pol.slice(0, 2));
        const a2 = this.multiplyStep1(pol.slice(2));
        const a3 = this.multiplyStep2(a2);
        const a4 = this.sumStep3(a1, a3);

        return {
          result: a4,
          text: `
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
          \\end{pmatrix}\\\\
          &=\\begin{pmatrix}
            \\begin{pmatrix}
              ${a1.map((v) => this.complexToStr(v)).join('\\\\')}
            \\end{pmatrix}
            +
            \\begin{pmatrix}
              1 & 0 \\\\ 0 & i
            \\end{pmatrix}
            \\begin{pmatrix}
              ${a2.map((v) => this.complexToStr(v)).join('\\\\')}
            \\end{pmatrix}
            \\\\
            \\begin{pmatrix}
              ${a1.map((v) => this.complexToStr(v)).join('\\\\')}
            \\end{pmatrix}
            -
            \\begin{pmatrix}
              1 & 0 \\\\ 0 & i
            \\end{pmatrix}
            \\begin{pmatrix}
              ${a2.map((v) => this.complexToStr(v)).join('\\\\')}
            \\end{pmatrix}
          \\end{pmatrix}\\\\
          &=\\begin{pmatrix}
            \\begin{pmatrix}
              ${a1.map((v) => this.complexToStr(v)).join('\\\\')}
            \\end{pmatrix}
            +
            \\begin{pmatrix}
              ${a3.map((v) => this.complexToStr(v)).join('\\\\')}
            \\end{pmatrix}
            \\\\
            \\begin{pmatrix}
              ${a1.map((v) => this.complexToStr(v)).join('\\\\')}
            \\end{pmatrix}
            -
            \\begin{pmatrix}
              ${a3.map((v) => this.complexToStr(v)).join('\\\\')}
            \\end{pmatrix}
          \\end{pmatrix}
          =\\begin{pmatrix}
            ${a4.map((v) => this.complexToStr(v)).join('\\\\')}
          \\end{pmatrix}
        \\end{aligned}
      `,
        };
      };

      const { result: resPol1, text: textPol1 } = genF(pol1Rev);
      const { result: resPol2, text: textPol2 } = genF(pol2Rev);
      this.expressions.push(textPol1);
      this.expressions.push(textPol2);

      this.expressions.push(
        `(${resPol1.map((v) => this.complexToStr(v)).join(',')}) \\otimes (${resPol2
          .map((v) => this.complexToStr(v))
          .join(',')})`
      );

      const polMul = resPol1.map((v, i) => this.mulComplex(v, resPol2[i]));
      this.expressions.push(
        `\\text{Multiplicar Vetores: }= (${polMul.map((v) => this.complexToStr(v)).join(',')})`
      );

      const polCompl = polMul.map((v) => this.complementComplex(v));
      this.expressions.push(
        `\\text{Conjugar} \\rightarrow (${polCompl.map((v) => this.complexToStr(v)).join(',')})`
      );

      const polComplRev2 = this.rev2(polCompl);
      this.expressions.push(
        `\\text{Rev}_2\\rightarrow (${polComplRev2.map((v) => this.complexToStr(v)).join(',')})`
      );

      const { result: resPol3, text: textPol3 } = genF(polComplRev2);
      this.expressions.push(textPol3);

      const resDivided = resPol3.map((v) =>
        this.mulComplex(this.complementComplex(v), { real: 0.25, imag: 0 })
      );
      this.expressions.push(
        `\\text{Conjungar e dividir por }2^2: (${resPol3
          .map((v) => this.complexToStr(v))
          .join(',')}) / 4 = (${resDivided.map((v) => this.complexToStr(v)).join(',')})`
      );

      this.expressions.push(`\\text{Resposta: }\\begin{array}{llll}
        ${resDivided.map((v, i) => `${this.complexToStr(v)}n^${i}`).join('&')}
      \\end{array}`);
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
