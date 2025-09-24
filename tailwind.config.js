/** @type {import('tailwindcss').Config} *//** @type {import('tailwindcss').Config} */ /** @type {import('tailwindcss').Config} */

module.exports = {

  content: [module.exports = {

    './pages/**/*.{js,ts,jsx,tsx,mdx}',    module.exports = {

    './components/**/*.{js,ts,jsx,tsx,mdx}',

    './app/**/*.{js,ts,jsx,tsx,mdx}',        content: [content: [

  ],

  theme: {            './app/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}',

    extend: {},

  },            './Components/**/*.{js,ts,jsx,tsx,mdx}', './Components/**/*.{js,ts,jsx,tsx,mdx}',

  plugins: [],

}            './components/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}',

        ], ],

        theme: {
            theme: {

                extend: {
                    extend: {

                        colors: {
                            colors: {

                                border: "hsl(var(--border))",
                                border: "hsl(var(--border))",

                                input: "hsl(var(--input))",
                                input: "hsl(var(--input))",

                                ring: "hsl(var(--ring))",
                                ring: "hsl(var(--ring))",

                                background: "hsl(var(--background))",
                                background: "hsl(var(--background))",

                                foreground: "hsl(var(--foreground))",
                                foreground: "hsl(var(--foreground))",

                                primary: {
                                    primary: {

                                        DEFAULT: "hsl(var(--primary))",
                                        DEFAULT: "hsl(var(--primary))",

                                        foreground: "hsl(var(--primary-foreground))",
                                        foreground: "hsl(var(--primary-foreground))",

                                    },
                                },

                                secondary: {
                                    secondary: {

                                        DEFAULT: "hsl(var(--secondary))",
                                        DEFAULT: "hsl(var(--secondary))",

                                        foreground: "hsl(var(--secondary-foreground))",
                                        foreground: "hsl(var(--secondary-foreground))",

                                    },
                                },

                            },
                            destructive: {

                            },
                            DEFAULT: "hsl(var(--destructive))",

                        },
                        foreground: "hsl(var(--destructive-foreground))",

                        plugins: [],
                    },

                }
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [],
}
"accordion-up": "accordion-up 0.2s ease-out",
},
},
},
plugins: [],
}