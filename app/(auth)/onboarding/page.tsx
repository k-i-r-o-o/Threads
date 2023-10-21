import { OrganizationSwitcher } from "@clerk/nextjs";
async function Page()
{
    return(
        <main>
            <h1 className="head-text">Onboarding</h1>
            <OrganizationSwitcher/>
        </main>
    )
}

export default Page;