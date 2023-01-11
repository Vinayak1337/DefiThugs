type ToastContent = import('react-toastify').ToastContent;
type ToastOptions = import('react-toastify').ToastOptions;
type UpdateOptions = import('react-toastify').UpdateOptions;
type ToastPosition = import('react-toastify').ToastPosition;
type TypeOptions = import('react-toastify').TypeOptions;
type ClearWaitingQueueParams = import('react-toastify').ClearWaitingQueueParams;
type OnChangeCallback =
	import('react-toastify/dist/core/eventManager').OnChangeCallback;
type Id = import('react-toastify').Id;
interface ToastPromiseParams<T = unknown> {
	pending?: string | UpdateOptions<void>;
	success?: string | UpdateOptions<T>;
	error?: string | UpdateOptions<any>;
}
function handlePromise<T = unknown>(
	promise: Promise<T> | (() => Promise<T>),
	{ pending, error, success }: ToastPromiseParams<T>,
	options?: ToastOptions
): Promise<T>;

declare module globalThis {
	var API: AxiosInstance;
	var ethereum: any;

	export function toast(content: ToastContent, options: ToastOptions): Id;

	namespace toast {
		var loading: (
			content: ToastContent<unknown>,
			options?: ToastOptions<{}> | undefined
		) => Id;
		var promise: typeof handlePromise;
		var success: (
			content: ToastContent<unknown>,
			options?: ToastOptions<{}> | undefined
		) => Id;
		var info: (
			content: ToastContent<unknown>,
			options?: ToastOptions<{}> | undefined
		) => Id;
		var error: (
			content: ToastContent<unknown>,
			options?: ToastOptions<{}> | undefined
		) => Id;
		var warning: (
			content: ToastContent<unknown>,
			options?: ToastOptions<{}> | undefined
		) => Id;
		var warn: (
			content: ToastContent<unknown>,
			options?: ToastOptions<{}> | undefined
		) => Id;
		var dark: (
			content: ToastContent<unknown>,
			options?: ToastOptions<{}> | undefined
		) => Id;
		var dismiss: (id?: Id | undefined) => void;
		var clearWaitingQueue: (params?: ClearWaitingQueueParams) => void;
		var isActive: (id: Id) => boolean;
		var update: (toastId: Id, options?: UpdateOptions<unknown>) => void;
		var done: (id: Id) => void;
		var onChange: (callback: OnChangeCallback) => () => void;
		var POSITION: {
			TOP_LEFT: ToastPosition;
			TOP_RIGHT: ToastPosition;
			TOP_CENTER: ToastPosition;
			BOTTOM_LEFT: ToastPosition;
			BOTTOM_RIGHT: ToastPosition;
			BOTTOM_CENTER: ToastPosition;
		};
		var TYPE: {
			INFO: TypeOptions;
			SUCCESS: TypeOptions;
			WARNING: TypeOptions;
			ERROR: TypeOptions;
			DEFAULT: TypeOptions;
		};
	}
}
