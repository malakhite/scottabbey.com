import { ImageResponse } from 'next/og';

import { Logo } from '@/components/Logo';

export const size = {
	width: 32,
	height: 32,
};

export const contentType = 'image/svg';

export default function Icon() {
	return new ImageResponse(<Logo />, { ...size });
}
