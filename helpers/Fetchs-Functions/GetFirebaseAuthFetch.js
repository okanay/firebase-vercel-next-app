export const GetFirebaseAuthFetch = async () => {

    const FetchData = await fetch('/api/auth', { method: 'GET' }).
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