import { AppShell, Main, Logo, InputText, Select, Checkbox, Button } from '@juno/uikit';

export default function Onboarding() {
  return (
<AppShell pageBackground="base-50">
  <Main gap="12px" width="960" corners="xl" marginX="12px" marginY="12px" paddingX="24px" paddingY="24px" selfAlign="center" alignItems="center" background="base-0" justifyContent="center">
    <form className="flex flex-col flex-nowrap  px-6 py-6 w-full max-w-full max-w-[420px]  self-auto text-inherit    gap-4  items-center justify-between h-auto  " style={{ maxWidth: '420px' }}>
      <Logo />
      <h1 className="text-ellipsis text-3xl     font-semibold text-left self-center" style={{ whiteSpace: 'pre-wrap' }}>
        Welcome
      </h1>
      <div className="flex flex-col flex-nowrap w-full max-w-full   self-auto text-inherit    gap-3   items-stretch justify-start h-auto  ">
        <InputText label="Name" placeholder="John Smith" rightIcon="none" />
        <InputText label="Email" placeholder="name@domain.com" />
        <InputText label="Date of Birth" placeholder="MM/DD/YYYY" leftIcon="none" />
        <Select label="Occupation" placeholder="Select" options={["Student","Professional","Other"]} />
        <Checkbox label="Receive updates and offers" type="accent" />
      </div>
      <Button size="medium" text="Next" type="primary" width="full" marginTop="16px" rightIcon="chevron-right" />
    </form>
  </Main>
</AppShell>
  );
}