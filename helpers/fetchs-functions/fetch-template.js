
export const FetchTemplate = async (email, password)  => {

    const FetchData = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).
    then(response =>
    {
        return response.json()
    }).
    then(data =>
    {
        return data
    }).
    catch(error =>
    {
        return error
    });

    return FetchData
}
