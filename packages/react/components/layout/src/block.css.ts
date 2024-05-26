import { style } from '@vanilla-extract/css';
import { vars } from '@ds/themes'
export const blockStyle = style({
	width: '100px',
	height: '100px',
	backgroundColor: vars.color.blue[500],
})