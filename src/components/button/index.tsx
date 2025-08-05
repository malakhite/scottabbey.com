import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';

import styles from './button.module.scss';

export const buttonVariants = cva(styles.base, {
	variants: {
		variant: {
			default: styles.default,
			outline: styles.outline,
		},
		// size: {
		// 	default: 'default',
		// 	sm: 'sm',
		// 	lg: 'lg',
		// 	icon: 'icon',
		// },
	},
	defaultVariants: {
		variant: 'default',
	},
});

export function Button({ className, variant, asChild = false, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : 'button';

	return <Comp data-slot="button" className={buttonVariants({ variant, className })} {...props} />;
}
