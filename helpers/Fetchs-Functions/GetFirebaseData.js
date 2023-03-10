
export const GetFirebaseData = async (url, body)  => {

    const controller = new AbortController();
    const { signal } = controller;

    const FetchData = await fetch(url, {
        signal,
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
