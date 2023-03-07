import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import ThemeSelect from "../../components/layout/app-pages-layout/themeSelect";
import Link from "next/link";

const ProfilePreferenceColorTheme = () => {

    return (<ProfileLayout>

        <div className={'flex flex-col gap-4 mt-1'}>
            <h5 className={'text-xl group-hover:text-skin-theme-font-100'}>Customize your color themes.</h5>
            <ThemeSelect></ThemeSelect>
        </div>
    </ProfileLayout>)
}

export default ProfilePreferenceColorTheme