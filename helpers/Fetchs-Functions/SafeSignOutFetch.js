export const SafeSignOutFetch = async () => {

    const FetchData = await fetch('/api/signout', { method: 'GET' }).
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

    console.log(await FetchData)
    return FetchData
}