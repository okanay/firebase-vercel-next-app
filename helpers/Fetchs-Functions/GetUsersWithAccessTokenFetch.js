
export const GetUsersWithAccessTokenFetch = async (accessToken)  => {

    const FetchData = await fetch('/api/getUserWithAccessToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            accessToken,
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
