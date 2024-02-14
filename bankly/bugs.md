- BUG #1: In the `get(username)` method of the `User` model, theres a bug in the error handling. It creates a new `ExpressError` object, but it doesnt throw it.

- BUG #2: In the `/login` route, the `User.authenticate` function returns a promise, but its not being awaited. 

- BUG #3: In the `authuser` middleware, it does not account for when the token is invalid or cannot be decoded, the function does not handle this case correctly and throws an unhandled exception, resulting in an internal server error(sattus code 500) instead of returning a proper unathorized response (status code 401)

- BUG #4: In the `POST /auth/register` route does not check for existing usernames nor does it handle duplicate usernames gracefully
