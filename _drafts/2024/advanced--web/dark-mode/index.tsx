
type ColorScheme = 'light' | 'dark'

type ColorSchemePreference =
	| undefined // "We don't know" = the user hasn't expressed a preference
	| null // the user explicitly expressed "no preference, site is welcome to suggest"
	| ColorScheme // explicit preference
	| 'inherit' // inherit from parent container, ex. browser (if any) or OS
	| 'day-night' // follow the day/night cycle = emulate common OS settings

/////////////////////////////////////////////////

type Theme = ColorScheme | `${ColorScheme}-${string}`
