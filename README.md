**OokamiChat - Secure Chat Application**

OokamiChat is a secure and privacy-focused chat application developed using PHP and MySQL. The application provides end-to-end encryption for all user messages, ensuring that the conversations remain confidential and protected from unauthorized access. The integration of SSL encryption guarantees secure data transmission between the server and clients.

**Key Features:**

1. **End-to-End Encryption:** OokamiChat employs robust end-to-end encryption to safeguard user messages from eavesdropping and unauthorized access. This means that only the intended recipients can decrypt and read the messages.

2. **Custom Theme Selection:** Personalize your chat experience with a wide range of custom themes. Choose from a variety of color schemes and layouts to suit your style and preferences.

3. **User-Friendly Interface:** OokamiChat boasts an intuitive and user-friendly interface, making it easy for users of all technical levels to navigate the app effortlessly.

4. **User Authentication:** To ensure secure access to the chat application, users are required to create an account and log in with their credentials. Passwords are hashed and stored securely in the database.

5. **Online Status Indicators:** Users can see the online status of their friends or contacts, enabling real-time communication.

9. **Emoji and Sticker Support:** Express yourself with a wide range of emojis and stickers to enhance your conversations.

**Requirements:**

- Web Server (e.g., Apache, Nginx)
- PHP version 7.2 or higher
- MySQL database
- SSL certificate for secure encryption (Let's Encrypt or any trusted provider)

**Installation:**

1. Clone the repository to your web server using Git or download the zip file and extract it.
2. Import the provided SQL schema (`ookamichat.sql`) into your MySQL database using phpMyAdmin or any other MySQL management tool.
3. Configure the database connection by editing the `config.php` file and providing your database credentials.
4. Ensure that SSL is properly configured on your web server for secure encryption.
5. Start using OokamiChat by accessing the application through your web browser.

**Note:** It's essential to keep your application and server up to date with the latest security patches to maintain a secure environment.


**License:**

OokamiChat is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).

**Disclaimer:**

OokamiChat is a personal project and may have security vulnerabilities or bugs. Use it at your own risk. The developer(s) of OokamiChat are not responsible for any damages or issues caused by using this application.

Happy Coding!
