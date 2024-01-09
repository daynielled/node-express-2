### Conceptual Exercise

Answer the following questions below:

1. **What is a JWT?**
   - JWT stands for JSON Web Token. It is a compact, URL-safe means of representing claims between two parties. These claims are often used to authenticate the identity of the party that the token represents.

2. **What is the signature portion of the JWT?  What does it do?**
   - The signature portion of the JWT is one of the 3 parts (header,payload and signature). It is created by signing the concatenated header and payload using a secret key.It ensure the integrity of the token and verifies that it has not been tampered with.

3. **If a JWT is intercepted, can the attacker see what's inside the payload?**
   - Yes, the attacker can decode and read the contents of the payload as it is base64-encoded, not encrytpted. However, this cant happen unless the signature is invalidated.

4.  **How can you implement authentication with a JWT?  Describe how it works at a high level.**
   - It is implemented by issuing a token to a user upon successful login. This token is what is included in that users subsequent requests to authenticate them. As mentioned previuosly, the server will then validate the token's signature to ensure its integrity and extracts user information from the decoded payload to authorize and authenticate the user.

5. **Compare and contrast unit, integration and end-to-end tests.**
   -**Unit tests** Focus on testing individual functions or components.
   -**Integration tests** Verifies interactions between different components.
   -**End to End tests** Evaluates the flow of the application in its entirety.

6. **What is a mock? What are some things you would mock?**
   - An object created specifically for testing. It mimics the behaviour of the actual component being tested. You could mock databases, APIs etc.

7. **What is continuous integration?**
   -A development practice where changes in your code are automatically built, tested and integrated into a shared repository often.This ensures new code is regularly checked for errors and conflicts.

8. **What is an environment variable and what are they used for?**
   - A variable outside the application. it configures different aspects of an application such as API keys, database connection strings etc. These are settings that may vary between environments.

9. **What is TDD? What are some benefits and drawbacks?**
   - Test Driven Development is an approach where tests are written first and then the code. It is beneficial in that it provides improved code quality, and a better design.The drawback is that it takes more time to do this.

10. **What is the value of using JSONSchema for validation?**
   - This is a standard for specifying the stucture of JSON data. It ensure the data conforms to a predefined structure, making it easier to understand and work with the data.

11. **What are some ways to decide which code to test?**
   - Look for the parts you deem prone to error or the more critical complex parts. Also if you have code that is frequently changed or serves as a foundation for other functionalities, that should be tested.

12. **What does `RETURNING` do in SQL? When would you use it?**
   - It is used in conjubction with INSERT,UPDATE or DELETE statements to return the new values of the modified row/s. it elimnates the need for an additional query if you want to retrieve data after performing one of those operations.

13. **What are some differences between Web Sockets and HTTP?**
   - HTTP is a stateless, request-response protocol while web sockets are a full duplex communication channel over a single connection suitable for real time apps requiring continuos data exchange.

14. **Did you prefer using Flask over Express?** Why or why not (there is no right
  answer here --- we want to see how you think about technology)? I want to say flask because python is my preferred language even though express seems a bit more minimalistic.Flask uses jinja which I like and it handles json without the use of middleware(json parser). I am honestly ok with both, I think my preference would depend on the project I am working on.
  
