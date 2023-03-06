import {useRouter} from "next/router";
import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";

const ProfilePage = () => {

    const router = useRouter()
    const pageName = router.query.page


    return (<ProfileLayout>
        <h2 className={'text-lg'}>This page not found = {pageName}</h2>
    </ProfileLayout>)
}

export default ProfilePage