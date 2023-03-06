import {useRouter} from "next/router";
import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";

const ProfileAccount = () => {

    return (<ProfileLayout>
        <h2 className={'text-lg'}>Account Page</h2>
    </ProfileLayout>)
}

export default ProfileAccount