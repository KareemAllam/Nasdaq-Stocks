import { render, RenderResult } from '@testing-library/react-native';
import React, { ReactNode } from 'react';
import {
	QueryClient,
	QueryClientConfig,
	QueryClientProvider,
} from '@tanstack/react-query';

export const createTestQueryClient = (config?: QueryClientConfig) =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
		...config,
	});

const wrapperComponent = ({
	children,
	queryClient,
}: {
	children: ReactNode;
	queryClient?: QueryClient;
}) => {
	const testQueryClient = queryClient || createTestQueryClient();

	return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
	);
};

const renderWrapperComponent = (
	child: ReactNode,
	queryClient?: QueryClient
) => {
	const testQueryClient = queryClient || createTestQueryClient();

	return wrapperComponent({
		children: child,
		queryClient: testQueryClient,
	});
};


const renderTestComponent = (
	testComponent: ReactNode,
	queryClient?: QueryClient,
): RenderResult => {
	return render(renderWrapperComponent(testComponent, queryClient));
};

export {
	renderTestComponent,
};
