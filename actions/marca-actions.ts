'use server'
export async function criarMarca(formData:FormData) {
    let response = fetch('http://localhost:3002/marcas',{
        method:'POST',
        body:JSON.stringify({
            nome:formData.get('nome')})
    })

    redirect('/cadastro/marcas/')

}