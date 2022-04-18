import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className="first-question">
                <h1>1/ Difference between authorization and authentication.</h1>
                <p className='fs-5'> Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p>
            </div>
            <div className="secound-question">
                <h1>2/ Why are you using firebase ?</h1>
                <p className='fs-5'>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.</p>

                <h1>What other option do you have to implement authentication</h1>
                <p>5 Common Authentication Types The list below reviews some common authentication methods used to secure modern systems.1. Password-based authentication , 2. Multi-factor authentication, 3. Certificate-based authentication, 4. Biometric authentication, 5. Token-based authentication</p>
            </div>
            <div className="thard-question">
                <h1 >3/ What other servicees does firebase provide other authentication ?</h1>
                <p className='fs-5'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>

        </div>
    );
};

export default Blog;