
export const GetFirebaseData = async (url, body)  => {

    const FetchData = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...body,
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
