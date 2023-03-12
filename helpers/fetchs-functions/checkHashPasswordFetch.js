
export const CheckHashPasswordFetch = async (data)  => {

    const FetchData = await fetch('/api/check-hashPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           ...data
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
