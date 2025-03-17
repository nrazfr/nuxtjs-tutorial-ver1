export default defineEventHandler(async (event)=>{

    //Handle query params
    //const { name } = getQuery(event)

    //Handle post data
    //const { age } = await readBody(event)

    //Api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_J0Cyvnj4JabViwq5rLAlyI7Lax20DsDaPwJiqQ1X')

    return data
    
})