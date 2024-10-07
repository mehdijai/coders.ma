/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  sassOptions: {
    additionalData: `
      @import "@/styles/colors.scss", "@/styles/vars.scss";
    `,
  },
};

export default nextConfig;
