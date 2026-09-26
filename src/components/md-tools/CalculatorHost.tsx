import { customComponents } from '../../utils/customComponents';

interface CalculatorHostProps {
  name: string;
}

/**
 * Statically-imported island that renders the md-tools calculator selected by
 * the page's `components` frontmatter. Astro cannot hydrate a dynamically
 * referenced component, so pages mount this host instead.
 */
const CalculatorHost = ({ name }: CalculatorHostProps) => {
  const Component = customComponents[name as keyof typeof customComponents];
  return Component ? <Component /> : null;
};

export default CalculatorHost;
