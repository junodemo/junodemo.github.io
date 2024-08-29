import { Header, AppShell, Main, UserMenu, Logo, HeaderLink, TableWidget, Button } from '@juno/uikit';

export default function First() {
  return (
    <AppShell pageBackground="base-50">
      <Main gap="24px" width="1200" corners="md" marginX="24px" marginY="8px" paddingX="24px" paddingY="24px" textSize="base" direction="flex-col" selfAlign="center" alignItems="start" background="base-0" justifyContent="start">
        <div className="flex flex-col flex-wrap w-full max-w-full   self-auto text-base-content  bg-base-0  gap-3   items-start justify-start h-auto  ">
          <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-3   items-end justify-between h-auto  ">
            <h1 style={{ whiteSpace: 'pre-wrap' }} className="text-ellipsis text-xl     font-semibold text-left ">
              My Texts
            </h1>
            <Button type="primary" text="New" size="small" rightIcon="add" />
          </div>
        </div>
      </Main>
      <Header gap={null} width="1200" paddingX="24px" alignItems="stretch" background={null}>
        <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-6   items-center justify-start h-auto  ">
          <Logo size="28px" type="symbol" />
          <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-1.5   items-start justify-start h-auto  ">
            <HeaderLink text="My Texts" background="base-100" fontWeight="medium" size="small" rightIcon="none" width="auto" openDirection="downward-right" dropdownBgColor="base-0" />
            <HeaderLink text="Flashcards" background={null} fontWeight="medium" size="small" rightIcon="none" width="auto" openDirection="downward-right" dropdownBgColor="base-0" />
            <HeaderLink text="Dictionary" background={null} fontWeight="medium" size="small" rightIcon="none" width="auto" openDirection="downward-right" dropdownBgColor="base-0" />
          </div>
        </div>
        <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-3   items-center justify-end h-auto  ">
          <UserMenu name="Viktor" color="accent" avatarPosition="right" />
        </div>
      </Header>
    </AppShell>
  );
}