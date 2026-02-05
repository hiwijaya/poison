import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
