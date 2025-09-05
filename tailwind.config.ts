import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
			sans: ['Inter', 'system-ui', 'sans-serif'],
			mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
			heading: ['Montserrat', 'system-ui', 'sans-serif'],
		},
			fontSize: {
				'xs': ['0.875rem', { lineHeight: '1.5' }],
				'sm': ['1rem', { lineHeight: '1.6' }],
				'base': ['1.125rem', { lineHeight: '1.7' }],
				'lg': ['1.25rem', { lineHeight: '1.7' }],
				'xl': ['1.375rem', { lineHeight: '1.7' }],
				'2xl': ['1.625rem', { lineHeight: '1.6' }],
				'3xl': ['2rem', { lineHeight: '1.5' }],
				'4xl': ['2.5rem', { lineHeight: '1.4' }],
				'5xl': ['3.25rem', { lineHeight: '1.3' }],
				'6xl': ['4rem', { lineHeight: '1.2' }],
				'7xl': ['5rem', { lineHeight: '1.1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-red-glow': 'var(--gradient-red-glow)',
			},
			boxShadow: {
				'primary': 'var(--shadow-primary)',
				'accent': 'var(--shadow-accent)',
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'red-intense': 'var(--shadow-red-intense)',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'slide': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			},
			animation: {
				'float-y': 'floatY 3s ease-in-out infinite',
				'float-x': 'floatX 4s ease-in-out infinite',
				'rotate': 'rotate 10s linear infinite',
				'pulse-slow': 'pulseSlow 4s infinite ease-in-out',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
				'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
				'slide-in-scale': 'slideInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-40px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				fadeInRight: {
					'0%': { opacity: '0', transform: 'translateX(40px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				slideInScale: {
					'0%': { opacity: '0', transform: 'scale(0.8) translateY(40px)' },
					'100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
				},
				pulseGlow: {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--accent) / 0.2)' },
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
