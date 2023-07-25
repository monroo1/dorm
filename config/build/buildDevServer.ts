import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
		hot: true,
		client: {
			overlay: {
				runtimeErrors: (error) => {
					if (error.message === "ResizeObserver loop limit exceeded") {
						return false;
					}
					if (error.message === "ResizeObserver loop completed with undelivered notifications.") {
						return false;
					}

					return true;
				},
			},
		},
	};
}
