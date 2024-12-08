import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: 'var(--foreground)',
        borderPrimary: 'var(--border-primary)',
        bgButtonLight: 'var(--bg-button-light)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textDisabled: 'var(--text-disabled)',
        textError: 'var(--text-error)',
        input: 'var(--input)',
        inputHover: 'var(--input-hover)',
        inputFocus: 'var(--input-focus)',
        inputError: 'var(--input-error)',
        inputBorderFocus: 'var(--input-border-focus)',
        inputBorderError: 'var(--input-border-error)',
        inputBorderValid: 'var(--input-border-valid)',
        inputErrorMessage: 'var(--input-error-message)',
        card: 'var(--card)'
      }
    }
  },
  plugins: [],
} satisfies Config;
