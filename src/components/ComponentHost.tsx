import { customComponents } from '../utils/customComponents';

interface ComponentHostProps {
  name: string;
}

/**
 * Statically-imported island that renders the component selected by
 * the page's `components` frontmatter. Astro cannot hydrate a dynamically
 * referenced component, so pages mount this host instead.
 */
const ComponentHost = ({ name }: ComponentHostProps) => {
  const Component = customComponents[name as keyof typeof customComponents];
  return Component ? <Component /> : null;
};

export default ComponentHost;
