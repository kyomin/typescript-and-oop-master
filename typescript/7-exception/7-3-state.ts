{
	type SuccessState = {
		result: 'success';
	};
	type NetworkErrorState = {
		result: 'fail';
		reason: 'offline' | 'down' | 'timeout';
	};
	type ResultState = SuccessState | NetworkErrorState;
	class NetworkClient {
		// ErrorState를 구체적으로 리턴할 수 있다.
		tryConnect(): ResultState {}
	}

	class UserService {
		constructor(private client: NetworkClient) {}

		login() {
			this.client.tryConnect();
			// login...
		}
	}

	class App {
		constructor(private userService: UserService) {}
		run() {
			try {
				this.userService.login();
			} catch (error) {
				// show dialog to user
			}
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);
	const app = new App(service);
	app.run();
}
