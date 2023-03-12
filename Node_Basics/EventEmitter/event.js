const Event = require('events')

const Login = new Event();
/*
Login.addListener('success', () => {
    console.log('user logged in successfully');
})
Login.addListener('error', () => {
    console.log('error while user logged in ');
})
Login.emit('success')
Login.emit('success')
Login.emit('error')
Login.emit('error')
Login.addListener('success', (username, country) => {
    console.log(`${username} logged in successfully from ${country}`);
})
//newer way to addListener : on()
Login.on('success', (username, country) => {
    console.log(`${username} logged in successfully from ${country}`);
})

Login.emit('success', 'Subhrajit', 'India')
*/


//Signup flow

const Signup = new Event();

const signupSuccess = (name) => {
    console.log('Signup successfull for',name);
}
const signupSuccess1 = () => {
    console.log('Signup successfully');
}

Signup.addListener('success', signupSuccess)
Signup.on('success', signupSuccess1)

//runs only one time
Signup.once('success', ()=>{
    console.log('Running once');
})
Signup.emit('success', 'subhrajit')
Signup.emit('success', 'Das')

//remove single/one listener
// Signup.removeListener('success', signupSuccess1)
//another way to remove listener
// Signup.off('success', signupSuccess)
//remove all listeners for that event
// Signup.removeAllListeners('success')
Signup.emit('success', 'subhrajit das')

console.log(Signup.listenerCount('success'));

