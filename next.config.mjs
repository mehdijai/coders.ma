/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  sassOptions: {
    additionalData: `
      @import "@/styles/colors.scss", "@/styles/vars.scss", "@/styles/mixins/responsive.mixin.scss", "@/styles/components.scss";
    `,
  },
};

export default nextConfig;
