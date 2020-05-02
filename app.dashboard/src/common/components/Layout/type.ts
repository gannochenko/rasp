import { ReactNode } from 'react';

export type LayoutProperties = {
    title?: string;
    children: ReactNode;
    actions?: ReactNode;
};
