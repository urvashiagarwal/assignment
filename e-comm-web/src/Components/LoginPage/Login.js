import './Login.css';

export const Login = () => {
    return (
        <div id='login'>
            <div className='login-form' >
                <h1>Welcome Back!</h1> <br />
                <form action="">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" name="username" id="username" placeholder='enter your username' /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" placeholder='enter your password' /><br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
};
