import {useRouter} from "next/router";
import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import ThemeSelect from "../../components/layout/app-pages-layout/themeSelect";

const ProfileAccount = () => {

    return (<ProfileLayout>

        <div className={'flex flex-col gap-4 mt-1'}>
            <h5 className={'text-xl group-hover:text-skin-theme-font-100'}>Costumize your Account</h5>
        </div>
    </ProfileLayout>)
}

export default ProfileAccount