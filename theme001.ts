import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const theme001: CustomThemeConfig = {
	name: 'theme001',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #fb7cd7
		'--color-primary-50': '254 235 249', // #feebf9
		'--color-primary-100': '254 229 247', // #fee5f7
		'--color-primary-200': '254 222 245', // #fedef5
		'--color-primary-300': '253 203 239', // #fdcbef
		'--color-primary-400': '252 163 227', // #fca3e3
		'--color-primary-500': '251 124 215', // #fb7cd7
		'--color-primary-600': '226 112 194', // #e270c2
		'--color-primary-700': '188 93 161', // #bc5da1
		'--color-primary-800': '151 74 129', // #974a81
		'--color-primary-900': '123 61 105', // #7b3d69
		// secondary | #02eb01
		'--color-secondary-50': '217 252 217', // #d9fcd9
		'--color-secondary-100': '204 251 204', // #ccfbcc
		'--color-secondary-200': '192 250 192', // #c0fac0
		'--color-secondary-300': '154 247 153', // #9af799
		'--color-secondary-400': '78 241 77', // #4ef14d
		'--color-secondary-500': '2 235 1', // #02eb01
		'--color-secondary-600': '2 212 1', // #02d401
		'--color-secondary-700': '2 176 1', // #02b001
		'--color-secondary-800': '1 141 1', // #018d01
		'--color-secondary-900': '1 115 0', // #017300
		// tertiary | #6853dd
		'--color-tertiary-50': '232 229 250', // #e8e5fa
		'--color-tertiary-100': '225 221 248', // #e1ddf8
		'--color-tertiary-200': '217 212 247', // #d9d4f7
		'--color-tertiary-300': '195 186 241', // #c3baf1
		'--color-tertiary-400': '149 135 231', // #9587e7
		'--color-tertiary-500': '104 83 221', // #6853dd
		'--color-tertiary-600': '94 75 199', // #5e4bc7
		'--color-tertiary-700': '78 62 166', // #4e3ea6
		'--color-tertiary-800': '62 50 133', // #3e3285
		'--color-tertiary-900': '51 41 108', // #33296c
		// success | #9ea732
		'--color-success-50': '240 242 224', // #f0f2e0
		'--color-success-100': '236 237 214', // #ecedd6
		'--color-success-200': '231 233 204', // #e7e9cc
		'--color-success-300': '216 220 173', // #d8dcad
		'--color-success-400': '187 193 112', // #bbc170
		'--color-success-500': '158 167 50', // #9ea732
		'--color-success-600': '142 150 45', // #8e962d
		'--color-success-700': '119 125 38', // #777d26
		'--color-success-800': '95 100 30', // #5f641e
		'--color-success-900': '77 82 25', // #4d5219
		// warning | #124add
		'--color-warning-50': '219 228 250', // #dbe4fa
		'--color-warning-100': '208 219 248', // #d0dbf8
		'--color-warning-200': '196 210 247', // #c4d2f7
		'--color-warning-300': '160 183 241', // #a0b7f1
		'--color-warning-400': '89 128 231', // #5980e7
		'--color-warning-500': '18 74 221', // #124add
		'--color-warning-600': '16 67 199', // #1043c7
		'--color-warning-700': '14 56 166', // #0e38a6
		'--color-warning-800': '11 44 133', // #0b2c85
		'--color-warning-900': '9 36 108', // #09246c
		// error | #9b4e7d
		'--color-error-50': '240 228 236', // #f0e4ec
		'--color-error-100': '235 220 229', // #ebdce5
		'--color-error-200': '230 211 223', // #e6d3df
		'--color-error-300': '215 184 203', // #d7b8cb
		'--color-error-400': '185 131 164', // #b983a4
		'--color-error-500': '155 78 125', // #9b4e7d
		'--color-error-600': '140 70 113', // #8c4671
		'--color-error-700': '116 59 94', // #743b5e
		'--color-error-800': '93 47 75', // #5d2f4b
		'--color-error-900': '76 38 61', // #4c263d
		// surface | #5918e0
		'--color-surface-50': '230 220 250', // #e6dcfa
		'--color-surface-100': '222 209 249', // #ded1f9
		'--color-surface-200': '214 197 247', // #d6c5f7
		'--color-surface-300': '189 163 243', // #bda3f3
		'--color-surface-400': '139 93 233', // #8b5de9
		'--color-surface-500': '89 24 224', // #5918e0
		'--color-surface-600': '80 22 202', // #5016ca
		'--color-surface-700': '67 18 168', // #4312a8
		'--color-surface-800': '53 14 134', // #350e86
		'--color-surface-900': '44 12 110' // #2c0c6e
	}
};
