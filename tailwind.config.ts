import type {Config} from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // new
                skin: {
                    DEFAULT: '#2b38d1',
                    primary: '#2b38d1',
                    inverted: '#ffffff',
                    base: '#333333',
                    fill: '#ffffff',
                    red: '#d61123',
                    tints: '#074e47',
                    purple: '#0065bd',
                    label_in: '#008a00',
                    label_out: '#ef262c',
                    body: '#f1f5f6',
                },
                brand: {
                    DEFAULT: '#2b38d1',
                    dark: '#333333',
                    light: '#ffffff',
                    muted: '#555c62',
                    tree: '#6fb48e',
                    'icon-header': '#212529',
                    danger: '#dc2626',
                    sale: '#ff6128',
                },
                yellow: {
                    DEFAULT: '#f98f14',
                    50: '#FAE642',
                    100: '#f3b81f',
                    200: '#ffc33c',
                    300: '#edc537',
                },
                fill: {
                    base: '#212529',
                    secondary: '#f8f9fb',
                    thumbnail: '#f3f6fa',
                    'dropdown-hover': '#f6f9fc',
                    one: '#263c97',
                    two: '#f2f2f2',
                    three: '#e8ebf0',
                    four: '#F3F5F9',
                    footer: '#8f9599',
                },
                border: {
                    base: '#e7ecf0',
                    one: '#e3e8ec',
                    two: '#e2e8f0',
                    three: '#e6e6e6',
                    four: '#dee5ea',
                },
                gray: {
                    50: '#FBFBFB',
                    100: '#f1f5f6',
                    150: '#F4F4F4',
                    200: '#F9F9F9',
                    300: '#e5e8ec',
                    350: '#E9ECEF',
                    400: '#999999',
                    500: '#7e7e7e',
                    600: '#3A3A3A',
                    700: '#222222',
                    800: '#141414',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                borderOld: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            fontSize: {
                '10px': '.625rem',
                '11px': '11px',
                '12px': '12px',
                '13px': '13px',
                '14px': '14px',
                '15px': '15px',
            },
            screens: {
                'xs': '320px',
                '3xl': '1780px',
                '4xl': '1921px',
            },
            spacing: {
                '430px': '430px',
                '450px': '450px',
                '500px': '500px',
                '64vh': '64vh',
                '15': '60px',
            },
            minHeight: {
                '50px': '50px',
            },
            scale: {
                80: '0.8',
                85: '0.85',
                300: '3',
                400: '4',
            },
            width: {
                '1/9': '11.1111111%',
                '100+30': 'calc(100% + 30px)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                shine: {
                    '100%': {left: '125%'},
                },
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-3deg)'},
                    '50%': {transform: 'rotate(3deg)'},
                },
                marquee: {
                    '0%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(-100%)'},
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                shine: 'shine 0.8s ease-in',
                ping: 'ping 3s linear infinite',
                wiggle: 'wiggle 1s ease-in-out infinite',
                marquee: 'marquee linear infinite',
            },
            fontFamily: {
                body: ['var(--font-bai)'],
            },
            boxShadow: {
                card: '0px 0px 6px rgba(79, 95, 120, 0.1)',
                cardHover: '0px 0px 8px rgba(79, 95, 120, 0.18)',
                category: '0px 1px 6px rgba(79, 95, 120, 0.12)',
                category2: '0px 10px 20px rgba(88, 110, 125, 0.1)',
                navigation: '0 0 10px rgba(79, 95, 120, 0.3)',
                counter: '0px 4px 10px rgba(79, 95, 120, 0.15)',
                featured: '0px 4px 8px rgba(70, 84, 111, 0.06)',
                cart: '0 3px 6px rgba(0,0,0,0.12)',
                switch: '0 2px 5px rgba(21,35,49,0.4)',
                dropDown: '0px 10px 40px rgba(41, 50, 68, 0.15)',
                carouselButton: '0px 2px 15px rgba(115, 125, 144, 0.25)',
                listProduct: '0 2px 4px rgba(0,0,0,.08)',
                navigationReverse: '0 -3px 6px rgba(0, 0, 0, 0.16)',
                header: '0 2px 3px rgba(0, 0, 0, 0.08)',
                subMenu: '1px 2px 3px rgba(0, 0, 0, 0.08)',
                bottomNavigation: '0 -2px 3px rgba(0, 0, 0, 0.06)',
                cookies: '0 -2px 3px rgba(0, 0, 0, 0.04)',
                contact: '0 1px 10px rgba(75, 90, 130, 0.1)',
                vendorCard: '0px 2px 3px rgba(0, 0, 0, 0.06)',
                vendorCardHover: '0px 1px 15px rgba(0, 0, 0, 0.06)',
                vendorSidebar:
                    '0px 1px 2px rgba(0, 0, 0, 0.03), 0px 1px 3px rgba(0, 0, 0, 0.05)',
                searchBox: '0px 4px 4px rgba(99, 113, 134, 0.1)',
            },
        }
    },
    plugins: [require("tailwindcss-animate"), require('@tailwindcss/forms')],
} satisfies Config;
