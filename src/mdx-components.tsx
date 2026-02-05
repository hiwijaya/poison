import type { MDXComponents } from 'mdx/types';
import RedirectButton from '@/components/RedirectButton';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    RedirectButton: (props) => <RedirectButton {...props}/>,
    ...components
  }
}