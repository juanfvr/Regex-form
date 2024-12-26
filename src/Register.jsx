import './index.css'

export default function Register() {
    return (
        <div className='text-white'>
            <h1 className='text-5xl mb-4'>Registro</h1>
            <Form />
        </div>
    )
}

function Form() {
    return (
        <form action="">
            <section className='flex flex-col gap-2 min-w-[320px]'>
                <div className='flex flex-col'>
                    <span>Endereço de e-mail</span>
                    <input 
                    id='email-input'
                    className='p-2 bg-slate-800 outline-none rounded-md'
                    type="text" 
                    required
                    placeholder='Insira seu endereço de e-mail'/>
                </div>
                <div className='flex flex-col'>
                    <span>Senha</span>
                    <input 
                    id='password-input'
                    className='p-2 bg-slate-800 outline-none rounded-md'
                    type="text"
                    required 
                    placeholder='Insira sua senha'/>
                </div>
            </section>
            <button onClick={submit}
            className='bg-sky-500 w-full px-4 py-2 text-xl font-semibold rounded-md mt-4'
            type='submit'>Fazer registro</button>
        </form>
    )

    function submit(event) {
        event.preventDefault()

        const emailInput = document.querySelector('#email-input');
        const passwordInput = document.querySelector('#password-input');
        
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        const emailRegex = /^\S+@\S+\.\S+$/;

        // console.log(emailRegex.test(emailInput.value)? 'email certo' : 'email errado')
        // console.log(passwordRegex.test(passwordInput.value)? 'senha certo' : 'senha errado');
    }
}

function ModalError() {
    return (
        <>
        <div>
            <span>algo está errado</span>
        </div>
        </>
    )
}